# Skill: Open Source Software (OSS) License Review

## When to use this skill
Use this to analyze the licenses of open-source components to ensure they are compatible with the company's product and distribution model.

## Trigger phrases
- "Review this OSS license"
- "Check open source compatibility"
- "Analyze this GitHub library license"

## Required user inputs
- Name of the OSS library.
- License text (e.g., MIT, Apache, GPLv3, AGPL).
- Use case (Internal vs. Distributed/SaaS).

## Workflow
1. **License Classification:** Categorize as Permissive (MIT, Apache) or Copyleft (GPL, AGPL).
2. **Compatibility Analysis:** Determine if the license terms conflict with the proprietary license of the product.
3. **Trigger Check:** Identify if "distribution" or "remote access" triggers the copyleft requirements.
4. **Attribution Requirements:** List what notices must be included in the product.

## Output format: OSS Risk Report
- **License Type:** [Category]
- **Risk Level:** [Low/Med/High]
- **Analysis:** Impact on the company's proprietary code.
- **Action Items:** (e.g., "Must include license text in the 'About' screen").

## Guardrails
- Flag AGPL components in any SaaS or network-accessed product for immediate escalation, since remote access can trigger source-disclosure obligations.
- Base the analysis on the actual license text and version provided; do not assume a library's license from its name, as projects relicense and dual-license.
- Treat strong copyleft (GPL/AGPL) linked into proprietary code as a high-risk compatibility issue, not a routine attribution item.
- Distinguish "internal use" from "distribution" or "SaaS"; if the use case is unclear, flag it rather than assuming the lighter obligation applies.
- This is an issue-spotting and workflow aid; attorney review is required before the component is shipped or relied upon.

## Example starter prompt
"We want to use a library licensed under AGPLv3 in our SaaS product. What are the risks and requirements?"
