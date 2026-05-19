# Agnostic Skills for Legal

### Legal AI skills for Claude, ChatGPT, and Gemini.

**Agnostic Skills for Legal** is an open-source project that repackages canonical legal AI workflow skills into simple, platform-specific bundles. Designed for legal professionals, it eliminates the need for complex technical setup by providing ready-to-use ZIP files tailored for **Claude Projects**, **ChatGPT Projects**, and **Gemini Notebooks (NotebookLM)**.

---

## 🚀 Quick Start for Users

1.  **Visit the Website:** [Link to your hosted site]
2.  **Select Your Platform:** Choose between Claude, ChatGPT, or Gemini.
3.  **Choose a Practice Area:** Pick the legal domain you are working in (e.g., Commercial, Privacy, Employment).
4.  **Download & Upload:** Download the ZIP file, open the `README-FIRST.md` inside, and follow the simple upload instructions for your chosen AI workspace.

---

## 🏗️ Repository Architecture

This project uses a "Source of Truth" model. Canonical skills are maintained in a platform-neutral format and then automatically packaged into optimized bundles for different AI platforms.

-   **`skills/`**: The canonical source of truth. Each practice area has a `manifest.json`, base instructions, and modular skill/template files.
-   **`platforms/`**: Platform-specific wrapper templates and upload guides.
-   **`scripts/`**: Automation scripts for validation and bundle generation.
-   **`site/`**: Source code for the project website.
-   **`public/`**: The generated output, including ZIP bundles and the static website.

### Platform Packaging Logic
-   **Claude Projects:** Maintains modularity by placing separate skill files into a `knowledge-base/` folder.
-   **ChatGPT & Gemini:** Optimizes for file limits by consolidating multiple skills into a single practice-area skills file.

---

## 👩‍💻 For Maintainers & Contributors

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
npm install
```

### Adding a New Skill
1.  Navigate to the relevant practice area in `skills/[area]/skills/`.
2.  Add your new `.md` skill file.
3.  Update the `manifest.json` in that practice area to include the new file.
4.  Run `npm run build`.

### Adding a New Practice Area
1.  Create a new folder in `skills/`.
2.  Add a `manifest.json`, `instructions.base.md`, and the `skills/` and `templates/` subfolders.
3.  Run `npm run build` to generate the new platform bundles and update the website index.

### Validation & Build
```bash
# Validate all manifests and file references
npm run validate

# Run validation and generate all bundles
npm run build
```

---

## ⚖️ Legal Disclaimer

**NOT LEGAL ADVICE.** Agnostic Skills for Legal is an open-source project providing drafting and workflow aids for legal professionals. It is not a substitute for professional legal advice or judgment. All AI-generated work product **MUST** be reviewed and verified by a qualified attorney.

---

## 📄 Attribution & Licensing

This project is licensed under the **Apache License 2.0**.

It includes adaptations of high-quality legal AI workflows from:
- [Anthropic's `claude-for-legal`](https://github.com/anthropics/claude-for-legal)
- [`claude-for-legal-web` by veronica-builds](https://github.com/veronica-builds/claude-for-legal-web)

**Non-Affiliation:** This project is an independent open-source initiative. It is not officially affiliated with, endorsed by, or sponsored by Anthropic, OpenAI, Google, or the original authors of the adapted works.

See `NOTICE.md` and `docs/ATTRIBUTION.md` for detailed attribution.
