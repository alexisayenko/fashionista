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

## Version control

- **Git** — all history lives in a GitHub-hosted repo.
