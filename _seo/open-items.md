# Open items

Each entry says why it is still open, so nothing gets silently dropped.

## Needs a decision from Marc

**Prices still public outside the plans page (8 Nov 2026).** /products.html no longer shows a
price, but these still do, each as words in its own copy rather than through the switch:
- the home page FAQ "How much does background music for a business cost?" (Solo, Core, Complete);
- /background-music-for-business/ - its three plan cards and the extra-zone line;
- /music-channels/ FAQ - extra zones at $39;
- the FAQs on /music-for-cafes/, /music-for-hotels/, /music-for-pubs-bars/, /music-for-retail/,
  /music-for-rsl-clubs/ and /music-for-salons-spas/ (they use the `${core}` tokens);
- llms.txt - its plans section lists every price, so AI assistants still quote them;
- the Solo, Two Zones and On-Site Player videos speak their prices.
Taking them off means rewording each answer ("priced for your venue - ask us"), not flipping
the switch, and the cost questions are some of the most-searched FAQs on the site. Marc to say
whether they go too.

**/pricing still carries every wholesale rate in its page source.** Its script data
(`EJM_DATA`) holds all 14 `whl` figures, on the retail page that goes to venues - view source
and they are there. Pre-existing; left alone because Marc said not to touch /pricing or
/wholesale for now. The fix is to strip `whl` from the data in retail mode, the way public mode
now does. /pricing.json carries none.

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
