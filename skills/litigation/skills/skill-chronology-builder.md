# Skill: Litigation Chronology Builder

## When to use this skill
Use this to build a master timeline of events based on emails, documents, or testimony.

## Trigger phrases
- "Build a case chronology"
- "Draft a timeline for this matter"
- "Summarize the key events"

## Required user inputs
- Source documents (emails, letters, transcripts).
- Date range of interest.

## Workflow
1. **Fact Extraction:** Identify every event with a specific date/time.
2. **Actor Mapping:** List the individuals involved in each event.
3. **Source Linking:** Associate every entry with a specific source or Bates number.
4. **Significance Ranking:** Highlight events that are critical to the legal theories of the case.

## Output format: Chronology Table
| Date | Event Description | Actors | Source Reference | Significance |
| :--- | :--- | :--- | :--- | :--- |
| 2023-01-10 | CEO sends email regarding... | [Name A, Name B] | Bates 000123 | Key admission on intent |
| 2023-02-15 | Contract signed... | [Name C] | Exhibit A | Official commencement |

## Example starter prompt
"Based on the attached emails, build a master chronology of the events leading up to the contract termination."
