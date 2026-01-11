const { TableClient } = require("@azure/data-tables");
const axios = require('axios');

// Triggered every hour: 0 0 * * * *
// Triggered every 6 hours: 0 0 */6 * * *
module.exports = async function (context, myTimer) {
    context.log('Starting cleanup of expired trials');

    try {
        const tableClient = TableClient.fromConnectionString(
            process.env.AZURE_STORAGE_CONNECTION_STRING,
            "UrlProvisions"
        );

        // Query for expired trials
        const currentTime = new Date();
        const expiredTrials = [];

        context.log(`Current time: ${currentTime.toISOString()}`);

        // Get all active trials
        const entities = tableClient.listEntities({
            filter: `PartitionKey eq 'trials' and status eq 'active'`
        });

        for await (const entity of entities) {
            const expiryDate = new Date(entity.expiryDate);
            if (expiryDate < currentTime) {
                context.log(`Trial ${entity.urlSuffix} expired: ${expiryDate.toISOString()} < ${currentTime.toISOString()}`);
                expiredTrials.push(entity);
            }
        }

        if (expiredTrials.length === 0) {
            context.log('No expired trials found');
            return;
        }

        context.log(`Found ${expiredTrials.length} expired trials to clean up`);

        // Extract just the URL suffixes for HAProxy cleanup
        const expiredSuffixes = expiredTrials.map(trial => trial.urlSuffix);

        context.log(`Expired suffixes to cleanup: ${expiredSuffixes.join(', ')}`);

        // Update HAProxy configuration to remove expired routes
        try {
            // Send simple payload that matches server.js /api/cleanup-expired endpoint
            const cleanupPayload = {
                expiredSuffixes: expiredSuffixes
            };

            context.log(`HAProxy cleanup payload:`, JSON.stringify(cleanupPayload, null, 2));

            const response = await axios.post(`${process.env.SERVER_API_URL}/api/cleanup-expired`, cleanupPayload, {
                headers: {
                    'Authorization': `Bearer ${process.env.SERVER_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                timeout: 30000 // 30 second timeout for cleanup operations
            });

            context.log('Successfully updated HAProxy configuration:', response.data);
        } catch (haproxyError) {
            context.log.error('Failed to update HAProxy config:', haproxyError.response?.data || haproxyError.message);
            // Continue with database cleanup even if HAProxy update fails
        }

        // Update database records to mark as expired (preserve records for audit trail)
        context.log('Updating database records to mark as expired...');
        let successfulUpdates = 0;

        for (const trial of expiredTrials) {
            try {
                // Update entity status to expired, preserve all other data
                const updatedEntity = {
                    ...trial,
                    status: 'expired',
                    expiredDate: currentTime.toISOString(),
                    cleanupDate: currentTime.toISOString()
                };

                await tableClient.updateEntity(updatedEntity, 'Merge');
                successfulUpdates++;
                context.log(`Updated trial ${trial.urlSuffix} to expired status`);
            } catch (updateError) {
                context.log.error(`Failed to update trial ${trial.urlSuffix}:`, updateError.message);
            }
        }

        context.log(`Successfully updated ${successfulUpdates} out of ${expiredTrials.length} expired trials`);

        // Send notification about cleanup
        await sendCleanupNotification(context, expiredTrials.length, expiredSuffixes);

        context.log(`Successfully cleaned up ${expiredTrials.length} expired trials`);

    } catch (error) {
        context.log.error('Error during cleanup process:', error);
        throw error; // Re-throw to trigger Azure Functions retry mechanism
    }
};

async function sendCleanupNotification(context, totalCleanup, expiredSuffixes) {
    try {
        context.log(`Cleanup notification: Removed ${totalCleanup} expired trials`);
        context.log(`Cleaned up suffixes: ${expiredSuffixes.join(', ')}`);

        // Optional: Post to webhook, Slack, Teams, etc.
        if (process.env.ADMIN_WEBHOOK_URL) {
            const cleanupDetails = {
                text: `🧹 Cleanup completed: Removed ${totalCleanup} expired music stream trials`,
                details: {
                    totalCleanupCount: totalCleanup,
                    expiredSuffixes: expiredSuffixes,
                    timestamp: new Date().toISOString(),
                    server: 'eJukebox Stream Provisioning',
                    note: 'Removed individual backends and ACL rules from HAProxy, updated table storage to expired status'
                }
            };

            await axios.post(process.env.ADMIN_WEBHOOK_URL, cleanupDetails, {
                timeout: 10000,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            context.log('Cleanup notification sent successfully');
        }
    } catch (notificationError) {
        context.log.error('Failed to send cleanup notification:', notificationError.message);
        // Don't throw - notification failure shouldn't fail the cleanup
    }
}