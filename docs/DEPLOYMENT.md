# Deployment Guide

Agnostic Skills for Legal is a static project. Once you run the build script, everything you need is in the `public/` directory.

## Prerequisites
Run the build script to generate all assets:
```bash
npm run build
```

## Deployment Options

### 1. GitHub Pages

This repo ships a workflow at `.github/workflows/deploy-pages.yml` that builds the site and publishes `public/` on every push to `main`.

One-time setup:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

After that, every push to `main` triggers `Deploy site to GitHub Pages`, which runs `npm ci && npm run build` and uploads `public/` (including freshly generated `public/bundles/`) as the Pages artifact.

> Note: GitHub Pages cannot natively serve from `/public/` on `main`. Without the workflow (or without setting the source to "GitHub Actions"), Pages falls back to the repo root and renders `README.md` as the landing page.

### 2. Cloudflare Pages
1.  Connect your GitHub repository to Cloudflare Pages.
2.  **Build command:** `npm run build`
3.  **Build output directory:** `public`

### 3. Vercel / Netlify
1.  Import your repository.
2.  Set the **Build Command** to `npm run build`.
3.  Set the **Output Directory** to `public`.

## Static Hosting Note
The website relies on fetching `bundles/index.json`. Ensure your hosting provider serves JSON files with the correct `application/json` MIME type.
