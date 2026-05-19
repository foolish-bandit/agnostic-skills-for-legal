# Skill: Separation Agreement Review

## When to use this skill
Use this to review a separation or severance agreement to ensure it includes essential releases and complies with statutory requirements (like the ADEA for older workers).

## Trigger phrases
- "Review this separation agreement"
- "Analyze this severance package"
- "Is this release of claims valid?"

## Required user inputs
- Agreement text.
- Age of the employee (to check for ADEA/OWBPA compliance).
- Jurisdiction.

## Workflow
1. **Release of Claims:** Verify the release is broad but legally permissible.
2. **Statutory Compliance:** Check for required consideration/revocation periods (e.g., 21/45 days for older workers).
3. **Restrictive Covenants:** Review if non-competes or non-solicits are carried over or modified.
4. **Tax Treatment:** Check if the payment classification (wages vs. settlement) is clear.

## Output format: Risk Matrix
| Section | Requirement/Issue | Risk Level | Recommendation |
| :--- | :--- | :--- | :--- |
| Consideration | ADEA 21-day period | High | Add 21-day review period for employee over 40. |
| Confidentiality | Tax treatment | Low | Clarify reporting obligations. |

## Guardrails
- For employees 40 or older, flag any missing OWBPA/ADEA requirement (e.g., 21- or 45-day consideration period, 7-day revocation period, advice-to-consult-counsel language) for escalation.
- Do not state the release "is valid"; identify whether non-waivable claims are improperly included and flag for attorney review.
- Confirm consideration is something of value the employee is not already entitled to; flag if the release lacks adequate consideration.
- Note jurisdiction-specific limits on releases and restrictive covenants rather than assuming a broad release is permissible everywhere.
- This is an issue-spotting and workflow aid; attorney review is required before the agreement is presented or signed.

## Example starter prompt
"Review this separation agreement for a 45-year-old employee in California. Does it meet all OWBPA requirements?"
