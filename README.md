# The Price Law Firm — thepricelawfirm.com

Static marketing site for **Bill Price, PA** (d/b/a The Price Law Firm), a
personal injury practice in Panama City, Florida.

Built as a zero-dependency static site generator: page content lives in JS
modules, `build.js` renders them to plain HTML in `dist/`. No framework, no
`npm install`, and the deployed output is static files — so nav links and copy
are in the served HTML for crawlers, while the header, footer and section
components stay defined in exactly one place.

> **Two things must be configured before this goes live** — see
> "Before deploying" below. A separate pre-launch checklist covering content
> still awaiting client confirmation is maintained outside this repository.

## Before deploying

1. **Wire up form delivery.** No backend is configured, so the `/contact` form
   and the floating widget currently fall back to opening the visitor's mail
   client. Set `data-endpoint` on the forms in `src/lib/components.js` to a real
   handler (Formspree, Netlify Forms, or a serverless function). Until then the
   phone number is the only reliable contact route.
2. **Set the GA4 measurement ID.** `src/data/site.js` → `ga4Id` is still the
   placeholder `G-XXXXXXXXXX`, so no traffic is being recorded.

Also confirm `site.domain` in `src/data/site.js` matches the live host —
canonicals, Open Graph URLs and `sitemap.xml` are all generated from it.

## Draft mode

`src/data/site.js` exports `DRAFT`. When `true`, copy still awaiting client
confirmation renders as an amber highlight and `node build.js` prints a count
per page, so nothing unverified can ship unnoticed. It is `false` for
production.

## Commands

```bash
node build.js          # render to dist/
node serve.js          # preview at http://localhost:4321
node scripts/audit.js  # link, SEO and schema checks
```

## Layout

```
src/data/site.js               NAP, practice areas, locations, unconfirmed flags
src/data/practice-content.js   copy for the 5 case-type pages
src/data/location-content.js   copy for the 6 city pages
src/data/blog-content.js       6 articles
src/lib/layout.js              <head>, meta, OG, JSON-LD, page shell
src/lib/components.js          header, footer, widgets, reusable sections
src/lib/*-template.js          practice / location / blog-post page templates
src/pages/*.js                 one-off pages (home, about, contact, legal…)
assets/css/site.css            design system (palette variables at the top)
assets/js/site.js              progressive enhancement only
build.js                       generator + sitemap.xml + robots.txt
scripts/audit.js               post-build checks
```

## Pages (28)

**Main** — `/` · `/about` · `/contact` · `/testimonials` · `/blog`
**Practice** — `/personal-injury` + trucking-accidents, auto-accidents,
catastrophic-injuries, product-liability, insurance-claims, pfas-contamination
**Non-injury** — `/property-insurance-claims` (hurricane & property claims)
**Locations** — `/panama-city` (office) · `/panama-city-beach` · `/pensacola` ·
`/tallahassee` · `/destin` · `/marianna`
**Legal** — `/disclaimer` · `/privacy-policy` · `/sitemap`
**Blog** — 6 articles under `/blog/`

## SEO

Unique title and meta description per page, one `<h1>`, canonical + Open Graph
on every page, breadcrumbs with `BreadcrumbList` schema on inner pages,
`LegalService`/`Attorney` org schema site-wide, `LocalBusiness` per location
(NAP matching the footer exactly), `FAQPage` wherever there's an accordion, and
`BlogPosting` on articles. `sitemap.xml` and `robots.txt` generate at build.

`scripts/audit.js` enforces this — it fails the build on broken internal links,
duplicate titles or descriptions, missing canonicals, invalid JSON-LD, images
without alt text, or pages missing from the sitemap.

## Deploying

`dist/` is the deployable artifact — upload it to any static host (Netlify,
Cloudflare Pages, S3, or plain shared hosting). Directory-style URLs mean the
host must serve `index.html` from a directory path, which all of the above do
by default.

Before going live, update `site.domain` in `src/data/site.js` if the canonical
host differs from `https://www.thepricelawfirm.com`, since canonicals, Open
Graph URLs and `sitemap.xml` are all generated from it.
