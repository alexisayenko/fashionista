# UI / UX documentation

Visual and interaction rules for the Fashionista site. Keep this in sync with [styles.css](styles.css) and the house pages under [houses/](houses/).

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
| 3 | **Creative director & ownership** | `<p>` + optional `<p class="note">` | Italic `.note` for "to be updated" / successional uncertainty. |
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
