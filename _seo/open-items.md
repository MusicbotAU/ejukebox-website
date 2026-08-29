# Open items

Each entry says why it is still open, so nothing gets silently dropped.

## Needs a decision from Marc

**The `$1/Day` plan is retired but still promoted on `/licensing.html`.**
`dollar-a-day.markdown` is correctly `noindex` and redirects to `/products.html`,
but `licensing.md` still sells the plan in ~12 places, at $365/yr, with links to
that dead stub. The page is indexable and carries our `FAQPage` and `HowTo`
schema, so assistants reading it will quote a plan that cannot be bought.

Two decisions are needed before it can be rewritten:

1. **Which current plan replaces it in the retail comparisons?** Solo at $49/mo
   ex GST is the obvious candidate, but $49/mo is **$588/yr against the retired
   $365/yr**, so the headline saving in both retail scenarios collapses from
   ~$262/yr to roughly $39/yr. That is a materially different marketing claim and
   not ours to invent.
2. **Which OneMusic tier does each current plan put a retail venue on?** The page
   currently maps `$1/Day -> Silver` and `Full Package -> Silver Lite`. The
   equivalent mapping for Solo / Core / Complete has to come from Marc. Guessing
   would publish a false licensing claim.

Also check the ex-GST vs inc-GST basis: `pricing.yml` is ex GST, the OneMusic
figures on the page appear to be inc GST, and the comparison tables mix them.

**Venue FAQs.** Only `music-for-pubs-bars` and `irish-pub-music` have a `faqs:`
block. Missing on cafes, gyms, hotels, medical, nightclubs, restaurants, retail
and salons-spas. The `venue` layout renders `faqs:` visibly *and* `schema.html`
turns it into `FAQPage`, so writing them improves the page and the structured
data at once. Needs sign-off on wording; must respect the OneMusic claim rules.

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
