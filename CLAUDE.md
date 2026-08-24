# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This is `ibnsulemanjnr.github.io`, a GitHub Pages user site. The actual Next.js app lives entirely inside `portfolio/` — there is no root `package.json`. Always `cd portfolio` (or use `--prefix portfolio`) before running npm commands.

## Commands

Run from `portfolio/`:

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # static export build -> portfolio/out
npm run lint     # eslint
npm start        # serve the production build (not used for deploy; see below)
```

There is no test suite configured.

## Deployment

`.github/workflows/deploy.yml` builds and deploys on every push to `main`:
1. `npm ci && npm run build` inside `portfolio/`
2. Uploads `portfolio/out` as a Pages artifact and deploys it via `actions/deploy-pages`

The Next.js config (`portfolio/next.config.mjs`) sets `output: "export"`, `images.unoptimized: true`, and `trailingSlash: true` specifically so the static export works on GitHub Pages (no image optimization server, and directory-style URLs need the trailing slash to resolve). Any change that relies on Next.js server features (API routes, image optimization, ISR, middleware) will break the static export — keep the site fully static.

Note: `portfolio/next.config.ts` also exists but is empty/unused boilerplate from `create-next-app`; `next.config.mjs` is the one actually loaded.

## Architecture

Next.js App Router site with content-as-MDX case studies.

- **Routing**: `app/(site)/` is a route group sharing `SiteNav` + `Footer` (`app/(site)/layout.tsx`). `app/layout.tsx` is the root layout — it sets global metadata/OpenGraph defaults from `lib/site.ts` and wraps everything in `ThemeProvider` (next-themes, dark mode via `suppressHydrationWarning`).
- **Site content/config**: `lib/site.ts` holds sitewide constants (name, headline, social links, env-driven URLs) consumed across layouts/pages — update copy here rather than hardcoding it in components.
- **Case studies**: content lives as MDX files with Zod-validated frontmatter in `content/case-studies/*.mdx`. `lib/caseStudies.ts` reads/parses them (`getAllCaseStudies`, `getCaseStudyBySlug`) using `gray-matter` + a `FrontmatterSchema` (title, slug, product, role, stack, tags, links, metrics, cover, featured). Adding a case study means adding an `.mdx` file with matching frontmatter — the schema will throw if a required field is missing.
  - `app/(site)/case-studies/page.tsx` lists them; `app/(site)/case-studies/[slug]/page.tsx` renders one via `generateStaticParams` (required for static export) and the `Mdx` component.
  - `components/mdx/Mdx.tsx` defines the MDX component overrides (headings, links, images, `Gallery`) used by `next-mdx-remote/rsc`. External images render as plain `<img>`; local images under `public/` use `next/image` (unoptimized per the export config).
- **Styling**: Tailwind v4 (`postcss.config.mjs` + `@tailwindcss/postcss`, no separate `tailwind.config.ts` content list needed). CSS variables for theme colors (`rgb(var(--border))`, `rgb(var(--muted))`, etc.) are used directly in class names throughout instead of Tailwind's named palette.
  - There are two globals stylesheets: `app/globals.css` (referenced by `components.json`/shadcn tooling) and `styles/globals.css` (the one actually imported by `app/layout.tsx`). Edit `styles/globals.css` for changes to take effect; be aware of the duplication if shadcn-generated CSS ends up in the wrong file.
- **UI components**: shadcn/ui is configured (`components.json`, style "new-york", icons via `lucide-react`) with aliases `@/components`, `@/components/ui`, `@/lib`, `@/hooks`. Use the shadcn CLI to add primitives rather than hand-rolling them.
- **Assets**: static images live under `public/` (`public/brand`, `public/case-studies/<slug>/`, `public/profile`) and are referenced by MDX/frontmatter with root-relative paths.
