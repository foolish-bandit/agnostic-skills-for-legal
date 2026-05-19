# Skill: Vendor AI Governance Review

## When to use this skill
Use this to review the terms of service, data processing agreements, and security whitepapers of a third-party AI provider.

## Trigger phrases
- "Review this AI vendor"
- "Audit OpenAI/Anthropic/Google terms"
- "Is this vendor's AI safe for our data?"

## Required user inputs
- Vendor terms of service or AI policy.
- Intended use of the vendor's tool.

## Workflow
1. **Data Training:** Confirm if the vendor uses Customer data to train their base models (and if opt-out is available).
2. **Data Retention:** Identify how long prompts and outputs are stored by the vendor.
3. **Liability & Indemnity:** Review if the vendor provides indemnity for IP infringement (copyright) of AI outputs.
4. **Sub-processors:** Identify where the data is being processed and by whom.

## Output format: Vendor Risk Matrix
| Feature | Risk Level | Mitigation |
| :--- | :--- | :--- |
| Model Training | [High] | Enable Enterprise opt-out to prevent training. |
| Data Retention | [Med] | Request zero-retention (API) or 30-day purge. |
| IP Indemnity | [Low] | Vendor provides "Copyright Shield" for Enterprise users. |

## Example starter prompt
"Review the attached Enterprise terms for a new AI coding assistant. Does it protect our proprietary source code from being used for training?"
