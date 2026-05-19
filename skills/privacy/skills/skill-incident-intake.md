# Skill: Data Incident Intake & Triage

## When to use this skill
Use this to document the initial facts of a potential data breach or privacy incident to determine if notification is required.

## Trigger phrases
- "We had a data breach"
- "Log a privacy incident"
- "Triage this security event"

## Required user inputs
- Description of what happened.
- Date/Time of discovery.
- Categories of data involved.
- Number of affected individuals (if known).

## Workflow
1. **Fact Capture:** Log the timeline and scope of the event.
2. **Impact Assessment:** Evaluate the risk of harm to individuals (e.g., identity theft, financial loss).
3. **Notification Thresholds:** Compare facts against legal notification windows (e.g., 72 hours for GDPR).
4. **Immediate Actions:** Recommend containment and forensic steps.

## Output format: Incident Triage Memo
- **Incident Summary:** What, when, and how.
- **Risk Level:** [Low/Med/High/Critical].
- **Notification Clock:** Estimated deadline for legal notification.
- **Urgent Next Steps:** Checklist for the IT/Security team.

## Guardrails
- **URGENT:** If the incident involves unencrypted PII/PHI, escalate to outside counsel immediately.
- Remind user: "This log is for intake and is NOT a legal determination of a breach."

## Example starter prompt
"We found an unencrypted laptop in a taxi. It contains names and social security numbers of 500 California employees. Help me triage this incident."
