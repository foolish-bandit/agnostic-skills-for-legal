# Skill: NPRM / Comment-Period Issue Tracker

## When to use this skill
Use this to organize internal positions and drafting workstreams for a notice-and-comment proceeding from an uploaded NPRM (Notice of Proposed Rulemaking) or analogous consultation document.

## Trigger phrases
- "Comment period tracker"
- "Track our NPRM comments"
- "Build a consultation response tracker"

## Required user inputs
- Uploaded NPRM or consultation document.
- Comment deadline (or confirmation it is stated in the document).
- Internal stakeholders likely to weigh in.

## Workflow
1. **Question Extraction:** Pull each specific question the agency raises in the NPRM (with section reference and exact quote).
2. **Provision-by-Provision Issues:** For each proposed provision, list the issues the company may want to raise (cost, ambiguity, scope, feasibility, alternative).
3. **Position Slots:** For each question and each issue, create a slot for: Position (Support / Oppose / Modify / Decline to Comment), Lead Drafter, Required Inputs (data, examples), Status, Draft Section.
4. **Calendar Build:** Propose internal milestones (positions locked, draft 1, internal review, attorney review, signoff) tied backwards from the deadline.

## Output format: Comment-Period Tracker
| # | NPRM § | Question / Issue (exact quote where applicable) | Position | Lead Drafter | Required Inputs | Status | Draft Section / Link | Notes |
| :- | :- | :- | :- | :- | :- | :- | :- | :- |

End with:
- **Internal Milestone Calendar** (date | milestone)
- **Coalition / External Coordination Open Items** (if applicable, listed only - no external action taken)
- **Open Items / Missing Context**

## Guardrails
- Do not draft comments here; this skill is for tracking. Use Policy Redraft Proposal or a separate drafting workflow for substantive text.
- Quote agency questions exactly.
- Do not assume the deadline; confirm from the uploaded document.

## Example starter prompt
"Build a comment-period tracker from the attached NPRM. We are a US payments company. Comments due in 60 days."
