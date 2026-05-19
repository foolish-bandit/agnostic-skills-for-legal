# Skill: Product Launch Legal Review

## When to use this skill
Use this when a product or feature is approaching launch and the user has uploaded the PRD, mocks, marketing copy, and/or draft terms changes for a coordinated legal review.

## Trigger phrases
- "Product launch legal review"
- "Review this launch"
- "Sign off on this feature launch"

## Required user inputs
- Uploaded PRD or feature spec.
- Uploaded marketing/launch copy (if any).
- Uploaded screenshots or UX flow (if any).
- Target launch date and markets.
- User population (consumer/B2B, minors, EU/UK exposure).

## Workflow
1. **Scope & Stage:** Restate the product, launch date, markets, and user population. Confirm uploaded materials in scope.
2. **Risk Domain Sweep:** Walk through each domain and identify issues:
   - Privacy & data handling (new data types, new sharing, new processors).
   - Marketing claims (performance, comparative, "free," "guaranteed," before/after).
   - Terms & policies (do changes require updated ToS/Privacy Policy or in-product disclosure?).
   - Consumer protection (dark patterns, auto-renew, cancellation flow, pricing display).
   - IP (third-party content, open source, trademarks in copy).
   - Accessibility & minors (if applicable).
3. **Cross-Functional Asks:** For each issue, identify the team needed to resolve (PM, Eng, Marketing, Privacy, Security).
4. **Launch Gate Recommendation:** Provide a recommended gate status (Green / Yellow / Red) with the rationale.

## Output format
1. **Launch Snapshot** (product, date, markets, materials reviewed)
2. **Issue Table**

| # | Domain | Source (filename, §) | Issue | Severity (H/M/L) | Owner | Recommended Action |
| :- | :- | :- | :- | :- | :- | :- |

3. **Launch Gate Recommendation** (Green / Yellow / Red, with rationale)
4. **Open Items**

## Guardrails
- Do not unilaterally declare "Green." Recommend a gate; attorney sign-off is required.
- Quote exact marketing claims and terms language for any flagged item.
- If the PRD describes behavior not visible in mocks (or vice versa), flag the inconsistency.

## Example starter prompt
"Run a product launch legal review on the attached PRD, mocks, and marketing one-pager. Launch in US + EU in 3 weeks, consumer product, no minors."
