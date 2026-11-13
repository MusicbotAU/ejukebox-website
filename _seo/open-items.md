# Open items

Each entry says why it is still open, so nothing gets silently dropped.

## Needs a decision from Marc

**The website repo is public on GitHub (13 Nov 2026).** `MusicbotAU/ejukebox-website` - and
`ejukebox-music` - can be read by anyone, and `_data/pricing.yml` holds every retail and
wholesale figure; so do these notes and the git history. No page shows a price now, but a bot
reading GitHub gets the lot. The fix is making the repos private: GitHub Pages keeps publishing
from a private repo on a paid plan (GitHub Team, for an organisation), and the site stays
public. Marc's call - it is billing and an account setting.

**Three feature videos say a price, so they are held back (13 Nov 2026).** *Solo - Streams To
Your Device* says $49 a month, *Two Zones Included* $39 a zone, and *On-Site Player* "typically
under $500 + GST" and that the trial covers it - out of date since the computer went to $650
+ GST (Marc, 12 Nov). Each title slide shows the figure as well. They carry
`video_shows_price: true` in `pricing.yml`, so no public page shows them: the plans page cards
have no Watch button, Behind the Scenes has no video section, the Solo block on
/background-music-for-business/ shows only the one-area video, and six venue pages (cafes,
retail, salons, hotels, pubs, RSL) have no video section. /pricing and /wholesale still play
them. Re-record each without the figure (decks in `Marketing/eJukebox/2026/v4`), upload under
the same name, grab the new title-slide poster (README), and delete the flag line - every page
picks it back up.

**Prices off every public page - done Fri 13 Nov 2026** (Marc: "remove the pricing from
everywhere"). The home page, channels and six venue FAQs, the business music page and llms.txt
are reworded, and /pricing's source no longer carries the wholesale figures. See CHANGELOG.

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

**Three feature videos say something the site does not (3-4 Nov 2026).**
- *Licensed and Family-Friendly* - the slide 2 voiceover puts the Digital Copy and Delivery
  add-on at "roughly four hundred and seventy one dollars a year". OneMusic's current card
  (1 Sep 2026 - 31 Aug 2027) has it at $488.88 incl GST, and the figure moves every
  September. Re-voice that line without a dollar figure and upload it under the same name -
  every page picks it up. Until then the video is on the pricing tiles and /music-channels/
  only, not on /licensing.html, which deliberately quotes no OneMusic fees.
- *OneMusic Administration* - its slides say "We can collect your OneMusic licence fee" with no
  venue type. Since 4 Nov the site says pubs only (authorised representative, OneMusic Mar 2026),
  so "for pubs" on the slide would match it.
- *Guest Photo Wall* - slide 1 says the display "doubles as the Interactive Request Screen".
  That screen needs a touchscreen (`pricing.yml`), so a guest-photo TV is not one. Worth a
  tweak next time the deck is open.

**Should the feature videos be in Google's video index?** `video_schema` in `pricing.yml` is
on, because the videos already play on public pages. Ben (ITV Systems) asked on 25 Jun 2026 to
keep how-to videos unindexed so competitors cannot find them. One line turns it off.

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

**The twelve older feature videos are heavy.** 53-98MB each (6-11 Mbit/s) for about a
minute of slides; the twelve uploaded on 3 Nov are 13-15MB at 1.7 Mbit/s and look the same.
Re-exporting the old ones at the new settings and uploading under the same names would make
them start faster on a phone, with nothing to change on the site.

**The `websiteblobs` container can be listed by anyone** (public access level "Container"),
which also lists `pitch/eJukebox-Kyle-Sandilands-Live.mp4`. Setting it to "Blob" keeps every
video on the site playing and stops the listing. Marc's call - it is an Azure security setting.

## Deliberately not doing

**`Review` / `AggregateRating` markup on `people-love-ejukebox`.** Self-serving
review markup on your own site breaches Google's guidelines and risks a manual
action. Has to come via a third-party profile.
