# Agnostic Skills for Legal

> Legal AI skills for Claude, ChatGPT, and Gemini — ready-to-use, no technical setup.

[![License](https://img.shields.io/badge/license-Apache%202.0-0b5394.svg)](LICENSE)
[![Practice areas](https://img.shields.io/badge/practice%20areas-9-0b5394.svg)](#practice-areas)
[![Platform bundles](https://img.shields.io/badge/bundles-27-0b5394.svg)](#what-you-get)
[![Prompt library](https://img.shields.io/badge/standalone%20prompts-79-0b5394.svg)](#prompt-library)
[![Status](https://img.shields.io/badge/status-active-2e7d32.svg)](#)

[![Open the site](https://img.shields.io/badge/Open_the_Site-0b5394?style=for-the-badge)](https://agnostic-skills-for-legal.pages.dev)
&nbsp;
[![Report an issue](https://img.shields.io/badge/Report_an_Issue-5b6066?style=for-the-badge)](https://github.com/foolish-bandit/agnostic-skills-for-legal/issues)

---

**Agnostic Skills for Legal** is an open-source project that repackages canonical legal AI workflow skills into simple, platform-specific bundles. It is built for legal professionals: no command line, no API keys, no plugins — just download a file and upload it to the AI workspace you already use.

Everything produced by these skills is a **drafting and workflow aid for licensed-attorney review** — never legal advice.

---

## What you get

The project ships two ways to use the skills, both available on the [website](https://agnostic-skills-for-legal.pages.dev):

### 1. Project &amp; Notebook packs

Ready-to-upload ZIP bundles, one per practice area, tailored to each platform:

| Platform | What the bundle contains |
| :-- | :-- |
| **Claude Projects** | Project instructions + separate skill files in a `knowledge-base/` folder |
| **ChatGPT Projects** | Project instructions + one consolidated practice-area skills file |
| **Gemini Notebooks** (NotebookLM) | Notebook instructions + separate skill files in a `knowledge-base/` folder |

That is **9 practice areas × 3 platforms = 27 bundles**. Every ZIP includes a `README-FIRST.md` with step-by-step upload instructions and a starter message.

### 2. Individual prompts

A catalog of **79 standalone, copy-paste prompts** across all nine practice areas. Each prompt runs on its own — paste one into a fresh AI chat and it works, with no setup file required. The website's prompt view is searchable and filterable by practice area and task type (Set up, Triage, Review, Draft, Track).

---

## Quick start

**To use a practice-area pack:**

1. Visit **[agnostic-skills-for-legal.pages.dev](https://agnostic-skills-for-legal.pages.dev)**.
2. Choose your platform — Claude, ChatGPT, or Gemini.
3. Choose your practice area.
4. Download the ZIP, open `README-FIRST.md` inside, and follow the upload steps.

**To use a single prompt:**

1. Visit the site and switch to **Individual prompts**.
2. Search or filter to find a workflow, then click **Copy prompt**.
3. Paste it into a new chat in any AI tool and follow the prompts.

---

## Practice areas

| Practice area | Focus |
| :-- | :-- |
| Commercial Legal | Contract review, redlining, and negotiation playbooks |
| Corporate Legal | M&A diligence, closing checklists, board consents, entity compliance |
| Privacy | DPA review, privacy impact assessments, GDPR/CCPA compliance |
| Product Legal | Product launch review, marketing claims, feature risk triage, consumer protection |
| Employment | Employment agreements, termination letters, workplace policies |
| Litigation | Case assessment, discovery drafting, legal research summaries |
| Regulatory Legal | Regulatory updates, policy gap analysis, comment-period tracking, briefings |
| IP Legal | Trademark clearance, patent summaries, IP licensing review |
| AI Governance | AI policy drafting, risk assessment, regulatory compliance (e.g., EU AI Act) |

## Prompt library

The Individual prompts catalog covers all nine practice areas:

| Area | Prompts |
| :-- | --: |
| Litigation | 17 |
| Employment | 11 |
| Corporate | 10 |
| IP | 9 |
| Commercial | 8 |
| AI Governance | 7 |
| Privacy | 6 |
| Regulatory | 6 |
| Product | 5 |
| **Total** | **79** |

---

## Repository architecture

This project uses a "source of truth" model: canonical content is maintained in a platform-neutral format and automatically packaged into optimized outputs.

| Directory | Purpose |
| :-- | :-- |
| `skills/` | Canonical practice areas. Each has a `manifest.json`, base instructions, and modular skill/template files. |
| `prompts/` | Canonical standalone prompts. Each area has a `manifest.json` and one Markdown file per prompt. |
| `platforms/` | Platform-specific instruction wrappers and `README-FIRST.md` upload guides. |
| `scripts/` | Validation and build automation (TypeScript). |
| `site/` | Source for the static website. |
| `public/` | Generated output — ZIP bundles, the prompt catalog, and the static site. |
| `docs/` | Attribution, deployment, and smoke-test documentation. |

### Platform packaging logic

- **Claude Projects & Gemini Notebooks** — keep modularity by placing separate skill files in a `knowledge-base/` folder.
- **ChatGPT Projects** — consolidate the skills into a single practice-area file to stay within file limits.

---

## For maintainers &amp; contributors

### Prerequisites

- Node.js v18+ (the build pins Node 20 via `.nvmrc`)
- npm

### Installation

```bash
npm install
```

### Add a skill to an existing practice area

1. Add a new `.md` skill file under `skills/<area>/skills/`.
2. Reference it in that area's `manifest.json`.
3. Run `npm run build`.

### Add a new practice area

1. Create `skills/<area>/` with a `manifest.json`, `instructions.base.md`, and `skills/` and `templates/` subfolders.
2. Run `npm run build` — bundles and the website index regenerate automatically.

### Add standalone prompts

1. Create `prompts/<area>/` with a `manifest.json` and one Markdown file per prompt.
2. Run `npm run build` — the prompt catalog and website regenerate automatically.

### Validate &amp; build

```bash
npm run validate   # check every manifest and referenced file
npm run build      # validate, generate all bundles + the prompt catalog, assemble the site
```

### Deployment

The site is hosted on **Cloudflare Pages**, which builds from this repository on every push to `main` (build command `npm run build`, output directory `public`). See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for full details and alternative hosts.

---

## Legal disclaimer

**NOT LEGAL ADVICE.** Agnostic Skills for Legal provides drafting and workflow aids for legal professionals. It is not a substitute for professional legal advice or judgment. All AI-generated work product **must** be reviewed and verified by a qualified attorney before it is relied upon.

---

## Attribution &amp; licensing

Licensed under the **Apache License 2.0** — see [`LICENSE`](LICENSE).

This project includes adaptations of legal AI workflows from:

- [Anthropic's `claude-for-legal`](https://github.com/anthropics/claude-for-legal)
- [`claude-for-legal-web` by veronica-builds](https://github.com/veronica-builds/claude-for-legal-web)

**Non-affiliation:** This is an independent open-source initiative. It is not affiliated with, endorsed by, or sponsored by Anthropic, OpenAI, Google, or the authors of the adapted works. Platform names are used for descriptive compatibility only.

See [`NOTICE.md`](NOTICE.md) and [`docs/ATTRIBUTION.md`](docs/ATTRIBUTION.md) for detailed attribution.
