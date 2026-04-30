# Technological stack

Inventory of technologies, services, and external resources the Fashionista project currently uses.

## Frontend

- **HTML5** — static pages, hand-authored ([index.html](index.html), [houses/armani.html](houses/armani.html))
- **CSS3** — vanilla, hand-authored ([styles.css](styles.css)); no preprocessor, no framework, no build step
- **JavaScript** — none (pure static site)

## Third-party libraries

- **[flag-icons](https://github.com/lipis/flag-icons) v7** — country flag glyphs via CSS, loaded from the jsDelivr CDN (`https://cdn.jsdelivr.net/npm/flag-icons@7/css/flag-icons.min.css`). Used on the houses grid to mark each maison's country.

## Typography

System font stacks only — no web fonts / Google Fonts loaded.

- **Serif** — Didot → Bodoni 72 → Playfair Display → Georgia → generic serif
- **Sans-serif** — Helvetica Neue → Arial → generic sans-serif

## Build & tooling

- **No build pipeline** — files are served as-is
- **No package manager** (no `package.json`, no `node_modules`)
- **No test framework**

## Hosting & deployment

- **GitHub** — repository hosting (`github.com/alexisayenko/fashionista`)
- **GitHub Pages** — static hosting; `main` branch is the deploy source
- **jsDelivr** — third-party CDN delivering the flag-icons stylesheet

## Content sources

- **Wikimedia Commons** — freely-licensed photography
  - Current Armani portrait: [File:Giorgio Armani 1997.jpg](https://commons.wikimedia.org/wiki/File:Giorgio_Armani_1997.jpg) by GianAngelo Pistoia, CC BY-SA 4.0
  - Coco Chanel hero slider (4 photos), all downloaded 2026-04-30, stored in `assets/`:
    - `chanel-coco-1928-mariniere.jpg` — [File:Gabrielle Chanel en marinière.jpg](https://commons.wikimedia.org/wiki/File:Gabrielle_Chanel_en_marini%C3%A8re.jpg), photographer unknown (1928), PD-anon-70-EU
    - `chanel-coco-1931-la.jpg` — [File:Coco Chanel in Los Angeles, 1931.jpg](https://commons.wikimedia.org/wiki/File:Coco_Chanel_in_Los_Angeles,_1931.jpg) by Los Angeles Times / UCLA Library (1931), CC BY 4.0 (mandatory attribution)
    - `chanel-coco-1925-aintree.jpg` — [File:Hugh Grosvenor, Duke of Westminster und Coco Chanel.jpg](https://commons.wikimedia.org/wiki/File:Hugh_Grosvenor,_Duke_of_Westminster_und_Coco_Chanel.jpg), Radio Times Hulton Picture Library (1925), PD-UK-unknown
    - `chanel-coco-1920.jpg` — [File:Coco Chanel, ca 1920.jpg](https://commons.wikimedia.org/wiki/File:Coco_Chanel,_ca_1920.jpg), photographer unknown (c. 1920), PD-US
- **Wikimedia Commons / Wikipedia** — brand logo & wordmark files (PD-textlogo / PD-shape, below US copyright threshold of originality per Compendium §906; trademarks remain). See [compliances.md §2b](compliances.md) for usage rules. All files below downloaded 2026-04-30 and stored in `assets/`.
  - Chanel wordmark: [File:Chanel_logo.svg](https://commons.wikimedia.org/wiki/File:Chanel_logo.svg) — PD-textlogo, Wikimedia Commons → `chanel-wordmark.svg`
  - Chanel interlocking-Cs device: [File:Chanel_logo_interlocking_cs.svg](https://en.wikipedia.org/wiki/File:Chanel_logo_interlocking_cs.svg) — PD-shape, English Wikipedia (en.wp-only because Wikimedia treats it as possibly non-free in France; clears US §906) → `chanel-logo-cc.svg`
  - Index-grid wordmarks (15 files), all PD-textlogo on Wikimedia Commons:
    - Louis Vuitton: [File:Louis Vuitton logo and wordmark.svg](https://commons.wikimedia.org/wiki/File:Louis_Vuitton_logo_and_wordmark.svg) → `louis-vuitton-logo.svg` (combined logo + wordmark — only "combined" file in the set)
    - Hermès: [File:Hermes wordmark.svg](https://commons.wikimedia.org/wiki/File:Hermes_wordmark.svg) → `hermes-logo.svg`
    - Gucci: [File:Gucci Logo.svg](https://commons.wikimedia.org/wiki/File:Gucci_Logo.svg) → `gucci-logo.svg`
    - Gucci interlocking-GG monogram: [File:1960s Gucci Logo.svg](https://commons.wikimedia.org/wiki/File:1960s_Gucci_Logo.svg) → `gucci-monogram.svg`
    - Louis Vuitton interlocking-LV monogram (single glyph, NOT the tiled Toile canvas): [File:LV Monogram.svg](https://commons.wikimedia.org/wiki/File:LV_Monogram.svg) → `louis-vuitton-monogram.svg`
    - Prada: [File:Prada-Logo.svg](https://commons.wikimedia.org/wiki/File:Prada-Logo.svg) → `prada-logo.svg`
    - Dior: [File:Dior Logo.svg](https://commons.wikimedia.org/wiki/File:Dior_Logo.svg) → `dior-logo.svg`
    - Armani: [File:Giorgio Armani.svg](https://commons.wikimedia.org/wiki/File:Giorgio_Armani.svg) → `armani-logo.svg`
    - Versace: [File:Versace old logo.svg](https://commons.wikimedia.org/wiki/File:Versace_old_logo.svg) → `versace-logo.svg` (older text-only mark; the Medusa-head logo is not PD)
    - Balenciaga: [File:Balenciaga Logo.svg](https://commons.wikimedia.org/wiki/File:Balenciaga_Logo.svg) → `balenciaga-logo.svg`
    - Saint Laurent: [File:Saint Laurent logo.svg](https://commons.wikimedia.org/wiki/File:Saint_Laurent_logo.svg) → `saint-laurent-logo.svg`
    - Fendi: [File:Fendi logo.svg](https://commons.wikimedia.org/wiki/File:Fendi_logo.svg) → `fendi-logo.svg` (W3C-invalid SVG but renders cleanly in browsers)
    - Burberry: [File:Burberry wordmark.svg](https://commons.wikimedia.org/wiki/File:Burberry_wordmark.svg) → `burberry-logo.svg` (text only; equestrian-knight figurative mark not included)
    - Bottega Veneta: [File:Logo of Bottega Veneta.svg](https://commons.wikimedia.org/wiki/File:Logo_of_Bottega_Veneta.svg) → `bottega-veneta-logo.svg`
    - Valentino: [File:Valentino logo.svg](https://commons.wikimedia.org/wiki/File:Valentino_logo.svg) → `valentino-logo.svg`
    - Givenchy: [File:Givenchy - wordmark (France, 2003).svg](https://commons.wikimedia.org/wiki/File:Givenchy_-_wordmark_(France,_2003).svg) → `givenchy-logo.svg`
    - Dolce & Gabbana: [File:Dolce & Gabbana.svg](https://commons.wikimedia.org/wiki/File:Dolce_%26_Gabbana.svg) → `dolce-gabbana-logo.svg`

## Version control

- **Git** — all history lives in a GitHub-hosted repo.
