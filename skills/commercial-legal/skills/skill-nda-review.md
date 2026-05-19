# Skill: NDA Triage & Review

## When to use this skill
Use this for a fast-pass review of Non-Disclosure Agreements (NDAs) to ensure standard protections are in place.

## Trigger phrases
- "Review this NDA"
- "NDA triage"
- "Is this a standard NDA?"

## Required user inputs
- NDA text.
- Mutuality preference (One-way vs. Mutual).

## Workflow
1. **Mutuality Check:** Confirm if the obligations are reciprocal.
2. **Definition of Confidential Information:** Ensure it includes written and oral disclosures.
3. **Exclusions:** Verify standard exclusions (public domain, independent development, etc.).
4. **Term vs. Survival:** Check how long the confidentiality obligation lasts after the agreement ends.

## Output format: Redline Memo
- **Executive Summary:** Pass/Fail/Conditional.
- **Top 3 Risks:** Bulleted list.
- **Proposed Redlines:** Specific "Find/Replace" suggestions.

## Guardrails
- Escalate if the NDA includes an assignment of IP.
- Escalate if there is a "Non-solicit" or "Non-compete" hidden in the NDA.

## Example starter prompt
"Triage this NDA. We want it to be mutual and governed by Delaware law."
