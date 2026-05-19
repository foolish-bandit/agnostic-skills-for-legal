# Skill: Closing Checklist Builder

## When to use this skill
Use this to draft or update a closing checklist for a corporate transaction based on the uploaded purchase agreement and related deal documents.

## Trigger phrases
- "Build a closing checklist"
- "Draft the closing checklist"
- "Update the closing checklist from this draft agreement"

## Required user inputs
- Uploaded purchase agreement or term sheet.
- Transaction type (stock/asset/merger/financing).
- Target signing and closing dates (if known).
- Any known third-party consents or regulatory approvals already identified.

## Workflow
1. **Document Map:** Identify, from the agreement, every defined "Ancillary Document," "Closing Deliverable," "Condition Precedent," and required third-party consent. Cite section numbers.
2. **Checklist Build:** Convert each item into a checklist row with status, owner placeholder, and source reference.
3. **Pre-Closing vs. Closing vs. Post-Closing:** Bucket each item into Pre-Signing, Signing, Pre-Closing, Closing Date, and Post-Closing.
4. **Open Items:** Flag any deliverable that references a schedule or exhibit not provided.

## Output format: Closing Checklist
Group by phase. For each phase use:

| # | Item | Source (§) | Owner | Status | Notes |
| :- | :- | :- | :- | :- | :- |

End with:
- **Conditions Precedent Summary** (one line each, with §)
- **Third-Party Consents Required** (counterparty, document, § granting consent right)
- **Open Items / Missing Schedules**

## Guardrails
- Cite the section number of the agreement for every checklist row.
- Do not invent deliverables not contemplated by the agreement.
- If a condition precedent is ambiguous, list it verbatim and flag for attorney review.

## Example starter prompt
"Build a closing checklist from the attached draft stock purchase agreement. Target closing in 45 days."
