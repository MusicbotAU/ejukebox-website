# eJukebox Music Stream Provisioning System

This Azure Functions project handles the automated provisioning and cleanup of trial music stream URLs for eJukebox.

## Overview

The system consists of two Azure Functions:

1. **UrlProvisionWebhook** - HTTP-triggered function that handles new trial signups
2. **CleanupExpiredTrials** - Timer-triggered function that removes expired trial URLs

## Architecture

```
Website Form → Azure Function (UrlProvisionWebhook) → Azure Table Storage
                                                   → HAProxy Server API
                                                   → Telstra SMS API
                                                   
Timer (CRON) → Azure Function (CleanupExpiredTrials) → Azure Table Storage
                                                     → HAProxy Server API
```

## UrlProvisionWebhook

### Endpoint
- **URL**: `https://<your-function-app>.azurewebsites.net/api/UrlProvisionWebhook`
- **Method**: POST
- **Auth Level**: Anonymous (for website form submissions)

### Request Body
```json
{
  "Full Name": "John Smith",
  "Email Address": "john@example.com",
  "Phone Number": "0412345678",
  "Channel": "Hits",
  "trialType": "free"
}
```

### Supported Channels
- **Hits** - Pop & Chart Toppers (maps to `/one`)
- **Smooth** - Easy Listening (maps to `/two`)
- **Rock** - Classic & Modern Rock (maps to `/three`)
- **Country** - Country & Western (maps to `/four`)

### Response
```json
{
  "success": true,
  "urlSuffix": "A1B2C3D4",
  "streamUrl": "https://listen2.ejukebox.net/A1B2C3D4",
  "expiryDate": "2026-01-18T00:00:00.000Z",
  "expiryDateFormatted": "18/01/2026",
  "channel": "Hits",
  "trialType": "free",
  "backend": "backend_A1B2C3D4_one"
}
```

### Process Flow
1. Validates required fields (email, phone)
2. Checks for existing active trials for this user/channel
3. Generates unique 8-character URL suffix
4. Stores trial record in Azure Table Storage
5. Updates HAProxy configuration via backend API
6. Sends SMS with trial URL via Telstra API
7. Returns success response

## CleanupExpiredTrials

### Schedule
Runs every 6 hours: `0 0 */6 * * *`

### Process Flow
1. Queries Azure Table Storage for active trials
2. Identifies trials past their expiry date
3. Sends cleanup request to HAProxy server API
4. Updates trial records to "expired" status
5. Sends admin notification (optional)

## Environment Variables

The following environment variables must be configured in your Azure Function App:

```
AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=...
SERVER_API_URL=https://your-haproxy-server.com
SERVER_API_KEY=your-secret-api-key
TELSTRA_CLIENT_ID=your-telstra-client-id
TELSTRA_CLIENT_SECRET=your-telstra-client-secret
ADMIN_WEBHOOK_URL=https://your-webhook-url (optional)
```

## HAProxy Integration

The system communicates with a backend Node.js server (`server.js`) running on the HAProxy host machine. This server:

1. Receives URL provisioning requests
2. Dynamically updates HAProxy configuration
3. Adds ACL rules and backend definitions
4. Reloads HAProxy to apply changes

### HAProxy Config Structure
For each trial user, the following is added:

```haproxy
# ACL in frontend
acl is_A1B2C3D4 path_beg /A1B2C3D4 # John Smith - john@example.com - Whisperscape Hits
use_backend backend_A1B2C3D4_one if is_A1B2C3D4

# Backend definition
backend backend_A1B2C3D4_one
    # John Smith - Whisperscape Hits (Trial - 3 Connection Limit)
    server WhisHits_A1B2C3D4 127.0.0.1:8000 maxconn 3
    http-request set-path /one_paid
```

## Telstra SMS Integration

The system uses Telstra's Messaging API v3 to send SMS notifications:

1. Obtains OAuth access token using client credentials
2. Sends SMS from "Musicbot" sender ID
3. Includes stream URL, expiry date, and usage information

## Azure Table Storage Schema

### Table: UrlProvisions

| Field | Type | Description |
|-------|------|-------------|
| partitionKey | string | Always "trials" |
| rowKey | string | URL suffix (e.g., "A1B2C3D4") |
| email | string | User's email address |
| phone | string | User's phone (E.164 format) |
| name | string | User's full name |
| channel | string | Music channel (Hits/Smooth/Rock/Country) |
| urlSuffix | string | 8-char unique URL identifier |
| backend | string | HAProxy backend name |
| backendConfig | string | JSON backend configuration |
| trialType | string | "free" for trials |
| createdDate | datetime | When trial was created |
| expiryDate | datetime | When trial expires |
| status | string | "active" or "expired" |
| accessCount | number | Not currently used |

## Deployment

1. Deploy Azure Functions using Azure CLI or VS Code
2. Configure environment variables in Azure Portal
3. Ensure HAProxy server API is accessible
4. Update website form to point to function URL
5. Test end-to-end flow

## CORS

The UrlProvisionWebhook includes CORS headers for cross-origin requests:
- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET, POST, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type, Authorization`