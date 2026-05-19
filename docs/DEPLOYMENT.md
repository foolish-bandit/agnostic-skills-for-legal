# Deployment Guide

Agnostic Skills for Legal is a static project. Running the build script generates the full site — HTML, CSS, JS, and all ZIP bundles — into the `public/` directory.

## Prerequisites

```bash
npm install
npm run build
```

`npm run build` validates every manifest, generates the bundles into `public/bundles/`, and copies the site files from `site/` into `public/`. The Node version is pinned to 20 via `.nvmrc`.

## Recommended: Cloudflare Pages

The project is hosted on Cloudflare Pages, connected directly to this GitHub repository. Cloudflare runs the build fresh on every push, so `public/bundles/` does not need to be committed.

One-time setup:

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Select the `agnostic-skills-for-legal` repository.
3. Configure the build:
   - **Production branch:** `main`
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `public`
4. Deploy.

Every push to `main` then triggers a new production deployment. Pushes to other branches create preview deployments automatically.

Cloudflare Pages serves `.json` with the correct `application/json` MIME type, so the website's fetch of `bundles/index.json` works without extra configuration.

## Alternative: Vercel / Netlify

1. Import the repository.
2. **Build command:** `npm run build`
3. **Output directory:** `public`

## Alternative: any static host

Run `npm run build` locally or in CI, then upload the contents of `public/` to any static host. Ensure the host serves `.json` files with the `application/json` MIME type.

## Note on GitHub Pages

GitHub Pages cannot natively serve from a `/public` subfolder on `main`, and `public/bundles/` is intentionally gitignored. Hosting on GitHub Pages would require a dedicated Actions workflow to build and publish the artifact. The project uses Cloudflare Pages instead, which removes that friction.
