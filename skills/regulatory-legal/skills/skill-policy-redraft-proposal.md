# Skill: Policy Redraft Proposal

## When to use this skill
Use this to propose targeted redline-style revisions to an uploaded internal policy in response to an uploaded regulatory change or gap analysis. Output is a proposal for attorney review, not a final policy.

## Trigger phrases
- "Redraft this policy"
- "Propose policy revisions"
- "Markup this policy for the new rule"

## Required user inputs
- Uploaded current internal policy.
- Uploaded regulation (or obligations list / gap analysis).
- Scope: targeted edits (specific sections) or full sweep.
- Drafting style guide, if any (uploaded).

## Workflow
1. **Anchor Mapping:** Map each obligation or gap to the specific section of the current policy that should be changed. Cite both.
2. **Proposed Edits:** For each anchor, propose the revision in two forms:
   - **Strikethrough/Insert** style ("delete X, insert Y")
   - **Clean revised text**
3. **Rationale:** One short sentence per edit citing the underlying obligation.
4. **New Sections:** Where no anchor exists, propose a new section with full text and suggested placement.
5. **Out-of-Scope Issues Found:** Note any inconsistencies you saw in the policy that are unrelated to the regulation, but do not change them; list for follow-up.

## Output format: Proposed Policy Revision Table
| # | Policy § | Current Text (exact quote) | Proposed Edit (strike/insert) | Clean Revised Text | Rationale (obligation §) |
| :- | :- | :- | :- | :- | :- |

Followed by:
- **New Sections Proposed** (Section heading | Proposed placement | Full proposed text | Rationale)
- **Out-of-Scope Issues Noted** (no edits made)
- **Open Items** (terms requiring business input, e.g., thresholds)

## Guardrails
- Quote current text exactly. Never edit silently.
- Tie every proposed edit to a specific obligation citation.
- Mark output prominently as DRAFT - PROPOSED REVISIONS FOR ATTORNEY REVIEW.
- Do not change non-anchored sections, even if you would draft them differently.

## Example starter prompt
"Propose targeted redline revisions to our attached Information Security Policy v2.1 to address the obligations in the attached final rule and the prior gap analysis."
