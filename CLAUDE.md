# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server at localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview the built output locally
npx astro check  # type-check .astro files
```

Requires Node >= 22.12.0 (Astro 6 constraint).

There are no tests.

## Architecture

This is a static Astro 6 site with no framework integrations (no React, Vue, etc.) and no shared components — each page is a self-contained `.astro` file with its styles inlined in a `<style>` block.

**Content collections** (`src/content.config.ts`) define two collections loaded via glob:

- `diary` — Markdown files in `src/content/diary/`, schema: `title`, `date` (coerced), `tags[]`
- `revision` — Markdown files in `src/content/revision/`, schema: `title`, `subject`, `tags[]`

**Routing:**

- `src/pages/index.astro` — homepage; fetches both collections, sorts diary by date, renders card lists
- `src/pages/diary/[id].astro` — dynamic route; one page per diary entry (id = filename without extension)
- `src/pages/revision/[id].astro` — dynamic route; one page per revision entry
- `src/pages/guide.astro` — static page explaining how to edit content; includes a client-side Markdown preview (`<script>` tag with custom `parseMarkdown` + `inline` functions)
- `public/game/index.html` — self-contained Three.js FPS game (no build step, served as-is)

**Adding content** requires only a new `.md` file in the appropriate `src/content/` subdirectory — no code changes needed. Astro's glob loader picks it up automatically.

## Design system

Dark terminal aesthetic used consistently across all pages:

- Background: `#0d0d0d`, body text: `#c8c8c8`, accent green: `#00ff88`
- Fonts: Georgia (body copy), monospace (labels, metadata, code)
- Card borders: `#1a3d2a`; hover state adds green border + `#0b1e0f` background

## Deployment

Multi-stage Docker build (`Dockerfile`): Node 22 Alpine builds the Astro site, then the `dist/` output is served by nginx Alpine using `nginx.conf`. Deployed via Coolify, which watches the GitHub repo and redeploys automatically on every push to `main`.
