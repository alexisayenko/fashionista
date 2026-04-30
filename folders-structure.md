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
├── assets/                          # static media (photographs, served as-is)
├── chatgpt-sessions/                # research conversations / source notes
├── houses/                          # per-house pages (armani.html, chanel.html, …)
├── temp/                            # transient files; not deployed
├── CLAUDE.md                        # agent-specific guidance
├── folders-structure.md             # this document
├── index.html                       # site entry point
├── styles.css                       # all styling
├── technological-stack.md           # what we use and why
├── token_stats.md                   # Claude Code usage snapshots
└── ui-ux.md                         # UX/UI conventions
```

## Departures from the template

The template assumes a multi-product / multi-surface monorepo with a
build pipeline. We have neither yet, so several template fixtures are
intentionally absent:

| Template element | Why it's missing today |
| --- | --- |
| `<brand>-<product>-<surface>/` folder | The repo root *is* the only surface — no need to nest a single web tree inside its own folder |
| `docs/` tree | Strategy + UX notes are few enough to live as flat files at root (`technological-stack.md`, `ui-ux.md`) |
| `scripts/` | No build step — files served as-is (see [technological-stack.md](technological-stack.md)) |
| `<shared-infra>/` | No backend, no shared infrastructure |
| `archive/` | Nothing has been superseded yet — create on first use |

## Where things go today

| Concern | Home |
| --- | --- |
| Site entry point | [index.html](index.html) |
| Per-house pages | `houses/<house>.html` |
| Project-wide styling | [styles.css](styles.css) |
| Static media (photos, illustrations) | [assets/](assets/) |
| UX / UI conventions | [ui-ux.md](ui-ux.md) |
| Technology choices | [technological-stack.md](technological-stack.md) |
| Folder structure (this doc) | [folders-structure.md](folders-structure.md) |
| Research / source conversations | [chatgpt-sessions/](chatgpt-sessions/) |
| Cost / usage tracking | [token_stats.md](token_stats.md) |
| Agent-specific guidance | [CLAUDE.md](CLAUDE.md) |
| Throwaway / pre-import files (not deployed) | [temp/](temp/) |

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
├── docs/
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

Per the template, superseded code and docs go to `archive/` at the
root, with a `docs/` subfolder for retired documentation. Currently
empty and not yet present; create on first use.

```text
archive/
├── docs/                              # superseded project-level docs
│   └── <old-doc>.md
└── <old-surface>/                     # superseded code (e.g. v1 prototype)
```

A folder belongs in `archive/` when it **no longer ships**. Before
archiving code, extract any worthwhile lessons or decisions into
`archive/docs/` — code in archive rots; docs survive.
