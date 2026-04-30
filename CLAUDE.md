# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project domain

Fashionista is a project about **luxury fashion brands**, including Armani, Dolce & Gabbana, Chanel, Prada, and other high-end houses.

When interpreting data models, content, features, or terminology in this repo, assume the domain is luxury / high-end fashion. Brand names, product categories, imagery, and vocabulary should be treated in that context.

Note on brand spellings (canonical forms): **Dolce & Gabbana**, **Chanel**, **Prada**, **Armani**. Watch for typos in user input and use the correct spellings in code/content.

## Repository status

A static-site project for documenting luxury fashion houses, **migrating to Astro**. Target layout: site source under `src/` (pages, layouts, components, content collections); built static HTML in `dist/` (gitignored, deployed to GitHub Pages via Actions); media split between `public/assets/` (logos and SVGs, served verbatim) and `src/assets/houses/<slug>/` (photographs, optimized via Astro's `<Image>`).

Internal specifications live in [specs/](specs/) — start with [folders-structure.md](folders-structure.md) for the repo layout, [specs/technological-stack.md](specs/technological-stack.md) for the full stack inventory, and [specs/ui-ux.md](specs/ui-ux.md) for the content schema and brand-page rules.
