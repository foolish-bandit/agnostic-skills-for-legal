# Skill: Case Assessment & Risk Matrix

## When to use this skill
Use this for an early-stage assessment of a new matter to identify strengths, weaknesses, and potential liability.

## Trigger phrases
- "Assess this case"
- "Risk assessment for this matter"
- "What is our exposure in this case?"

## Required user inputs
- Complaint, Answer, or key facts.
- Jurisdiction.

## Workflow
1. **Cause of Action Audit:** List each claim asserted.
2. **Element Analysis:** For each claim, identify the evidence supporting or refuting each legal element.
3. **Defenses:** Identify potential affirmative defenses (e.g., Statute of Limitations, Standing).
4. **Outcome Modeling:** Estimate best-case, worst-case, and most likely settlement scenarios.

## Output format: Case Risk Matrix
| Claim/Issue | Elements Met? | Key Evidence | Risk Level |
| :--- | :--- | :--- | :--- |
| Breach of Contract | [Partial] | Signed agreement; missing proof of damages. | Medium |
| Fraud | [Low] | No evidence of intent to deceive. | Low |

## Guardrails
- Treat outcome and settlement estimates as rough, scenario-based ranges, not predictions; base them only on the facts and pleadings provided.
- Distinguish alleged facts from established facts; do not assume the truth of either party's pleading.
- Flag time-sensitive issues for immediate escalation, including statute-of-limitations, standing, and jurisdiction defenses that may be waived if not raised.
- Note where key evidence is missing and mark the affected claim's risk level as preliminary until the record is developed.
- This is an early-assessment and workflow aid; attorney review is required before relying on the analysis or any strategy decision.

## Example starter prompt
"Perform an early case assessment based on the attached Complaint. What are our strongest defenses and where is our biggest exposure?"
