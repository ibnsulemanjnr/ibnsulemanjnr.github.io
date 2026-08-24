# Portfolio

Personal portfolio site for Abubakar Sadiq Suleman, Founder/CEO of [IBNSULEMAN TECH LTD](https://www.ibnsulemantech.com). Built with Next.js (App Router), Tailwind CSS v4, and MDX-based case studies, statically exported and deployed to GitHub Pages.

## Stack

- **Next.js 16** (App Router, static export — `output: "export"` in `next.config.mjs`)
- **React 19**, **TypeScript**, **Tailwind CSS v4**
- **MDX** case studies (`next-mdx-remote`) with Zod-validated frontmatter (`lib/caseStudies.ts`)
- **next-themes** for light/dark mode

Because the site is a static export for GitHub Pages, there is no Next.js server: no API routes, no on-demand image optimization (`images.unoptimized: true`), no ISR.

## Development

```bash
npm install
npm run dev          # start dev server at http://localhost:3000
```

## Scripts

```bash
npm run build          # static export -> out/
npm run start           # serve the last production build (Next server, not used for deploy)
npm run lint             # eslint
npm run typecheck  # tsc --noEmit
npm run format          # prettier --write .
npm run format:check # prettier --check .
```

## Environment variables

Copy `.env.local` and set as needed:

- `NEXT_PUBLIC_SITE_URL` — canonical site URL, used for metadata/sitemap
- `NEXT_PUBLIC_COMPANY_URL` — link to https://www.ibnsulemantech.com
- `NEXT_PUBLIC_DEMO_VIDEO_URL` — YouTube/Loom URL for the homepage demo embed (optional)
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — Formspree form endpoint for the contact page

## Content

Case studies live as MDX files in `content/case-studies/*.mdx` with frontmatter validated against a Zod schema in `lib/caseStudies.ts`. Add a new case study by dropping in a new `.mdx` file with the required frontmatter fields.

## Deployment

`.github/workflows/deploy.yml` builds and deploys `out/` to GitHub Pages on every push to `main` (lint + typecheck run first; a failing build no longer deploys silently).
