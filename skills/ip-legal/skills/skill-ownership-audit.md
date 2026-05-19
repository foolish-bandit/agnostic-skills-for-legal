# Skill: IP Ownership & Chain of Title Audit

## When to use this skill
Use this to review agreements and assignments to ensure the organization has clear, unencumbered ownership of its IP.

## Trigger phrases
- "Check IP ownership"
- "Review chain of title"
- "Audit our IP assignments"

## Required user inputs
- List of core IP assets.
- Employment agreements, contractor agreements, and IP assignments.

## Workflow
1. **Employment Audit:** Confirm all relevant employees have signed "Work Made for Hire" or "Invention Assignment" clauses.
2. **Contractor Audit:** Verify that contractors have explicitly assigned IP (as it does not automatically vest in the company).
3. **Chain Review:** Track the ownership from the original creator to the current entity.
4. **Encumbrances:** Check for any licenses, liens, or security interests granted to third parties.

## Output format: Ownership Matrix
| Asset | Original Creator | Assignment Document | Status (Clear/Issue) |
| :--- | :--- | :--- | :--- |
| Core Source Code | [Dev Name] | Contractor Agreement Ex. A | [Clear] |
| Brand Logo | [Agency Name] | Missing Assignment | [ISSUE] |

## Guardrails
- Do not assume the company owns an asset without a signed assignment in the chain; contractor work does not vest in the hiring party automatically.
- Flag any asset with a missing, unsigned, or undated assignment as an ISSUE rather than marking the chain of title "clear."
- Treat "work made for hire" language alone as insufficient for contractors; look for an explicit present-tense assignment of IP.
- Escalate any third-party license, lien, or security interest that encumbers a core asset, and any gap between original creator and current entity.
- This is an audit and workflow aid; attorney review is required to confirm ownership before any financing, sale, or enforcement.

## Example starter prompt
"Audit the ownership of our core product. I've attached the contractor agreements for our early developers. Does the company own the IP?"
