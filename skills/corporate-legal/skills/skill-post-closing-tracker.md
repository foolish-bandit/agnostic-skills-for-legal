# Skill: Post-Closing Integration Issue Tracker

## When to use this skill
Use this to build a post-closing action tracker from the uploaded purchase agreement, closing checklist, and any side letters, identifying integration and survival obligations.

## Trigger phrases
- "Post-closing tracker"
- "Build a post-closing action list"
- "Track integration obligations"

## Required user inputs
- Uploaded executed purchase agreement and any ancillary agreements (escrow, transition services, employment, IP assignment, side letters).
- Closing date.
- Internal owner placeholders (Legal, Finance, HR, IT) if available.

## Workflow
1. **Survival Sweep:** Identify each post-closing covenant, indemnification survival period, escrow release date, true-up, earn-out milestone, and continuing obligation. Cite section numbers.
2. **Notice & Reporting Obligations:** Extract all required notices, reports, certifications, and information delivery obligations with their deadlines or triggering events.
3. **Integration Items:** Extract employment transition, benefits transition, IP/IT transition, customer notice, vendor consent, and name change items from the agreements.
4. **Owner Mapping:** Bucket each item by suggested internal owner.

## Output format: Post-Closing Action Tracker
| # | Item | Source (§) | Trigger / Due Date | Owner | Status | Notes |
| :- | :- | :- | :- | :- | :- | :- |

Group by category (Survival/Indemnification, Escrow & True-Up, Earn-Out, Employment & Benefits, IP/IT Transition, Customer/Vendor Communications, Regulatory, Other).

End with:
- **Key Date Calendar** (date | item | source §)
- **Open Items / Missing Ancillaries**

## Guardrails
- Cite each item to its source section. Do not generate items not contemplated by the agreements.
- Quote earn-out and escrow release language exactly.
- Do not calculate dates not stated in the agreements; mark as "TBD per [§]" instead.

## Example starter prompt
"Build a post-closing tracker from the attached executed SPA, escrow agreement, and TSA. Closing date was March 1."
