# SEO changelog

Newest first. One entry per piece of work, with the reasoning, so a decision can
be revisited without re-deriving it.

---

## 2026-09-15 - New hub page for "background music provider"

Marc flagged that we rank nowhere for "background music providers". No page was
about it: the phrase appeared only in passing on `/licensing.html` and the venue
pages, and the homepage was moved to "jukebox" on 31 Aug. Search Console showed
Google testing us for the cluster anyway (`music for businesses` 125 impressions
at position 51, `background music for business australia` at 29,
`commercial background music supplier` at 8 via the licensing page).

New page: `/background-music-for-business/`. Decisions worth keeping:

**Slug on the head term, "provider" in the title.** Each exact phrase is ~10/mo;
provider, supplier, service and "for business" together are a few hundred, and
Google treats them as one intent. Title "Australian Background Music Provider
for Business" (60 with the suffix).

**Written to be chosen from, not to sell.** Page one for the query is OneMusic's
supplier directory, APRA's supplier guide, Moov and Evolved Sound: comparison
intent. So the centrepiece is a "what to compare between providers" table, with
question-shaped H2s (Spotify, OneMusic, cost). No competitors are named.

**It is now the parent of the venue pages.** The "Music for Your Venue" menu
pointed at `#`; it now points here, with the page as the first dropdown item, in
the mobile menu and at the top of the footer venue column. Contextual links
added from the homepage licensing paragraph and the licensing Silver/Gold
callout, both anchored on "background music provider".

Prices and zone figures render from `pricing.yml`. Licence claims follow the
rules: tier reduction only, collect-and-remit named for pubs and clubs only.
Added to `sitemap.xml` and `llms.txt`.

Biggest lever is still off-site: OneMusic's directory ranks #1 for this query and
lists us as Whisperscape. Getting that listing renamed is still an open action.

---

## 2026-09-04 - The $1/Day plan is gone from the site

Marc spotted the retired `$1/Day` plan still being sold on `/licensing.html`.
It is now removed everywhere. A sweep of the whole repo for `$1/day`, `$365`,
`dollar a day` and `dollar-a-day` returns only the `permalink` in
`dollar-a-day.markdown`, which stays so old inbound links keep redirecting.

Twelve places changed, and two of them needed a decision rather than a
find-and-replace:

**The tier cards no longer map plans to OneMusic tiers.** They tagged Silver as
"eJukebox $1/Day Plan" and Silver Lite as "eJukebox Full Package". By OneMusic's
own definitions, quoted on the same page, the only difference between the two is
device count: Silver is unlimited devices, Silver Lite is one. So the tags are now
"eJukebox - Multiple Devices" and "eJukebox - Single Device". This is worth
keeping: it is true straight from the source document, and it does not go stale
the next time the plan line-up changes.

**The retail scenarios lead on the licence saving, not the total.** They priced
the eJukebox route at $365/yr and claimed "save up to $262/yr vs Spotify". Solo
is $49/mo ex GST, so on the same arithmetic the total-cost saving collapses to
about $39/yr and the old headline could not survive. Marc chose to price the
scenarios honestly at Solo and move the headline onto the licence tier itself:
a small shop's OneMusic bill drops from $642/yr on Gold to $183/yr on Silver, a
$459/yr saving, and $745 to $287 on the 100 m² example. That is the page's actual
thesis anyway, and it is the number the rest of the page already claims.

The two "On a Tight Budget? The $1/Day Plan Saves You Money" callouts in the pub
scenarios now point at Solo as the smaller starting point, with no price claim.
The Bottom Line stat card went from "From Just $1/Day" to "Plans From $49/mo".

Still open: the same two pub scenarios quote a "Full Package" at $130 and $170/mo
that does not match `pricing.yml`. Logged in `open-items.md`.

---

## 2026-09-03 - Functions & events keyword research filed

New `functions-events.md` in this folder: the keyword brief for the area of the
business about to be built out. Distilled from the 1 Sep Keyword Planner drop
(600 AU keywords, 8 clusters) plus the 28 Aug Search Console export. Raw files
stay in OneDrive `Keywords/Data Drops/`, never in this repo, since this repo is
the live public site.

Three things worth carrying forward:

**The cluster is greenfield.** Six months of Search Console holds nine
impressions across every functions-shaped query the domain surfaced for, and
`/functions-events/` and `/in-venue-screens/` have zero clicks between them.
Nothing to protect, so no reason to be cautious about restructuring.

**Photo booth is the target, attacked sideways.** `photo booths` is 22,200/mo at
competition index 19 and grew 21% over the year. Intent is hire-a-booth for a
night, so it will not convert on a product page; it converts on the comparison
against a guest photo wall on the screen the venue already owns.

**The wedding speech and toast clusters are dead, do not write for them.**
539 keywords, down 45% and 36% in twelve months, near-uniformly. That decline
shape is a cluster being absorbed by AI answers. It would have been the obvious
content play and it is now a trap.

Also logged in `open-items.md`: which of the three domains owns functions, events
and screens. `ejukebox.tv/functions/` duplicates `/functions-events/`, all three
domains are self-canonical, and the main site links to neither satellite. That
decision blocks writing anything for this cluster.

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
