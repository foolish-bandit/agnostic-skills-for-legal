# Skill: Compliance Gap Tracker

## When to use this skill
Use this to convert a gap analysis or set of regulatory obligations into a working compliance action tracker, with owners, deadlines, and status fields.

## Trigger phrases
- "Build a compliance tracker"
- "Track compliance actions"
- "Turn this gap analysis into a tracker"

## Required user inputs
- Uploaded gap analysis output OR a set of obligations.
- Effective date of the regulation.
- Internal owner placeholders if any (Legal, Compliance, Privacy, Engineering, Ops, HR).
- Target completion date.

## Workflow
1. **Action Generation:** For each gap or obligation, draft 1-3 concrete actions (e.g., "Update Section 4.3 of AML Policy to include the new identification threshold").
2. **Bucketing:** Group actions by function (Policy / Training / Process / System / Vendor / Other).
3. **Sequencing:** Identify dependencies and propose a logical order tied to the effective date.
4. **Status Fields:** Add fields for Status, Owner, Start, Target Completion, Evidence (artifact filename when complete), Notes.

## Output format: Compliance Action Tracker
| # | Obligation / Gap (source §) | Action | Function | Owner | Start | Target Completion | Status | Evidence | Notes |
| :- | :- | :- | :- | :- | :- | :- | :- | :- | :- |

End with:
- **Sequencing & Dependencies** (short list)
- **Key Dates Calendar**
- **Open Items**

## Guardrails
- Do not invent owners or deadlines beyond placeholders the user provided.
- Cite source obligation for every action.
- Mark "Evidence" as TBD until artifacts are uploaded.

## Example starter prompt
"Build a compliance action tracker from the attached gap analysis. Rule effective in 9 months."
