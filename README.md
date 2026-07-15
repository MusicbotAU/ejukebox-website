# eJukebox website

Jekyll site for eJukebox, deployed from the `gh-pages` branch.

## Local preview

```bash
./serve.sh   # then open http://localhost:4000
```

## Hero banner

The reusable full-width hero lives in [`_includes/hero.html`](_includes/hero.html). It breaks out of the
1200px content container to span the full viewport width (edge to edge, flush under the sticky nav) while
the headline, buttons and trial form stay inside the centred readable column.

Add it to a page with front matter, then `{% include hero.html %}` at the top of the content:

```yaml
hero:
  image: /assets/images/large-pub.jpg
  eyebrow: Licensed music for Australian venues
  h1: Music that fills the room and the till
  sub: Licensed music, song requests from any phone.
  form: true                 # show the quick free-trial form
  cta_text: See plans & pricing
  cta_url: /products.html
```

### Venue landing pages

Every page using `layout: venue` (the "Music for Your Venue" pages + Irish Pub Music) automatically gets the
full-width hero at the top. The headline and subtitle come from each page's `h1:` and `intro:` front matter, so
no per-page hero markup is needed.

**Images** follow the convention `/assets/images/venues/<slug>.jpg`, matching the page's `slug:`. To set a page's
hero image, just drop a file with the matching name into [`assets/images/venues/`](assets/images/venues/) —
no code change required. Current filenames:

```
assets/images/venues/music-for-pubs-bars.jpg
assets/images/venues/music-for-nightclubs.jpg
assets/images/venues/music-for-cafes.jpg
assets/images/venues/music-for-restaurants.jpg
assets/images/venues/music-for-gyms.jpg
assets/images/venues/music-for-hotels.jpg
assets/images/venues/music-for-retail.jpg
assets/images/venues/music-for-salons-spas.jpg
assets/images/venues/music-for-medical.jpg
assets/images/venues/irish-pub-music.jpg
```

These currently hold placeholder photos — replace each file (same name) with the matching venue image.
To point a page at a different path, add `hero_image: /path/to/img.jpg` to its front matter.
To also show the quick-trial form in a venue hero, add `hero_form: true`.

### Hero image dimensions

The background uses `background-size: cover` with a focal point of `center 35%`, so the image is cropped
differently per device (top/bottom crop on wide screens, sides crop on mobile). Source new images to these specs:

| | Recommendation |
|---|---|
| **Resolution** | **2560 × 1440 px** (16:9) — stays crisp on large / retina displays |
| **Minimum** | 1920 × 1080 px |
| **Composition** | Keep the key subject in the **centre / upper-centre**; sides crop on mobile, top & bottom crop on ultrawide |
| **Overlay-safe area** | Avoid busy detail in the **left third** — it sits under the dark text overlay |
| **File** | WebP ~200–350 KB, with a JPEG fallback ~400 KB |
