# Structured data (JSON-LD)

## How it works

One `@graph` per page, emitted by `_includes/schema.html`, called from
`_layouts/default.html`. Entity facts come from `_data/org.yml`; prices come
from `_data/pricing.yml`. There is no hand-written JSON-LD anywhere.

Every page carries the same `Organization` and `WebSite` nodes under stable
`@id`s:

- `https://ejukebox.com.au/#organization`
- `https://ejukebox.com.au/#website`
- `<page url>#webpage`, `#breadcrumb`, `#service`, `#faq`, `#howto`, `#article`

That shared `@id` is the whole point. It makes search engines and AI assistants
resolve the site as **one entity with many pages** rather than 40 unrelated
documents. Do not invent new `@id` patterns without a reason.

`noindex: true` suppresses the entire graph.

## Generated automatically

| Trigger | Emits |
|---|---|
| every page | `WebPage` + `BreadcrumbList` + `Organization` + `WebSite` |
| `layout: venue` | `Service` typed to the venue category, with `audience` |
| `faqs:` in front matter | `FAQPage` |
| `howto:` in front matter | `HowTo` |
| `/products.html` | `Product` + `Offer` per tier, from `pricing.yml` |
| `schema_service:` | `Service` |
| `schema_app:` | `SoftwareApplication` |
| `schema_article:` | `Article` |
| `mentions:` | entity links (authority signal) |
| `extra_schema:` | raw JSON appended verbatim (escape hatch) |

The front-matter keys are documented in full at the top of
`_includes/schema.html`. Read that before adding a new page type.

## Validating

Google's Rich Results Test needs a public URL, so it only works after a push.
To check before pushing, validate against the schema.org vocabulary directly:

```bash
curl -sSL -o /tmp/schemaorg.jsonld \
  https://schema.org/version/latest/schemaorg-current-https.jsonld
```

Then walk every `@graph` in `_site/` checking each `@type` exists, each property
is valid for the type it sits on (via `domainIncludes` plus the class hierarchy),
and each nested value's type is allowed by `rangeIncludes`. Last full run: clean.

**Expect one false positive:** the OneMusic / APRA AMCOS / PPCA nodes in
`mentions` on `/licensing.html` have no `logo`. That is correct - they are
citations of third-party organisations, not the publisher. Google's logo
requirement applies only to the organisation a page represents.

## Known limits, deliberately accepted

- **`jekyll-seo-tag` also emits its own thin JSON-LD block** and has no switch to
  disable it. It fires even on `noindex` pages. Ours wins on specificity via the
  stable `@id`s. Two blocks in the source is expected, not a bug.
- **FAQ rich results** were restricted to government and health sites in August
  2023, and **HowTo rich results were removed entirely** the same year. Both are
  still emitted because LLM crawlers and Bing parse them. Do not expect SERP
  features from either.
- **No `Review` / `AggregateRating` anywhere.** Self-serving review markup on
  your own site breaches Google's guidelines and risks a manual action. Review
  stars have to come from a third-party profile.
