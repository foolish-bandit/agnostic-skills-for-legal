# Skill: Launch Readiness Checklist

## When to use this skill
Use this to produce a launch readiness checklist (legal dimension) for a specific product or feature, derived from the uploaded PRD, mocks, marketing, and terms drafts. This is the manual equivalent of a launch watcher: the user uploads the source materials and you produce the checklist.

## Trigger phrases
- "Launch readiness checklist"
- "Build a legal launch checklist"
- "Are we launch-ready?"

## Required user inputs
- Uploaded PRD / spec.
- Uploaded marketing copy and mocks.
- Uploaded draft terms/policy updates (if any).
- Target launch date and markets.
- User population.

## Workflow
1. **Scope Snapshot:** Restate product, date, markets, materials reviewed.
2. **Checklist Generation:** Walk each readiness domain and list the discrete deliverables required for a launch sign-off, with a status derived from uploaded materials (Done / In Progress / Not Started / Not Provided).
   - Privacy: DPIA/PIA, Privacy Policy update, consent UX, processor agreements, data flow diagram.
   - Marketing: claims substantiation, comparative review, disclosure copy, influencer disclosures.
   - Terms & Policies: ToS update, AUP update, in-product notice, version bump and effective date.
   - Consumer protection: pricing display, auto-renew disclosure, cancellation flow, refund language.
   - IP: third-party content licensing, open source review, trademark clearance.
   - Sector-specific (if applicable): minors, health, finance, AI disclosures.
3. **Gating Items:** Identify items whose status would block launch sign-off.
4. **Cross-Functional Owners:** Suggest owners for each open item.

## Output format
1. **Snapshot**
2. **Readiness Checklist**

| Domain | Item | Required Artifact | Status | Source (filename) | Owner | Notes |
| :- | :- | :- | :- | :- | :- | :- |

3. **Blocking Items (Gates)**
4. **Open Items / Materials Not Provided**
5. **Recommended Final Reviews** (e.g., run Marketing Claims Review, Product Launch Review)

## Guardrails
- Status reflects what the uploaded materials show, not external systems.
- Mark anything not in the uploaded materials as "Not Provided," not "Not Started."
- Do not declare launch readiness; this is a checklist, not a sign-off.

## Example starter prompt
"Build a launch readiness checklist from the attached PRD, mocks, marketing one-pager, and draft ToS update. Launch in US + EU in 4 weeks."
