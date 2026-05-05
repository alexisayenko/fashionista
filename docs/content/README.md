# Content

Reference data about the *subject* of the project — quantities,
lists, source corpora, glossaries, and editorial reference
material that drives the encyclopedia output. Verify against
primary sources before launch.

The user-facing house pages themselves live as YAML in
[`../../src/content/houses/`](../../src/content/houses/) — that's
shipped product data, not source material. This folder holds the
research and editorial inputs that feed it.

## Current files

- [`cultural-landmarks.md`](cultural-landmarks.md) — civilization-wide
  events that touched fashion (e.g. WWII end), applied across
  every house timeline.
- [`research/`](research/) — raw research notes (pyramid of brands,
  top-100 lists, source conversations).

## Common slots

Don't pre-create — extract on first real entry. See
[Section, file, folder](../README.md#section-file-folder).

- **`sources.md`** — bibliography / canonical sources for factual
  claims (with licensing notes per source).
- **`prompts/`** — prompt sources for AI-assisted content
  generation.
- **`motifs.md`** / **`themes.md`** / **`taxonomy.md`** —
  categorizations and groupings.

For per-product domain nouns, see
[`../product/concepts/`](../product/concepts/) — those are
durable entities the product reasons about, not source corpora.
For doc-meta vocabulary (Section, Concern, …), see
[`../README.md#glossary`](../README.md#glossary).

## Open questions

- [TODO: open editorial decisions awaiting resolution.]
