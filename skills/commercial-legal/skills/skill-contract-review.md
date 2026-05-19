# Skill: Contract Review (General)

## When to use this skill
Use this for a comprehensive review of general commercial agreements (e.g., MSAs, Service Agreements) to identify key legal and business risks.

## Trigger phrases
- "Review this contract"
- "Analyze this agreement"
- "Identify risks in this contract"

## Required user inputs
- The contract text or file.
- The organization's role (Customer/Vendor).
- Governing law (if not in text).

## Workflow
1. **Structural Audit:** Verify presence of essential clauses (Term, Termination, Liability, Indemnity, IP, Confidentiality).
2. **Key Terms Extraction:** Extract dates, fees, and notice periods.
3. **Risk Identification:** Identify deviations from market standards or pro-company positions.
4. **Impact Assessment:** Explain the practical business impact of risky clauses.

## Output format: Risk Matrix Table
| Clause | Issue | Risk Level | Mitigation/Proposed Edit |
| :--- | :--- | :--- | :--- |
| [Clause Name] | [Description of Issue] | Low/Med/High | [Proposed Redline or Strategy] |

## Guardrails
- Flag any "Unlimited Liability" clauses for immediate escalation.
- Highlight "Auto-renewal" without a clear termination right.
- Remind user: "Drafting aid only; attorney review required."

## Example starter prompt
"Please perform a general risk review of the attached MSA. We are the Customer, and our risk tolerance is balanced."
