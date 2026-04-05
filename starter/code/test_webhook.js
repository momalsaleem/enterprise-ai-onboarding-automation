/**
 * AI Onboarding Automation - Webhook Tester
 *
 * This script simulates a new hire form submission by sending a POST request
 * to the n8n webhook endpoint.
 *
 * Usage:
 * 1. Ensure you have Node.js installed.
 * 2. Update the WEBHOOK_URL variable with your n8n Production or Test URL.
 * 3. Run: node test_webhook.js
 */

const WEBHOOK_URL = 'http://localhost:5678/webhook-test/onboarding-intake'; // Update this

const sampleNewHire = {
    "body": {
        "full_name": "Jane Doe",
        "job_title": "Senior Software Engineer",
        "department": "Engineering",
        "location": "New York Office",
        "manager_name": "John Smith",
        "start_date": "2025-05-01",
        "employment_type": "Full-time",
        "hardware_preference": "MacBook Pro 16-inch",
        "document_links": [
            "https://example.com/docs/id_jane_doe.pdf",
            "https://example.com/docs/signed_offer_jane_doe.pdf"
        ]
    }
};

async function testWebhook() {
    console.log(`Sending test data to ${WEBHOOK_URL}...`);

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sampleNewHire),
        });

        if (response.ok) {
            const result = await response.text();
            console.log('Success! Response from n8n:');
            console.log(result);
        } else {
            console.error(`Error: ${response.status} ${response.statusText}`);
            const errorText = await response.text();
            console.error(errorText);
        }
    } catch (error) {
        console.error('Failed to connect to the webhook. Is n8n running?');
        console.error(error.message);
    }
}

testWebhook();
