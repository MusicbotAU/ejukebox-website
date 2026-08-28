#!/usr/bin/env bash
# Deploys ContactFormWebhook into the existing Whisperscape-SMS-Form-Response
# Function App (Y1 Consumption plan, so no extra hosting cost).
#
# Uploads ONLY this function's two files via the Kudu VFS API. It deliberately
# does not use `az functionapp deployment source config-zip`, because a zip
# deploy replaces the whole of wwwroot and the app has a MusicTracker function
# deployed that does not exist in this repo - a zip deploy would delete it.
#
# Run from the repo root:  bash form/ContactFormWebhook/deploy.sh

set -euo pipefail

RG=Whisperscape-Integration
APP=Whisperscape-SMS-Form-Response
SCM=https://whisperscape-sms-form-response.scm.azurewebsites.net
DIR=form/ContactFormWebhook

echo "Acquiring token..."
TOKEN=$(az account get-access-token --resource https://management.azure.com --query accessToken -o tsv)

for f in function.json index.js; do
  echo -n "  PUT ContactFormWebhook/$f ... "
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 60 -X PUT \
    -H "Authorization: Bearer $TOKEN" \
    -H "If-Match: *" \
    -H "Content-Type: application/octet-stream" \
    --data-binary "@$DIR/$f" \
    "$SCM/api/vfs/site/wwwroot/ContactFormWebhook/$f")
  echo "HTTP $code"
  case "$code" in 200|201|204) ;; *) echo "  upload failed"; exit 1;; esac
done

echo
echo "Restarting the app so the new function is picked up..."
az functionapp restart -g "$RG" -n "$APP" --only-show-errors
sleep 20

echo
echo "Functions now registered:"
az functionapp function list -g "$RG" -n "$APP" --query "[].name" -o tsv

echo
echo "Smoke test (expect ok:true, and an email to info@ejukebox.com.au):"
curl -s --max-time 90 -X POST "https://${APP,,}.azurewebsites.net/api/ContactFormWebhook" \
  -H "Content-Type: application/json" \
  -H "Origin: https://ejukebox.com.au" \
  -d '{"name":"Deployment test","venue":"Test Venue","email":"info@ejukebox.com.au","phone":"02 9802 5552","location":"Sydney, NSW","venueType":["Pub or bar"],"zones":"2 zones","plan":"Core","features":["Song requests from customer phones"],"message":"Smoke test from deploy.sh - safe to delete.","callback":false}'
echo
echo
echo "If that returned ok:true, set CONTACT_FORM_ENDPOINT in contact.html to:"
echo "  https://${APP,,}.azurewebsites.net/api/ContactFormWebhook"
