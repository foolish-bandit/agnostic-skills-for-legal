# Skill: Terms / Product Policy Issue Spotting

## When to use this skill
Use this to review an uploaded draft of Terms of Service, EULA, Acceptable Use Policy, or other product-facing policy for internal consistency, drafting issues, and consumer-protection-sensitive provisions.

## Trigger phrases
- "Issue spot these terms"
- "Review this policy draft"
- "Find issues in this ToS"

## Required user inputs
- Uploaded draft terms or policy.
- Markets and user population (consumer / B2B / mixed; minors).
- Whether the user wants a redline, an issue list, or both.
- Prior version (if comparing).

## Workflow
1. **Structural Scan:** Identify whether key sections are present (acceptance, eligibility, account, license/access, payment & renewal, IP, prohibited uses, content & UGC, termination, suspension, disclaimers, limitation of liability, indemnity, dispute resolution & arbitration, governing law, changes to terms).
2. **Internal Consistency:** Check for defined terms used but not defined, conflicting provisions, broken cross-references.
3. **Issue Spotting:** Flag provisions that may need attention for consumer-protection-sensitive markets: auto-renewal mechanics, cancellation flow, class action / arbitration carve-outs, unilateral change rights, broad IP licenses over user content, mandatory consent to communications.
4. **Policy Touchpoints:** Identify obligations referenced in the terms that depend on a separate policy (Privacy Policy, AUP, Community Guidelines) and flag if missing.

## Output format
1. **Section Coverage Table**

| Section | Present? | Notes |
| :- | :- | :- |

2. **Issue List**

| # | § | Issue | Severity (H/M/L) | Recommended Action |
| :- | :- | :- | :- | :- |

3. **Cross-Reference Gaps**
4. **Open Items**

## Guardrails
- Use exact quotes for any provision flagged.
- Do not opine on enforceability; flag for attorney review.
- Treat arbitration, class action waiver, and auto-renew clauses as high-sensitivity for consumer products.

## Example starter prompt
"Issue spot the attached ToS draft. Consumer SaaS, US + EU, no minors. Return both an issue list and a section coverage table."
