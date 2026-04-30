# Folder structure

This document describes how files are organized in the **Fashionista**
repo. Today it contains one product, delivered on one surface:

- **Encyclopedia** — a hand-authored guide to luxury fashion houses,
  hosted as a static website on GitHub Pages.

A *product* is what the user is using. A *surface* is how it reaches
them. Both are currently singular; the layout below stays small but
follows the conventions we'd apply if a second product or surface
arrives, so promotion is a move, not a rename.

## Current top-level layout

Folders sort first (alphabetically), then files — VS Code default.

```text
fashionista/
├── public/                          # static assets served verbatim (copied to dist/ at build)
│   ├── assets/                      # logos, wordmarks, legacy photographs (no Astro processing)
│   ├── houses/                      # legacy hand-authored house pages (e.g. armani.html)
│   ├── index.html                   # site entry point (legacy hand-authored)
│   └── styles.css                   # all styling
├── specs/                           # internal specifications and source notes; not deployed
│   ├── chatgpt-sessions/            # research conversations / source notes
│   ├── compliances.md               # rights, attribution, ethics
│   ├── technological-stack.md       # what we use and why
│   └── ui-ux.md                     # UX/UI conventions
├── src/                             # Astro source: pages, layouts, content data, photographs
│   ├── assets/houses/<slug>/        # per-house photographs, optimized through Astro's <Image>
│   ├── content/houses/              # one .yaml per house — the data backing each page
│   ├── layouts/                     # shared templates (HouseLayout.astro)
│   ├── pages/                       # file-based routing (houses/[slug].astro)
│   └── content.config.ts            # Zod schema + YAML loader for content collections
├── astro.config.mjs                 # Astro build config
├── CLAUDE.md                        # agent-specific guidance
├── folders-structure.md             # this document
├── package-lock.json                # npm pinned versions
├── package.json                     # npm dependencies and scripts
├── token_stats.md                   # Claude Code usage snapshots
└── tsconfig.json                    # TypeScript config
```

Build output (`dist/`), `node_modules/`, and `.astro/` are gitignored.

## Departures from the template

The template assumes a multi-product / multi-surface monorepo with a
build pipeline. We have neither yet, so several template fixtures are
intentionally absent:

| Template element | Why it's missing today |
| --- | --- |
| `<brand>-<product>-<surface>/` folder | The repo root *is* the only surface — no need to nest a single web tree inside its own folder |
| Categorised `specs/<brand,business,milestones,products>/` subtree | Internal specs are few enough to live as flat files in `specs/` (`compliances.md`, `technological-stack.md`, `ui-ux.md`); promote to category subfolders only if one outgrows a single file |
| `scripts/` | Build commands live in `package.json` scripts (`npm run build`, `npm run dev`); no separate folder needed yet |
| `<shared-infra>/` | No backend, no shared infrastructure |
| `archive/` | Nothing has been superseded yet — create on first use |

## Where things go today

| Concern | Home |
| --- | --- |
| Site entry point (legacy) | [public/index.html](public/index.html) |
| Per-house pages (legacy hand-authored) | `public/houses/<house>.html` |
| Per-house pages (Astro-rendered) | `src/pages/houses/[slug].astro` (one route, all houses) |
| Per-house content data | `src/content/houses/<slug>.yaml` |
| Project-wide styling | [public/styles.css](public/styles.css) |
| Logos and wordmarks (no processing) | [public/assets/](public/assets/) |
| Photographs (Astro-optimized) | `src/assets/houses/<slug>/` |
| Layout shared by all houses | [src/layouts/HouseLayout.astro](src/layouts/HouseLayout.astro) |
| Content schema and YAML loader | [src/content.config.ts](src/content.config.ts) |
| UX / UI conventions | [ui-ux.md](specs/ui-ux.md) |
| Technology choices | [technological-stack.md](specs/technological-stack.md) |
| Compliance / rights / attribution | [compliances.md](specs/compliances.md) |
| Folder structure (this doc) | [folders-structure.md](folders-structure.md) |
| Research / source conversations | [chatgpt-sessions/](specs/chatgpt-sessions/) |
| Cost / usage tracking | [token_stats.md](token_stats.md) |
| Agent-specific guidance | [CLAUDE.md](CLAUDE.md) |

## Naming conventions

Inherited from the template:

| Convention | Example | Why |
| --- | --- | --- |
| `kebab-case.md` for documentation | `folders-structure.md`, `ui-ux.md` | Reads as prose; case-safe across OSes |
| Lowercase for folders | `houses/`, `assets/` | Matches URL paths exactly |
| `UPPERCASE.md` only for tooling/convention files | `CLAUDE.md`, `README.md` | Conventionally recognized |
| House filenames match canonical brand spelling, lower-cased, dash-separated | `chanel.html`, `dolce-gabbana.html` | Predictable URLs; matches the spellings in [CLAUDE.md](CLAUDE.md) |

## Forward-looking layout

If a second surface arrives (e.g. a mobile companion app) or content
splits into a second product (e.g. an editorial blog), migrate toward
the full template shape:

```text
fashionista/
├── archive/
├── specs/
│   ├── brand/
│   ├── business/
│   ├── milestones/
│   └── products/
│       └── encyclopedia/
│           ├── concept.md
│           ├── content/
│           └── ux-ui/
├── fashionista-encyclopedia-web/      # the static site, moved in wholesale
├── fashionista-encyclopedia-mobile/   # hypothetical second surface
└── CLAUDE.md
```

Until then, the flat layout above is canonical. **Don't pre-create
empty folders** — promote to the template shape on the day a second
surface or product actually lands.

## Archive convention

Per the template, superseded code and specs go to `archive/` at the
root, with a `specs/` subfolder for retired specs. Currently
empty and not yet present; create on first use.

```text
archive/
├── specs/                             # superseded project-level specs
│   └── <old-spec>.md
└── <old-surface>/                     # superseded code (e.g. v1 prototype)
```

A folder belongs in `archive/` when it **no longer ships**. Before
archiving code, extract any worthwhile lessons or decisions into
`archive/specs/` — code in archive rots; specs survive.
