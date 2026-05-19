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

## Example starter prompt
"We want to use a library licensed under AGPLv3 in our SaaS product. What are the risks and requirements?"
