# Skill: DPA Review (Data Processing Agreement)

## When to use this skill
Use this to review Data Processing Agreements (DPAs) or privacy addenda to ensure compliance with laws like GDPR Art. 28 or CCPA.

## Trigger phrases
- "Review this DPA"
- "Is this DPA GDPR compliant?"
- "Analyze this data processing addendum"

## Required user inputs
- DPA text.
- Role of the organization (Controller/Processor).
- Primary jurisdiction (e.g., EU, UK, California).

## Workflow
1. **Mandatory Terms Check:** Verify presence of data processing duration, nature, purpose, and data types.
2. **Controller/Processor Rights:** Check audit rights, sub-processor approval, and breach notification windows.
3. **Cross-Border Transfers:** Identify if SCCs or other transfer mechanisms are included.
4. **Security Obligations:** Review technical and organizational measures (TOMs).

## Output format: DPA Compliance Table
| Requirement | Status (Met/Unmet) | Analysis | Proposed Edit |
| :--- | :--- | :--- | :--- |
| Audit Rights | [Met] | 24-hour notice is too short. | Change to 30 days notice. |
| Breach Notice | [Unmet] | 72 hours missing. | Add 72-hour notice period. |

## Guardrails
- Mark a mandatory Art. 28 term as "Unmet" whenever it is absent or unclear; do not infer that a missing clause is satisfied elsewhere.
- Quote the exact contract language for breach-notification windows, audit rights, sub-processor approval, and transfer mechanisms.
- Flag for escalation any cross-border transfer lacking SCCs or another valid mechanism, and any breach-notice period longer than the regulator's deadline.
- Tailor the review to the stated role (Controller vs. Processor) and jurisdiction; do not assume GDPR terms satisfy CCPA or UK requirements.
- This is an issue-spotting and workflow aid; attorney review is required before the DPA is signed or relied upon.

## Example starter prompt
"Review the attached DPA. We are the Controller under GDPR. Verify if the breach notification and audit clauses meet Art. 28 requirements."
