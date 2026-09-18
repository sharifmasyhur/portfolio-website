# Sharif Masyhur — Portfolio 2.0

Rebuilt from Create React App to **Vite + React + TypeScript + Tailwind v4**.

## Status: Stage 5 — all sections complete (About, Selected Work, Experience,
Education, Contact). QA pass done: no placeholder text remains, all nav
anchors verified against real section ids, all outbound links verified
against original source data, signature intro/session behavior confirmed
unchanged since Stage 2, responsive behavior checked at desktop (1440px)
and mobile (375px) via a real headless-Chromium render.

`src/App.tsx` now renders the real homepage shell: the signature loading
intro, the navbar, the hero, and placeholder anchors for the sections built
in Stages 3-5 (each one clearly labeled as a placeholder, not final copy).

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
  main.tsx                     Entry point
  App.tsx                      Homepage shell: intro + navbar + hero + placeholders
  hooks/
    usePrefersReducedMotion.ts Live-updating reduced-motion detection
    useActiveSection.ts        IntersectionObserver-based nav active-state
  data/
    nav.ts                     Single source of truth for section ids/labels
  components/
    SignatureIntro.tsx         The loading intro (see "Signature intro" below)
    Navbar.tsx                 Sticky nav, scroll-spy active state, mobile menu
    Hero.tsx                   Name, primary identity, one positioning sentence, CTAs
    PlaceholderSection.tsx     STAGE 2 SCAFFOLD ONLY — replaced in Stages 3-5
    ui/                        Primitives: Container, Section, SectionHeading,
                                Button, Tag, Divider
  styles/
    tokens.css                All design tokens (Tailwind v4 @theme block)
    index.css                 Global stylesheet entry
public/
  favicon.svg
  assets/
    signature/                Loading-animation assets (see NOTES.md there)
```

## Signature intro

- Plays once per browser session (`sessionStorage`), not on every reload/section
  navigation.
- Real playback ~1.46s, then a 300ms hold, then a 450ms fade — total ~2.2s,
  matching the "brief personal introduction" brief.
- Never gates the homepage: the homepage is mounted and ready underneath the
  overlay from the very first render; the overlay's fade-out is the reveal.
- Skippable via click or any keypress at any point during playback.
- `prefers-reduced-motion`: shows a static final-frame image with only an
  opacity fade, no drawing animation, live-reactive if the OS setting changes
  mid-session.
- Background: the GIF's original white background was mathematically
  recomposited onto the site's ivory token (`#FAF8F4`) — not a flat color
  swap, a proper per-pixel alpha re-blend, so anti-aliased stroke edges don't
  fringe. Full detail and verification notes in
  `public/assets/signature/NOTES.md`.

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
