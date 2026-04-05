# AI Onboarding Automation Prompts

This document contains the prompts used in the automation process. These prompts are designed for GPT 4o mini to ensure the required output.

# 1. Intake Extraction and Validation Prompt
# Objective:
Extract data from the form and ensure the document contains no missing information.

# Prompt:
Suppose you are an Onboarding Operations Assistant. Your goal is to process new hire intake data and return a structured JSON object.

# INPUT DATA:
{{form_data}}

# DOCUMENTS PROVIDED:
{{document_links}}

# EXTRACTION REQUIREMENTS:
Extract the following fields:
1. full_name
2. job_title
3. department
4. location
5. manager_name
6. start_date ISO format
7. employment_type Full time Contract Intern

# VALIDATION TASKS:
1. Check if all required documents ID Signed Offer Letter are present in the provided links.
2. Flag any variations found such as name on ID not matching form name.
3. Identify missing information required for IT setup such as preferred hardware.

# OUTPUT FORMAT:
Return ONLY a valid JSON object with this schema:
{
  "employee": {
    "name": string,
    "role": string,
    "dept": string,
    "loc": string,
    "mgr": string,
    "start": string
  },
  "validation": {
    "docs_complete": boolean,
    "missing_docs": [string],
    "discrepancies": [string],
    "it_ready": boolean
  },
  "hr_notes": string
}

# 2. Personalized Onboarding Plan Prompt
# Objective:
Generate a personalized first week guide based on employee details.

# Prompt:
Suppose you are an Employee Experience Specialist. Generate a personalized First Week Onboarding Guide for a new hire.

# EMPLOYEE CONTEXT:
Name: {{name}}
Role: {{role}}
Department: {{department}}
Manager: {{manager}}
Location: {{location}}

# GUIDELINES:
1. Tone should be welcoming professional and encouraging.
2. Include First Day Priorities 9 AM 5 PM.
3. List 3 key contacts or mentors for guidance.
4. Recommend 2 relevant reference materials based on their role.
5. Provide a tip for their specific office location.

# OUTPUT FORMAT:
Markdown formatted text. Use headers numbering and bold text for readability.

# 3. Manager Handoff and Slack Alert Prompt
# Objective:
Draft a summary for the hiring manager.

# Prompt:
Suppose you are an HR Coordinator. Draft a brief Slack notification for a Hiring Manager whose new hire just completed intake.

# DETAILS:
New Hire: {{name}}
Start Date: {{start_date}}
Hardware Choice: {{hardware}}

# REQUIREMENTS:
1. Keep it under 150 words.
2. Use Slack friendly formatting.
3. Include a clear Call to Action for the manager.
4. Highlight if there are any missing items the manager needs to follow up on.

# OUTPUT:
Plain text with Slack markdown.
