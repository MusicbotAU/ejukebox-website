# Open items

Each entry says why it is still open, so nothing gets silently dropped.

## Needs a decision from Marc

**Scenarios 3 and 4 on `/licensing.html` still price the "Full Package".**
Cleared of `$1/Day` on 4 Sep 2026, but the two pub scenarios still quote an
`eJukebox Full Package` at `from $130/mo` and `from $170/mo` ex GST. `pricing.yml`
has Core at $169 and Complete at $299, and `/full-package.html` is now titled
"Core & Complete". Needs Marc to say which plan each pub scenario should quote
before the totals ($2,973/yr and $4,513/yr) can be recomputed.

Same ex-GST vs inc-GST question applies: `pricing.yml` is ex GST, the OneMusic
figures on the page are inc GST. The retail scenarios now label the eJukebox line
"ex GST" to make the mixed basis visible, rather than silently adding the two.

**Venue FAQs.** Only `music-for-pubs-bars` and `irish-pub-music` have a `faqs:`
block. Missing on cafes, gyms, hotels, medical, nightclubs, restaurants, retail
and salons-spas. The `venue` layout renders `faqs:` visibly *and* `schema.html`
turns it into `FAQPage`, so writing them improves the page and the structured
data at once. Needs sign-off on wording; must respect the OneMusic claim rules.

**Which domain owns functions, events and screens.** `ejukebox.tv/functions/`
and `/functions-events/` sell the same product to the same audience with the same
guest-photo-wall pitch; `ejukebox.tv/` and `/in-venue-screens/` duplicate each
other too. All three domains are self-canonical and the main site links to
neither satellite, so none of its authority reaches the sites meant to carry
these keywords. Two workable shapes, pick one and apply it consistently:

- **Satellites as landing pages.** They stay 3-4 pages, sales-led, and
  cross-canonical to the `.com.au` equivalent wherever a page duplicates it.
  Consolidates authority on one domain. Safest for rankings.
- **Satellites as their own properties.** `.tv` owns every screen and photo-wall
  query, `.music` owns every channel and licensing query, and `.com.au` cuts
  those pages back to a short overview that links out. Cleanest topically, but it
  means deliberately weakening pages on `.com.au` that already rank.

What cannot hold is the current state. This blocks the functions/events content
in `functions-events.md`, which is otherwise ready to brief. The interlinking fix
(`/in-venue-screens/` and `/functions-events/` -> the `.tv` equivalents) is worth
doing either way and does not need the decision.

## Waiting on information

**`same_as:` is empty** in `_data/org.yml`. It picks up Facebook and Twitter from
`_config.yml` automatically. Needs LinkedIn, YouTube, Instagram etc.

**`llms.txt` is missing the NAP.** It has the phone but not the address
(218 Buffalo Road, Ryde NSW 2112) or the founding year (2013). The entity layer
only works if `org.yml`, `llms.txt` and the on-page copy state identical facts.

**NAP elsewhere.** Marc is updating the address in the footer and contact page.

## Housekeeping

**Git remote still points at the old repo URL.** Pushes work on GitHub's
redirect, which will not last forever:

```bash
git remote set-url origin https://github.com/MusicbotAU/ejukebox-website.git
```

**No analytics on the site at all.** GA4 / GTM still to be set up; a six-event
plan is ready.

**7-day vs 30-day trial contradiction.** The pricing menu offers 30 days with
hardware installed; the hero, venue pages and `free-trial.markdown` say 7 days
for a stream URL. `index.markdown` carries both. They may be two genuine offers,
but a visitor sees both numbers.

## Deliberately not doing

**`Review` / `AggregateRating` markup on `people-love-ejukebox`.** Self-serving
review markup on your own site breaches Google's guidelines and risks a manual
action. Has to come via a third-party profile.
