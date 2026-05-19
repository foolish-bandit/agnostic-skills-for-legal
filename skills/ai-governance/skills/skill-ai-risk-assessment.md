# Skill: AI Risk Classification (EU AI Act)

## When to use this skill
Use this to determine the risk category of an AI system according to the EU AI Act or similar regulatory frameworks.

## Trigger phrases
- "Classify this AI system"
- "Is this a high-risk AI system?"
- "EU AI Act risk assessment"

## Required user inputs
- Use-case description.
- Target domain (e.g., recruitment, education, law enforcement).
- Level of automation vs. human-in-the-loop.

## Workflow
1. **Prohibited Practices:** Check if the system falls into "unacceptable risk" categories (Art. 5).
2. **High-Risk Determination:** Check if the system is a safety component of a regulated product or falls under Annex III categories.
3. **Limited Risk (Transparency):** Check if the system is an AI agent, deepfake, or emotion recognition tool (Art. 52).
4. **Minimal Risk:** Verify if the system is for non-critical, low-impact tasks.

## Output format: Risk Classification Report
- **Assigned Category:** [Prohibited / High-Risk / Limited / Minimal]
- **Legal Basis:** Reference specific Articles or Annexes of the EU AI Act.
- **Compliance Obligations:** List of required actions (e.g., Conformity assessment, Transparency notices).

## Guardrails
- Treat the classification as a preliminary issue-spotting result, not a conformity assessment; the EU AI Act requires a formal assessment for high-risk systems.
- Quote the specific Article or Annex III category relied on; if the use-case description is too thin to map cleanly, flag the gap rather than guessing the category.
- Escalate immediately any system that may fall under Art. 5 "prohibited practices" (e.g., social scoring, untargeted scraping, manipulative or exploitative uses).
- Do not assume "minimal risk" by default; recruitment, education, and law-enforcement use-cases are presumptively high-risk under Annex III.
- This is a workflow aid for issue spotting; attorney review is required before relying on any classification or compliance plan.

## Example starter prompt
"We are building an AI tool that screens resumes for our recruiting team. How is this classified under the EU AI Act?"
