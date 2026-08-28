# Audit — computerhulpzh.nl
Date: 2026-04-17
Commit: d488ec3

## Executive summary
- **One source of truth exists but is unused.** `lib/constants.ts` defines `BUSINESS.PHONE`/`PRICING` but **zero** files import it. The phone `085-8002006` is hardcoded in **58 files**, the €14,99 / €44,97 rates in **41 files**, and voorrijkosten copy in **34 files**. Every price/NAP change is a 100+ file edit waiting to miss a spot.
- **The site likely ships a broken logo in production.** Every layout/schema references `/logo.png`, but the only file tracked in `public/` is `Logo.png` (capital L, untracked) plus `computerhulp.png`/`Computerhulpzh.png`. On Vercel's case-sensitive FS this is a 404 for the logo, the OG `image`, and every JSON-LD `logo` URL — hurting brand trust, Google Rich Results, and social shares.
- **City SEO is fragile.** 170+ cities × 2 variants = 340+ near-duplicate URLs sharing a template whose only differentiator is `city.name` plus optional neighborhood text. Cities without entries in `lib/cityContent.ts` fall through to fully generic copy — a clear near-duplicate cluster risk.
- **Conversion-critical CTA is inconsistent.** Homepage hero puts form before phone; `/computerhulp-aan-huis` puts phone first; Header shows phone as a link but the Hulp-Vragen button is the only visual CTA. For a 60+ audience the pattern should be unambiguous: phone dominant, always.
- **Security hygiene is decent but two specific items bleed points.** `vercel.json` still hardcodes the deprecated `X-XSS-Protection` header; the form has no bot defence (reCAPTCHA is in `package.json` but never wired up, and there's no honeypot) despite the in-memory rate limiter only applying per-instance on serverless.

## Critical findings

### C1 — Logo URL likely broken in production (Branding / SEO)
- **Severity:** Critical
- **Files:** `app/layout.tsx:42,51`; `app/page.tsx:25,50`; `components/layout/Header.tsx:44`; `components/layout/Footer.tsx:31`; `components/CityPageTemplate.tsx:224`; `app/computerhulp-aan-huis/page.tsx:36-44`; `app/student-aan-huis/page.tsx:36-37`; + 10 more.
- **Current:** `src="/logo.png"` / `url: 'https://computerhulpzh.nl/logo.png'`. Only file tracked in git under `public/` is `computerhulp.png`/`Computerhulpzh.png`/`Computerhulp Zuid Holland Logo.webp`. `Logo.png` (capital) exists locally but is **untracked** per `git status`. On Vercel's Linux FS this URL is a 404.
- **Recommended:** Commit the canonical logo as `public/logo.png` (lowercase, tracked) OR do a global rename and update every reference. Add a ≤200x60 raster plus a 1200×630 dedicated OG image — don't serve the 60-px logo as a social share card.
- **Effort:** S
- **Impact:** SEO, Conv

### C2 — No shared business-data module in practice
- **Severity:** Critical
- **Files:** `lib/constants.ts` (defined but not imported anywhere); 58 `.tsx/.ts` files containing `085-8002006`; 41 files containing `14,99`/`44,97`.
- **Current:** `lib/constants.ts` exports `BUSINESS`, `PRICING`, `HOURS` — `grep -r 'BUSINESS\.\|PRICING\.\|from .@/lib/constants.'` returns **zero** non-definition hits.
- **Recommended:** (1) Replace every hardcoded `085-8002006` / `+31858002006` / `tel:+31858002006` / `€14,99` / `€44,97` / `€10 voorrijkosten` with `BUSINESS.PHONE`, `BUSINESS.PHONE_HREF`, `PRICING.PER_QUARTER`, etc. (2) Add WhatsApp, email and KvK to the same file. (3) Add an ESLint custom rule (or a simple pre-commit grep) preventing literal phone/price strings. (4) Do it with a codemod, not by hand.
- **Effort:** M
- **Impact:** SEO (NAP consistency), Conv, maintainability

### C3 — `@id: '…/#organization'` reused across different `@type`s
- **Severity:** Critical (schema.org validity / Rich Results)
- **Files:** `app/page.tsx:46` (`@type: 'Organization'`); `app/computerhulp-aan-huis/page.tsx:28` (`@type: 'LocalBusiness'`); `app/student-aan-huis/page.tsx:28` (`@type: 'LocalBusiness'`); `app/locaties/page.tsx:34` (`@type: 'LocalBusiness'`); `components/CityPageTemplate.tsx:218` (`@type: 'LocalBusiness'`).
- **Current:** Five pages declare entities with the same `@id` but *different types* — Organization on home, LocalBusiness on every subpage. Google's crawler merges `@id` references into one entity graph; conflicting types produces invalid graphs and undermines the LocalBusiness signal the city pages need.
- **Recommended:** Split IDs. Use `'…/#organization'` for a single Organization node on the homepage only, and `'…/#localbusiness'` for the LocalBusiness node. Every city page references `'…/#localbusiness'` via `provider: { '@id': …/#localbusiness }` and reuses the same `@id` for its LocalBusiness entity. Validate with Rich Results Test after.
- **Effort:** M
- **Impact:** SEO

### C4 — Homepage HTML bloat is structured data + multi-schema nesting
- **Severity:** Critical (perf / cost of cache misses)
- **Files:** `app/page.tsx:319-330` (7 schemas in one @graph); also `app/computerhulp-aan-huis/page.tsx:307-321` (3 separate script tags: structuredData + faqData + breadcrumbData); `components/CityPageTemplate.tsx:779-782` (another @graph per city page).
- **Current:** Homepage emits Organization + LocalBusiness + WebSite + Service + FAQ (5 Q&A, long answers) + HowTo + BreadcrumbList in a single graph, then 12 long testimonial quotes, then a FAQ block with the same 5 answers rendered in HTML, then extensive Tailwind classes. The 156 KB uncompressed HTML is mostly the combination.
- **Recommended:** (1) Stop duplicating FAQ text in both schema *and* rendered HTML with nearly identical strings — use one source array and render from it. (2) Drop `HowTo` — Google has been de-emphasising HowTo and it risks a manual action for non-instructional pages. (3) Shorten testimonial quotes to 1 sentence max (already improved in `d488ec3`, keep going). (4) Move the big @graph into a `<Script type="application/ld+json" strategy="worker">` wrapper only if you need it post-interactive — otherwise leave it server-rendered but trim fields that aren't consumed by Rich Results (`hasOfferCatalog` on homepage LocalBusiness is ignored for LocalBusiness rich results).
- **Effort:** M
- **Impact:** Perf, SEO

### C5 — Primary CTA is not phone on the homepage
- **Severity:** Critical (conversion)
- **Files:** `app/page.tsx:376-392` (hero: `Hulp aanvragen` is `.btn-primary`, phone is `.btn-secondary`); compare to `app/computerhulp-aan-huis/page.tsx:370-384` (phone primary, form secondary).
- **Current:** Hero buttons are `[Hulp aanvragen] [Bel 085-8002006]`. Header desktop has a small phone link beside a Hulp-Vragen button. For a 60+ audience and a business whose real funnel is a phone call, the visual hierarchy is inverted.
- **Recommended:** Make the phone number the single dominant CTA on every page above the fold. Home hero: `[📞 085-8002006] [Afspraak maken]` with phone as `.btn-primary`. Header: keep phone LINK but also make Hulp-Vragen a `tel:` button on mobile. Match the pattern used in city pages (those are already correct).
- **Effort:** S
- **Impact:** Conv

---

## Findings by domain

### 1. Architecture & code

#### A1 — Constants file is orphaned
- **Severity:** High — See C2. `lib/constants.ts` is the single source of truth but not imported anywhere.
- **Files:** `lib/constants.ts`; 58 `.ts/.tsx` with hardcoded `085-8002006`.
- **Impact:** Maintainability, SEO (NAP), Conv
- **Effort:** M

#### A2 — Unused / orphaned code
- **Severity:** Medium
- **Files:**
  - `lib/useFormValidation.ts` — zero imports outside itself.
  - `react-google-recaptcha-v3` in `package.json:26` — imported by nothing; `app/api/contact/route.ts:5-11` contains a TODO comment describing the integration that was never finished.
  - `generate-city-pages.js`, `generate_city_pages.py`, `remove-text-faq.js` in root — one-shot scripts left around; `appdiensten/`, `contentblog/`, `contentsteden/` directories at root look like abandoned data.
  - `components/StudentCityPageTemplate.tsx` and `components/ComputerhulpCityPageTemplate.tsx` are trivial re-exports of `CityPageTemplate` — they exist only to let the 340 city pages import a variant-specific filename. Harmless but adds indirection; could be removed in favour of the city page files importing `CityPageTemplate` directly with a `variant` prop.
- **Recommended:** Delete `useFormValidation.ts` if truly unused, the `appdiensten/contentblog/contentsteden` legacy dirs after verifying, and either wire up reCAPTCHA or drop the package.
- **Impact:** Perf (bundle), maintainability
- **Effort:** S

#### A3 — TypeScript strictness is partial
- **Severity:** Low
- **Files:** `tsconfig.json:11`
- **Current:** `"strict": true` is on. `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride` are not set.
- **Recommended:** Add `noUncheckedIndexedAccess` — with 200+ `city.slug`/array lookups, it'll catch real bugs (e.g. `cities.reduce` in `app/locaties/page.tsx:69` uses `city.name[0]` which is implicitly `string | undefined`).
- **Impact:** Reliability
- **Effort:** S

#### A4 — ESLint ignores project JS scripts completely
- **Severity:** Low
- **Files:** `eslint.config.mjs:42` ignores `*.js`, `scripts/**`.
- **Current:** Multiple root `.js` files (`generate-city-pages.js`, `remove-text-faq.js`, `generate_city_pages.py`) and the whole `scripts/` dir are unlinted. Fine as long as they're dev-only; confirm they're not somehow bundled.
- **Recommended:** Move all code-generation scripts under `scripts/` and add a CI check that verifies no code-gen artefacts are stale vs source-of-truth data.
- **Impact:** Maintainability
- **Effort:** S

#### A5 — No Jest tests in CI path
- **Severity:** Medium
- **Files:** `lib/__tests__/` exists; `package.json` defines `jest` but no `test` in any CI config in the repo (no `.github/workflows/`).
- **Recommended:** Add a minimum CI: `pnpm lint && pnpm tsc --noEmit && pnpm test && pnpm build` on PRs to `main`. Vercel already does the build, but lint/test are off.
- **Impact:** Reliability
- **Effort:** S

#### A6 — `<img>` instead of `next/image` in one hot path
- **Severity:** Medium (Perf)
- **Files:** `components/ServicesSection.tsx:161`
- **Current:** Service grid renders `<img src={service.image}>` — bypasses `next/image` AVIF/WebP conversion, sizing, and lazy-loading. Used on homepage, `/computerhulp-aan-huis`, `/student-aan-huis`, `/diensten` and all city pages — it's in the critical path on every page.
- **Recommended:** Replace with `<Image ... sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw">` and don't set `priority` — these are below the fold.
- **Impact:** Perf
- **Effort:** S

#### A7 — Global `img { pointer-events: none }`
- **Severity:** Medium
- **Files:** `app/globals.css:28`
- **Current:** Disables pointer events on every `<img>` globally. Intent seems to be preventing drag/save, but:
  - With the `<img>` in `ServicesSection.tsx`, the click is already on the parent `<Link>` so no harm — but this is brittle and specific to the current DOM shape.
  - Breaks right-click "save image as" — legitimate for users.
  - Accessibility tooling (e.g. Read Aloud extensions that fetch the image for OCR) may behave oddly.
- **Recommended:** Remove the global rule. If drag-to-save prevention is desired, scope it with a utility class `.no-save-image` on hero/decorative images only.
- **Impact:** A11y / UX
- **Effort:** S

---

### 2. Technical SEO

#### S1 — `robots.ts` disallows `/it-hulp` while the page self-indexes
- **Severity:** High
- **Files:** `app/robots.ts:8`; `app/it-hulp/page.tsx:19-20` (`canonical: 'https://computerhulpzh.nl/it-hulp'`, no `robots: noindex`).
- **Current:** robots.txt says `Disallow: /it-hulp` but the page metadata advertises itself as canonical. Google may show a "Indexed, though blocked by robots.txt" warning — URL kept in index but with no snippet.
- **Recommended:** Pick one. If the page is a draft, `export const metadata = { robots: { index: false, follow: false } }` and drop from the disallow list. If it's a live B2B landing page, remove the disallow and let it be crawled normally.
- **Impact:** SEO
- **Effort:** S

#### S2 — Sitemap produces 340+ duplicate-by-content URLs
- **Severity:** High
- **Files:** `app/sitemap.ts:34-47`; all `app/computerhulp-aan-huis-<city>/page.tsx` + `app/student-aan-huis-<city>/page.tsx`; `components/CityPageTemplate.tsx:514-608` fallback path; `lib/cityContent.ts` only covers some of ~170 cities.
- **Current:** Every city is listed twice (`computerhulp-aan-huis-<slug>` + `student-aan-huis-<slug>`). When `getCityContent(slug)` returns nothing, the template renders fully generic copy — same text for every city with only `{city.name}` varying.
- **Recommended:**
  1. Short-term: set `priority: 0.5` and `changeFrequency: 'yearly'` for cities lacking `cityContent` entries, so Google de-prioritises them.
  2. Medium-term: audit `lib/cityContent.ts` coverage vs. `lib/cities.ts` (170 cities). Fill at minimum the top 30 gemeenten with a 1-paragraph local hook, 3–5 neighborhoods, and 1 local casus. Cities that can't be uniquely written should be collapsed into their gemeente (e.g. `delfgauw` → under `pijnacker-nootdorp`).
  3. Long-term: for any remaining thin-content slug, `robots: { index: false }` and drop from sitemap; keep the page to catch long-tail traffic via the `rel=canonical` to the umbrella city.
- **Impact:** SEO
- **Effort:** L

#### S3 — `@id` collision across pages
- **Severity:** Critical — See C3.

#### S4 — Redundant preconnect hints
- **Severity:** Low
- **Files:** `app/layout.tsx:86-97` + `next.config.js:29-31`
- **Current:** Preconnect/dns-prefetch for `fonts.googleapis.com` + `fonts.gstatic.com` are set both in the Link header AND in the `<head>`. Since you use `next/font/google` for Inter, fonts are self-hosted from `/_next/static/media/` — those preconnects do nothing.
- **Recommended:** Remove the fonts preconnects from both `next.config.js:30` and `app/layout.tsx:90-91,96-97`. Keep the GTM/Google Ads/DoubleClick preconnects.
- **Impact:** Perf
- **Effort:** S

#### S5 — No `AggregateRating` schema despite featured reviews
- **Severity:** Medium
- **Files:** `app/page.tsx:165-210` (5 FAQ items); testimonials on home + city pages.
- **Current:** Site heavily emphasises testimonials but has no `AggregateRating` in structured data. Adding one without a real review system (Google Business reviews, Trustpilot) is risky — fabricated ratings trigger manual actions.
- **Recommended:** If the business has ≥10 verified Google Business reviews, pull the rating + count and add `AggregateRating` referencing `@id: '…/#localbusiness'`. If not, don't invent it.
- **Impact:** SEO
- **Effort:** M

#### S6 — Canonical inconsistency on home
- **Severity:** Low
- **Files:** `app/layout.tsx:20` (metadataBase uses env fallback); `app/page.tsx:31` (canonical hardcoded).
- **Current:** `app/page.tsx` hardcodes `canonical: 'https://computerhulpzh.nl'` — good. `app/layout.tsx` uses `process.env.NEXT_PUBLIC_SITE_URL` as metadataBase. Fine, but confirm the env var is set in all Vercel environments; otherwise relative OG URLs in future additions will drift.
- **Recommended:** Hardcode both to `'https://computerhulpzh.nl'` or, better, read both from `BUSINESS.URL` in `lib/constants.ts`.
- **Impact:** SEO
- **Effort:** S

#### S7 — Internal linking is hub-and-spoke but silo is incomplete
- **Severity:** Medium
- **Files:** `components/NearbyCities.tsx`; `components/ServiceCrossLinks.tsx` (not analysed but present); `app/page.tsx:487-488` inline city/service links.
- **Current:** City pages link to 5 nearby cities and 1–6 services, good. But `/diensten/<service>` pages (not audited in detail here) likely don't link back to location pages — confirm. Also the homepage links to only 4 of 170 cities in its SEO content section (line 463); expand to at least the top 12 populated gemeenten.
- **Recommended:** On each `/diensten/<service>` page, include a "Beschikbaar in" block with links to 8–12 top city pages for that service.
- **Impact:** SEO
- **Effort:** M

#### S8 — Heading hierarchy on homepage / city pages
- **Severity:** Low
- **Files:** `app/page.tsx`; `components/CityPageTemplate.tsx`
- **Current:** Homepage H1 = "Computerhulp aan Huis", OK. `StudentContentSection` nests an `<h3>` inside a section whose surrounding heading is an `<h2>` — fine. No level-skipping detected. Breadcrumb is a `<nav>` which is correct.
- **Recommended:** No action, just flagged for verification.
- **Impact:** SEO
- **Effort:** —

#### S9 — OG image for social shares is a logo, not a share card
- **Severity:** Medium
- **Files:** `app/layout.tsx:41-46`; `app/page.tsx:22-29`; `app/opengraph-image.tsx` (separate dynamic image)
- **Current:** `app/opengraph-image.tsx` produces a correct 1200×630 branded card — good. But `app/layout.tsx` and several page-level `openGraph.images` explicitly point to `/logo.png`, which overrides the dynamic one.
- **Recommended:** Remove explicit `openGraph.images` overrides from `layout.tsx` and pages that don't need them. Let `opengraph-image.tsx` serve every route. For pages that need a custom card, add an `opengraph-image.tsx` in that route segment.
- **Impact:** SEO, Branding
- **Effort:** S

---

### 3. Performance

#### P1 — Homepage inline JSON-LD volume
- **Severity:** High — See C4.

#### P2 — Redundant font preconnects
- **Severity:** Low — See S4.

#### P3 — `<img>` bypasses image optimization
- **Severity:** Medium — See A6.

#### P4 — `experimental.optimizePackageImports` only covers one module
- **Severity:** Low
- **Files:** `next.config.js:13-15`
- **Current:** `optimizePackageImports: ['@/components']` — no third-party package is covered. `next/image`, `next/font`, `@vercel/analytics` and `nodemailer` are already tree-shaken. Marginal.
- **Recommended:** Leave as is.
- **Impact:** Perf
- **Effort:** —

#### P5 — `scroll-smooth` + `scroll-padding-top: 100px` on `<html>` cause jank on Android Chrome
- **Severity:** Low
- **Files:** `app/layout.tsx:83`; `app/globals.css:334-336`
- **Current:** Combined with `scroll-padding-top: 100px` this creates a known jitter on Android Chrome's built-in anchor scrolling. Acceptable.
- **Recommended:** No change unless reports come in. Already scoped to `@media (prefers-reduced-motion: reduce)` override — good.
- **Impact:** Perf
- **Effort:** —

#### P6 — Expected Lighthouse numbers (to measure)
- **Severity:** —
- **Recommended:** Run Lighthouse on 3G/4G mobile for `/` and `/computerhulp-aan-huis-rotterdam`. Based on code review, expect:
  - LCP ~ 2.8–3.2s mobile (hero webp + 156 KB HTML on home).
  - CLS near zero (`next/image` fill + font display swap) — should pass.
  - INP ok (no heavy client JS outside TestimonialsCarousel and mobile menu).
  - Total Blocking Time moderate due to GTM + Google Ads conversion scripts loading afterInteractive.
- **Impact:** Perf
- **Effort:** —

---

### 4. Accessibility (senior-friendly focus)

#### AX1 — Body text size at minimum 16 px, not 17–18 px
- **Severity:** Medium
- **Files:** `app/globals.css` (Tailwind default `text-base` = 16 px); `app/page.tsx:462,487,492` etc. use `text-gray-700 leading-relaxed` without bumping size.
- **Current:** Default body is 16 px; several "small" labels use `text-sm` (14 px) for phone hours, USP sublabels, footer small prints, breadcrumb.
- **Recommended:** Add a base rule in `app/globals.css`:
  ```css
  @layer base {
    html { font-size: 17px; }
    @media (min-width: 1024px) { html { font-size: 18px; } }
  }
  ```
  And audit every `text-xs`/`text-sm` use — replace with `text-base` where the content is user-facing copy.
- **Impact:** A11y
- **Effort:** M

#### AX2 — Touch target sizes borderline
- **Severity:** Medium
- **Files:** `components/layout/Header.tsx:82-96` (mobile phone + menu: `p-3` = 48 px both axes, OK); `app/globals.css:140-146` (`.faq-summary` has `p-6` so ~72 px, OK); `components/layout/FloatingButtons.tsx:54` (`w-14 h-14` = 56 px, OK); `app/page.tsx:513-517` (`.bg-white px-3 py-1` city tags on homepage = ~30 px tall — too small to tap precisely).
- **Recommended:** Audit every `py-1`/`py-2` in interactive (`<Link>`/`<a>`/`<button>`) contexts. Add `py-3` minimum on mobile for tappable tags.
- **Impact:** A11y
- **Effort:** S

#### AX3 — Focus-visible rule applies `rounded-lg` globally
- **Severity:** Low
- **Files:** `app/globals.css:329-331`
- **Current:** `*:focus-visible { @apply outline-2 outline-offset-2 outline-blue-600 rounded-lg; }` — rounds every focused element including form inputs, buttons, text blocks. The `outline-offset-2` is good, but the global `rounded-lg` hack can produce weird focus rings on elements that are already rounded differently (pills, circles).
- **Recommended:** Drop the `rounded-lg`. Let outline wrap the element's actual shape via `outline-offset`. Leave the colour/width.
- **Impact:** A11y polish
- **Effort:** S

#### AX4 — Form is missing `autocomplete` + `inputmode` attributes
- **Severity:** Medium (a11y + conversion)
- **Files:** `components/AfspraakForm.tsx:110-130`
- **Current:** `<input type="tel">` has no `autoComplete="tel"` or `inputMode="tel"`; `<input type="email">` no `autoComplete="email"`; name input no `autoComplete="name"`.
- **Recommended:** Add `autoComplete="name"`, `autoComplete="tel" inputMode="tel"`, `autoComplete="email"`. For seniors this means their stored contact details prefill — one fewer barrier.
- **Impact:** A11y, Conv
- **Effort:** S

#### AX5 — `a[href^="tel:"] { @apply no-underline }`
- **Severity:** Low
- **Files:** `app/globals.css:349-351`
- **Current:** Removes underlines from phone links globally — visually cleaner but makes it harder to distinguish the phone number as a link in body copy (e.g. `app/page.tsx:492` "Bel ons gerust op 085-8002006").
- **Recommended:** Keep underline in prose contexts, drop only on explicit button-style phone CTAs. Easier rule: remove the global override; button classes already don't underline.
- **Impact:** A11y
- **Effort:** S

#### AX6 — Skip-link + `<main>` OK; one `<main>` per page confirmed
- **Severity:** — positive finding
- **Files:** `components/SkipLink.tsx` + `components/layout/LayoutShell.tsx:16`
- **Current:** `<main id="main-content">` wraps children; SkipLink targets it. `<html lang="nl">` set in `app/layout.tsx:83`. Landmarks OK.

#### AX7 — Contrast
- **Severity:** Low–Medium
- **Files:** `app/globals.css` + Tailwind defaults.
- **Current:** Body text on white is `text-gray-900` / `text-gray-700` — both pass 7:1. But `.section-label` uses `text-gray-500` on white (≈4.6:1), and `.footer-city-tag` uses `text-gray-300` on `bg-gray-800` (≈7.2:1, pass). The `text-blue-200` on blue CTA section (`app/page.tsx:567`) is ~3.8:1, below AA for text.
- **Recommended:** Swap `text-blue-200` on blue backgrounds for `text-white` or `text-blue-50`. Raise `.section-label` from `text-gray-500` to `text-gray-600`.
- **Impact:** A11y
- **Effort:** S

---

### 5. Content & conversion

#### CC1 — Hero CTA ordering inverted on home — see C5 (Critical)

#### CC2 — Form has 4 required fields
- **Severity:** High (Conv)
- **Files:** `components/AfspraakForm.tsx:7-12`
- **Current:** `naam`, `telefoon`, `email`, `probleem` all required. Seniors abandon on email.
- **Recommended:** Make `email` optional. If submitted, use it for the confirmation mail; if empty, skip the customer confirmation and rely on the phone callback ("We bellen u binnen enkele uren terug om de afspraak te bevestigen" — already in the copy). The admin email only needs name + phone + problem description.
- **Impact:** Conv
- **Effort:** S

#### CC3 — No "wij bellen u terug binnen 1 uur" trust line above the fold
- **Severity:** Medium
- **Files:** Homepage hero; city hero.
- **Current:** The text "wij bellen u terug binnen enkele uren" is only shown under the form after submit (`AfspraakForm.tsx:148`). It's never offered as a trust hook above the fold.
- **Recommended:** Add a small badge under the hero CTAs: "Bellen we u liever terug? Vul het formulier in — binnen 1 uur reactie." Hooks into senior preference of being called back rather than calling cold.
- **Impact:** Conv
- **Effort:** S

#### CC4 — Trust signals scattered
- **Severity:** Medium
- **Files:** Homepage, city pages, Footer.
- **Current:** KvK only in footer (`Footer.tsx:119`). No "500+ klanten" count visible above fold. No "Verzekerd" in hero. Reviews count is implicit via testimonials.
- **Recommended:** Add a small trust row directly below hero CTAs on every page: `[⭐ 500+ klanten geholpen] [✓ KvK 91310318] [✓ Verzekerd] [✓ Sinds 2015]`. Sourced from `BUSINESS` constants.
- **Impact:** Conv
- **Effort:** S

#### CC5 — Near-duplicate city pages — see S2 (High)

#### CC6 — Pricing fragmentation claim from brief
- **Severity:** Checked, not reproduced in code — positive finding
- **Files:** `components/CityPageTemplate.tsx`; `components/PricingSection.tsx`; `app/tarieven/page.tsx`.
- **Current:** All in-repo references are `€14,99 per kwartier` / `€44,97 min` / `€10 voorrijkosten` / `3 kwartier`. The brief mentions seeing `€14,50`, WhatsApp `06-42548451` as a rate, `45 minuten` on Rotterdam, price range on Lisse, `3 kwartier` vs `45 minuten`. Grep for `14,50` / `45 minuten` in code: **zero hits**. This inconsistency is either (a) in stale caches on the live site, (b) scraped from an older deploy, or (c) leftover in outside copy (Google Business listings, Yelp, etc.). **The codebase is internally consistent.**
- **Recommended:** Run `gh api` / `wget` against the live URLs listed in the brief (`/student-aan-huis-lisse`, `/student-aan-huis-dordrecht`) and check what's actually rendered. If they match the code (`14,99`/`10`/`3 kwartier`) the finding was about cached content; purge Vercel/ISR cache. If they show the old numbers, there are untracked build artefacts being deployed — investigate the deploy pipeline.
- **Impact:** SEO / Conv
- **Effort:** S (investigate) + M (fix if real)

#### CC7 — Marketing-speak creeping in
- **Severity:** Low–Medium
- **Files:** `app/page.tsx:354` ("Betrouwbare computerhulp aan huis door heel Zuid-Holland. Onze IT-studenten lossen het snel en vakkundig op"); `components/CityPageTemplate.tsx:51` ("snel en zonder gedoe"); `app/page.tsx:461-485`.
- **Current:** Some copy still leans on adjectives ("vakkundig", "geduldig", "betrouwbaar") rather than concrete outcomes. Brief prefers "uw computer werkt weer" over "optimale prestaties".
- **Recommended:** Replace abstract trust adjectives in hero copy with one concrete outcome line: e.g. "Uw computer, laptop of WiFi werkt vandaag nog. We komen bij u thuis — meestal binnen 24 uur."
- **Impact:** Conv
- **Effort:** S

#### CC8 — `/tarieven` hides the most useful sentence
- **Severity:** Low
- **Files:** `app/tarieven/page.tsx:59`
- **Current:** "Minimaal 3 kwartier (€44,97)" is small gray text below the big €14,99 headline. For seniors the total is more useful than the per-unit rate.
- **Recommended:** Lead with "€44,97 voor 45 minuten" (total, concrete) and show the €14,99/kwartier as secondary.
- **Impact:** Conv
- **Effort:** S

---

### 6. Security & deployment

#### SEC1 — Deprecated `X-XSS-Protection` header
- **Severity:** High (per brief)
- **Files:** `vercel.json:18-22`
- **Current:** Adds `X-XSS-Protection: 1; mode=block` — Chromium removed XSS auditor in 2019, the header causes attack amplifications in some edge cases. Brief flags this.
- **Recommended:** Remove the header entry from `vercel.json`. Confirm `next.config.js:20-68` sets the security headers we actually want. Consider deleting `vercel.json` headers block entirely and managing them in `next.config.js` only (single source of truth).
- **Impact:** Sec
- **Effort:** S

#### SEC2 — CSP `unsafe-inline` + `unsafe-eval` on `script-src`
- **Severity:** Medium — acknowledged tradeoff
- **Files:** `next.config.js:56-57`
- **Current:** Required for inline GTM/Google Ads scripts in `app/layout.tsx:101-166` and for `<script dangerouslySetInnerHTML>` JSON-LD. Documented plan:
  1. Generate a per-request nonce via middleware (Next.js supports this via `headers()` + template replacement).
  2. Inject `nonce={nonce}` on every `<Script>` and `<script type="application/ld+json">`.
  3. Drop `unsafe-inline` and `unsafe-eval`.
- **Recommended:** Don't fix now; document the plan. Track as a follow-up.
- **Impact:** Sec
- **Effort:** L

#### SEC3 — Form has no bot defence despite reCAPTCHA being in deps
- **Severity:** High (Sec / cost)
- **Files:** `package.json:26` (`react-google-recaptcha-v3`); `app/api/contact/route.ts:5-11` (TODO block). The `afspraak`, `offerte`, `landing-afspraak` routes have rate-limiting only.
- **Current:** Rate limit is in-memory per serverless instance — effectively 5 req/min/IP/instance. Vercel can scale to multiple instances, so an attacker with rotating IPs can flood forms. No honeypot, no reCAPTCHA.
- **Recommended:** Cheapest fix: add a hidden `<input name="website">` honeypot; any non-empty value = reject. Cheap+robust: wire up the reCAPTCHA v3 as the TODO describes, set a threshold of 0.5. Best: Cloudflare Turnstile (free, no PII). Also consider moving rate limits to Vercel KV or Upstash Redis for cross-instance enforcement.
- **Impact:** Sec
- **Effort:** M

#### SEC4 — No `middleware.ts`; 403 to SEO bots likely from Vercel Firewall
- **Severity:** High (if Googlebot is affected)
- **Files:** No `middleware.ts` exists in the repo (`find` result empty).
- **Current:** The 403 responses to external HTTPS fetchers observed in the brief are not from code. They're from Vercel's Firewall / WAF or Bot Protection. This is outside the repo — check the Vercel dashboard.
- **Recommended:**
  1. In Vercel Dashboard → Firewall → review rules and Bot Protection settings. Whitelist Googlebot, Bingbot, GPTBot, SemrushBot, AhrefsBot if you use them, and Uptime monitors.
  2. Use Google Search Console → URL Inspection → Test Live URL on `/` and one city page. If it renders correctly there, Googlebot is whitelisted.
  3. If you can't identify a rule, try temporarily disabling Bot Protection, re-test, and re-enable with specific allowlist.
- **Impact:** SEO
- **Effort:** S (if rules are clear), M (if needs triage)

#### SEC5 — Email endpoints send plain text from Nodemailer directly
- **Severity:** Medium
- **Files:** `app/api/afspraak/route.ts:76-253`
- **Current:** SMTP creds are taken from env — fine. `sanitizeHtml` wraps all user input (good — no XSS into admin inbox). Validation on length and phone regex. No PII logging (only error.message).
- **Recommended:** Verify env vars `SMTP_HOST`/`SMTP_USER`/`SMTP_PASS`/`SMTP_FROM`/`SMTP_TO` exist in Vercel production. Consider switching to a transactional provider (Resend, Postmark) for deliverability — Nodemailer via random SMTP often ends up in spam for B2C replies.
- **Impact:** Conv (delivery), Sec
- **Effort:** M

#### SEC6 — Environment variables / secrets
- **Severity:** Low
- **Files:** `.env` tracked? `.gitignore` check.
- **Current:** `.env` is in repo root (452 bytes), `git ls-files` did not list it — good, it's presumably gitignored. `.gitignore` was not read but file size suggests it's set up.
- **Recommended:** `cat .gitignore | grep -i env` to verify. Document required env vars in a `.env.example`.
- **Impact:** Sec
- **Effort:** S

#### SEC7 — Dependency audit
- **Severity:** — run
- **Files:** —
- **Recommended:** Run `npm audit --production` and `npx depcheck`. Drop `react-google-recaptcha-v3` if not wiring up. Check `marked` + `gray-matter` — are they used? Neither appeared in any grep of app/components/lib. If content is hardcoded TSX, remove them.
- **Impact:** Sec, Perf
- **Effort:** S

---

## Prioritized roadmap

### Quick wins (this afternoon, <1h each)
1. **C1** — Commit `public/logo.png` (lowercase) or fix every reference. Verify in prod via `curl -I https://computerhulpzh.nl/logo.png`.
2. **SEC1** — Delete `X-XSS-Protection` from `vercel.json`.
3. **S1** — Decide: index `/it-hulp` or noindex it. Update `robots.ts` accordingly.
4. **CC5** — Make `email` optional in `components/AfspraakForm.tsx` + `app/api/afspraak/route.ts`.
5. **C5** — Swap button order in `app/page.tsx:376-392` so phone is `.btn-primary`.
6. **AX4** — Add `autoComplete`/`inputMode` to form inputs.
7. **S4** — Remove redundant Google Fonts preconnect hints.
8. **A7** — Drop the global `img { pointer-events: none }`.
9. **CC3** — Add "bellen we u terug binnen 1 uur" line below hero CTAs on home + city pages.
10. **S6** — Point `metadataBase` to `BUSINESS.URL` from `lib/constants.ts` so it's consistent forever.

### Week 1
11. **C2** — Codemod every hardcoded `085-8002006`, `+31858002006`, `€14,99`, `€44,97`, `€10 voorrijkosten`, `06-42548451`, `info@computerhulpzh.nl`, `91310318` to `lib/constants.ts` imports. Run grep afterwards to prove zero string literals remain.
12. **C3** — Split `@id: '…/#organization'` vs `'…/#localbusiness'`; validate with Rich Results Test on `/`, `/computerhulp-aan-huis`, `/computerhulp-aan-huis-rotterdam`.
13. **C4** — Drop `HowTo` from home schema; stop duplicating FAQ text in HTML + JSON-LD on home.
14. **SEC3** — Add honeypot to all 4 form endpoints; wire up reCAPTCHA v3 or drop the dep.
15. **SEC4** — Vercel dashboard audit of Firewall + Bot Protection; verify Googlebot renders `/` via GSC URL Inspection.
16. **CC2** — Make email optional; simplify form to 3 required fields.
17. **A6** — Replace `<img>` in `ServicesSection.tsx` with `<Image>`.

### Week 2–3
18. **S2** — City-page content audit: fill `lib/cityContent.ts` for top 30 gemeenten; drop or `noindex` slugs with zero unique content. Downgrade sitemap priority for thin pages.
19. **AX1** — Bump base font to 17–18 px; audit `text-sm` usage in user-facing copy.
20. **CC4** — Trust signal row below hero on every page.
21. **A5** — Add GitHub Action: lint + typecheck + test + build on PRs.
22. **S5** — Hook up real Google Business reviews → `AggregateRating` on LocalBusiness.
23. **SEC5** — Move transactional email to Resend/Postmark; keep SMTP as fallback only.

### Backlog
24. **SEC2** — CSP nonce migration; drop `unsafe-inline`/`unsafe-eval`.
25. **A3** — Enable `noUncheckedIndexedAccess`; fix fallout.
26. **A2** — Clean up root one-shot scripts and abandoned `appdiensten/contentblog/contentsteden` dirs.
27. **S7** — Add "Beschikbaar in [12 cities]" block on each `/diensten/<service>` page.
28. **CC7** — Copy pass: replace marketing-speak with concrete outcomes; target senior reading level (B1 Dutch).

---

## Metrics to track (baseline snapshot)

- **Core Web Vitals** (mobile + desktop) via PageSpeed Insights — capture TODAY's values for `/`, `/computerhulp-aan-huis-rotterdam`, `/student-aan-huis-rotterdam`, `/diensten`, `/tarieven`. Re-measure after each quick-win batch.
- **Google Search Console** — current impressions, CTR, avg. position per query cluster (computerhulp aan huis, student aan huis, \<city\> variants). Snapshot weekly.
- **GA4 events** — `phone_click` (auto-tracked via gtag listener in `app/layout.tsx:148-154`), form submissions (currently routed via `/afspraak-bevestiging` redirect — add an explicit `conversion` event in GA4), bounce rate per landing page.
- **Google Ads** — conversions fire correctly (label `KWVeCKj-u_gbEP-Qiqs-` at `app/layout.tsx:138`). Track cost per phone lead from Ads vs. organic.
- **Rich Results Test** — capture current warnings (expected: `@id` collision warnings from S3) as baseline; target zero errors after Week 1.
- **Coverage report in GSC** — list of excluded/"Indexed though blocked" URLs; target: zero entries for `/it-hulp*`.
