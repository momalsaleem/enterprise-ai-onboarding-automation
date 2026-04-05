# Candidate Information
Full Name: MOMAL SALEEM
Email: momalsaleem7@gmail.com
LinkedIn or Portfolio: https://www.linkedin.com/in/momal-saleem-872505305/ , https://momalportfolio.netlify.app/ 
Submission Date: 2026-04-05

# Overview
My solution automates the enterprise onboarding process. It uses n8n to connect OpenAI Airtable and Slack. The system removes manual work and creates a smooth experience for new hires.

# Task 1 AI Powered Automation Design
# Workflow Logic
1. Webhooks receive the intake form data instantly.
2. OpenAI extracts key details and validates documents.
3. Airtable saves the employee record as the source of truth.
4. The system routes tasks to IT and HR based on the department.
5. OpenAI writes a personalized first week guide for the hire.
6. Slack sends alerts to managers and welcome messages to hires.
7. Scheduled triggers collect feedback after 30 days.

# Where AI Is Used
1. Classification: The system sorts onboarding tasks by team.
2. Document processing: GPT 4o mini parses names and dates from forms.
3. Workflow decision logic: AI outputs determine the routing path.
4. Automatic drafting: OpenAI writes the manager alerts.
5. Personalization: The system creates custom training plans.

# Prompt Engineering
1. I use strict JSON formatting for all AI outputs.
2. System instructions set a professional assistant tone.
3. Prompts include specific rules to catch missing data.

# Data Flow and Integrations
1. Google Forms or Typeform provides the initial data.
2. Airtable stores all employee and task information.
3. Slack serves as the main communication hub.
4. n8n orchestrates every step and API call.

# Business Impact
1. Automation reduces setup time from days to minutes.
2. AI improves data accuracy across all systems.
3. Personalized guides increase new hire engagement.

# Task 2 Implementation Demo
# Demo Type
1. n8n workflow scaffold.
2. Visual workflow diagram.
3. Structured prompt library.

# Files Included
1. starter/design-solution.md
2. starter/prompts/prompts.md
3. starter/workflows/onboarding-workflow.json
4. starter/diagrams/workflow-diagram.md
5. starter/screenshots/
6. starter/code/test_webhook.js

# Flow of Data
Data starts at the webhook trigger. OpenAI converts the raw text into a clean record. Airtable saves this record. n8n then branches the flow to send Slack messages and generate guides.

# Pain Points Solved
The system eliminates slow manual data entry. It also ensures that IT and HR receive tasks the moment a hire signs their contract.

# Assumptions
The intake form captures valid document URLs. The system assumes a standard department structure for routing.

# Setup Instructions
1. Import the `onboarding-workflow.json` file into n8n.
2. Add your OpenAI, Airtable, and Slack API credentials.
3. Run `node starter/code/test_webhook.js` to send a sample POST request to your webhook.

# Walkthrough and Notes
No video walkthrough included. The logic is fully documented in `starter/design-solution.md` and `starter/diagrams/workflow-diagram.md`.

The design includes a scalable structure for adding more departments and complex routing rules later.
