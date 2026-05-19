# Skill: Entity Compliance Checklist

## When to use this skill
Use this to produce an entity-by-entity compliance checklist (qualifications to do business, annual reports, registered agent, franchise tax, governance hygiene) from uploaded corporate records.

## Trigger phrases
- "Build an entity compliance checklist"
- "Entity hygiene review"
- "Check our subsidiary compliance status"

## Required user inputs
- Uploaded entity records (formation documents, good standing certificates, prior annual filings, foreign qualification certificates, registered agent records).
- List of jurisdictions where each entity is registered or does business.
- Reporting cutoff date for the checklist.

## Workflow
1. **Entity Inventory:** List each entity reviewed with formation jurisdiction, entity type, and date of formation. Note any missing formation documents.
2. **Jurisdiction Matrix:** For each entity, list each jurisdiction of qualification, the type of filing required (annual report, franchise tax, occupational license), the most recent filing date in the uploaded records, and the next due date if stated.
3. **Governance Hygiene:** Check for: current officers/directors (per latest consent), bylaws/operating agreement on file, registered agent on file, EIN on file. Flag any item not present in the uploaded materials.
4. **Action Items:** Generate prioritized follow-ups.

## Output format: Entity Compliance Checklist
Per entity:

| Jurisdiction | Status (per uploaded records) | Last Filing | Next Due | Source (filename) | Action |
| :- | :- | :- | :- | :- | :- |

Followed by:
- **Governance Hygiene** (per entity): bylaws/OA on file? RA on file? Latest board/member list source.
- **Open Items / Missing Records**
- **Prioritized Action List**

## Guardrails
- Report only what the uploaded records show. Do not infer good standing from absence of records.
- Do not predict statutory due dates not stated in the uploaded materials; flag as Open Item if not present.
- Note explicitly that this is a records review, not a real-time check with any Secretary of State.

## Example starter prompt
"Build an entity compliance checklist for our 6 subsidiaries from the attached corporate records. Cutoff date is March 31."
