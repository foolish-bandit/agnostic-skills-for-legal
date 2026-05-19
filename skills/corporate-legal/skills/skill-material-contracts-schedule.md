# Skill: Material Contracts Schedule Builder

## When to use this skill
Use this to build a disclosure-schedule-ready list of material contracts from an uploaded set of agreements, for use as an exhibit to a purchase agreement or for diligence reporting.

## Trigger phrases
- "Build a material contracts schedule"
- "List material contracts for disclosure"
- "Create a contracts exhibit"

## Required user inputs
- Uploaded contracts (or directory listing with filenames).
- Materiality thresholds (e.g., annual revenue/spend, term length, customer/vendor concentration).
- Any categories required by the deal documents (e.g., "Top 20 Customer Contracts," "All IP Licenses").

## Workflow
1. **Threshold Confirmation:** Restate the materiality thresholds. Ask the user if not provided.
2. **Per-Contract Extraction:** For each contract, extract: counterparty, contract type, effective date, term and renewal mechanic, governing law, change-of-control/assignment provision (exact quote), termination for convenience, exclusivity/MFN, and economic value (where stated).
3. **Materiality Filter:** Mark each contract as Material/Not Material against the threshold and note the basis.
4. **Bucket by Category:** Group by contract type (Customer, Vendor, IP License, Real Estate, Financing, Employment, Other).

## Output format: Material Contracts Schedule
| # | Counterparty | Type | Effective Date | Term / Renewal | Change of Control (quote) | Assignment (quote) | Value | Material? | Category |
| :- | :- | :- | :- | :- | :- | :- | :- | :- | :- |

End with:
- **Excluded Contracts** (with reason)
- **Open Items** (missing fields, unsigned drafts, missing amendments)

## Guardrails
- Quote change-of-control and assignment language exactly; do not summarize.
- Do not infer counterparty consent requirements; report the clause language only.
- If signature pages or amendments are missing, flag as Open Item.

## Example starter prompt
"Build a material contracts schedule from the 35 uploaded customer agreements. Materiality threshold is $250k ARR or 3+ year term."
