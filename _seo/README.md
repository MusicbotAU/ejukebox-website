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
- **No public page shows a price** while `public_prices: false` in `pricing.yml` (Marc: the
  plans page Sun 8 Nov 2026, everywhere else Fri 13 Nov 2026). /products.html keeps every plan
  and product and says "Contact us" wherever a price was; each of those links opens /contact/
  with the package pre-ticked (`?plan=&zones=&feature=&package=#ctForm`). FAQ answers and
  llms.txt are written without prices - don't use the `${core}` tokens on a public page - and
  `audit.py` flags any whole-dollar figure on an indexable page or in llms.txt (amounts with
  cents are OneMusic fees and research figures; the referral pages are allowed). A video that
  says a price carries `video_shows_price: true` and renders nowhere public until it is
  re-recorded. /pricing, /wholesale and /pricing.json ignore the switch: unlisted, noindex and
  disallowed in robots.txt, in every crawler group. /pricing's script data is retail-only;
  only /wholesale carries `whl` figures. Never put a wholesale figure into a page a venue
  can open.
- **OneMusic claims are constrained.** The licence is never "included". Moving off
  personal streaming lowers the venue's OneMusic bill: a lower *tier* for retail,
  and for hospitality - whose tier is set by its TV screens - no Digital
  Copy/Delivery add-on. Licence admin is pubs only: we act as the authorised
  representative on a pub's OneMusic licence (OneMusic, Mar 2026). Clubs are not covered,
  so never promise a club collection. Every claim,
  on-page or in schema, has to respect that.
- **Titles <= 60 characters, descriptions <= 160.** Enforced by `audit.py`.
- **Feature videos live in Azure, not the repo** - storage account `ejukebox01`, container
  `websiteblobs`, folder `features/`. To add one: upload it there, put its file name in the
  feature's `video:` in `pricing.yml` (spaces as `%20`) with `video_secs` and `video_date`,
  and grab its poster from the title slide -
  `ffmpeg -ss 10 -i <video> -frames:v 1 -vf scale=1280:720 x.png`, saved as
  `assets/images/videos/<id>-video-ejukebox.webp` (WebP, quality 80). Then
  `{% include feature-video.html id="<id>" %}` anywhere; the pricing tiles and the schema
  pick it up on their own. The voiceover scripts are the decks' speaker notes in
  `Marketing/eJukebox/2026/v3` and `v4` - read them before writing copy around a video.
