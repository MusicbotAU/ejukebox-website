# SEO changelog

Newest first. One entry per piece of work, with the reasoning, so a decision can
be revisited without re-deriving it.

---

## 2026-10-13 - Real app screens on eight pages

Marc's own grabs of eJukebox Request and of the Admin app's Voice menu, taken at Club
Buffalo (our demo venue), now illustrate the pages they belong to.

- **Fanned, not flat:** `_includes/app-fan.html` shows three phones like a hand of cards -
  one in front, two tilted and dimmed behind - so customers get the feel of the apps without
  a full-size blueprint. Files in `assets/images/apps/` (WebP, 500px wide, 23-45 KB); keys,
  paths and alt text in `_data/app_screens.yml`.
- **Where:** Song Requests (hero), the homepage (a new song requests section - the feature
  grid never mentioned requests), Download the Apps (a fan for each app), Voice &
  Announcements, Live Microphone, Admin app, Why Choose Us, Spotify Integration.
- **Cleaned before use:** stray window edges, a staff member's name, the build stamp and
  some technical audio detail removed. The live-mic screen joins two grabs of the same page.
- **Copy matched to the apps:** a dedication plays right before the song, not over its
  intro; the type-a-message button is "Hear it first"; Live Microphone starts from Voice,
  then Talk to the room now.

---

## 2026-10-13 - Site-wide sweep: rebuilds, photos, licensing, menu clean-up

Driven by a page-by-page audit. Each change is its own commit on gh-pages.

- **Rebuilt on the house pattern:** Download the Apps (both apps, own links), Licensing,
  Behind the Scenes, Song Requests (URL kept, retitled for "song requests" searches),
  Voice & Announcements, Live Microphone, Spotify Integration, Why Choose Us, Automated
  Jukebox System, Custom Branded Radio, 404. Shared pieces: `_includes/feature-styles.html`,
  `feature-video.html`, `photo-band.html`, `request-phone.html`, `admin-phone.html`.
- **OneMusic:** no OneMusic dollar figures, rate tables or calculators anywhere; their PDFs
  are excluded from the build; "cheaper OneMusic tier" only where true (shops and service
  businesses) - hospitality loses the Digital Copy/Delivery fee instead; clubs pay per
  member.
- **Photos:** 20 CC0 photos in `assets/images/stock/` (credits in `image-credits.md`);
  new venue headers for seven venue pages.
- **Menus:** Core & Complete, Benefits of Music and Playing Across the Country out of the
  menus; Custom Radio under Plans only; one dropdown arrow. `controller-app`, `why-us`,
  `stream-bells-hotel` and `full-package` are noindex and out of the sitemap - not deleted.
- **Retired copy:** music sped up 3%, Kiis FM / Kyle Sandilands, dedicated Irish and St
  Patrick's Day channels, "approvals, banned tracks, volume caps", soundscapes, cuisine and
  training channels, "every voice feature is built in", undated Soundtrack prices.
- **Incident:** a "word: word" colon in front matter took /music-for-pubs-bars/ down for
  about ten minutes; `build-website.sh` now refuses to build if any front matter fails.
- **Privacy Policy:** rewritten on the Australian Privacy Principles - it still carried a
  template note, an old NPP reference and a broken OAIC link. Awaiting Marc's review.
- **Open:** the Hits and Rock demo streams (listen2 /one and /three) return 404 - hidden
  on Listen to Demos until fixed.

---

## 2026-10-09 - eJukebox Admin app page, and the dead Controller app links replaced

**New page: `/admin-app/`** (`admin-app.html`, `ap-` prefix, built on the
`functions-events.html` pattern). A customer-facing page selling the new staff
app, with both store links in the hero and again in a download band.

**The old eJukebox Controller app is gone from both stores** (checked Fri 9
October 2026: the Play listing for `au.com.ejukebox.ejukeboxcontrollerv2` 404s and
an App Store lookup of id978645792 returns nothing). So:

- `/ejukebox-apps.html` is rebuilt from scratch around eJukebox Admin (`dl-`
  prefix): phone hero with both store badges, "Up and running in three steps"
  (download, find your venue, sign in), what the team can do, a note that
  customers need no app, and a "Trouble getting in?" FAQ. The steps use the app's
  own screen wording ("Search venues", "Venue code", "Continue with Google",
  "Ask to be added"). The old promo photo showed the retired app and the old
  logo, so it went.
- The nav, mobile menu and footer now link "eJukebox Admin App" where they
  linked "Controller App". `_layouts/venue.html` does the same on every venue page.
- `/controller-app.html` stays live, but its closing panel no longer claims the
  app is available and points to `/admin-app/` instead. Whether to retire that
  page into the new one (with a redirect) is Marc's call.
- `llms.txt`: the app lines and the staff-control answer now name eJukebox Admin.

**Store links.** iPhone: `apps.apple.com/au/app/ejukebox-admin/id6804389405`.
Android: `play.google.com/store/apps/details?id=au.com.ejukebox.media`. The iPhone
app is **unlisted** - App Store search for "ejukebox" does not return it - so both
pages say so and tell people to use the button. Never write "search the App Store".

**What the page claims, and where it comes from.** Every feature is from the two
public store listings (identical wording), so nothing here is news to a
competitor. The listing's "Platform tools" line is for eJukebox operators and is
left off. The plain-English examples ("Skip this song", "Switch to the Rock
channel", "What's on next?", "Turn automation back on") map to what Ask eJukebox
can actually do; the last one is the app's own help text.

**Add-ons are tagged, not priced.** Type a Message, Live Microphone, Scheduled
Announcements and both screen features carry an "Add-on" tag, per
`_data/pricing.yml`; recorded announcements, requests and reordering come with
Core. No prices on the page, so nothing can drift.

**The phone in both heroes is an illustration**, built in CSS like the live feed
on `/functions-events/`, not a screenshot. It lives once in
`_includes/admin-phone.html` (`aph-` prefix, styles emitted once per page) and
both pages include it. Swap in real App Store screenshots if wanted.

**App Store badge.** `blobs/AppleAppStoreLogo.png` has its lettering and outline
as transparent cut-outs, so on a dark page they show the background and the
badge looks dim. Both new pages put a white backing behind it, clipped to the
badge's corners.

**Theme gotchas, again.** `#main-content h1/h2/h3` set size, colour and margins
with `!important` and an id selector, and `p` colour is `!important`. The page's
heading overrides are written as `#main-content .ap-... h3 {... !important}`,
and the phone illustration uses `div`s, not `p`s. On phones the theme also gives
every `img` a 15px top and bottom margin, which framed the App Store badge in
white until `#main-content .ap-badges img { margin:0 !important }` (and `dl-`).

**Built and checked locally for the first time.** Marc's PC already had Ruby 3.3
and the `github-pages` gem (232), the same one GitHub's legacy Pages builder
uses. `Tools/jekyll-pages/` (outside this repo) holds a Gemfile pinned to it and
`build-website.sh`, so a local build matches production: Jekyll 3.10, not the
Jekyll 4 this repo's own Gemfile asks for, which GitHub ignores. Every changed
page was checked in a browser at desktop and phone sizes.
`content-inventory.md` was regenerated from a build that left out the parked
`tv-on-your-screens.html`: 37 indexable pages, 0 issues.

---

## 2026-10-06 - First named customer testimonial: Peak Health & Fitness

Samantha Morton, owner of Peak Health & Fitness (a family-owned gym in Walkerston
QLD), emailed Marc about moving to eJukebox and said yes to it going on the site
(Tue 6 October 2026). The Testimonials page had no customer quotes at all; this is
the first named one.

**Where it shows.** In full at the top of `/people-love-ejukebox.html` (why they
switched, how the changeover went, what the members think). As a short card on
`/music-for-gyms/`, under the benefits, and at the foot of the homepage. Both cards
link to the full story at `#peak-health-fitness`, and the story links back to the
gyms page.

**One source.** The wording lives in `_data/testimonials.yml` and renders through
`_includes/testimonial.html`, whose `tm-` styles are emitted once per page. A venue
page gets a card by adding `testimonial: <id>` to its front matter. The homepage's
existing "Diana F." quote moved into the same file so the two cards match; the old
`.testimonial-card-home` styles went with it.

**Her words, trimmed only.** Excerpts are whole sentences as she wrote them. The
only edits are her long dash set as a hyphen and one misplaced comma. Australian
Consumer Law expects a testimonial to be genuine, so never reword one.

**Nightlife is not named.** She spoke well of them and moved purely on cost, so the
sentences about Nightlife are left out and our intro says "another provider".
Naming them is Marc's call, and worth checking with her first.

**No `Review` markup,** as before (see `structured-data.md`).

---

## 2026-09-15 - Licensing page: headings, outline, OneMusic box, rate tables

A review of `/licensing.html`, the page behind more than half of the site's
search impressions. Five changes, all on that page.

**Every heading now says the thing.** The old ones were brochure style: "The
Short Version: What You Need to Know", "Understanding OneMusic Licensing - In
Plain English", "The Spotify Trap", "The Bottom Line", "It Costs More - Here's
Why It's Worth Every Cent". They now use the words people search with, several
as questions from Search Console: "How much is a music licence for a shop or
salon?", and "Do I need a licence to play Spotify at work?", which already ranked
6.5 for that query. The Spotify H2 is now followed by a one-sentence answer.
Sentence case throughout, matching the hub page. H1 is "Music licensing for
Australian businesses"; the title tag is unchanged.

**Outline fixed.** Card, callout and FAQ headings sat as H4s straight under H2s,
and the OneMusic box nested a second H2 under a near-empty one. It now runs
H1 > H2 > H3 > H4 with no level skipped, and the FAQ questions are H3s inside
`<summary>`. Demoted headings keep their old look through `#main-content .lic-h3`,
because the theme's global `#main-content h3` rule is `!important`. The visible
FAQ questions now match the `faqs:` front matter word for word, so the FAQPage
schema and the page agree.

**"What is OneMusic Australia?"** was a centred block with a bullet list. Now left
aligned: logo and intro, APRA AMCOS and PPCA as two cards side by side (stacked
on mobile), then the one-licence line and the button. `.onemusic-info` and
`.package-intro` are left aligned as well; both are used only on this page.

**Retail rate tables collapse to three rows** (1 to 500 m²) with a "Show all N
floor areas" button. Every row stays in the HTML, so crawlers, AI answer engines
and visitors without JavaScript get the full table, and print shows it all. While
the cards sit side by side the four open together, which keeps the same floor
area level for comparison; on a phone each opens alone. Two tables deliberately
stay open: the pub packages (listed Sapphire first, so three rows would hide Gold,
Silver and Bronze, the tiers small venues need) and the add-on fees (hiding a row
could hide a fee a venue owes).

**Pub scenarios list the current features.** Both callouts add AI Song Search,
voice announcements and Playing Across the Country (all in Core), plus a second
list of add-ons: photo displays and Guest Photo Wall, voice dedications, live
microphone, typed and scheduled announcements, request screen, Spotify
integration and functions mode. They are labelled as add-ons to Core that come
included in Complete, worded from `_data/pricing.yml`, and link to their feature
pages. "100% legal - zero compliance risk" became "Made for commercial use - with
your OneMusic licence in place, your music is fully above board", since the venue
always holds its own licence.

Still open: the same scenarios price a "Full Package" at $130 and $170/mo that
matches no current plan (see `open-items.md`).

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
