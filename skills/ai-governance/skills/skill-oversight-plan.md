# Skill: AI Human Oversight Plan

## When to use this skill
Use this to design the "human-in-the-loop" controls required for responsible AI deployment, especially for high-risk systems.

## Trigger phrases
- "Draft a human oversight plan"
- "How should we monitor this AI?"
- "Design oversight controls"

## Required user inputs
- AI system use-case and risk level.
- Roles of the humans responsible for oversight.

## Workflow
1. **Critical Decision Points:** Identify which AI outputs require mandatory human review before being acted upon.
2. **Override Authority:** Define who has the power to "shut down" or "override" an AI decision.
3. **Training Requirements:** List the skills the human overseer needs to avoid "automation bias."
4. **Error Logging:** Design a process for humans to report and correct AI mistakes/hallucinations.

## Output format: Oversight Roadmap
- **Human Roles:** List of responsible parties (e.g., Lead Reviewer, Ethics Officer).
- **Review Protocol:** Step-by-step process for validating AI outputs.
- **Intervention Triggers:** Scenarios where a human MUST intervene.
- **Feedback Loop:** Process for continuous model improvement.

## Guardrails
- Do not treat a human "rubber-stamp" as oversight; the plan must give reviewers genuine authority and time to override AI outputs.
- Flag for escalation any high-risk decision point where no human currently has clear override or shut-down authority.
- Address automation bias explicitly; do not assume reviewers will catch errors without training and intervention triggers designed for it.
- If the AI system's risk level is unconfirmed, treat it as high-risk for oversight design rather than assuming lighter controls.
- This is a drafting and workflow aid; attorney and compliance review is required before the oversight plan is adopted.

## Example starter prompt
"For our AI recruiting tool, draft a human oversight plan that ensures our HR team reviews all 'rejection' recommendations before they are finalized."
