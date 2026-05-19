# Skill: Uploaded Regulatory Update Review

## When to use this skill
Use this to review an uploaded regulatory update (final rule, NPRM, guidance, enforcement order, statute amendment) and produce a structured summary. This is the manual replacement for any "regulatory feed watcher" concept: the user uploads the source document and you process it.

## Trigger phrases
- "Review this regulatory update"
- "Summarize this rule"
- "Read this NPRM"

## Required user inputs
- Uploaded regulatory document.
- Industry / business unit affected.
- Whether the user wants summary only, summary + obligations map, or summary + gap analysis.

## Workflow
1. **Document Identification:** Restate the document title, issuing body, document type, effective date, and (if NPRM) comment deadline. Cite the document.
2. **What Changed:** Identify what is new vs. what existed before, using only what the uploaded document itself states. If the document references prior rules not uploaded, list them as Open Items.
3. **Key Obligations:** Extract each obligation, prohibition, or right with exact quote and section reference.
4. **Scope & Applicability:** Extract who is covered, who is exempted, thresholds, and effective dates.
5. **Definitions Worth Noting:** Pull defined terms that meaningfully change scope.
6. **Open Questions:** Identify ambiguities, terms left to subsequent guidance, and cross-references not in the uploaded materials.

## Output format: Regulatory Update Summary
1. **Identification** (title, body, type, effective date, comment deadline if any, source citation)
2. **What Changed** (bullet list)
3. **Obligations Table**

| # | § | Obligation / Prohibition / Right | Exact Quote | Covered Parties | Effective Date |
| :- | :- | :- | :- | :- | :- |

4. **Definitions Worth Noting**
5. **Open Questions / Cross-References Not Provided**
6. **Recommended Next Step** (e.g., run Regulation-to-Policy Gap Analysis)

## Guardrails
- Quote exactly. Do not paraphrase obligations.
- Do not predict enforcement priorities or interpretive outcomes.
- If the document is incomplete (e.g., preamble only), say so and stop short of an obligations table.

## Example starter prompt
"Summarize the attached CFPB final rule. We are a US consumer fintech. Summary plus obligations map, please."
