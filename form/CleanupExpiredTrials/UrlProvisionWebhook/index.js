const { TableClient } = require("@azure/data-tables");
const axios = require('axios');
const crypto = require('crypto');

// CORS headers for cross-origin requests from the website
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json'
};

module.exports = async function (context, req) {
    context.log('Processing form submission for URL provisioning');

    // Handle CORS preflight request
    if (req.method === 'OPTIONS') {
        context.res = {
            status: 200,
            headers: corsHeaders,
            body: ''
        };
        return;
    }

    context.log('Received form data', JSON.stringify(req.body, null, 2));

    try {
        // Extract form data - handle both formats (direct and webhook)
        const formData = req.body;

        // Handle webhook format - based on your actual form field names
        const email = (formData["Email Address"] || formData.Email || formData.email || "").trim();
        const phone = (formData["Phone Number"] || formData.Phone || formData.phone || "").trim();
        const name = (formData["Full Name"] || formData.Name || formData.name || "").trim();
        const channel = (formData["Channel"] || formData.channel || "Hits").trim();  // Default to Hits
        const trialType = formData.trialType || formData.TrialType || 'free';

        context.log(`Extracted data - Email: ${email}, Phone: ${phone}, Name: ${name}, Channel: ${channel}, Trial Type: ${trialType}`);

        if (!email || !phone) {
            context.log('Missing required fields - Email or Phone');
            context.res = {
                status: 400,
                headers: corsHeaders,
                body: { error: "Email and phone are required" }
            };
            return;
        }

        // Format phone number for consistency in lookups
        const formattedPhone = formatPhoneNumber(phone);
        const smsPhone = convertToAustralianFormat(formattedPhone);
        context.log(`Original phone: ${phone}, Formatted: ${formattedPhone}, SMS format: ${smsPhone}`);

        // Check for existing active trials
        context.log('Checking for existing active trials...');
        const existingTrial = await checkForExistingTrial(email, formattedPhone, channel, context);

        if (existingTrial) {
            context.log(`Found existing active trial for user: ${existingTrial.urlSuffix}`);

            // Send SMS with existing trial details
            const streamUrl = `https://listen2.ejukebox.net/${existingTrial.urlSuffix}`;
            await sendExistingTrialSMS(smsPhone, streamUrl, new Date(existingTrial.expiryDate), existingTrial.channel, context);

            context.res = {
                status: 200,
                headers: corsHeaders,
                body: {
                    success: true,
                    message: "You already have an active trial",
                    existingTrial: true,
                    urlSuffix: existingTrial.urlSuffix,
                    streamUrl: streamUrl,
                    expiryDate: existingTrial.expiryDate,
                    expiryDateFormatted: formatDateAustralian(new Date(existingTrial.expiryDate)),
                    channel: existingTrial.channel
                }
            };
            return;
        }

        // Generate unique URL suffix
        context.log('No existing trial found - proceeding with new trial creation');
        const urlSuffix = await generateUniqueUrlSuffix(context);
        context.log(`Generated URL suffix: ${urlSuffix}`);
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);  // 7 day trial

        // Determine backend configuration - ALL USERS GET INDIVIDUAL BACKENDS
        context.log(`Creating backend config for ${urlSuffix}, channel: ${channel}, trialType: ${trialType}`);
        const backendConfig = determineBackendConfig(urlSuffix, channel, trialType);
        context.log(`Generated backend config:`, JSON.stringify(backendConfig, null, 2));

        // Store in Azure Table Storage
        context.log('Connecting to Azure Table Storage...');
        const tableClient = TableClient.fromConnectionString(
            process.env.AZURE_STORAGE_CONNECTION_STRING,
            "UrlProvisions"
        );

        const entity = {
            partitionKey: "trials",
            rowKey: urlSuffix,
            email: email,
            phone: formattedPhone,
            name: name || "",
            channel: channel,
            urlSuffix: urlSuffix,
            backend: backendConfig.backend,
            backendConfig: JSON.stringify(backendConfig),
            trialType: trialType,
            createdDate: new Date().toISOString(),
            expiryDate: expiryDate.toISOString(),
            status: "active",
            accessCount: 0
        };

        context.log(`Storing entity in Azure Table Storage:`, JSON.stringify(entity, null, 2));

        try {
            await tableClient.createEntity(entity);
            context.log(`Entity stored successfully in table storage`);
        } catch (createError) {
            context.log.error(`Failed to store entity:`, createError);
            if (createError.statusCode === 409) {
                context.log.error(`URL suffix collision detected: ${urlSuffix}`);
                context.res = {
                    status: 500,
                    headers: corsHeaders,
                    body: { error: "URL generation conflict. Please try again." }
                };
                return;
            }
            throw createError;
        }

        // Update HAProxy configuration
        context.log(`Updating HAProxy config for ${urlSuffix}`);
        context.log(`Expected backend: ${backendConfig.backend}`);
        context.log(`Expected ACL: acl is_${urlSuffix} path_beg /${urlSuffix} # ${name} - ${email} - Whisperscape ${channel}`);
        context.log(`Expected use_backend: use_backend ${backendConfig.backend} if is_${urlSuffix}`);

        try {
            await updateHAProxyConfig(backendConfig, context);
            context.log(`HAProxy configuration updated successfully`);
        } catch (haproxyError) {
            context.log.error(`HAProxy update failed:`, haproxyError);
            // Continue with SMS even if HAProxy fails, but log the issue
        }

        // Send SMS with URL
        const streamUrl = `https://listen2.ejukebox.net/${urlSuffix}`;
        context.log(`Sending SMS to ${smsPhone}`);

        try {
            await sendSMS(smsPhone, streamUrl, expiryDate, channel, context);
            context.log(`SMS sent successfully`);
        } catch (smsError) {
            context.log.error(`SMS sending failed:`, smsError);
            // Continue even if SMS fails, but log the issue
        }

        // Log successful provisioning with summary
        context.log(`Successfully provisioned URL ${urlSuffix} for ${email}`);
        context.log(`SUMMARY for ${urlSuffix}:`);
        context.log(`- Channel: ${channel}`);
        context.log(`- Backend: ${backendConfig.backend}`);
        context.log(`- Expected ACL: acl is_${urlSuffix} path_beg /${urlSuffix} # ${email} - Whisperscape ${channel}`);
        context.log(`- Expected use_backend: use_backend ${backendConfig.backend} if is_${urlSuffix}`);
        context.log(`- Expected server name: ${backendConfig.backendDefinition.server.name}`);
        context.log(`- SMS sent to: ${smsPhone}`);
        context.log(`- Stream URL: ${streamUrl}`);

        context.res = {
            status: 200,
            headers: corsHeaders,
            body: {
                success: true,
                urlSuffix: urlSuffix,
                streamUrl: streamUrl,
                expiryDate: expiryDate.toISOString(),
                expiryDateFormatted: formatDateAustralian(expiryDate),
                channel: channel,
                trialType: trialType,
                backend: backendConfig.backend
            }
        };

    } catch (error) {
        context.log.error('Error processing form submission:', error);
        context.res = {
            status: 500,
            headers: corsHeaders,
            body: { error: "Internal server error: " + error.message }
        };
    }
};

function formatDateAustralian(date) {
    return date.toLocaleDateString('en-AU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

function formatPhoneNumber(phone) {
    let cleaned = phone.replace(/[\s\-\(\)\.\+]/g, '');

    if (cleaned.startsWith('04') && cleaned.length === 10) {
        return '+61' + cleaned.substring(1);
    } else if (cleaned.startsWith('61') && cleaned.length === 11) {
        return '+' + cleaned;
    } else if (phone.startsWith('+61')) {
        return phone.replace(/[\s\-\(\)\.\+]/g, '').replace(/^61/, '+61');
    } else if (cleaned.length === 9 && cleaned.startsWith('4')) {
        return '+61' + cleaned;
    } else if (cleaned.length === 10 && cleaned.startsWith('5')) {
        return '+61' + cleaned;
    }

    return '+61' + cleaned.replace(/^0/, '');
}

function convertToAustralianFormat(internationalPhone) {
    if (internationalPhone.startsWith('+61')) {
        return '0' + internationalPhone.substring(3);
    } else if (internationalPhone.startsWith('61') && internationalPhone.length === 11) {
        return '0' + internationalPhone.substring(2);
    } else if (internationalPhone.startsWith('04')) {
        return internationalPhone;
    }

    return internationalPhone;
}

function generateUrlSuffix() {
    return crypto.randomBytes(4).toString('hex').toUpperCase();
}

async function generateUniqueUrlSuffix(context) {
    try {
        const tableClient = TableClient.fromConnectionString(
            process.env.AZURE_STORAGE_CONNECTION_STRING,
            "UrlProvisions"
        );

        let attempts = 0;
        const maxAttempts = 10;

        while (attempts < maxAttempts) {
            const urlSuffix = generateUrlSuffix();

            try {
                await tableClient.getEntity("trials", urlSuffix);
                attempts++;
                context.log(`URL suffix ${urlSuffix} already exists, trying again (attempt ${attempts})`);
            } catch (error) {
                if (error.statusCode === 404) {
                    context.log(`Generated unique URL suffix: ${urlSuffix}`);
                    return urlSuffix;
                }
                attempts++;
            }
        }

        const fallbackSuffix = Date.now().toString(36).toUpperCase().slice(-8);
        context.log(`Using fallback URL suffix: ${fallbackSuffix}`);
        return fallbackSuffix;
    } catch (error) {
        context.log.error('Error generating unique URL suffix:', error);
        return generateUrlSuffix();
    }
}

// UPDATED: Simplified backend config for new server.js
function determineBackendConfig(urlSuffix, channel, trialType) {
    const channelPathMapping = {
        'Hits': 'one',
        'Smooth': 'two',
        'Rock': 'three',
        'Country': 'four'
    };

    const channelPath = channelPathMapping[channel] || 'one';
    const backend = `backend_${urlSuffix}_${channelPath}`;

    return {
        urlSuffix: urlSuffix,
        backend: backend,
        channel: channel,
        trialType: trialType,
        aclName: `is_${urlSuffix}`,
        aclRule: `path_beg /${urlSuffix}`,
        useBackendRule: `use_backend ${backend} if is_${urlSuffix}`,
        // Keep backendDefinition for logging compatibility
        backendDefinition: {
            server: {
                name: `${getServerPrefix(channel)}_${urlSuffix}`
            }
        }
    };
}

// Helper function for server name generation
function getServerPrefix(channel) {
    const serverPrefixes = {
        'Hits': 'WhisHits',
        'Smooth': 'WhisSmooth',
        'Rock': 'WhisRock',
        'Country': 'WhisCountry'
    };
    return serverPrefixes[channel] || 'WhisHits';
}

// UPDATED: Send correct parameters to new server.js
async function updateHAProxyConfig(backendConfig, context) {
    try {
        if (!process.env.SERVER_API_URL || !process.env.SERVER_API_KEY) {
            throw new Error('SERVER_API_URL or SERVER_API_KEY environment variable is not set');
        }

        const apiUrl = `${process.env.SERVER_API_URL}/api/update-haproxy`;
        context.log(`Calling HAProxy API: ${apiUrl}`);

        // Extract user info from original form data
        const formData = context.req.body;
        const email = (formData["Email Address"] || formData.Email || formData.email || "trial@user.com");
        const name = (formData["Full Name"] || formData.Name || formData.name || "").trim();

        // Send parameters that match the new server.js API
        const payload = {
            urlSuffix: backendConfig.urlSuffix,
            action: 'add',
            channel: backendConfig.channel,
            trialType: backendConfig.trialType,
            userEmail: email,
            userName: name
        };

        context.log(`HAProxy API payload:`, JSON.stringify(payload, null, 2));

        const response = await axios.post(apiUrl, payload, {
            headers: {
                'Authorization': `Bearer ${process.env.SERVER_API_KEY}`,
                'Content-Type': 'application/json'
            },
            timeout: 10000
        });

        context.log(`HAProxy API response status: ${response.status}`);
        context.log(`HAProxy API response:`, response.data);

        if (response.status !== 200) {
            throw new Error(`HAProxy API returned status ${response.status}: ${JSON.stringify(response.data)}`);
        }

        return response.data;
    } catch (error) {
        if (error.response) {
            context.log.error(`HAProxy API Error Response:`, {
                status: error.response.status,
                statusText: error.response.statusText,
                data: error.response.data,
                headers: error.response.headers
            });
        } else if (error.request) {
            context.log.error(`HAProxy API No Response:`, error.request);
        } else {
            context.log.error(`HAProxy API Setup Error:`, error.message);
        }
        throw new Error(`Failed to update HAProxy config: ${error.message}`);
    }
}

async function sendSMS(phoneNumber, streamUrl, expiryDate, channel, context) {
    try {
        // Validate environment variables
        if (!process.env.TELSTRA_CLIENT_ID) {
            throw new Error('TELSTRA_CLIENT_ID environment variable is not set');
        }
        if (!process.env.TELSTRA_CLIENT_SECRET) {
            throw new Error('TELSTRA_CLIENT_SECRET environment variable is not set');
        }

        context.log(`Getting Telstra access token...`);
        context.log(`Client ID present: ${process.env.TELSTRA_CLIENT_ID ? 'Yes' : 'No'}`);
        context.log(`Client Secret present: ${process.env.TELSTRA_CLIENT_SECRET ? 'Yes' : 'No'}`);

        const accessToken = await getTelstraAccessToken(context);
        context.log(`Access token acquired: ${accessToken ? 'Yes' : 'No'}`);

        const message = `Your ${channel} music stream trial is ready! 🎵\n\nURL: ${streamUrl}\n\nValid until ${formatDateAustralian(expiryDate)}\n\nThis trial is for your personal use only and supports up to 3 simultaneous connections.\n\nEnjoy your music!`;

        context.log(`Sending SMS to ${phoneNumber}`);
        context.log(`Message length: ${message.length} characters`);

        const smsPayload = {
            to: phoneNumber,
            from: 'Musicbot',
            messageContent: message
        };

        context.log(`SMS payload:`, JSON.stringify(smsPayload, null, 2));

        const response = await axios.post('https://products.api.telstra.com/messaging/v3/messages', smsPayload, {
            headers: {
                'authorization': `Bearer ${accessToken}`,
                'accept': 'application/json',
                'accept-charset': 'utf-8',
                'content-type': 'application/json',
                'content-language': 'en-au'
            },
            timeout: 15000
        });

        context.log(`SMS API response status: ${response.status}`);
        context.log(`SMS sent successfully:`, response.data);

        if (response.status !== 200 && response.status !== 201 && response.status !== 202) {
            throw new Error(`SMS API returned status ${response.status}: ${JSON.stringify(response.data)}`);
        }

        return response.data;
    } catch (error) {
        if (error.response) {
            context.log.error(`SMS API Error Response:`, {
                status: error.response.status,
                statusText: error.response.statusText,
                data: error.response.data,
                headers: error.response.headers
            });
        } else if (error.request) {
            context.log.error(`SMS API No Response:`, error.request);
        } else {
            context.log.error(`SMS API Setup Error:`, error.message);
        }
        throw new Error(`Failed to send SMS: ${error.message}`);
    }
}

async function getTelstraAccessToken(context) {
    try {
        context.log(`Requesting Telstra access token...`);

        const tokenPayload = new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: process.env.TELSTRA_CLIENT_ID,
            client_secret: process.env.TELSTRA_CLIENT_SECRET,
            scope: 'free-trial-numbers:read free-trial-numbers:write messages:read messages:write reports:read reports:write virtual-numbers:read virtual-numbers:write'
        });

        context.log(`Token request payload: ${tokenPayload.toString()}`);

        const response = await axios.post('https://products.api.telstra.com/v2/oauth/token', tokenPayload, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            timeout: 10000
        });

        context.log(`Token response status: ${response.status}`);
        context.log(`Token response:`, response.data);

        if (!response.data.access_token) {
            throw new Error(`No access token in response: ${JSON.stringify(response.data)}`);
        }

        context.log(`Telstra token acquired successfully`);
        return response.data.access_token;
    } catch (error) {
        if (error.response) {
            context.log.error(`Telstra Token Error Response:`, {
                status: error.response.status,
                statusText: error.response.statusText,
                data: error.response.data,
                headers: error.response.headers
            });
        } else if (error.request) {
            context.log.error(`Telstra Token No Response:`, error.request);
        } else {
            context.log.error(`Telstra Token Setup Error:`, error.message);
        }
        throw new Error(`Failed to get Telstra access token: ${error.message}`);
    }
}

async function checkForExistingTrial(email, phone, channel, context) {
    try {
        const tableClient = TableClient.fromConnectionString(
            process.env.AZURE_STORAGE_CONNECTION_STRING,
            "UrlProvisions"
        );

        const currentTime = new Date();
        context.log(`Checking for existing trials for email: ${email}, phone: ${phone}, channel: ${channel}`);

        // Use simple filter and do complex logic in JavaScript
        const entities = tableClient.listEntities({
            filter: `PartitionKey eq 'trials' and status eq 'active'`
        });

        for await (const entity of entities) {
            // Check if this trial belongs to the current user (email OR phone match)
            const emailMatch = entity.email === email;
            const phoneMatch = entity.phone === phone;

            if (!emailMatch && !phoneMatch) {
                continue; // Skip trials that don't belong to this user
            }

            // Check if trial is still active (not expired)
            const expiryDate = new Date(entity.expiryDate);
            if (expiryDate <= currentTime) {
                context.log(`Found expired ${entity.channel || 'unknown'} trial: ${entity.urlSuffix}, expired: ${expiryDate.toISOString()}`);
                continue; // Skip expired trials
            }

            // Check if it's for the SAME channel as requested
            const entityChannel = entity.channel || 'unknown';
            if (entityChannel === channel) {
                context.log(`Found active ${channel} trial: ${entity.urlSuffix}, expires: ${expiryDate.toISOString()}`);
                return entity;
            } else {
                context.log(`Found active ${entityChannel} trial: ${entity.urlSuffix}, but user wants ${channel} - allowing new trial`);
            }
        }

        context.log(`No active ${channel} trials found for this email/phone - creating new trial`);
        return null;
    } catch (error) {
        context.log.error('Error checking for existing trials:', error);
        return null;
    }
}

async function sendExistingTrialSMS(phoneNumber, streamUrl, expiryDate, existingTrial, context) {
    try {
        const accessToken = await getTelstraAccessToken(context);

        // Handle undefined channel with fallback
        const actualChannel = existingTrial.channel || 'music stream';

        context.log(`Sending existing trial SMS for channel: ${actualChannel}`);

        const message = `You already have an active ${actualChannel} music stream trial! 🎵\n\nYour URL: ${streamUrl}\n\nValid until ${formatDateAustralian(expiryDate)}\n\nThis trial supports up to 3 simultaneous connections.\n\nEnjoy your music!`;

        const response = await axios.post('https://products.api.telstra.com/messaging/v3/messages', {
            to: phoneNumber,
            from: 'Musicbot',
            messageContent: message
        }, {
            headers: {
                'authorization': `Bearer ${accessToken}`,
                'accept': 'application/json',
                'accept-charset': 'utf-8',
                'content-type': 'application/json',
                'content-language': 'en-au'
            },
            timeout: 15000
        });

        context.log(`Existing trial SMS sent successfully for ${actualChannel}:`, response.data);
        return response.data;
    } catch (error) {
        context.log.error(`Error sending existing trial SMS:`, error.response?.data || error.message);
        throw new Error(`Failed to send existing trial SMS: ${error.message}`);
    }
}