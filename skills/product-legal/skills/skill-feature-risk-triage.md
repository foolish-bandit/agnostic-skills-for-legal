# Skill: Feature Risk Triage

## When to use this skill
Use this for a fast (15-minute) triage of a new feature concept or PRD, to identify the legal risk domains that need deeper review.

## Trigger phrases
- "Triage this feature"
- "Feature risk triage"
- "Is this feature risky?"

## Required user inputs
- Uploaded feature description, PRD, or short summary.
- Target users (consumer/B2B, minors, employees).
- Markets.
- Data the feature collects, uses, or shares.

## Workflow
1. **One-Paragraph Restatement:** Restate the feature in your own words so the user can confirm understanding.
2. **Risk Domain Scan:** For each domain, output one of: No Concern Identified / Light Review / Deep Review / Escalate.
   - Privacy & data handling
   - Security / abuse / safety
   - Marketing & disclosures
   - Terms / product policy
   - Consumer protection (auto-renew, pricing, dark patterns)
   - IP / third-party content
   - Children & minors
   - Accessibility
   - Sector-specific (health, financial, biometric, AI)
3. **Top Concerns:** Identify the top 3 concerns and the deeper skills/workflows to run next.
4. **Owner Suggestion:** Suggest who from cross-functional teams should be looped in.

## Output format: Feature Triage Memo
1. **Restatement** (one short paragraph)
2. **Risk Domain Matrix**

| Domain | Status | Rationale (1 line) | Next Step |
| :- | :- | :- | :- |

3. **Top 3 Concerns**
4. **Recommended Next Skills to Run** (e.g., Marketing Claims Review, Product Launch Review)
5. **Open Questions**

## Guardrails
- This is triage, not sign-off. Do not draw legal conclusions.
- If the feature touches health, financial services, biometrics, minors, or generative AI outputs, default to Escalate or Deep Review.
- Flag inconsistencies in the PRD rather than papering over them.

## Example starter prompt
"Triage the attached PRD for our new 'AI assistant in-product chat' feature. Consumer users in US + EU."
