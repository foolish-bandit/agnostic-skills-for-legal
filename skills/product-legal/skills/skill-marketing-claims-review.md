# Skill: Marketing Claims Review

## When to use this skill
Use this to review uploaded marketing copy (landing pages, ads, emails, social posts, decks) and produce a claims substantiation chart for attorney review.

## Trigger phrases
- "Review this marketing copy"
- "Marketing claims review"
- "Substantiation review"

## Required user inputs
- Uploaded marketing materials (copy, screenshots, ad creative).
- Uploaded substantiation documents the team relies on (studies, internal data, benchmarks), if any.
- Markets where the copy will run.
- Whether copy is competitive/comparative.

## Workflow
1. **Claim Extraction:** Extract each discrete claim with its exact wording and location (page, headline, fine print).
2. **Classification:** Tag each claim as Objective (verifiable), Subjective/puffery, Comparative, Endorsement/testimonial, Pricing, Guarantee, Performance, or Environmental ("green").
3. **Substantiation Mapping:** For each Objective/Comparative/Performance/Environmental claim, identify whether the uploaded materials include substantiation. If not, flag as "Substantiation Not Provided."
4. **Risk Notes:** Flag high-risk patterns (unqualified "best," "#1," "guaranteed," "free," "no risk," "save X%," express health/financial outcomes, before/after, "as seen on," typical-results testimonials).

## Output format: Marketing Claims Substantiation Chart
| # | Claim (exact quote) | Location | Type | Substantiation in Uploaded Materials? | Risk Notes | Recommended Action |
| :- | :- | :- | :- | :- | :- | :- |

End with:
- **High-Risk Claims Requiring Attorney Sign-Off** (one line each)
- **Disclosures Recommended** (with proposed exact text)

## Guardrails
- Use exact quotes for every claim.
- Do not assert that a claim is "substantiated" - only report whether substantiation was uploaded.
- Treat comparative and superlative claims as high-risk by default.
- Flag any claim that could implicate sector-specific rules (health, financial, environmental, children) for attorney escalation.

## Example starter prompt
"Review the attached landing page copy and the 3 substantiation studies. Flag every claim that lacks substantiation or needs a disclosure."
