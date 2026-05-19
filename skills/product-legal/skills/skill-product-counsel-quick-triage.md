# Skill: Product Counsel Quick-Question Triage

## When to use this skill
Use this when a PM, designer, or engineer drops a quick question to product counsel and you need a fast structured answer that ends in either a self-serve recommendation or a clear ask for a formal review.

## Trigger phrases
- "Quick question for product counsel"
- "Quick triage"
- "Can we just..."

## Required user inputs
- The question (in their own words).
- Any uploaded context (screenshots, PRD excerpt, copy).
- Whether this is blocking a near-term launch.

## Workflow
1. **Restate the Ask:** Restate what they're trying to do in one sentence.
2. **Identify the Hidden Decision:** State the actual legal decision underneath (e.g., "Can we show this banner before consent?" → consent + UI prominence question).
3. **Resolve or Route:** Pick one path:
   - **Self-serve guidance:** A short pattern-based answer with a known internal precedent or policy reference (citing uploaded materials).
   - **Light review:** Ask 2-3 specific follow-up questions and offer to run a deeper skill (e.g., Feature Risk Triage).
   - **Formal review needed:** State that this needs a Product Launch Legal Review and list the materials required.
4. **Action:** Give the requester the next concrete step.

## Output format
1. **Restated Question**
2. **Hidden Decision**
3. **Path** (Self-serve / Light review / Formal review)
4. **Response** (2-6 bullet points, source-cited if uploaded materials exist)
5. **Next Step for Requester**

## Guardrails
- Do not give a definitive "yes/no" on novel or high-stakes questions; route to formal review.
- If the question involves minors, health, finance, biometrics, or AI outputs presented as fact, default to formal review.
- Cite any internal precedent only if the user uploaded it.

## Example starter prompt
"Quick question: can we A/B test removing the 'cancel anytime' line on the pricing page? Subscription product, US."
