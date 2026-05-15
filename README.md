# builderaccountant.com

Lead-generation website for **Builder Accountant**, a service of Ace Biz — specialist accountants for Australian builders, tradies and small developers.

Phone-first conversion site targeting the Hills District and Central Coast of NSW.

---

## Stack

Pure static site. No build step, no framework, no dependencies.

- HTML5
- Hand-written CSS (no preprocessor)
- ~50 lines of vanilla JS for sticky header, FAQ accordion, year, and click-to-call analytics hooks
- Google Fonts: Archivo Black + Inter

Loads on a 3G connection. Hostable anywhere that serves static files.

---

## File structure

```
builderaccountant.com/
├── index.html                          Main single-page site
├── styles.css                          All shared styles
├── app.js                              Progressive enhancement
├── checklist/
│   └── index.html                      EOFY Builder Checklist (lead magnet, print-to-PDF ready)
└── services/
    └── project-feasibility/
        └── index.html                  Paid-search landing page
```

---

## Local preview

```sh
# Option 1 — just open the file
open index.html                         # macOS
start index.html                        # Windows

# Option 2 — serve with any static server (recommended; mailto: forms work better)
python3 -m http.server 8000
# or
npx serve .
```

Then visit `http://localhost:8000`.

---

## Deployment

This is a static site, so any of the following work with zero config:

### Vercel
```sh
npm i -g vercel
vercel
```
First run will create the project. Subsequent pushes to `main` auto-deploy.

### Netlify
- Drag-and-drop the folder at [app.netlify.com](https://app.netlify.com/drop), OR
- Connect this repo and let Netlify deploy on push. No build command, publish directory = `/`.

### Cloudflare Pages
- Connect repo. Build command: *(none)*. Output directory: `/`.

### GitHub Pages
- Push to `main`, then in repo Settings → Pages, choose `main` branch, `/` root. URL will be `https://<user>.github.io/<repo>/`.
- For a custom domain (`builderaccountant.com`), add a `CNAME` file at the root containing `builderaccountant.com` and configure DNS to point at GitHub Pages.

### Custom domain DNS (any host)
Point `builderaccountant.com` A/AAAA/CNAME records at your chosen host. Most hosts give you exact values in their dashboard.

---

## Pre-launch checklist

Things to update before going live:

- [ ] Replace `og-image.png` reference in `index.html` with a real 1200×630 PNG at the site root
- [ ] Replace `logo.png` reference in the JSON-LD with a real square logo (used by Google)
- [ ] Verify the `aggregateRating.ratingCount` value in the JSON-LD matches the actual Google review count
- [ ] Wire `mailto:` form actions to a real form backend (Formspree, Netlify Forms, HubSpot, etc.)
- [ ] Replace static testimonials with a live Google Reviews widget once chosen
- [ ] Submit `https://builderaccountant.com/sitemap.xml` to Google Search Console
- [ ] Create / claim the Google Business Profile for 204/11 Solent Circuit, Norwest NSW 2153
- [ ] Update the JSON-LD `geo` coordinates if Google Maps shows a more precise pin

The Tax Practitioners Board (TPB) registration is shown as text only — no number is displayed. If you want a TPB number added later, update both the footer and the JSON-LD `parentOrganization`.

---

## Content overview

**Main site (`/index.html`)**

1. Hero — _"Keep more of every job's profit."_ + click-to-call CTA
2. Trust strip — 4.8★, 10+ yrs, Xero/MYOB/QBO, TPB
3. Pain section — 3 builder-specific pain cards
4. Services — 11 service cards in a 4×3 grid, including 4 Builder Specialty highlights:
   - Per-Job Profit Reporting
   - WIP & Year-End Close
   - Home Warranty Insurance Support
   - Project Feasibility & Development Modelling (links to dedicated landing page)
5. More we handle — 34 less-obvious services across 3 columns
6. How it works — 3 steps
7. Why us — 6 differentiators + 4 stat tiles
8. Pricing — fixed-fee plans from $200/week
9. Testimonials — 3 cards (sourced from Ace Biz Google reviews)
10. Lead magnet — EOFY Builder Checklist download
11. FAQ — 9 questions (TPAR, HWI, WIP, structure, pricing, location, etc.)
12. Where we work — Hills District + Central Coast suburb chips, Norwest office map embed
13. Final CTA — phone + brief-submission form
14. Footer — full nav, contact, ABN, legal

**Lead magnet (`/checklist/`)**
Interactive 5-section EOFY checklist (38 actions + 40 commonly-missed deductions). Print stylesheet outputs a clean A4 PDF.

**Project Feasibility landing page (`/services/project-feasibility/`)**
Single-purpose paid-search landing page. Hero, pain, 8 deliverables, sample feaso mockup, why-us, pricing ($1,200/project), FAQ, lead form.

---

## SEO

Built-in:
- Title + meta description on every page
- Open Graph tags for share previews
- JSON-LD structured data on `/index.html`: `AccountingService` + `LocalBusiness` + `ProfessionalService` (single `@graph` payload), plus `WebSite` and `FAQPage`
- JSON-LD `Service` block on `/services/project-feasibility/`
- `areaServed` lists Hills District + Central Coast suburbs by name for local-pack relevance
- Canonical URLs on landing pages
- `<html lang="en-AU">` throughout

Verify after deployment with [Google Rich Results Test](https://search.google.com/test/rich-results).

---

## Brand

- Palette: black `#0A0A0A` + safety yellow `#FFD400` + paper `#FAFAFA`
- Type: Archivo Black (display) + Inter (body)
- Tone: jobsite-direct, no accountant-speak, light Aussie idiom

The brand is owned by Ace Biz. Builder Accountant presents publicly as a sub-brand / lead funnel; footer reads _"A service of Ace Biz · ABN 89 168 839 076 · Registered Tax Agent"_.

---

## Licence

Proprietary. © Ace Biz. All rights reserved.
