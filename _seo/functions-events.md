# Functions & events: keyword brief

Written 3 Sep 2026, ahead of building this area out. It is the durable version
of the 1 Sep keyword drop: what the search demand actually looks like, what to
chase, what to leave alone, and the one decision that blocks all of it.

**Raw data** (not in this repo, it is not published):
`OneDrive/eJukebox - Documents/Website/Corporate Website/Keywords/Data Drops/`

| Drop | What |
|---|---|
| `2026-09-01/keyword-planner/` | Two Google Keyword Planner exports, AU/AUD, 1 Aug 2025 to 31 Jul 2026. 600 keywords, seeded around guest photo walls, speech capture and event music. |
| `2026-09-01/analysis/README-findings-2026-09-01.md` | Full cluster analysis, per-keyword tables, three-site position. |
| `2026-08-28/gsc/` | Search Console, last 6 months vs previous 6. `Queries.csv`, `Pages.csv`. |

## Where we stand: nowhere

Two pages already sell this product and neither is visible.

| Page | Clicks | Impressions | Position |
|---|---:|---:|---:|
| `/functions-events/` | 0 | 8 | 5.5 |
| `/in-venue-screens/` | 0 | 21 | 8.0 |
| `/live-microphone/` | 0 | 63 | 8.7 |
| `/voice-announcements/` | 0 | 42 | 8.8 |
| `/playing-across-the-country/` | 0 | 20 | 6.7 |

Six months of Search Console holds **nine impressions** across every
functions-shaped query the domain surfaced for: `song display screen` (2, pos
11), `photo slide show` (1, pos 2), plus a handful of phone-as-microphone and
karaoke-licence strays. Positions look flattering only because the impression
counts are tiny; these are long-tail near-misses, not rankings.

The read: this is greenfield. Nothing to protect, nothing to cannibalise on the
`.com.au` side, no baseline to defend. Whatever gets built is the first attempt.

## The demand, by cluster

Direction compares Aug-Oct 2025 against May-Jul 2026 on the same keyword set,
which is more honest than Planner's own "YoY change" column.

| Cluster | Searches/mo | Terms | Direction | Intent |
|---|---:|---:|---:|---|
| Photo booth | 22,720 | 7 | **+21%** | adjacent, strong |
| Live / event music | 6,750 | 7 | -8% | mostly wrong |
| Wedding speech | 6,340 | 270 | **-45%** | informational, B2C |
| Wedding toast | 2,830 | 269 | **-36%** | informational, B2C |
| Photo / picture wall | 1,090 | 25 | -23% | mostly home decor |
| Guest photo sharing app | 470 | 17 | -15% | **exact product match** |
| Social media at wedding | 50 | 5 | flat | weak |
| Song dedication | 20 | 2 | flat | weak |

## Targets, best first

### 1. Photo booth, attacked as the alternative

`photo booths` is 22,200/mo at competition index 19, which is an unusually soft
head term for that volume, and it grew 21% over the year while everything else
in the set shrank. The last four months all sat at 27,100.

| Keyword | Vol | Comp | Idx | Bid |
|---|---:|---|---:|---|
| photo booths | 22,200 | Low | 19 | $1.19-$4.10 |
| photo booth photos | 320 | Low | 32 | - |
| photo booth nearby | 140 | Low | 19 | $1.58-$3.67 |

Intent is hire-a-booth for one night, not buy-a-system, so a product page will
not convert it. The angle that does is the comparison: a guest photo wall on the
screen the venue already owns, against a hired booth at $600-900 a night.
Comparison, cost-of-hire and versus content, not a service page.

### 2. Guest photo sharing app

| Keyword | Vol | Comp | Idx | Bid |
|---|---:|---|---:|---|
| wedding photo app | 140 | High | 72 | $1.11-$3.16 |
| wedding pics app | 140 | High | 72 | $1.11-$3.16 |
| wedding photo sharing app | 50 | Medium | 57 | $1.29-$2.98 |
| wedding photo app for guests | 20 | High | 76 | $1.00-$2.49 |

Only 470/mo, but the only cluster where the searcher wants precisely what we do.
Index 72-76 with $1-3 bids means the app vendors are paying for these, which is
the clearest signal in the whole drop that the term converts. Lead on the two
differentiators: no app to install, and it lands on the venue's screen rather
than in a shared album nobody opens again.

### 3. Live / event music: the tail only

`live music` at 6,600/mo is consumers looking for a gig tonight. Ignore it. The
usable tail is roughly 120/mo: `upcoming gigs` (90), `event music` (20),
`jukebox event` (20), `function music` (10). `/playing-across-the-country/`
already has the right shape for this.

## Do not chase

- **Photo / picture wall, 1,090/mo.** Reads like ours, is not. "wedding photo
  wall", "wedding pictures on wall", "ideas for wedding photos on wall" are
  people hanging framed prints at home or building a physical backdrop.
  Competition index 91-97 is homewares and print retailers bidding. The six
  140/mo variants are one concept Planner has split into six rows.
- **Wedding speech and toast, 9,170/mo combined across 539 keywords.** Down 45%
  and 36% in twelve months, near-uniformly across the whole set. That is the
  signature of a cluster being absorbed by AI answers: "write my wedding speech"
  gets answered in the chat now, not on a page. Even setting the decline aside, a
  bridesmaid drafting a toast never buys venue music. Only revisit if a
  consumer-facing wedding media product actually launches.
- **Our own internal product language.** `wedding media provider`, `wedding music
  supplier`, `wedding speech capture`, `funeral tribute media`, `display screens
  events`, `media displays events`, `interactive media for parties` all returned
  no volume whatsoever. Nobody searches in our vocabulary.

## The blocker: which domain owns this

`ejukebox.tv` also has a `/functions/` page selling the same product to the same
audience with the same guest-photo-wall pitch, and `ejukebox.tv/` duplicates
`/in-venue-screens/`. All three domains are self-canonical, and **the main site
links to neither satellite**, so none of the 35-page domain's authority reaches
the two sites meant to carry these keywords.

Nothing is being cannibalised yet, only because the satellites are three and four
pages. Building this cluster out across two domains without deciding which one
owns it is exactly how that starts. See `open-items.md`.

The cheapest fix, available regardless of which shape wins: link
`/in-venue-screens/` and `/functions-events/` out to the `.tv` equivalents.
