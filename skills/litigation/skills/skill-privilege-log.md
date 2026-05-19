# Skill: Privilege Review & Log Builder

## When to use this skill
Use this to analyze documents for potential attorney-client privilege or work product protection and build a draft privilege log.

## Trigger phrases
- "Check for privilege"
- "Draft a privilege log"
- "Is this document privileged?"

## Required user inputs
- Document text or metadata.
- List of attorneys/law firms involved.

## Workflow
1. **Actor Scan:** Check if any sender or recipient is a known attorney.
2. **Context Analysis:** Determine if the communication is for the purpose of seeking or providing legal advice.
3. **Redaction Identification:** Flag specific paragraphs that should be redacted for privilege.
4. **Log Entry Generation:** Draft a standard privilege log entry (Date, Author, Recipient, Basis for Privilege, Description).

## Output format: Privilege Log Draft
| Date | From/To | Privilege Basis | Description |
| :--- | :--- | :--- | :--- |
| 2023-05-12 | CEO to Gen. Counsel | ACP | Request for legal advice regarding contract dispute. |

## Guardrails
- Flag "mixed-purpose" communications (business and legal) for manual review.
- Flag "Privileged" stamps on documents that do not appear to contain legal advice.

## Example starter prompt
"Analyze the attached set of emails for privilege. We are looking for communications with our outside counsel, [Law Firm Name]."
