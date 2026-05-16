# Deployment & Next Steps — builderaccountant.com

Reference for getting the site live at `builderaccountant.com` and configured for search.

---

## Current state

- ✅ Code is on GitHub: [github.com/acebizcspartners/Builderbooks](https://github.com/acebizcspartners/Builderbooks)
- ✅ Branch: `main`
- ✅ Phone CTAs route to `0431 516 783` (mobile)
- ✅ Schema.org JSON-LD targets Hills District + Central Coast NSW
- ❌ Site is **not yet hosted** — pick a host below
- ❌ DNS for `builderaccountant.com` not pointed yet
- ❌ Google Search Console + Google Business Profile not yet claimed

---

## Step 1 — Pick a host

The site is pure static HTML/CSS/JS. Any of these will host it for free.

| Host | Free tier | Custom domain | Why pick it |
|---|---|---|---|
| **Cloudflare Pages** | Unlimited | Free, easy | Fastest CDN, generous limits, simple DNS if you also use Cloudflare for the domain |
| **Vercel** | 100 GB/mo bandwidth | Free | Best DX, instant previews on every commit |
| **Netlify** | 100 GB/mo bandwidth | Free | Built-in form handling (replaces `mailto:`) |
| **GitHub Pages** | Free | Free | Simplest but requires **public** repo on free plan — current repo is private |

**Recommendation:** Cloudflare Pages if you don't already have a host preference.

---

## Step 2 — Connect the repo

### Cloudflare Pages

1. Sign in to [dash.cloudflare.com](https://dash.cloudflare.com).
2. Workers & Pages → Create application → Pages → Connect to Git.
3. Authorise GitHub, pick `acebizcspartners/Builderbooks`.
4. Build settings:
   - Framework preset: **None**
   - Build command: *(leave blank)*
   - Build output directory: `/`
5. Save and Deploy. ~30 seconds later you get a `*.pages.dev` URL.

### Vercel

1. [vercel.com/new](https://vercel.com/new) → Import Git Repository → pick `Builderbooks`.
2. Framework Preset: **Other**.
3. Build & Output: leave defaults (no build command, output dir `/`).
4. Deploy. ~30 seconds → `*.vercel.app` URL.

### Netlify

1. [app.netlify.com/start](https://app.netlify.com/start) → Import from Git → GitHub → pick `Builderbooks`.
2. Build command: *(leave blank)*. Publish directory: `/`.
3. Deploy. ~30 seconds → `*.netlify.app` URL.

### GitHub Pages (only if you flip the repo to public)

1. github.com → repo → Settings → Pages.
2. Source: Deploy from branch → `main` → `/ (root)` → Save.
3. URL: `https://acebizcspartners.github.io/Builderbooks/`. To use `builderaccountant.com` you also need a `CNAME` file at the repo root containing `builderaccountant.com`.

---

## Step 3 — Point the domain

Once the host has given you a URL, point `builderaccountant.com` at it.

1. Buy the domain at any registrar if you haven't (Cloudflare Registrar is cheapest for `.com` at cost; GoDaddy / VentraIP also fine).
2. In the registrar's DNS panel, add records the host shows you — typically one of:
   - **CNAME** `www` → `acebizcspartners-builderbooks.pages.dev` (or `.vercel.app` etc.)
   - **A** `@` → the IP your host specifies
   - For Cloudflare-managed DNS, just add the domain in Pages → Custom domains → it auto-configures.
3. Add **both** `builderaccountant.com` (apex) and `www.builderaccountant.com` and pick which one redirects to which (usually www → apex).
4. Wait 5–60 minutes for DNS propagation. Most hosts auto-issue a free Let's Encrypt SSL cert.

---

## Step 4 — Post-deploy SEO setup

Do these in the week after going live.

### Google Search Console

1. [search.google.com/search-console](https://search.google.com/search-console) → Add property → URL prefix → `https://builderaccountant.com`.
2. Verify via DNS TXT record (the host or registrar gives you a panel to add it).
3. Once verified, submit `https://builderaccountant.com/sitemap.xml`. *(Sitemap file not yet generated — see "Optional next builds" below.)*

### Google Business Profile (Hills local pack)

1. [google.com/business](https://google.com/business) → Add business.
2. Enter `Builder Accountant` (or your preferred trading name) at `Suite 204, 11 Solent Circuit, Norwest NSW 2153`.
3. Phone: `0431 516 783`. Hours: Mon–Fri 9am–5pm.
4. Category: **Accountant** + **Tax preparation service** + **Financial consultant**.
5. Verification by postcard takes 5–14 days.
6. After verification, add the website URL, add photos, post weekly updates for the first month.

### Rich-result validation

Once the site is live, paste the URL into [search.google.com/test/rich-results](https://search.google.com/test/rich-results). You should see:

- **Local Business** panel (address, phone, rating, hours)
- **FAQPage** panel (6 questions)

If either is missing, screenshot the validator output and I'll debug.

### Bing Webmaster (optional)

[bing.com/webmasters](https://www.bing.com/webmasters) — same flow. Bing now powers ~3% of AU search but it's free and takes 5 minutes.

---

## Optional next builds

Things I can do for you when you're ready — just say the word:

- [ ] **Generate `sitemap.xml`** listing all three pages with last-modified dates
- [ ] **Add `robots.txt`** that points to the sitemap
- [ ] **Add a `404.html`** custom not-found page in the brand style
- [ ] **Wire `mailto:` forms to a real backend** — Formspree, Netlify Forms, or a Cloudflare Worker
- [ ] **Replace static testimonials with a live Google Reviews widget** once GBP is verified
- [ ] **Add `og-image.png`** (1200×630 social share image) — needs a designed image
- [ ] **Add a real square `logo.png`** referenced by the JSON-LD
- [ ] **Build more service landing pages** (e.g. `/services/home-warranty-insurance/`, `/services/wip-year-end/`) for paid-search splits
- [ ] **Add Google Analytics 4 or Plausible** — small JS snippet
- [ ] **Set up automated `gh-pages` deploy** with a GitHub Action if you go with GitHub Pages

---

## Pushing future changes

After any edit:

```sh
git -C "C:\Users\AnkitKulshrestha\builderaccountant.com" add <files>
git -C "C:\Users\AnkitKulshrestha\builderaccountant.com" commit -m "Short description"
git -C "C:\Users\AnkitKulshrestha\builderaccountant.com" push
```

If you've connected the repo to Cloudflare / Vercel / Netlify, the push auto-deploys.

---

## Quick reference

| Thing | Value |
|---|---|
| Repo | github.com/acebizcspartners/Builderbooks |
| Branch | `main` |
| Local path | `C:\Users\AnkitKulshrestha\builderaccountant.com` |
| Domain | `builderaccountant.com` (not yet purchased / pointed) |
| Phone | `0431 516 783` (international: `+61 431 516 783`) |
| Email | `admin@acebiz.com.au` |
| Office | Suite 204, 11 Solent Circuit, Norwest NSW 2153 |
| Parent firm | Ace Biz — ABN 89 168 839 076 |
| Pricing anchor | Plans from $200/week |
| Project feasibility | From $1,200/project |
| Service areas | Hills District + Central Coast NSW (cloud-native national) |

---

*Generated by Claude — keep this file in the repo so it travels with the project.*
