# Deployment Guide

Agnostic Skills for Legal is a static project. Once you run the build script, everything you need is in the `public/` directory.

## Prerequisites
Run the build script to generate all assets:
```bash
npm run build
```

## Deployment Options

### 1. GitHub Pages
1.  Ensure your `public/` folder is tracked or use a deployment action.
2.  Go to your repo **Settings -> Pages**.
3.  Set the source to **GitHub Actions** or your main branch's `/public` folder (if you commit the build).

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
