# UI / UX documentation

Visual and interaction rules for the Fashionista site. Keep this in sync with [styles.css](styles.css), the index grid in [index.html](index.html), and the house pages under [houses/](houses/).

## Index page — maison grid

The site entrance at [index.html](index.html) presents every documented house as a scannable grid of "passport" cards. Each card answers the same compact set of questions — where, when, who owns it, what it makes, who designs it, and where it falls on three editorial meters — so readers can sweep across houses without re-parsing each card's structure.

### Grid shell

Under the `Maisons` heading, the houses section carries three blocks in order: the reading legend, the meters note, then the grid itself.

```
section#houses.houses
├── h2                        "Maisons"
├── dl.legend                 reading legend (Timeline / Price / Heat / Exclusivity)
├── p.legend-note             italic "meters are editorial 1–5" caveat
└── ul.house-grid             auto-fit grid, min 240 px columns, 2 rem gap
    └── li.house-card × N     one card per house
```

The `.legend` is an auto-fit grid with a min column width of 200 px, boxed in a faint 1 px `rgba(0,0,0,0.25)` border over a 2 % black wash. Each term pairs a tracked, accent-coloured `<dt>` label with a sentence-length `<dd>` definition.

### House card (fixed field order)

Every `.house-card` carries the same fields in the same order. The ordering matters — a reader skimming the grid compares like-to-like between cards.

| # | Element | Class | Notes |
| --- | --- | --- | --- |
| 1 | House name | `<h3>` | Serif display. Wrap in an `<a>` when a detail page exists. |
| 2 | Origin meta | `.meta` | Flag icon (`flag-icons`), then `City · Est. YEAR`. Accent-coloured tracked caps. |
| 3 | Ownership | `.ownership` | Conglomerate, `Independent · <family>`, partial-stake note, or `Public · <exchange>`. See [Ownership labels](#ownership-labels--canonical-forms). |
| 4 | Timeline | `.timeline` + `.timeline-dot` | 1825–2025 bar with an accent dot positioned via `--pos: N%` (0 % = 1825, 100 % = 2025). |
| 5 | Badges | `.badge-row` | One primary product-type badge, plus optional secondary badges. See [Badges](#badges--product-type-and-status). |
| 6 | Price + Heat meters | `dl.stats > .stat` | Two inline 5-dot meters, Price in accent, Heat in crimson. |
| 7 | Creative director | `.director` | Single line, or split Men / Women lines when the house has separate directors. See [Creative director line](#creative-director-line). |
| 8 | Exclusivity panel | `.exclusivity-panel` | Boxed-off 5-dot meter with its own label, deliberately set apart from the other meters. |
| 9 | Description | `<p>` (card's last `<p>`) | One-sentence cultural blurb. The card's final `<p>` inherits `color: #333` via `.house-card p:last-child`. |
| 10 | "Read more" link | `.more` | Only on houses with a detail page; accent-coloured tracked caps. |

### Badges — product type and status

The badge row separates two axes. The primary badge is the product type (`Ready-to-Wear` in practice for every house today). Secondary badges capture institutional couture status or heritage specialty and appear only when they apply.

| Variant | Class | Style | Used for |
| --- | --- | --- | --- |
| Primary | `.badge` | Black 1 px border, transparent fill, ink text | Product type. Every card carries exactly one. |
| Couture · Official | `.badge.badge-couture-official` | Filled `--accent`, white text | Chambre Syndicale full members. |
| Couture · Correspondent | `.badge.badge-couture-correspondent` | Accent border, accent text, transparent fill | Invited correspondent couture members. |
| Specialty | `.badge.badge-specialty` | Muted `#666` text, `rgba(0,0,0,0.3)` border | Heritage / craft specialty (e.g. `Leather` for houses whose core is leather goods). |

Secondary badges carry a 0.35 rem left margin via `.badge-row .badge + .badge`. Never stack two primary badges; if a house warrants a second product type, reach for an additional specialty badge or extend this table.

### Meters — Price, Heat, Exclusivity

Three 5-dot meters summarise commercial and cultural position. They are **editorial reads**, not quantitative measures — the legend above the grid says so explicitly.

| Meter | Class | Glyph | "On" colour | Measures |
| --- | --- | --- | --- | --- |
| Price | `.meter.price` | `$` | `--accent` | Retail tier, boutique entry to full archive. |
| Heat | `.meter.heat` | `●` | `#c0392b` (crimson) | Current cultural momentum. |
| Exclusivity | `.meter.ex` | `●` | `#2c3e50` (slate) | Access and distribution control. Shown inside `.exclusivity-panel`, boxed off so it reads as a separate judgement from Price / Heat. |

"Off" dots are `#d9d4c9`. Dot letter-spacing is fixed at 2 px for a consistent rhythm across rows.

### Creative director line

Default is a single-line `.director` paragraph — italic, small, `#555`: `Name · since YEAR`.

When a house has separate men's and women's creative directors, split into two lines with `.cd-role` role labels so the grid stays legible at a glance:

```html
<p class="director">
  <span class="cd-role">Men</span> [Director name] &middot; since [YEAR]<br>
  <span class="cd-role">Women</span> [Director name] &middot; since [YEAR]
</p>
```

`.cd-role` is a tracked, accent-coloured caps label with `min-width: 3.5em` so the `Men` and `Women` labels column-align across the two lines.

### Ownership labels — canonical forms

Keep the ownership line short and use these canonical forms:

- **Conglomerate**: bare group name — e.g. `LVMH`, `Kering`, `Prada Group`.
- **Family / founder-held**: `Independent · <family or group>` — e.g. `Independent · Hermès family`, `Independent · Founders`.
- **Partial stake**: `<primary owner> · <stake-holder> stake` — primary owner first, minority stake-holder second.
- **Publicly listed, widely held**: `Public · <exchange>` — e.g. `Public · LSE`.

Ownership churns — verify against fresh sources before publishing.

### Utility classes used on the grid

| Class | Purpose | Defined in |
| --- | --- | --- |
| `.house-grid` | Auto-fit grid container for the cards | [styles.css](styles.css) |
| `.house-card` | Card frame with 1 px `--ink` border and hover lift | [styles.css](styles.css) |
| `.meta` | City · Year lockup (accent, tracked caps) | [styles.css](styles.css) |
| `.ownership` | Ownership line (muted `#666`, tracked caps) | [styles.css](styles.css) |
| `.timeline`, `.timeline-dot` | 1825–2025 timeline bar + accent dot | [styles.css](styles.css) |
| `.badge-row`, `.badge`, `.badge-couture-official`, `.badge-couture-correspondent`, `.badge-specialty` | Badge row and variants | [styles.css](styles.css) |
| `.stats`, `.stat`, `.meter`, `.meter.price`, `.meter.heat`, `.meter.ex` | Meter system | [styles.css](styles.css) |
| `.director`, `.cd-role` | Creative director line and role label | [styles.css](styles.css) |
| `.exclusivity-panel`, `.ex-label` | Boxed-off Exclusivity block | [styles.css](styles.css) |
| `.legend`, `.legend-note` | Reading-legend block above the grid | [styles.css](styles.css) |
| `.more` | "Read more" link on cards with detail pages | [styles.css](styles.css) |

## Brand page structure

Every maison gets its own page under `houses/<slug>.html` (e.g. [houses/armani.html](houses/armani.html)). All brand pages share a single template and ordering so readers build the same mental model from house to house.

### Page shell

```
<body>
  <header class="site-header">            — brand lockup (link to /) + top nav
  <main class="house-page">               — max-width 760px, 3 rem side padding
    <article>
      <header class="house-hero"> …       — hero band (text + photo)
      <section> × N                       — content sections, in the fixed order below
      <p class="back-link">               — uppercase "← All houses" link home
    </article>
  </main>
  <footer class="site-footer">            — shared site footer
</body>
```

### Hero band

```
header.house-hero
├── div.hero-text
│   ├── p.eyebrow             "Maison"                              (accent, tracked)
│   ├── h1                    Brand name                            (serif display)
│   └── p.house-sub           "City · Country"                      (accent, tracked)
└── figure.hero-portrait      single photo
    └── img + figcaption
        OR
    figure.hero-slider        multi-photo slider — see component below
```

The hero is a flex row on desktop and stacks on viewports under 640 px. See [Hero photography](#hero-photography) for frame sizing and aspect-ratio rules.

### Content sections (fixed order)

Each maison's article body should carry these nine `<section>` blocks in this order. The ordering exists so readers can scan houses against one another without hunting for fields.

| # | Section heading | Typical markup | Notes |
| --- | --- | --- | --- |
| 1 | **Founding** | `<p>` | Year, founder(s); bold names with `<strong>`. |
| 2 | **Key milestones** | `<ul class="milestones">` | Each `<li>` opens with `<strong>Year or era.</strong>` followed by the event. |
| 3 | **Creative director & ownership** | `<p>` + optional `<p class="note">` | Italic `.note` for "to be updated" / successional uncertainty. Split Men / Women lines when the house has separate creative directors, matching the index-grid convention. |
| 4 | **Main product lines** | `<ul class="plain-list">` | Bulletless list; each `<li>` starts with `<strong>Line</strong> — description`. |
| 5 | **Design DNA** | `<p>` | One tight paragraph on silhouette, palette, philosophy. |
| 6 | **Beyond the timeline** | `<p class="section-intro">` + `<ul class="signature-pieces">` | Italic lead; each piece = `<strong>` name, optional `<span class="piece-year">`, `<p>` body. |
| 7 | **Market positioning** | `<p>` | Segment (accessible / premium / ultra-luxury) and breadth. |
| 8 | **Business scale** | `<p>` | Revenue order of magnitude; note the valuation date if cited. |
| 9 | **Cultural impact & collaborations** | `<p>` | Influence on dress codes, notable collaborations across film, sport, architecture. |

Every `<section>` uses an `<h2>` (serif, 1.5 rem, rule underline) via `.house-page article h2`. Leave 2.75 rem between sections — handled automatically by `.house-page article section`.

### Utility classes used on brand pages

| Class | Purpose | Defined in |
| --- | --- | --- |
| `.eyebrow` | Accent-coloured tracked caps label above the h1 | [styles.css](styles.css) |
| `.milestones` | Borderless list with 1 px `--rule` dividers between items | [styles.css](styles.css) |
| `.plain-list` | Unstyled list with 0.35 rem vertical padding per item | [styles.css](styles.css) |
| `.section-intro` | Italic `#555` lead paragraph inside a section | [styles.css](styles.css) |
| `.signature-pieces` + `.piece-year` | Ruled list of iconic pieces with a tracked year tag | [styles.css](styles.css) |
| `.note` | Muted italic caveat (e.g. "to be updated") | [styles.css](styles.css) |
| `.back-link` | Uppercase return link with top rule and padding | [styles.css](styles.css) |

### Language and spelling

- Use canonical brand spellings: **Dolce & Gabbana**, **Chanel**, **Prada**, **Armani**.
- Use typographic punctuation in copy: em-dash `&mdash;`, en-dash `&ndash;`, curly quotes `&ldquo;` / `&rdquo;`, middle dot `&middot;` for the "City · Country" lockup.
- Currentness warning: creative-director and ownership lines should be verified against fresh sources before publishing — these fields churn.

## Design tokens

Defined on `:root` in [styles.css](styles.css):

| Token | Value | Purpose |
| --- | --- | --- |
| `--ink` | `#111` | Primary text and rules |
| `--paper` | `#f7f4ef` | Page background |
| `--accent` | `#8a6a3b` | Brand accent (eyebrows, meta, hover) |
| `--rule` | `#1110` | Subtle dividers |
| `--serif` | Didot → Bodoni 72 → Playfair Display → Georgia | Display type |
| `--sans` | Helvetica Neue → Arial | Body and UI type |
| `--hero-photo-ratio` | `4 / 5` | Shared aspect ratio for all hero portraits |

## Hero photography

All hero photography on house pages follows a single **4 : 5 portrait** aspect ratio, controlled by the `--hero-photo-ratio` token. This keeps page layout stable regardless of the source image's native proportions and gives every maison a consistent visual weight in the hero band.

**Rules:**

- The aspect ratio is set on the *frame*, not the image file — source images may have any native ratio.
- Images fill the frame with `object-fit: cover` and `object-position: center top`, so faces and upper bodies stay visible when a photo is cropped.
- The frame retains a 1 px `--ink` border.
- The hero photo column has a fixed flex-basis of `260px` on desktop, collapsing to `max-width: 320px` stacked on viewports under 640 px.

**Two flavours:**

1. **Static portrait** — `.hero-portrait > img`, used when a house has a single canonical photo.
2. **Slider** — `.hero-slider`, used when a house has multiple photos to cycle through.

Both honour the same `--hero-photo-ratio` so there is no visible difference in framing.

## Hero slider component

Used on house pages that carry more than one portrait (currently [houses/armani.html](houses/armani.html)).

### Structure

```
figure.hero-slider
├── div.slider-viewport              (aspect-ratio: var(--hero-photo-ratio); overflow: hidden)
│   ├── div.slider-track              (flex row, translateX animates between slides)
│   │   └── div.slide × N             (each 100% of viewport width, contains one <img>)
│   ├── button.slider-arrow.prev      (absolutely positioned, left)
│   └── button.slider-arrow.next      (absolutely positioned, right)
├── div.slider-captions              (swapped per active slide via .is-active)
│   └── figcaption.slide-caption × N
└── div.slider-dots                  (role="tablist")
    └── button.slider-dot × N
```

### Behaviour

- Arrow click, dot click, and `ArrowLeft`/`ArrowRight` keys all advance the track.
- The track is a flex row; transitions are a single `translateX(-index * 100%)` with a `0.45s ease` ease.
- Active slide, caption, and dot are marked with `aria-hidden` / `.is-active` in lockstep.
- Figure is focusable (`tabIndex = 0`) and exposes `aria-roledescription="carousel"`.

### Arrow styling

Circular chips rather than square buttons, designed to stay out of the photograph's way:

- 2.25 rem circle, no border, semi-transparent white background (`rgba(255,255,255,0.35)`) with a 4 px backdrop blur.
- Soft two-layer shadow (`0 1px 3px` + `0 4px 12px` at ~8 % black) so they lift off the image without a hard edge.
- Inline SVG chevron (`<`, `>`) at 14 × 14 in `currentColor`, stroke 1.8 — not text glyphs.
- Resting opacity `0.5`; ramps to `1` when the slider is hovered or focused within.
- Arrow hover fills the chip with `--ink` and white chevron, with a `scale(1.06)` lift.
- Focus-visible uses a 2 px `--accent` outline with 2 px offset.

### Dot styling

- 10 × 10 px circles, 1 px `--ink` border, transparent fill.
- Active dot fills with `--accent` and matches its border colour.
- Focus-visible outline matches the arrow focus treatment.

### Captions

- Centered, uppercase, 0.2 em letter-spacing, `--accent` colour.
- Credit line below each caption in sentence case, `#666`, with underlined Wikimedia + license links.
- Caption wrapper has a `min-height: 3.2rem` so height does not jump between single-line and two-line credits.
