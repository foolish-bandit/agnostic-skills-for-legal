# Skill: Regulation-to-Policy Gap Analysis

## When to use this skill
Use this to compare a specific uploaded regulation (or set of obligations) against one or more uploaded internal policies, procedures, or controls, and identify gaps. This is the manual replacement for any "policy monitor" concept.

## Trigger phrases
- "Gap analysis"
- "Compare this rule to our policy"
- "Where are we short of this regulation?"

## Required user inputs
- Uploaded regulation (or obligations table from a prior Regulatory Update Review).
- Uploaded internal policy / procedure / standard / training / control documents.
- Business unit / scope.

## Workflow
1. **Obligations List:** Extract or import each in-scope obligation with exact quote and citation.
2. **Policy Coverage Search:** For each obligation, search the uploaded internal materials for the closest corresponding provision. Quote it.
3. **Gap Classification:** Tag each obligation as:
   - **Covered** (clear corresponding provision)
   - **Partially Covered** (related provision but missing element X)
   - **Not Covered** (no corresponding provision found in uploaded materials)
   - **Conflict** (internal provision contradicts the obligation)
4. **Owner & Remediation:** Suggest which internal function would own each gap (Policy, Operations, Engineering, HR, Compliance) and a remediation direction.

## Output format: Policy Gap Table
| # | Obligation (§ + exact quote) | Internal Source (filename + §) | Internal Quote | Status (Covered / Partial / Not Covered / Conflict) | Gap Description | Owner | Remediation Direction |
| :- | :- | :- | :- | :- | :- | :- | :- |

End with:
- **Summary by Status** (counts)
- **Top Gaps to Remediate**
- **Open Items / Materials Not Provided**

## Guardrails
- "Not Covered" means not found in the uploaded materials, not that the company is non-compliant in fact.
- Quote both regulation and internal text. Do not paraphrase to make them match.
- If multiple internal policies arguably apply, list all and let attorney decide which is authoritative.

## Example starter prompt
"Run a gap analysis between the obligations in the attached final rule and our attached internal AML policy v3.2."
