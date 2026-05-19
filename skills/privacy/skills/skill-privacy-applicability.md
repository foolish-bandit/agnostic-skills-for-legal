# Skill: Privacy Law Applicability Triage

## When to use this skill
Use this to determine which privacy regulations apply to a specific business activity or organization.

## Trigger phrases
- "Does GDPR apply to us?"
- "CCPA applicability check"
- "Which privacy laws should we worry about?"

## Required user inputs
- Location of the organization.
- Location of the target audience/users.
- Type of data collected.
- Revenue/Volume thresholds (for CCPA/CPRA).

## Workflow
1. **Territorial Scope:** Check if the organization is "established" in the jurisdiction or "targets" residents.
2. **Material Scope:** Check if the processing is for personal data.
3. **Threshold Check:** For US state laws, verify if revenue or data volume triggers apply.
4. **Exemptions:** Check for B2B or non-profit exemptions.

## Output format: Applicability Checklist
- **GDPR:** [Applicable/Not Applicable] - Reason: [Short explanation]
- **CCPA/CPRA:** [Applicable/Not Applicable] - Reason: [Short explanation]
- **Recommended Next Steps:** List of laws to research further.

## Guardrails
- Base each applicability call on the location, audience, data, and threshold facts provided; if a threshold figure is missing, flag it as undetermined rather than guessing.
- Note that this triage covers only the laws assessed; other US state, sectoral, or international privacy laws may also apply and should be researched.
- Do not rely on B2B or non-profit exemptions without confirming their precise scope, as exemptions are narrow and jurisdiction-specific.
- Treat applicability conclusions as a preliminary scoping output, not a determination that the organization is compliant.
- This is a triage and workflow aid; attorney review is required before relying on any applicability conclusion.

## Example starter prompt
"We are a UK-based company selling to US residents in California. We have $10M revenue. Which privacy laws apply to us?"
