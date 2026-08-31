# SEO changelog

Newest first. One entry per piece of work, with the reasoning, so a decision can
be revisited without re-deriving it.

---

## 2026-08-31 - Homepage retargeted from "music for business" to "jukebox"

**Homepage `title` and hero `h1` both led on "music for business".** Semrush AU
volume for that phrase is 70/mo at KD 33, and `/licensing.html` already ranks for
it at position 42, so the homepage was competing with our own page for a term
neither ranks well for.

The homepage's only real traction is the jukebox cluster: `jukebox` (2,400-3,600
/mo) at position 42, `the jukebox` (170-320/mo) at 38, and `jukebox purchase
australia` (70/mo) at 36. All three land on `/`. Every other ranking the domain
holds is on `/licensing.html`.

- `title`: "Music for Business Australia, Pubs to Retail" -> "Jukebox Music for
  Pubs, Clubs, Cafes & Retail" (56 chars with the appended brand).
- `h1`: "Music for Business: Pubs, Clubs, Cafes & Retail" -> "Jukebox &
  Background Music for Pubs, Clubs, Cafes & Retail".

"Background music" stays in the H1 because "jukebox" alone reads as
interactive-only, when half the product is the curated daytime playlist. The
venue list stays because it is the vocabulary AU operators use. "Licensed" and
"Australian" are deliberately absent from both: the hero eyebrow directly above
the H1 already says "Licensed music for Australian venues".

Caveat to revisit: bare `jukebox` is tagged informational and a good share of it
is people after physical machines, party hire and the Jukebox app. The venue
qualifiers are what make the term worth holding.

**Not yet verified visually.** The H1 is 58 characters against the old 47 and
likely takes an extra wrapped line. Chrome headless would not screenshot the page
locally, cause not established. If the wrap is poor, the fallback is "Jukebox &
Background Music for Your Venue" (41 chars); the title tag and eyebrow carry the
venue keywords regardless.

**Removed the html5shiv.** `_layouts/default.html` loaded
`https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js`, which taught IE8 to
style HTML5 elements. Two reasons it is gone: IE8 is long dead, and MaxCDN's
open-source CDN was retired years ago, so the URL would fail even for the
browser it targeted.

Worth recording precisely, because it was first written up here as a
performance bug and it was not one: the tag sat inside
`<!--[if lt IE 9]>...<![endif]-->`. Conditional comments are inert in every
browser except old IE, so no modern browser ever requested it and no page load
was ever delayed by it. It was dead weight in the markup, not a hanging request.

---

## 2026-08-29 - Locale, metadata audit, SEO folder

**Australian English locale.** `og:locale` was `en_US` and `<html lang>` was
hardcoded `en-US`. `jekyll-seo-tag` defaults `og:locale` to `en_US` whenever
`lang:` is unset in `_config.yml`, and the layout never read it. Set
`lang: en-AU`; the layout now reads it and seo-tag converts the BCP 47 hyphen to
`en_AU` for Open Graph on its own.

**Stale `$115/month` in `site.description`.** Matched no current tier
(`pricing.yml`: Solo 49, Core 169, Complete 299). It reached further than a
normal stale fallback because `schema.html` uses `site.description` for the
`WebSite` node, so the wrong price was in structured data on every page.
Rewritten to "from $49/month", trimmed 239 -> 153 characters.

**`404.html` had no title or description**, so seo-tag fell back to the site
title plus that 239-char description, producing a 250-character `<title>`. It was
also indexable and emitting a full JSON-LD graph. Now titled, described and
`noindex`, which suppresses the graph too.

**Missing H1** on `/stream-bells-hotel.html` - the page opened at H2. Added.
Found by `audit.py` on its first run.

**Added this folder** plus `audit.py`.

State after: 35 indexable pages, all with schema, all titles <= 60 chars, all
descriptions <= 160, no duplicate titles/descriptions/H1s, canonical and Open
Graph everywhere.

---

## 2026-08-28 - Structured data layer

Built the whole JSON-LD layer from scratch; the site previously had none beyond
`jekyll-seo-tag`'s thin `WebSite` block. See `structured-data.md` for how it
works.

- **`_data/org.yml`** - entity source of truth. Musicbot Pty Ltd, ABN
  44 163 918 054, 218 Buffalo Road Ryde NSW 2112, founded 2013, phone, email.
- **21 `areaServed` regions** - Australia, all 8 states and territories, all
  capitals, plus Kalgoorlie WA, Bundaberg QLD, Central Coast NSW and Sydney CBD,
  each nested inside its state inside Australia. Applied to the `Organization`
  node *and* all 25 `Service` nodes, not just the homepage.
- **40 `knowsAbout` topics** - music programming, curation, dayparting, audio
  processing, multiband AGC, music levels, sound mixing, PA and venue sound
  design, AV installation, OneMusic/APRA AMCOS/PPCA, radio DJ announcing,
  voiceovers, party and function hosting, wedding music, SEO.
- **`_includes/schema.html`** - the generator. 20 pages given schema front
  matter; venue and product pages generate with no per-page work at all.
- **3 HowTos** - licensing (6 steps), free trial (5), request portal (4).
- **Licensing page** - its 6 real on-page Q&As as `FAQPage`, plus `mentions`
  entity links to OneMusic Australia, APRA AMCOS and PPCA.
- **Product offers written inline** rather than referenced by `@id`. Valid JSON-LD
  either way, but Google's parser does not resolve cross-node offer references
  reliably and an unresolved one makes the Product ineligible for a rich result.

**OneMusic logo** - rendered as two nested white boxes with the wordmark against
the border. Two causes: the theme's global `#main-content img` rule put a
border-radius and box-shadow on the logo's *opaque* white PNG, drawing a second
card inside the first; and the PNG itself (300x120) has an ink bounding box of
`x 0..299`, so the artwork runs to the literal pixel edge with zero horizontal
margin. Fixed with an ID-qualified override plus asymmetric padding
(`12px 30px`) that lands at an even ~30px optical margin.

---

## Earlier

- **2026-08-28** - IndexNow key file plus a workflow submitting changed pages on
  deploy.
- **2026-08-28** - `robots.txt`: allow all, point at the sitemap, welcome AI
  crawlers.
- **2026-08-28** - Shortened `site.title`; rewrote over-long titles and
  descriptions.
- **2026-08-28** - `llms.txt` published: a structured summary of eJukebox for AI
  assistants and answer engines.
- Sitemap first submitted **2026-08-28**.
