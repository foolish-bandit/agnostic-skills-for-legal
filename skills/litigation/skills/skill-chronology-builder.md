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

## Guardrails
- Record only events supported by the source documents; do not infer or fill in dates, actors, or events that the record does not state.
- Cite a specific source or Bates number for every entry; if a source is missing, flag the entry rather than including it unsupported.
- Distinguish facts from characterizations or argument, and flag conflicting dates or accounts across sources instead of silently choosing one.
- Mark significance designations as preliminary attorney-work-product judgments to be confirmed against the legal theories.
- This is a workflow aid; attorney review is required before the chronology is used in filings, discovery, or strategy.

## Example starter prompt
"Based on the attached emails, build a master chronology of the events leading up to the contract termination."
