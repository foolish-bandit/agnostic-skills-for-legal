# Skill: Employment Agreement Review

## When to use this skill
Use this to review offer letters or employment agreements to ensure they align with local labor laws and company standards.

## Trigger phrases
- "Review this offer letter"
- "Analyze this employment agreement"
- "Is this contract enforceable?"

## Required user inputs
- Agreement text.
- Jurisdiction (State/Country).
- Employee's role and exemption status.

## Workflow
1. **Compensation & Benefits:** Verify salary, bonus, and equity terms match the term sheet.
2. **Restrictive Covenants:** Check enforceability of non-competes, non-solicits, and confidentiality clauses in the target jurisdiction.
3. **At-Will vs. Term:** Confirm if the employment is at-will and if termination notice periods are required.
4. **IP Assignment:** Ensure "work made for hire" and IP assignment clauses are robust.

## Output format: Redline Memo
- **Executive Summary:** Key risks and missing clauses.
- **Clause-by-Clause Analysis:** Risk level (Low/Med/High).
- **Proposed Edits:** Recommended text to mitigate risk.

## Guardrails
- Do not state that a non-compete or other restrictive covenant "is enforceable"; identify the jurisdiction-specific enforceability risk and flag it for attorney review.
- Treat restrictive covenants as high-risk where the named jurisdiction bans or limits them (e.g., California non-competes, narrow exceptions elsewhere).
- Confirm comp, equity, and bonus terms only against the term sheet provided; flag any discrepancy rather than assuming the agreement controls.
- Flag for escalation any missing IP assignment or invention-assignment language, since IP may not vest automatically.
- This is a drafting and issue-spotting aid; attorney review is required before the agreement is sent or signed.

## Example starter prompt
"Review the attached offer letter for a New York based software engineer. Is the non-compete enforceable under current NY law?"
