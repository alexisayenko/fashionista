# CLAUDE.md

Fast-path context for Claude Code. Full human-oriented docs:
[docs/](docs/).

## Key principle

> Brand-canonical accuracy first. Get the names, spellings, dates,
> and house lineage right before anything else.

This is an encyclopedia of luxury fashion houses with
AI-generated content. Editorial fidelity beats engineering
elegance — a stylish layout with a misspelled designer name is a
regression. When in doubt, verify against authoritative sources
before writing content. Watch brand spellings carefully:
**Dolce & Gabbana**, **Chanel**, **Prada**, **Armani**.

## Product

Fashionista is a static-site encyclopedia of luxury fashion
houses, hand-authored. Audience: readers interested in luxury
fashion history, design lineage, and house identity. No
monetization; this is a personal project / portfolio piece.

## Tech stack

Astro 6 + TypeScript. Content lives in YAML files
(`src/content/houses/<slug>.yaml`) loaded via Astro content
collections with a Zod schema. Photographs go through Astro's
`<Image>` for optimization; logos and legacy assets are served
verbatim from `public/`. Built static HTML in `dist/` is
gitignored and deployed to GitHub Pages via Actions. Currently
mid-migration: legacy hand-authored `public/houses/*.html` pages
coexist with the Astro `src/pages/houses/[slug].astro` route.

## Repo

[TODO: `[owner/repo](https://github.com/owner/repo)` (private/public).
Auth notes if any (HTTPS, fine-grained PAT, etc.).]

## Where to look for more

- [README.md](README.md) — repo entry point + structure
- [docs/README.md](docs/README.md) — docs subtree map
- [docs/tech/README.md](docs/tech/README.md) — full stack inventory
- [docs/ui-ux/README.md](docs/ui-ux/README.md) — UX/UI conventions
- [docs/business/compliance.md](docs/business/compliance.md) — rights, attribution
