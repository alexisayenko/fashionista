# Compliances

What we can do, what we should do, what we cannot do — and why. This
document is the source of truth for rights, attribution, and ethical
sourcing across the Fashionista repo. When in doubt, the **Why** column
is what to apply.

Each section follows the same shape:

- **Should** — positive obligations. The things we do every time, even
  when no one would catch us not doing them.
- **Can** — what's permitted.
- **Cannot** — what's forbidden, and what we don't even attempt.
- **Why** — the legal, ethical, or reputational rationale.

---

## 1. Imagery & photography

Photographs of founders, ateliers, runway, and product shots.

### Should

- **Cite the original author by name** in the caption credit line.
- **Link the caption to the original Wikimedia / source page** (not a
  re-host).
- **Record the license name and version** in two places: the credit
  line on the page, and an entry in [technological-stack.md](technological-stack.md)
  under "Content sources."
- **Preserve the original filename's intent** — name files
  `<house>-<subject>-<year>.jpg` (e.g. `armani-2009-milan.jpg`) so
  provenance is recoverable from the filename alone.
- **Verify the upload was made by the rights holder or an authorized
  re-uploader** before reusing — Wikimedia Commons hosts
  user-uploaded files, not all of which are correctly licensed.

### Can

- Use images released under **CC0**, **CC BY**, or **CC BY-SA**, with
  attribution that meets the license terms.
- Use images explicitly marked **public domain** (PD-old, PD-art,
  PD-self) on Wikimedia Commons.
- Crop, resize, and re-encode CC-licensed images for fit — these
  licenses permit derivative works as long as attribution and
  share-alike (when CC BY-SA) are preserved.

### Cannot

- Use press-kit photos or runway-show images downloaded from a brand's
  newsroom — these are licensed for editorial use only, not for an
  independent encyclopedia site.
- Use images scraped from social media (Instagram, Pinterest, etc.) on
  a "fair use" assumption — fair use is a US-only defense, narrow, and
  unsafe for a published static site.
- Use photographs marked **CC BY-NC** (non-commercial) — the project
  is published openly and could be construed as commercial in the
  future; avoid the ambiguity.
- Strip, alter, or relocate a credit line so it no longer accompanies
  the image it credits.
- Use AI-generated images of real people (founders, designers,
  executives) as if they were photographs.

### Why

Photographs are copyrighted from the moment they're taken. The
photographer — not the subject, not the magazine, not the brand —
holds the rights unless explicitly transferred. CC licenses are the
clearest path to lawful, attributable reuse; everything else
introduces legal exposure or reputational risk. Wikimedia Commons is
preferred because each file carries an audit trail (uploader, license,
source) that withstands scrutiny.

---

## 2. Brand names, logos, wordmarks & colors

Use of "Chanel," "Armani," "Dolce & Gabbana," and other house names,
plus their logos, wordmarks, signature motifs, and brand colors. Three
sub-sections, one shared **Why**.

### 2a. Brand names

#### Should
- Use **canonical spellings**: Dolce & Gabbana, Chanel, Prada, Armani
  (per [CLAUDE.md](CLAUDE.md)).
- Refer to brands **nominatively** — to identify the house we are
  describing, not as a decorative or aspirational label.
- Use brand names as **proper nouns** in running prose, not as
  adjectives modifying our own offering.

#### Can
- Name brands in editorial / encyclopedic context (this is **nominative
  fair use** — using a trademark to refer to the trademark holder).

#### Cannot
- Imply partnership, sponsorship, endorsement, or affiliation with any
  house through wording, layout, or imagery juxtaposition.
- Register, use, or buy domains containing a brand name (e.g.
  `chanel-fashionista.com`) — even on the surface this looks like
  cybersquatting.

### 2b. Logos & wordmarks

A *logo* is the figurative mark (Chanel's interlocking double-C, the
Versace Medusa). A *wordmark* is the styled brand name itself (the
spaced-caps "CHANEL", the "ARMANI" treatment).

#### Should
- **Source from Wikimedia Commons or Wikipedia** — files there carry
  an audit trail (uploader, license tag, source) and are typically
  released under `PD-textlogo`, `PD-shape`, or `PD-ineligible` because
  they fall below the US copyright threshold of originality
  (Compendium of US Copyright Office Practices §906).
- **Self-host the asset in `assets/`** rather than hot-linking from
  Wikimedia — durable, considerate of Wikimedia's bandwidth, and
  isolates us from upstream churn.
- **Record provenance per asset** — source URL (Wikimedia file page),
  license tag at time of download, and download date. Caption credit
  on the page; full record in [technological-stack.md](technological-stack.md).
- **Render brand names in body prose using *our* typography**
  (Didot/Bodoni/Helvetica Neue per [ui-ux.md](ui-ux.md)), not the
  brand's wordmark.
- **Add a trademark identification note** near the asset on its first
  appearance, e.g.: *"CHANEL and the interlocking-Cs device are
  trademarks of Chanel SAS, used here for identification under
  nominative fair use."*
- **In editorial indexes**, render logos small (~40–60 px), monochrome
  or low-contrast, and integrate them with each entry's metadata
  (name, location, dates, link to the article). Bare grids of large
  color logos read as an "affiliations wall" regardless of intent;
  small monochrome logos inside richly-captioned cards read as an
  encyclopedic index, like Wikipedia's category pages.

#### Can
- Include a small logo or wordmark image on **that brand's own
  editorial page**, sized as identification (~80–120 px), where no
  reader could think the brand endorses Fashionista.
- Use both the figurative logo and the wordmark side-by-side on the
  brand's page when they're discussed as distinct identity assets.
- On an **editorial index or category page**, include each entry's
  logo or wordmark inside its own card alongside the article's
  metadata (name, location, ownership, dates, link to the article).
  The logo functions as identification of the article's subject, not
  as a portfolio of affiliations — same nominative-fair-use logic as
  Wikipedia's brand-article infoboxes and category indexes.

#### Cannot
- Use logos or wordmarks in **site navigation, headers, footers,
  favicon, or social-share preview cards** — any of these reads as
  affiliation rather than editorial reference.
- Build a **bare grid of logos** with no editorial content per card
  (no name, no metadata, no link to an article about the subject) —
  bare = "affiliations wall"; richly-captioned editorial card = index.
- **Install brand wordmark fonts** (Couture, Didot proprietary cuts,
  etc.) and re-render brand names in them — the asset is the wordmark
  *image*, not a typography we adopt.
- **Alter, recolor, distort, or reposition the marks** within the logo
  / wordmark file. Crop only if necessary; never restyle.
- Use logos or wordmarks of brands the page **isn't about** as
  decorative inline glyphs.

### 2c. Brand colors & trade dress

#### Should
- **Name brand colors in prose** when culturally significant ("Tiffany's
  robin's-egg blue," "Hermès orange," "Louboutin red," "Chanel black,
  white, beige, and gold").
- **Show colors as small editorial swatches** on the brand's own page
  when discussing them as a design choice — captioned with their hex
  value and (where applicable) brief context.
- **Check for registered single-color marks** before adopting a brand
  color anywhere: Tiffany #1837 blue, Louboutin red sole, T-Mobile
  magenta, UPS brown, and a small set of others are protected
  *in context*. Most luxury houses (Chanel included) do **not** hold
  single-color trademarks.

#### Can
- Display 4–8 small swatches on the brand's editorial page,
  hex-captioned, in a discrete cluster tied to a specific design
  discussion.

#### Cannot
- Adopt a brand color as the site's **primary palette, accent,
  navigation, or hero background** — keep our `--paper` / `--ink` /
  `--accent` tokens stable across all houses.
- Arrange visual motifs that **mimic protected trade dress**: Burberry
  check, Bottega weave, Louis Vuitton monogram, Goyard chevron, the
  Louboutin sole-as-context.
- Reproduce a brand color across multiple unrelated pages such that it
  reads as **our** identity rather than theirs.
- Imply Pantone licensing or use the Pantone reference number as a
  caption — use a hex value plus the brand's own descriptive name.

### Why (shared across 2a–c)

Trademark law protects against consumer confusion about the *source*
of goods or services — editorial reference under nominative fair use
is broadly safe (US: *New Kids on the Block v. News America Publishing*,
971 F.2d 302; EU/FR: editorial use outside *l'usage dans la vie des
affaires* per CPI L.713-2/3). Visual appropriation that suggests
endorsement, or that builds *our* identity from *their* identity, is
the line that gets crossed easily and noticed quickly. Luxury houses
are particularly active enforcers — they pursue takedowns even where
the legal case is weak, because the cost to a small site is asymmetric.

---

## 3. Text & quotations

Prose written about houses, including biographical claims, design
descriptions, and quoted material.

### Should

- **Write in our own words.** Synthesize from multiple sources rather
  than paraphrasing one closely.
- **Quote sparingly and with attribution** when a specific phrasing
  matters (e.g. *Vogue*'s "Chanel's Ford" framing of the LBD).
- **Cite primary sources** where possible (a brand's own archive, a
  filed company report) over secondary ones.
- **Date volatile claims** (creative director, ownership, revenue) in
  the prose itself so a reader knows when the fact was true.

### Can

- Use short quotations (a sentence or two) for commentary, criticism,
  or to mark a culturally significant phrase.
- Reference and link to authoritative published works in the credit
  apparatus.

### Cannot

- Copy paragraphs of prose verbatim from Wikipedia, Vogue, Business
  of Fashion, or any other source — even with attribution. Wikipedia
  text is CC BY-SA and would force the entire page into share-alike;
  most other sources are all-rights-reserved.
- Fabricate quotations or attribute statements to designers /
  executives that they did not make.
- Present speculation (succession rumors, takeover gossip,
  unconfirmed financials) as fact.

### Why

Verbatim copying is straightforwardly a copyright violation regardless
of whether the source is paywalled, free, or wiki-licensed. Beyond
copyright, an encyclopedic project's credibility rests on synthesis
and traceable claims; close paraphrase and unsourced assertion erode
both. CC BY-SA copyleft (Wikipedia) is a one-way contamination — once
on the page, the whole page must accept the license.

---

## 4. Personal information

Founders, designers, creative directors, executives, family owners.

### Should

- **Stick to public-record facts** — published biography, press-covered
  appointments, corporate filings, on-the-record interviews.
- **Treat deceased subjects with the same care as living ones** for
  reputational claims (defamation does not survive death, but
  credibility does).
- **Verify identity before naming** in cases of similar names or
  family successions (many luxury houses are family-run with shared
  surnames).

### Can

- State public roles, dates, public statements, and well-documented
  biographical events.
- Note documented relationships (founder ↔ business partner, designer
  ↔ successor) where these are central to the house's history.

### Cannot

- Publish private addresses, family details not in public record,
  health information, or sexuality / relationship status that the
  subject has not made public themselves.
- Repeat unsourced rumors about misconduct, financial impropriety, or
  succession disputes.
- Use a person's likeness commercially — see §1 on press-kit photos.

### Why

Living public figures retain a privacy interest outside their public
role; deceased figures' families and estates do too, and many luxury
houses are still family-owned and litigious about reputation.
"Encyclopedic" is not a license to publish anything published
elsewhere — the project takes on its own duty of care once it
republishes a claim.

---

## 5. Financial & business claims

Revenue, valuation, ownership stakes, employee counts, retail
footprint.

### Should

- **Cite the source and date** of any number — "approximately
  €19–20bn in recent years (per company-released figures, 2024)"
  rather than a bare figure.
- **Mark estimates as estimates** when the source is analyst
  speculation or trade-press reconstruction (common for private
  houses like Chanel and Armani).
- **Use ranges** when the underlying data is genuinely uncertain.
- **Re-verify before publishing** — financials and ownership are
  among the fastest-changing fields on these pages.

### Can

- Cite published company accounts, annual reports, regulatory
  filings, and major trade-press reporting (Business of Fashion,
  Vogue Business, FT, WSJ, Reuters).
- Note the order of magnitude when precise figures aren't available.

### Cannot

- Invent or extrapolate financial figures.
- Present analyst estimates as company-confirmed numbers.
- Cite ownership stakes that have changed without updating.

### Why

Financial misstatements about private houses can prompt corrections
or, at the extreme, defamation claims if they imply mismanagement.
Public houses are bound by securities-law-driven disclosure, so
unsourced numbers are easy to disprove and erode the project's
credibility.

---

## 6. Third-party code, fonts, and CDNs

Libraries, stylesheets, fonts, and assets loaded from external
services.

### Should

- **Record every third-party dependency** in [technological-stack.md](technological-stack.md)
  with name, version, license, and source URL.
- **Pin versions** in CDN URLs (e.g. `flag-icons@7`) — a floating
  version is a supply-chain risk.
- **Prefer permissive licenses** (MIT, Apache 2.0, BSD, ISC, OFL for
  fonts) so we never have to re-license our own work.
- **Honor each dependency's attribution requirement** in any required
  notice file, even when small and unlikely to be checked.

### Can

- Use MIT / Apache 2.0 / BSD / ISC / OFL libraries and fonts.
- Use jsDelivr, unpkg, and similar CDNs to deliver pinned versions of
  open-source assets.
- Self-host a third-party asset (preferred long-term) when the CDN
  becomes a reliability or privacy concern.

### Cannot

- Use **GPL** or **AGPL** code in this project — copyleft would
  cascade to the rest of the repo.
- Use commercial fonts (Adobe Fonts, Monotype) without an active
  license keyed to the published domain.
- Hotlink images, scripts, or fonts from third-party sites that don't
  publish a CDN policy — bandwidth theft, unstable, and trackable.

### Why

Open-source licenses are obligations, not gifts. Compliance is
typically trivial (a credit line, a license file) but failing it
exposes the project to enforcement action and undermines the broader
open-source ecosystem we depend on. Pinning versions protects against
both upstream breakage and supply-chain compromise.

---

## How to use this document

- **Before adding new media or text**, run through the matching
  section above. The "Should" bullets are not aspirational — they're
  the standard of care.
- **When in doubt, omit.** A missing photo or paragraph is recoverable;
  a takedown notice or correction is not.
- **When this document and another doc disagree**, this one wins on
  rights / attribution / ethics. Other docs win on layout and craft.
- **Update this document** when a new category of content arrives
  (audio, video, interactive media, user-submitted content) — don't
  stretch existing sections to cover them.
