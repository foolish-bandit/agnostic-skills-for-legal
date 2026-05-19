# Skill: IP Licensing Issue Spotter

## When to use this skill
Use this to review inbound or outbound IP licenses for high-risk terms related to scope, royalties, and termination.

## Trigger phrases
- "Review this IP license"
- "Audit this copyright license"
- "Analyze this software license grant"

## Required user inputs
- License agreement text.
- Organization's role (Licensor/Licensee).

## Workflow
1. **Grant Scope:** Confirm if the license is exclusive/non-exclusive and its territorial/temporal limits.
2. **Derivative Works:** Identify who owns improvements or modifications to the IP.
3. **Royalties/Fees:** Review payment structures and audit rights.
4. **Sublicensing:** Check if sublicensing is permitted and under what conditions.

## Output format: License Analysis Memo
- **Scope Summary:** What is being licensed and for how long.
- **Top 3 Risks:** (e.g., "Grant is too broad," "No right to sublicense").
- **Proposed Redlines:** Recommended edits to the grant of rights.

## Guardrails
- Quote the exact grant language when assessing scope, exclusivity, sublicensing, or affiliate rights; do not infer a right that the text does not expressly grant.
- Tailor the analysis to the stated role (Licensor vs. Licensee), since the same clause carries opposite risk for each side.
- Flag for escalation any license that assigns ownership of improvements or derivative works to the other party, or that lacks audit, termination, or survival terms.
- Do not opine that the license is "enforceable"; identify scope and risk issues and flag them for attorney review.
- This is an issue-spotting and workflow aid; attorney review is required before relying on the analysis.

## Example starter prompt
"Review the attached software license. We are the Licensee. Can we sublicense this to our affiliates?"
