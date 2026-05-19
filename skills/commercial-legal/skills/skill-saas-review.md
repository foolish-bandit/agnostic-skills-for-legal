# Skill: SaaS Agreement Review

## When to use this skill
Use this for reviewing Software-as-a-Service (SaaS) or cloud services agreements, focusing on uptime, data security, and subscription terms.

## Trigger phrases
- "Review this SaaS agreement"
- "SaaS risk assessment"
- "Analyze cloud terms"

## Required user inputs
- SaaS Agreement text.
- Service Level Agreement (SLA) (if separate).

## Workflow
1. **Service Levels:** Review uptime commitments and service credit remedies.
2. **Data Rights:** Confirm the Customer owns their data and has a right to export it.
3. **Security Standards:** Check for SOC2, ISO, or other audit requirements.
4. **Renewal Terms:** Identify auto-renewal periods and price increase caps.

## Output format: Issue List
1. **Service Continuity:** Analysis of SLA and credits.
2. **Data Governance:** Ownership and deletion rights.
3. **Commercial Risk:** Renewal and price protection.

## Guardrails
- Flag if the provider has a unilateral right to change terms without notice.
- Flag if there is no data backup or transition assistance clause.

## Example starter prompt
"Review the attached SaaS agreement. Pay special attention to data ownership and our right to terminate for convenience."
