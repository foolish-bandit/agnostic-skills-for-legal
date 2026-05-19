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

## 7. Corporate Legal
- **Platform:** Claude Project
- **Bundle:** Corporate Legal (`corporate-legal.zip`)
- **User Prompt:** "Run an M&A diligence review on the uploaded data room. We are buy-side in a stock purchase of a Delaware SaaS target. Focus on change-of-control, IP assignment, and material customer contracts."
- **Expected Behavior:** AI activates `skill-ma-diligence-review.md`, restates transaction scope, lists documents reviewed by filename, and produces a Diligence Issue Table containing exact quotes for change-of-control and assignment clauses, followed by a Top 5 Deal-Affecting Issues list and an Open Items / Missing Documents section.
- **Failure Signs:** AI returns a prose narrative instead of the issue table; paraphrases change-of-control language instead of quoting it; declares the data room "clean" without listing categories or documents not provided; omits Open Items.

## 8. Product Legal
- **Platform:** ChatGPT Project
- **Bundle:** Product Legal (`product-legal.zip`)
- **User Prompt:** "Review the attached landing page copy and the 3 substantiation studies. Flag every claim that lacks substantiation or needs a disclosure. US consumer launch."
- **Expected Behavior:** AI activates `skill-marketing-claims-review.md` and produces a Marketing Claims Substantiation Chart with each claim extracted as an exact quote, classified by type, mapped to substantiation in the uploaded studies (Y/N + filename), and ending with a High-Risk Claims list and recommended disclosure text.
- **Failure Signs:** AI paraphrases claims instead of quoting; states a claim is "substantiated" rather than reporting whether substantiation was provided in the uploaded materials; misses superlative or comparative claims; omits disclosures for high-risk patterns.

## 9. Regulatory Legal
- **Platform:** Gemini Notebook
- **Bundle:** Regulatory Legal (`regulatory-legal.zip`)
- **User Prompt:** "Run a regulation-to-policy gap analysis between the obligations in the attached final rule and our attached internal AML policy v3.2."
- **Expected Behavior:** AI activates `skill-regulation-to-policy-gap.md` and produces a Policy Gap Table with exact quotes from both the rule and the internal policy, a Covered / Partial / Not Covered / Conflict status for each obligation, a Summary by Status, a Top Gaps list, and an Open Items section.
- **Failure Signs:** AI marks items "Covered" without quoting internal text; merges or paraphrases obligations; asserts non-compliance in fact rather than reporting documentary gaps; ignores the uploaded internal policy.
