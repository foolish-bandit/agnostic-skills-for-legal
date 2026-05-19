# Skill: Internal Stakeholder Regulatory Briefing

## When to use this skill
Use this to produce a stakeholder-tailored briefing memo on an uploaded regulatory development for a specific internal audience (executives, board committee, product, engineering, compliance ops).

## Trigger phrases
- "Brief the executive team"
- "Build a stakeholder briefing"
- "Memo for the board"

## Required user inputs
- Uploaded regulatory document and (optionally) a prior Regulatory Change Summary.
- Audience and meeting/format (memo, slide outline, talking points).
- 2-3 questions the audience is expected to ask.
- Decision the briefing should support (if any).

## Workflow
1. **Audience Tuning:** Calibrate technical depth, what to assume vs. explain.
2. **Headline:** State the one decision or implication the audience needs to absorb in one sentence.
3. **Background:** 2-3 sentences of context.
4. **What This Means for Us:** Concrete impacts (cost, timeline, dependencies, risk), citing the source document.
5. **Options / Recommended Path:** If a decision is required, lay out 2-3 options with trade-offs (no recommendation framed as legal advice).
6. **Anticipated Questions & Suggested Answers:** Address the user-provided expected questions.
7. **Asks:** What you need from this audience.

## Output format
Provide in the requested format (memo, slide outline, or talking points). Default to a memo with these headers:
- **Headline**
- **Background**
- **What This Means for Us**
- **Options**
- **Recommended Next Steps**
- **Anticipated Questions & Suggested Answers**
- **Asks**

Cite the source document section in every substantive bullet.

## Guardrails
- Recommended Next Steps are operational, not legal opinions.
- Do not include speculation about enforcement or unstated agency intent.
- Match length to format (board: ≤1 page; product: 1-2 pages; compliance ops: as long as needed).

## Example starter prompt
"Build a 1-page board committee memo from the attached final rule. The committee needs to decide whether to approve $X budget. Three anticipated questions: timing, cost, customer impact."
