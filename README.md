# fashionista

An encyclopedia of luxury fashion houses (Armani, Chanel,
Dolce & Gabbana, Prada, and others), delivered as a static site
built with Astro and deployed to GitHub Pages.

## Overview

One product, one surface today: the **Encyclopedia** — a static
website hosted on GitHub Pages. The site source lives at the repo
root rather than under a named code folder, because there is only
one surface. If a second surface arrives (e.g. a mobile companion),
the web tree moves into its own folder; until then, flat is
canonical.

## Quick start

```sh
npm install
npm run dev      # local dev server
npm run build    # build to dist/
npm run preview  # preview built output
npm run check    # astro type/content check
```

## Structure

Folders sort first (alphabetically), then files — VS Code default.

```text
fashionista/
├── docs/                                 # project-level strategy + documentation
├── public/                               # static assets served verbatim
│   ├── assets/                           # logos, wordmarks, legacy photographs
│   ├── houses/                           # legacy hand-authored house pages
│   ├── index.html                        # legacy site entry point
│   └── styles.css                        # all styling
├── src/                                  # Astro source
│   ├── assets/houses/<slug>/             # per-house photographs (Astro <Image>)
│   ├── content/houses/                   # one .yaml per house
│   ├── layouts/                          # shared templates
│   ├── pages/                            # file-based routing
│   └── content.config.ts                 # Zod schema + YAML loader
├── astro.config.mjs                      # Astro build config
├── CLAUDE.md                             # agent-specific guidance
├── LICENSE                               # license
├── README.md                             # this file — entry point + structure
├── package.json                          # npm dependencies and scripts
├── token_stats.md                        # Claude Code usage snapshots
└── tsconfig.json                         # TypeScript config
```

`dist/`, `node_modules/`, and `.astro/` are gitignored.

**Don't pre-create empty folders.** Add a folder on the day a
second code folder, archived artifact, or per-folder doc actually
lands — not before. See
[`docs/README.md#section-file-folder`](docs/README.md#section-file-folder)
for the same rule applied inside `docs/`.

### Naming

| Convention | Example | Why |
| --- | --- | --- |
| `kebab-case.md` for documents | `cultural-landmarks.md` | Reads as prose; case-safe across OSes |
| Lowercase folders | `docs/`, `public/`, `src/` | Matches URL paths; case-safe |
| `UPPERCASE.md` only for conventionally recognized files | `README.md`, `CLAUDE.md`, `LICENSE` | Don't invent new uppercase files |
| House filenames match canonical brand spelling, lower-cased, dash-separated | `chanel.html`, `dolce-gabbana.html` | Predictable URLs; matches spellings in [CLAUDE.md](CLAUDE.md) |

### Infra at root

Folders sit unprefixed at the root when they apply across the
project:

- **`docs/`** — strategy, product, business, brand, content, tech, ui-ux

If a script or config touches one code folder only, it lives with
that folder, not at root.

### Ad-hoc root files

Some root files are created on demand, not scaffolded:

- `HANDOVER.md` — open work deferred between sessions. Create when
  you have items to defer; delete when they're all resolved. Not a
  living doc.
- `token_stats.md` — Claude Code usage snapshots (currently
  present).

### Archive

Single root `archive/` folder for obsolete code and docs. A `docs/`
subfolder inside holds obsolete documentation.

```text
archive/
├── docs/                       # obsolete project-level docs
│   └── <old-doc>.md
└── <old-folder>/               # obsolete code (e.g. legacy public/houses/*.html)
```

A folder belongs in `archive/` when it **no longer ships**. Before
archiving code, extract any worthwhile lessons or decisions into
`archive/docs/` — code in archive rots; docs survive.

`archive/` doesn't exist by default. Create on first retirement.

## Documentation

See [`docs/README.md`](docs/README.md) for the docs subtree map,
glossary, and per-section entry docs.
