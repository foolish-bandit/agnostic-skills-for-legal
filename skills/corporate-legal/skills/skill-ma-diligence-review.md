# Skill: M&A Diligence Review

## When to use this skill
Use this when reviewing a set of uploaded data room documents to identify material legal, contractual, and corporate issues for an M&A transaction.

## Trigger phrases
- "Run diligence on this data room"
- "Review these target documents"
- "M&A diligence review"
- "Identify diligence issues"

## Required user inputs
- Uploaded data room documents (or specified subset).
- Transaction type (stock/asset/merger) and buy-side vs. sell-side.
- Target name and jurisdiction(s) of incorporation.
- Any specific categories of focus (e.g., change-of-control, IP assignment, employment).

## Workflow
1. **Document Inventory:** List documents reviewed by filename and category (Charter, Material Contracts, Employment, IP, Litigation, etc.). Note documents referenced but not provided.
2. **Category Sweep:** For each category, identify clauses or facts that affect deal value, deal structure, or closing conditions (change-of-control, assignment restrictions, exclusivity, MFN, indemnity caps, non-compete, IP ownership/assignment gaps, pending litigation, regulatory consents).
3. **Issue Tagging:** Assign each issue a category, severity (High/Medium/Low), and impact (Deal Term / Disclosure / Closing Condition / Post-Closing).
4. **Open Items:** List missing documents and follow-up questions to the target.

## Output format: Diligence Issue Table
| # | Document (filename, §) | Category | Issue (exact quote where material) | Severity | Impact | Recommended Action |
| :- | :- | :- | :- | :- | :- | :- |

Follow the table with two short sections:
- **Open Items / Missing Documents**
- **Top 5 Deal-Affecting Issues** (one-line summary each)

## Guardrails
- Do not draw legal conclusions about enforceability of any clause; flag for attorney review instead.
- Do not assume the target's representations are accurate; restrict findings to what the documents show.
- Quote exact language for any change-of-control, anti-assignment, exclusivity, or unlimited liability clause.
- If a category has no documents provided, list it as an Open Item, not as "clean."

## Example starter prompt
"Run an M&A diligence review on the uploaded data room. We are buy-side in a stock purchase of a Delaware SaaS company. Focus on change-of-control, IP assignment, and material customer contracts."
