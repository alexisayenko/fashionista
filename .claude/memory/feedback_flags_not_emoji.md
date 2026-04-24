---
name: Don't use Unicode flag emoji on web pages
description: On Windows (including Windows 11), default fonts don't render Unicode country-flag emoji — they fall back to letter pairs. Use flag-icons CSS library instead.
type: feedback
---
For country flags on web pages in this environment, do NOT use Unicode flag emoji (e.g. `🇫🇷`, `🇮🇹`). Use the `flag-icons` CSS library (or an equivalent SVG-based solution) instead.

**Why:** On the user's Windows 11 machine — and for any site visitor on Windows — the default emoji font (Segoe UI Emoji) deliberately does NOT render flag emoji. The glyphs fall back to the bare two-letter regional-indicator pairs (e.g. "FR" instead of the French flag). This is a longstanding Microsoft policy (avoiding contested-territory curation), not a bug that will be fixed. macOS, iOS, Android, and ChromeOS all render flag emoji natively, which is why the issue is easy to miss when testing on other platforms.

**How to apply:**
- When a page needs country flags, add:
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flag-icons@7/css/flag-icons.min.css" />
  ```
  and use `<span class="fi fi-xx"></span>` (xx = ISO 3166-1 alpha-2 lowercase; e.g. `fi-fr`, `fi-it`, `fi-gb`, `fi-es`).
- Don't waste a round trip on Unicode flag emoji first — user has seen this fail before and flagged it explicitly on 2026-04-24.
- Same applies to any UI where flags are functional (language switcher, country picker) — use SVG flags, not emoji.
- Exception: if the interface is iOS/Android-only (e.g. an app with no Windows web surface), Unicode flag emoji may be acceptable.
