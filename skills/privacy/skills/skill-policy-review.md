# Skill: Privacy Policy Issue Spotting

## When to use this skill
Use this to review a public-facing Privacy Policy or Privacy Notice for missing or non-compliant disclosures.

## Trigger phrases
- "Review this privacy policy"
- "Audit our privacy notice"
- "Is this privacy policy CCPA compliant?"

## Required user inputs
- Privacy Policy text.
- Relevant laws (e.g., GDPR, CCPA).

## Workflow
1. **Disclosures:** Verify inclusion of data categories, purposes, and third-party sharing.
2. **User Rights:** Confirm presence of access, deletion, and opt-out rights.
3. **Transparency:** Check for plain-language descriptions and contact info.
4. **Legal Basis:** (For GDPR) Ensure each processing activity has a valid legal basis.

## Output format: Compliance Memo
- **Missing Elements:** Bulleted list of legally required but missing clauses.
- **Vague Language:** Highlight sections that are too broad (e.g., "we may share data with any partner").
- **Proposed Revisions:** Suggested text to improve transparency.

## Guardrails
- List any legally required disclosure that is absent as a Missing Element; do not assume an omitted clause is covered elsewhere.
- Flag vague or open-ended language (e.g., "we may share data with any partner") as a transparency risk rather than treating it as adequate.
- Scope the review to the laws the user names, and flag any practice that suggests another regime applies; do not assume one policy satisfies all jurisdictions.
- Note that this reviews the policy text only and cannot confirm the organization's actual data practices match what is disclosed.
- This is an issue-spotting and workflow aid; attorney review is required before the policy is published or relied upon.

## Example starter prompt
"Audit the attached privacy policy for GDPR compliance. Does it correctly list the data subject rights and the DPO contact info?"
