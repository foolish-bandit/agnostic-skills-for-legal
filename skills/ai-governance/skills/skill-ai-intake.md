# Skill: AI Use-Case Intake & Triage

## When to use this skill
Use this to document the facts of a new proposed AI use-case to begin the governance and risk assessment process.

## Trigger phrases
- "Triage a new AI use-case"
- "Intake a new AI tool"
- "Log a proposed AI project"

## Required user inputs
- Name of the AI tool/model.
- Purpose of the project (what problem does it solve?).
- Data categories involved (e.g., PII, confidential business data).
- Intended users and beneficiaries.

## Workflow
1. **Fact Capture:** Log the technical and business basics of the project.
2. **Initial Risk Filter:** Identify if the use-case involves high-risk domains (e.g., HR, healthcare, critical infrastructure).
3. **Data Impact:** Assess if personal data is being processed or used for training.
4. **Third-Party Check:** Identify if this is an in-house model or a third-party service (e.g., OpenAI, Anthropic via API).

## Output format: AI Intake Memo
- **Project Summary:** Factual description.
- **Data Footprint:** List of data types and flows.
- **Initial Risk Signals:** Bulleted list of potential governance concerns.
- **Assigned Priority:** [Low/Med/High] for the full risk assessment.

## Example starter prompt
"We want to use a GPT-4 based chatbot for our internal HR helpdesk to answer employee benefits questions. Help me triage this use-case."
