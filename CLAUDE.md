# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Tantri Docs — internal documentation site for the Tantri product suite (POS app, web apps, backend APIs, UI design, auth/access, commit conventions), built with Next.js 15 + Fumadocs. Package manager is **Bun**.

## Commands

```bash
bun install        # install deps (runs postinstall: fumadocs-mdx)
bun run dev         # dev server (next dev --turbo), http://localhost:3000
bun run build       # production build (next build)
bun run start       # serve production build
```

No test suite or lint script configured beyond `eslint-config-next` (no `lint` script in `package.json`).

## Architecture

### Docs are MDX content, not code

All actual documentation lives under `content/docs/**/*.mdx`, organized by `meta.json` files that define page order/titles per folder (root `content/docs/meta.json` lists top-level sections: `fe-mobile`, `fe-web`, `be`, `ui-design`, `commit-guide`, `auth-access`). Each section folder (e.g. `content/docs/fe-mobile/tantri-pos/`) has its own `meta.json` plus `index.mdx` (overview) and topic pages (`guidelines.mdx`, `installation.mdx`, feature-specific pages).

To add/edit docs: edit the `.mdx` files directly and update the relevant `meta.json` if adding/removing/reordering pages. There is no API or build step needed to register new content beyond the MDX file + meta entry — `fumadocs-mdx` (run via `postinstall` and watched by `next dev`) handles indexing.

### Fumadocs wiring

- `source.config.ts` — defines the `docs` collection (frontmatter/meta zod schemas) and MDX plugins (`remarkAutoTypeTable` for TS type tables, `remarkInstall` for install-command blocks)
- `src/lib/source.ts` — loader that turns `content/docs` into the page tree consumed by the UI
- `src/app/docs/[[...slug]]/page.tsx` — renders a single doc page from the source
- `src/app/docs/layout.tsx` — wraps doc pages in Fumadocs' `DocsLayout` using `source.pageTree`
- `src/app/(home)/` — marketing/landing route group, separate from `/docs`
- `src/mdx-components.tsx` — custom MDX component overrides (e.g. `Callout`, `Steps`, `Files` from `fumadocs-ui`) available inside any `.mdx` file without explicit import for some, explicit import for others (check existing pages for the `import { ... } from "fumadocs-ui/components/..."` pattern before adding new component types)
- `src/app/api/search/route.ts` — search API backing the docs search UI

### Content conventions

- Each topic folder typically has: `index.mdx` (Overview), `installation.mdx`, `guidelines.mdx`, plus one `.mdx` per feature/module
- Frontmatter required: `title`, `description`
- Use `<Steps>`/`<Step>` for sequential instructions, `<Files>`/`<Folder>`/`<File>` for directory trees, `<Callout>` for prerequisites/warnings — these are the established patterns across existing pages, prefer them over plain markdown for the same purpose
- Docs should reflect the **current** state of the source codebase they document (e.g. `fe-mobile/tantri-pos` documents `tantri-app-react-native`) — when the underlying app's architecture changes, update the corresponding doc pages rather than leaving them stale
