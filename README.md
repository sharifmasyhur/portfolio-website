# Sharif Masyhur — Portfolio 2.0

Rebuilt from Create React App to **Vite + React + TypeScript + Tailwind v4**.

## Status: Stage 1 — Foundation

This checkpoint contains project scaffolding, design tokens, and UI
primitives only. `src/App.tsx` is a temporary design-system preview page,
not the homepage — it will be replaced in Stage 2.

## Getting started

```bash
npm install
npm run dev
```

> **Note:** this project was authored in a sandboxed environment without
> network access, so `npm install` has not actually been run against it here.
> Every config file (package.json, vite.config.ts, tsconfig*.json,
> eslint.config.js) was hand-written against current documented APIs for
> these exact dependency versions, but you should treat the very first
> `npm install && npm run dev` on your machine as the real first test —
> please flag anything that doesn't come up cleanly.

## Structure

```
src/
  main.tsx              Entry point
  App.tsx               STAGE 1 ONLY — design system preview (replaced in Stage 2)
  styles/
    tokens.css           All design tokens (Tailwind v4 @theme block)
    index.css            Global stylesheet entry
  components/
    ui/                  Primitives: Container, Section, SectionHeading,
                          Button, Tag, Divider
public/
  favicon.svg
  assets/
    signature/           Loading-animation GIF assets (see NOTES.md there)
```

## Post-delivery fixes

Two issues surfaced when actually running this on a real machine (this
sandbox can't run `npm install`, so these weren't caught before delivery):

1. Old CRA files (`src/App.js`, `public/index.html`, etc.) were still present
   from the original project and conflicted with the new Vite files — fixed
   by deleting the CRA leftovers (not a bug in the new code, but worth
   recording since it's an easy trap when migrating in place).
2. `vite.config.ts` was missing a `resolve.alias` for `@/*`. The same alias
   was correctly set in `tsconfig.app.json`, but TypeScript's `paths` only
   affects type-checking/editor resolution — Vite's dev server needs its
   own, separate alias config to resolve `@/...` imports at runtime. Fixed,
   plus added `@types/node` since the alias fix uses `node:url`.

## Key decisions made in this stage

- **Vite over CRA**: CRA/`react-scripts` is unmaintained; Vite matches the
  toolchain already used in the NAClinic project and gives a proper
  Tailwind build instead of the previous Play-CDN setup.
- **TypeScript**: added for maintainability or a personal-brand site meant
  to last; low cost at this scale, consistent with the Olympiaza project.
- **Tailwind v4** (CSS-first `@theme`, via `@tailwindcss/vite`): design
  tokens live in one CSS file (`src/styles/tokens.css`) instead of a
  separate `tailwind.config.js`, and Tailwind reads them directly to
  generate utilities like `bg-paper`, `text-indigo`, etc.
- **No dark mode** for now — the ivory/indigo/terracotta palette is treated
  as the site's singular identity rather than something that needs a
  parallel dark variant. Easy to add later if wanted.
- Removed: the CRA `react-scripts` toolchain, the Tailwind Play CDN
  `<script>` tag, the orphaned root-level `portfolio.js` draft, and the
  unedited CRA `manifest.json`/PWA icons.
