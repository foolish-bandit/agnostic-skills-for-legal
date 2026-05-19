# Skill: Diligence Issue Extraction Table

## When to use this skill
Use this to extract a structured issue table from a specific subset of uploaded diligence materials (e.g., only material contracts, only IP assignments) without running the full M&A diligence sweep.

## Trigger phrases
- "Extract diligence issues from these contracts"
- "Build a diligence issue table"
- "Issue spot this set of documents"

## Required user inputs
- The uploaded documents to review.
- The categories or risk themes to extract (e.g., change-of-control, exclusivity, indemnities, IP ownership).
- Output preference (one table per document or one consolidated table).

## Workflow
1. **Scope Confirmation:** Restate the document set and categories you will review. Ask for clarification if either is ambiguous.
2. **Clause Extraction:** For each document, locate each in-scope clause and extract: clause heading, section reference, and exact language for any flagged provision.
3. **Issue Classification:** Tag each extracted clause with category, severity, and impact (Deal Term / Disclosure / Closing Condition / Post-Closing).
4. **Cross-Reference:** Note any clauses that reference other documents the user has not provided.

## Output format: Issue Table
| # | Document | § | Category | Exact Quote | Severity | Impact | Notes |
| :- | :- | :- | :- | :- | :- | :- | :- |

End with a short list of **Missing Cross-References** (documents referenced but not provided).

## Guardrails
- Use exact quotes for every issue row. Do not paraphrase clause language.
- Do not extrapolate beyond the requested categories.
- If a document is unreadable or partially uploaded, flag it instead of guessing.

## Example starter prompt
"Build a diligence issue table from the attached 8 customer contracts. Focus on change-of-control, assignment, exclusivity, and limitation of liability. One consolidated table."
