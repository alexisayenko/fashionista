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
- **Wikimedia Commons / Wikipedia** — brand logo & wordmark files (PD-textlogo / PD-shape, below US copyright threshold of originality per Compendium §906; trademarks remain). See [compliances.md §2b](compliances.md) for usage rules.
  - Chanel wordmark: [File:Chanel_logo.svg](https://commons.wikimedia.org/wiki/File:Chanel_logo.svg) — PD-textlogo, Wikimedia Commons; downloaded 2026-04-30; stored at `assets/chanel-wordmark.svg`
  - Chanel interlocking-Cs device: [File:Chanel_logo_interlocking_cs.svg](https://en.wikipedia.org/wiki/File:Chanel_logo_interlocking_cs.svg) — PD-shape, English Wikipedia (en.wp-only because Wikimedia treats it as possibly non-free in France; clears US §906); downloaded 2026-04-30; stored at `assets/chanel-logo-cc.svg`

## Version control

- **Git** — all history lives in a GitHub-hosted repo.
