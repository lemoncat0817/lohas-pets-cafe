# Repository Guidelines

This file guides AI coding agents (and humans) working in this repository.

## Project overview

LOHAS Pets Café (樂活寵物咖啡廳) — a marketing/brochure site for a fictional
pet-friendly café, built with Nuxt 4 and statically generated (SSG) for
GitHub Pages. There is no backend: the site is pure content plus two forms
that POST directly to Web3Forms from the browser. All user-facing copy is
Traditional Chinese (zh-TW).

## Commands

Requires Node.js 22+ and pnpm (`packageManager` is pinned to pnpm@9.3.0).

```sh
pnpm install      # install deps (also runs `nuxt prepare` via postinstall)
pnpm dev          # dev server
pnpm build        # SSR-capable build (rarely used — this site targets generate)
pnpm generate     # static generate to .output/public (the real deploy artifact)
pnpm preview      # serve the generated static output locally
pnpm lint         # eslint . (flat config, uses @nuxt/eslint's generated config)
```

There is no test suite/framework configured — don't invent test commands.

To reproduce the GitHub Pages build locally (subpath base URL, see below):

```sh
GITHUB_REPOSITORY=owner/repo DEPLOY_TARGET=github-pages pnpm generate   # sh
$env:GITHUB_REPOSITORY='owner/repo'; $env:DEPLOY_TARGET='github-pages'; pnpm generate   # PowerShell
```

CI (`.github/workflows/deploy.yml`) runs `pnpm generate` with
`DEPLOY_TARGET=github-pages` on every push to `main` and deploys
`.output/public` to GitHub Pages via `actions/deploy-pages`.

## Architecture

**Nuxt 4 directory structure** (`future.compatibilityVersion: 4`): app code
lives under `app/`, not the repo root — `app/pages`, `app/layouts`,
`app/components`, `app/composables`, `app/data`, `app/assets`. Components
under `app/components` are auto-imported flat (`pathPrefix: false` in
`nuxt.config.ts`), i.e. `app/components/sections/Hero.vue` is used as
`<Hero />`, not `<SectionsHero />`.

**Pages are static content pages**, one per top-level nav item (`/`,
`/about`, `/menu`, `/reservation`, `/pets`, `/shop`, `/gallery`, `/faq`,
`/contact`). `nitro.prerender.routes` in `nuxt.config.ts` lists all of them
explicitly (`crawlLinks: true` is also on, but the list guards prerendering
even if the crawler misses a link). Adding a new page means adding it there
too, or it may not get generated.

**Content lives in `app/data/*.ts`, not in page templates or a CMS.** Menu
items, pets, products, testimonials, FAQ entries, and shared site info
(`site.ts`: nav links, hours, address, social, the Web3Forms access key) are
all plain typed TS objects/arrays. Pages and section components import from
`@/data/*` and `v-for` over the arrays. When asked to add/edit content
(a menu item, a pet, a testimonial, business hours), edit the relevant
`app/data/*.ts` file — don't hardcode it into a `.vue` template.

**UI components are shadcn-vue, vendored into the repo** at
`app/components/ui/*` (see `components.json`: style `reka-mira`, base color
`neutral`, built on Reka UI). These are project source files, not a node
dependency — edit them directly like any other component when a change is
needed, but prefer adding new shadcn-vue components via `pnpm dlx shadcn-vue
add <name>` (writes to the same `componentDir`) rather than hand-rolling
Reka UI wiring from scratch. `app/components/layout/*` (header/footer/logo/
theme toggle), `app/components/sections/*` (page-specific content blocks),
and `app/components/shared/*` (generic `PageHero`, `SectionHeading`) sit on
top of the `ui/` primitives.

**Styling is Tailwind CSS v4**, configured entirely in
`app/assets/css/tailwind.css` via `@theme inline` + CSS custom properties
(no `tailwind.config.js` — v4 style). Design tokens (`--primary`,
`--background`, etc.) are defined once under `:root` and re-defined under
`.dark` for dark mode; component classes reference the Tailwind color
utilities (`bg-primary`, `text-muted-foreground`, …) that alias to those
tokens, never raw hex values. `container-cafe` is the shared page-width
utility class. Dark mode is class-based via `@nuxtjs/color-mode`
(`classSuffix: ''`, so the class is `.dark`, and it also syncs the native
`color-scheme` CSS property — see the `html.dark` rule).

**Forms (`/reservation`, `/contact`) share one pattern**: vee-validate +
`@vee-validate/zod` for schema validation, and the `useWeb3Form()` composable
(`app/composables/useWeb3Form.ts`) for submission — it POSTs to Web3Forms
(`https://api.web3forms.com/submit`) with the access key from
`WEB3FORMS_ACCESS_KEY` in `app/data/site.ts` (currently a placeholder the
site owner must replace). There is no backend/API route involved. Follow the
existing `reservation.vue` pattern (zod schema with `superRefine` for
cross-field date/time/business-hours checks, a honeypot `botcheck` field,
`useForm().handleSubmit()` wrapping `submit()`) when touching either form.

**GitHub Pages base path is derived at build time, not hardcoded.**
`nuxt.config.ts` reads `GITHUB_REPOSITORY` (auto-injected by GitHub Actions)
to compute `app.baseURL` as `/<repo-name>/` only when `DEPLOY_TARGET=github-
pages`; local dev/preview always uses `/`. This means the repo can be
renamed or forked without touching config — don't reintroduce a hardcoded
base path.

**SEO/structured data is centralized in `nuxt.config.ts`** via
`@nuxtjs/seo` (`site`, `schemaOrg`, `sitemap`, `robots` keys) plus per-page
`useSeoMeta()` calls. `schemaOrg.identity` is a plain object (not the
`defineLocalBusiness()` helper — that helper lives in a transitive dep pnpm
doesn't hoist, see the comment in `nuxt.config.ts`). `robots.txt` is
disabled on GitHub Pages on purpose (the site lives under a `/<repo>/`
subpath, where a root-level `robots.txt` would never be found by crawlers);
`sitemap.xml` still generates normally.

**Path aliases** (from `components.json` / Nuxt defaults): `@/components`,
`@/components/ui`, `@/lib`, `@/composables`, `@/data` all resolve into
`app/`. Prefer these over relative `../../` imports, matching existing code.

## Conventions

- ESLint config is `@nuxt/eslint`'s generated flat config
  (`.nuxt/eslint.config.mjs`, stylistic rules on) — run `pnpm lint` before
  finishing a change; don't hand-roll a separate Prettier/ESLint setup.
- TypeScript is `strict: true` — avoid `any` and unchecked casts.
- Respect `prefers-reduced-motion`: the codebase already guards animations
  globally (see the media query in `tailwind.css`) and per-effect (e.g.
  `useScrollReveal`, the hero video). New motion/transition work should
  follow the same pattern rather than adding an unguarded animation.
