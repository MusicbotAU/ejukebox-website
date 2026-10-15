# SEO working folder

The record of SEO and structured-data work on ejukebox.com.au: what has been
done, why, and what is still open.

**This folder is never published.** Jekyll ignores directories starting with an
underscore, and `_seo` is also listed explicitly in `_config.yml`'s `exclude`.
Nothing here reaches the live site, so notes can be blunt.

## What is in here

| File | What it is |
|---|---|
| `CHANGELOG.md` | Dated log of SEO work. Append to the top. |
| `structured-data.md` | How the JSON-LD layer works and how to extend it. |
| `content-inventory.md` | **Generated.** Per-page titles, descriptions, H1s, schema. |
| `open-items.md` | The backlog, with the reason each item is still open. |
| `functions-events.md` | Keyword brief for the functions/events build-out. |
| `audit.py` | Regenerates `content-inventory.md` from the built site. |

## Running the audit

```bash
bundle exec jekyll build && python3 _seo/audit.py
```

It reads `_site/`, not the source, so it reports what actually ships. It flags
missing or oversized titles and descriptions, duplicates, missing H1s, pages
that lost their structured data, and noindex pages leaking schema. Run it before
any push that touches page metadata.

## Ground rules that keep tripping us up

- **Every significant change carries three companions** (Marc, Thu 15 Oct 2026).
  Update **`llms.txt`** so AI assistants get the same facts as the page; update
  **the page's schema** (its `faqs:`, `howto:`, `schema_service`, `schema_apps` and
  `schema_about` front matter - see `structured-data.md`); and **interlink** - link
  the page from, and to, the related venue, feature, app, pricing and licensing
  pages wherever it helps a reader. A change is not finished until all three have
  been considered.
- **UK/Australian English** in all copy. Locale is `en-AU` (`lang:` in
  `_config.yml`); this drives both `<html lang>` and `og:locale`.
- **Prices live in `_data/pricing.yml`** and nowhere else. Anything that states
  a price should render from it, or it will drift. See the `$115/month` and
  `$1/Day` entries in `CHANGELOG.md` for what happens when it does not.
- **OneMusic claims are constrained.** The licence is never "included". Moving off
  personal streaming lowers the venue's OneMusic bill: a lower *tier* for retail,
  and for hospitality - whose tier is set by its TV screens - no Digital
  Copy/Delivery add-on. Collect-and-remit is pubs and clubs only. Every claim,
  on-page or in schema, has to respect that.
- **Titles <= 60 characters, descriptions <= 160.** Enforced by `audit.py`.
