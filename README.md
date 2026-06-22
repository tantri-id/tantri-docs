# Tantri Docs

Internal documentation site for the Tantri product suite (POS app, web apps, backend APIs, UI design, auth/access, commit conventions). Built with Next.js 15 + [Fumadocs](https://fumadocs.vercel.app). Package manager: **Bun**.

## Setup

```bash
bun install
```

## Development

```bash
bun run dev
```

Binds to `0.0.0.0` (LAN-accessible). Open http://localhost:3000 to see the result.

## Build & Production

```bash
bun run build
bun run start
```

## Adding/Editing Docs

Content lives under `content/docs/**/*.mdx`. Each section folder has its own `meta.json` (page order/titles) plus `index.mdx` and topic pages. Edit `.mdx` directly; update `meta.json` when adding/removing/reordering pages — no extra registration step needed.

See [CLAUDE.md](CLAUDE.md) for architecture details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs
