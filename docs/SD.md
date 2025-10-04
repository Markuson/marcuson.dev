# System Design

- **Goal:** maximal performance + strict type safety.
- **Rendering:** **Astro 5 SSG-only**. React islands only where interaction is required. \[R-001–R-003, R-009, R-010]
- **Styling:** **Tailwind CSS as the only CSS layer. No custom CSS files** beyond a tiny global for focus ring reset if needed. \[R-010]
- **Content:** Astro Content Collections (Markdown + Zod). Build-only. \[R-013]
- **i18n:** language-prefixed routes `/en|es|ca`. Edge redirect at `/` via `Accept-Language`. \[R-011]
- **Assets:** CV `/assets/cv/marcuson.pdf`; hero background SVG. \[R-014, R-002]
- **Hosting:** Vercel static adapter + Edge Middleware. Immutable caching. \[R-017]
- **A11y + perf:** focus-visible, high contrast, lazy images, minimal DOM. \[R-004, R-015]
- **Deferred:** GA4 and Playwright e2e. \[R-016]

# Architecture pattern

- **Content-driven SSG** + **Islands** with strict JS budget.
- **Perf budget:** HTML ≤ 50 KB gz. Home JS ≤ 35 KB gz. LCP ≤ 1.5 s desktop / 2.5 s mobile. CLS < 0.02. TBT ≈ 0. \[R-015]
- **Components:** Pure Astro by default. Promote to island only for NavBar, ThemeToggle, LanguageSelector, tooltips. \[R-001–R-003]

# State management

- Local state only inside islands. No global store. No client router.
- Hooks: passive scroll + `requestAnimationFrame` for nav reveal; `prefers-color-scheme` for theme; URL prefix for language override. \[R-019, R-020, R-011]

# Data flow

- **Build-time:** Collections parsed and type-checked. Pages emitted per locale. Tailwind JIT purges unused classes at build. \[R-013, R-010]
- **Runtime:** No data fetching. Link navigations and `mailto:` only. \[R-006–R-007]
- **Edge:** Accept-Language negotiation then cacheable redirect to `/{lang}/`. \[R-011]

# Technical Stack

- **Framework:** Astro 5 + **TypeScript strict**. \[R-013, R-017]
- **CSS:** **Tailwind only**.
  - Preflight enabled.
  - Design tokens in `tailwind.config` (accent Lime `#84CC16`, radius, shadows).
  - Content paths `./src/**/*.{astro,tsx,ts,md}` for maximal purge.
  - No heavy plugins; avoid `@tailwindcss/typography` unless needed.
  - Critical CSS auto-inlined by Astro; remaining CSS is a single purged file. \[R-010, R-015]

- **Islands:** React 18 for Nav/Theme/Language/Tooltips. Icons as inline SVG. \[R-002, R-019, R-020, R-011]
- **Fonts:** Manrope WOFF2 subsets. `font-display: swap`. Preload minimal weights. \[R-010]
- **Images:** Astro `<Image />` AVIF/WebP with width hints. \[R-015]
- **Tooling:** ESLint + `@typescript-eslint` strict, Prettier. Lighthouse CI budgets. \[R-015]

# Strict TypeScript configuration

- `tsconfig` extends `astro/tsconfigs/strict` and enables: `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`, `useUnknownInCatchVariables`, `verbatimModuleSyntax`.
- Zod → types with `z.infer<>`. No `any`. Props typed exactly. Build guard: `tsc --noEmit` in CI.

# Authentication Process

- None. `mailto:` only. \[R-007]

# Route Design

- `/{lang}/` — Landing (Hero + previews). \[R-001–R-009]
- `/{lang}/about` — About. \[R-005]
- `/{lang}/projects` — Grid. \[R-006]
- `/{lang}/hobbies` — Grid. \[R-008]
- `/{lang}/contact` — Contact. \[R-007]
- `/assets/cv/marcuson.pdf` — CV. \[R-014]
- `/sitemap.xml`, `/robots.txt`, `/{lang}/404`. \[R-012]
- Redirects: `/` → `/{bestLang}/`; `www` → root. \[R-011, R-017]

# API Design

- None.
- **Edge Middleware:** read `Accept-Language`, choose `ca` > `es` > `en`, 307 redirect, cache 1 day. \[R-011]
- Optional `/api/og` deferred. \[R-012]

# Database Design ERD

- No DB. Files only. \[R-013]
- Schemas:
  - `about.{lang}.md`: `title`, `subtitle`, `skills{}`, `experience[]`, `philosophy`. \[R-005]
  - `projects/*.{lang}.md`: `title`, `category`, `status`, `description`, `tech[]`, `codeUrl?`, `demoUrl?`, `featured`. \[R-006]
  - `hobbies/*.{lang}.md`: `title`, `intro`, `highlights[]`, `tools[]`. \[R-008]
  - `i18n/{lang}.json`: nav, hero, sections, contact, status. \[R-001–R-003, R-007, R-011]

# Tailwind performance tactics

- **Utility-first only:** avoid component CSS and `@apply` except for rare global patterns.
- **No extra plugins** by default.
- **Purge-first mindset:** tight `content` globs and no dynamic class names that block purge.
- **Minimal layers:** rely on utilities; keep custom classes out of templates.
- **Critical path:** above-the-fold utilities in markup ensure tiny critical CSS.
- **Motion:** rely on Tailwind’s utility transitions only. Respect `prefers-reduced-motion`. \[R-003]
- **Glass nav:** single backdrop blur utility. GPU-friendly transforms. \[R-019]

# Performance tactics

- Zero-JS by default. Islands only where needed. \[R-002, R-019, R-020, R-011]
- Code-splitting per island.
- Fonts self-hosted and subset.
- Images responsive and lazy. SVG hero.
- Hover prefetch for internal links on desktop.
- Caching: hashed assets `immutable`, HTML `must-revalidate`. Brotli.
- No CLS: reserve heights and use aspect ratios.
- Budgets enforced in CI via Lighthouse.

# Security & privacy

- `rel="noopener"` on external links. \[R-003, R-018]
- **CSP (no third-parties yet):**

  ```
  default-src 'self';
  img-src 'self' data:;
  script-src 'self';
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  connect-src 'self';
  ```

  Relax only if GA is added later. \[R-018, R-016]

# Testing and phases

- **Now:** Type-check, ESLint, Lighthouse CI with budgets.
- **Phase 2:** GA4 + Playwright e2e for nav fade-in, i18n redirects, keyboard order, focus traps, CTAs.
