# docs/

Project-level strategy and documentation.

For top-level repo layout, file naming, and the archive
convention, see [`../README.md#structure`](../README.md#structure).

## Why `docs/` (not `specs/`)

Industry default. GitHub, doc generators (MkDocs, Docusaurus,
mdBook, Jekyll, Hugo), language ecosystems, and IDE / agent
tooling all look in `docs/` first. "Specs" is also narrower in
meaning — specification documents only — while this folder holds
strategy, business decisions, brand notes, content corpora,
milestones, and tasks alongside the actual specs. "Docs" covers
all of that without prejudging the flavor.

## Product overview

One product, one surface today:

- **Encyclopedia** — a static-site encyclopedia of luxury fashion
  houses, hosted on GitHub Pages. AI-generated content,
  hand-curated.

If a second product or surface ever appears (rare), the layout
extends without rewriting — see the parent
[`README.md`](../README.md#structure) for the forward-looking
shape.

## Guiding principle

> **Strategy + UX → root `docs/`. Per-folder implementation
> details → `<folder>/docs/` (when needed).**

Test: *"If a PM would care about it, root. If only an engineer
would care, the code folder."*

Default to root `docs/`. Fashionista currently has no top-level
code folders (the site lives at the repo root), so per-folder
`<folder>/docs/` is not used today.

## Glossary

Top-level vocabulary used across the tree. Section-local
vocabulary (what a feature spec is, what a screen spec is) lives
in each section's entry doc.

The product is decomposed along a four-level chain — each level
composes the next:

| Level | Kind | Home |
| --- | --- | --- |
| **Concept** | noun (a thing the product reasons about) | [`product/concepts/`](product/concepts/) |
| **Feature** | verb (what the user can do) | [`product/features/`](product/features/) |
| **Screen** | place (where the user is) | [`ui-ux/screens/`](ui-ux/screens/) |
| **Journey** | sequence (path across screens) | [`ui-ux/journeys.md`](ui-ux/journeys.md) |

A feature acts on concepts. A screen hosts features. A journey
threads screens. Detailed definitions live in each section's
entry doc; this table is the index.

Other cross-tree terms:

- **Section** — a top-level area of the docs tree
  (`brand/`, `business/`, `product/`, `tech/`, `ui-ux/`, …). One
  folder per section, anchored by its entry doc.
- **Entry doc** — the `<section>/README.md` that frames the
  section and carries its section-local glossary.
- **Concern** — a cross-cutting work axis (`C1`, `C2`, …) that
  spans multiple sections. Catalogued in
  [`concerns.md`](concerns.md), referenced by task frontmatter.
- **Constraint** — a self-imposed limit ("we won't do X, even
  though we could"). Lives in the section it constrains.
- **Compliance** — an externally-imposed obligation (license,
  regulation, platform policy). Lives in
  [`business/compliance.md`](business/compliance.md). Distinct
  from constraint by where the rule comes from.

## Synonyms to avoid

Project-wide word-choice rules. Nudges consistency.

- **feature**, not "functionality".
- **screen**, not "surface" / "page" / "view".
- **journey**, not "flow" / "user flow".
- **concept**, not "domain object" / "entity" / "model".
- **house**, not "brand" — when referring to a single fashion
  maison entry. ("Brand" is fine for cross-house reference.)

## Entry docs

Each `docs/` section uses `<section>/README.md` as its entry doc —
defining what goes there, the rule for adding a file, and
section-local glossary. Why `README.md` (vs section-named files
like `tech/tech.md`):

- Renders at the folder URL on GitHub —
  `github.com/<owner>/<repo>/tree/main/docs/tech/` auto-shows
  the README.
- Universal lookup — IDE / CLI / agents all treat README as the
  default entry.
- Consistent with the repo root and `docs/` READMEs — one
  convention, no "which file is the entry?" ambiguity.

Scaffolded entry docs:

- [`brand/README.md`](brand/README.md) — brand identity vocabulary
- [`business/README.md`](business/README.md) — audience, scope,
  monetization, non-goals
- [`business/compliance.md`](business/compliance.md) —
  externally-imposed obligations (rights, attribution, ethics)
- [`business/budget.md`](business/budget.md) — out-of-pocket
  project costs (one-time + recurring)
- [`content/README.md`](content/README.md) — source material
  layout (research, cultural landmarks)
- [`product/README.md`](product/README.md) — product core idea
  and glossary (Concept / Feature / Screen / Journey / Constraint)
- [`product/concepts/README.md`](product/concepts/README.md) —
  noun pattern
- [`product/features/README.md`](product/features/README.md) —
  verb pattern
- [`milestones.md`](milestones.md) — dated project events
- [`tasks/README.md`](tasks/README.md) — task spec + frontmatter
- [`tech/README.md`](tech/README.md) — stack inventory + decisions
- [`ui-ux/README.md`](ui-ux/README.md) — UX/UI conventions
  (current content; section glossary lives inline)
- [`ui-ux/style-guide.md`](ui-ux/style-guide.md) — visual +
  interaction standards
- [`ui-ux/performance-guide.md`](ui-ux/performance-guide.md) —
  end-to-end UX performance standards
- [`ui-ux/screens/README.md`](ui-ux/screens/README.md) — one file
  per screen (folder pre-scaffolded)
- [`ui-ux/journeys.md`](ui-ux/journeys.md) — multi-screen paths

[`concerns.md`](concerns.md) is not an entry doc — it's a flat
root file that catalogues cross-cutting work axes (C1, C2, …)
referenced from task frontmatter. It sits at root because it
spans every section.

## Subtree map

Match shape to actual content — see
[Section, file, folder](#section-file-folder). Default is to
start small (section → flat file → folder) and grow only when
content earns it.

```text
docs/
├── brand/                              # entry: brand/README.md
├── business/                           # entry: business/README.md
│   ├── budget.md                       # out-of-pocket costs
│   └── compliance.md                   # rights, attribution, external obligations
├── content/                            # entry: content/README.md
│   ├── cultural-landmarks.md           # civilization-wide events that touched fashion
│   └── research/                       # raw research notes
├── milestones.md                       # dated project events
├── product/                            # entry: product/README.md
│   ├── concepts/                       # entry: concepts/README.md
│   ├── features/                       # entry: features/README.md
│   └── README.md
├── tasks/                              # entry: tasks/README.md
├── tech/                               # entry: tech/README.md (stack inventory)
├── ui-ux/                              # entry: ui-ux/README.md (UX/UI conventions)
│   ├── journeys.md                     # multi-screen paths
│   ├── performance-guide.md            # end-to-end UX performance
│   ├── screens/                        # entry: screens/README.md
│   └── style-guide.md                  # visual + interaction standards
├── README.md                           # this file
└── concerns.md                         # cross-cutting axes (C1, C2, …)
```

Obsolete docs go to `archive/docs/` at repo root, not inside
`docs/` — see [`../README.md#archive`](../README.md#archive).

### What lives where

| Concern | Home | Read it when |
| --- | --- | --- |
| Brand identity (logos, fonts, colors, naming) | [`brand/`](brand/) | Naming, identity, brand assets, app icon question |
| Business — audience, scope, monetization | [`business/`](business/) | Pricing, scope, audience, monetization question |
| Externally-imposed obligations (licensing, regulation) | [`business/compliance.md`](business/compliance.md) | Anything legally or contractually required (vs self-imposed) |
| Out-of-pocket project costs (one-time + recurring) | [`business/budget.md`](business/budget.md) | Tracking spend; planning a renewal |
| Cross-cutting axes (C1, C2, …) referenced by tasks | [`concerns.md`](concerns.md) | Picking which work area a task belongs to; orienting at session start |
| Source material — research, corpora, landmarks | [`content/`](content/) | Sourcing data, citing a fact, planning ingest |
| Project milestones (launches, releases, evidence) | [`milestones.md`](milestones.md) | Looking up when an event happened, or what shipped in a release |
| Product core idea + section glossary | [`product/README.md`](product/README.md) | Orienting on what the product is at the conceptual level |
| Product entities (one file per noun) | [`product/concepts/`](product/concepts/) | Modeling a stable noun the product reasons about (e.g. `house`) |
| Cross-folder feature specs (one file per verb) | [`product/features/`](product/features/) | Implementing or scoping a specific user-facing capability |
| Tasks (numbered, frontmatter-tagged) | [`tasks/`](tasks/) | Creating or closing a task; orienting at session start |
| Stack, ADRs, architecture | [`tech/`](tech/) | Anything implementation: framework, hosting, data |
| UX / UI conventions (content schema, brand-page rules) | [`ui-ux/README.md`](ui-ux/README.md) | Building or changing a house page |
| Screens (where the user is) | [`ui-ux/screens/`](ui-ux/screens/) | Building or changing a screen |
| Journeys (paths across screens) | [`ui-ux/journeys.md`](ui-ux/journeys.md) | Designing or changing a multi-screen flow |
| UX style standards (visual + interaction) | [`ui-ux/style-guide.md`](ui-ux/style-guide.md) | Picking a color, type, motion, or interaction pattern |
| UX performance standards | [`ui-ux/performance-guide.md`](ui-ux/performance-guide.md) | Setting or checking a UX performance metric / threshold |

### Section, file, folder

One rule at every scale — match shape to actual content:

```text
## section in parent README  →  <section>.md  →  section/README.md
```

- **Section in a parent README.** New material starts here.
- **Flat file.** Extract when the section grows past
  ~5 entries / ~50 lines, or when it accretes its own
  open-questions / glossary / examples.
- **Folder with entry doc.** Extract when the file accretes
  multiple sub-entries that each want their own file
  (e.g. `decisions.md` → `decisions/<slug>.md`).

Reverse direction is also fine: if a folder shrinks back toward
one file, collapse it. Match present content; don't predict —
*with one exception*: pre-scaffold a folder when multiples are
guaranteed from day one. `ui-ux/screens/` is the canonical case
(any product with a UI has more than one screen).
