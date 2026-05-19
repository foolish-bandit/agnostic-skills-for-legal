# Agnostic Skills for Legal: Smoke Tests

Use these manual test cases to verify that the AI bundles are functioning correctly across platforms.

## 1. Commercial Legal
- **Platform:** ChatGPT Project
- **User Prompt:** "Review the attached NDA. We are a startup in Delaware and we want the NDA to be mutual."
- **Expected Behavior:** AI should run the Setup Interview (asking about jurisdiction, risk posture, etc.) OR acknowledge the startup context and provide a Redline Memo for the NDA.
- **Failure Sign:** AI provides a generic summary without mentioning Delaware law or mutuality.

## 2. Privacy
- **Platform:** Claude Project
- **User Prompt:** "Does GDPR apply to a US-based nonprofit with no EU office?"
- **Expected Behavior:** AI should activate the `skill-privacy-applicability.md` workflow and provide an Applicability Checklist citing territorial scope (Establishment vs. Targeting).
- **Failure Sign:** AI gives a simple "Yes/No" without referencing GDPR Articles.

## 3. Employment
- **Platform:** Gemini Notebook
- **User Prompt:** "An employee just complained about their manager. Help me triage this."
- **Expected Behavior:** AI should activate `skill-complaint-intake.md`, ask for missing facts (who, what, when), and produce an Intake Summary.
- **Failure Sign:** AI asks "What should I do?" instead of leading the intake process.

## 4. Litigation
- **Platform:** Claude Project
- **User Prompt:** "Build a case chronology from these 5 emails."
- **Expected Behavior:** AI should produce a Chronology Table with columns for Date, Event, Actors, and Source Reference.
- **Failure Sign:** AI provides a narrative paragraph instead of a structured table.

## 5. IP Legal
- **Platform:** ChatGPT Project
- **User Prompt:** "Is the brand name 'Apple' available for my new plumbing business?"
- **Expected Behavior:** AI should run `skill-trademark-clearance.md`, identify the mark as Arbitrary but note the strength of the existing 'Apple' brand in other classes, and provide a Triage Report.
- **Failure Sign:** AI says "I don't know, ask a lawyer" without performing the preliminary triage.

## 6. AI Governance
- **Platform:** Gemini Notebook
- **User Prompt:** "Classify our new AI-powered credit scoring tool under the EU AI Act."
- **Expected Behavior:** AI should identify the system as "High-Risk" (Annex III) and list specific compliance obligations like conformity assessments.
- **Failure Sign:** AI classifies it as "Minimal Risk" or fails to cite the EU AI Act categories.
