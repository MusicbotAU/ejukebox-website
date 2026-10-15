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

On 15 Sep 2026 both pub scenarios gained the current feature list (Core features
plus add-ons, labelled "included in Complete"), but the price they sit under is
still the stale Full Package figure.

**Venue FAQs - done Thu 15 Oct 2026.** Every venue page now has a `faqs:` block, rendered
visibly and as `FAQPage`, within the OneMusic claim rules. They went live without a separate
wording sign-off; Marc is reading them over (A-List).

**Which domain owns functions, events and screens - decided Thu 15 Oct 2026: ejukebox.com.au**
(Marc). That is the "satellites as landing pages" shape: authority consolidates here, and
`/functions-events/` and `/in-venue-screens/` are now in the main menu as Jukebox for
Functions & Events and Photo Wall & Screens. Left to do, on the satellite (Marc looks after
it): point `ejukebox.tv/functions/` at `/functions-events/` and `ejukebox.tv/` at
`/in-venue-screens/`, by 301 or cross-domain canonical. That unblocks the content plan in
`functions-events.md`.

## Waiting on information

**`same_as:` has the App Store and Google Play developer pages and the ABN record** (Thu 15 Oct
2026), plus Facebook and X from `_config.yml`. Still needs LinkedIn, YouTube, Instagram and the
Google Business Profile - waiting on Marc's links (A-List, question 1).

**`llms.txt` is missing the NAP.** It has the phone but not the address
(218 Buffalo Road, Ryde NSW 2112) or the founding year (2013). The entity layer
only works if `org.yml`, `llms.txt` and the on-page copy state identical facts.

**NAP elsewhere.** Marc is updating the address in the footer and contact page.

## Housekeeping

**The `/music-for-gyms/` hero image is not a gym.** It shows a performer with a
microphone and a raised hand at a concert. Raised 15 Sep 2026: find a gym or
fitness-class photo. The venue layout loads `assets/images/venues/<slug>.jpg`, so
either replace `assets/images/venues/music-for-gyms.jpg` or set `hero_image:` in
`music-for-gyms.md`.

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
