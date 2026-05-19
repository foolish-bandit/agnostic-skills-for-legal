# Skill: Consumer Protection Issue Spotting

## When to use this skill
Use this to review uploaded purchase, signup, subscription, or cancellation flow materials (screenshots, copy, terms excerpts) for consumer protection issues commonly raised by US state AGs and the FTC, and analogous EU/UK consumer rules.

## Trigger phrases
- "Consumer protection review"
- "Dark patterns review"
- "Review this checkout flow"

## Required user inputs
- Uploaded flow screenshots, copy, or PRD describing the flow.
- Markets.
- Whether the offering is subscription, one-time, freemium, or trial-to-paid.

## Workflow
1. **Flow Reconstruction:** Reconstruct the user journey step by step from the uploaded materials. Flag any step that isn't documented.
2. **Issue Sweep:** Walk through known consumer-protection-sensitive patterns:
   - Pricing transparency (total price, drip pricing, hidden fees).
   - Free trial → paid conversion (clear disclosure of charge date, amount, recurrence).
   - Subscription auto-renewal disclosures and cancellation symmetry ("easy to cancel as to sign up").
   - Consent capture (pre-checked boxes, bundled consents).
   - Negative option / forced continuity.
   - Dark patterns (confirmshaming, obstruction, sneaking, misdirection).
   - Testimonials / endorsements (typicality, paid).
   - Pricing comparisons & strike-through reference prices.
3. **Disclosure Adequacy:** Identify where required disclosures appear, and whether they are above the fold/before the CTA.
4. **Action List:** Recommend concrete UX or copy changes.

## Output format
1. **Reconstructed Flow** (numbered steps with source references)
2. **Issue Table**

| # | Step | Pattern | Issue (exact quote / screenshot) | Severity (H/M/L) | Recommended Action |
| :- | :- | :- | :- | :- | :- |

3. **Disclosure Adequacy Summary**
4. **Open Items**

## Guardrails
- Quote exactly. Where a screenshot is the source, cite filename and screen.
- Do not state that a flow is "compliant"; report observed issues and recommended changes.
- Treat trial-to-paid and auto-renew flows as high-sensitivity by default.

## Example starter prompt
"Review the attached checkout flow screenshots for consumer protection issues. Subscription product, free 7-day trial, US 50-state launch."
