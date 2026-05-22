# Conversion Leak Audit — computerhulpzh.nl

**Datum:** 22 mei 2026
**Probleem:** kliks van Google Ads zonder telefoon-conversie
**Doelgroep:** senioren 55+, primaire conversie = telefoongesprek
**Werkwijze:** read-only audit — geen code-wijzigingen tijdens deze ronde

---

## Samenvatting

De technische fundering is in orde: één gestandaardiseerd `tel:+31858002006` formaat overal, gtag-conversie-tracking die elke `tel:` klik automatisch logt, geen cookie-banner, consistent tarief (€14,99) en consistente NAP. **Het lek zit in psychologie en hiërarchie, niet in techniek.** De homepage — wat Google Ads voor sommige campagnes als landing pakt — geeft de telefoon-CTA bewust een **secundaire visuele plek** (translucent glass-knop) terwijl "Afspraak Maken" de prominente knop is. Voor een doelgroep die wil bellen is dat tegen de doelgroep ingaan. Daarnaast mist de homepage een trust-signaal boven de fold ("5000+ tevreden klanten" staat al wel op de computerhulp-hub maar niet op `/`), en vraagt het formulier verplicht e-mail aan een doelgroep die liever helemaal niet typt. Tot slot triggert de sticky bellbalk op mobiel pas na 10% scroll + 300px — relatief laat voor een belslag-doelgroep.

---

## Top 5 vermoedelijke conversie-lekken

| # | Issue | Impact | Moeite | Waarom | Fix |
|---|---|---|---|---|---|
| 1 | **Homepage: telefoon-CTA is visueel secundair** (`btn-hero-secondary` = glas) terwijl Afspraak primair is | High | Easy | Doelgroep belt; primaire visuele knop hoort op de primaire conversie te zitten. Op de computerhulp-hub is dit recent al gefixt (witte phone-knop voor blauwe afspraak), homepage hangt achter. | `app/page.tsx` regels 232-249: swap classes zoals op `app/computerhulp-aan-huis/page.tsx` (witte knop voor telefoon, gradient voor afspraak). |
| 2 | **Verplicht e-mailveld op afspraak-formulier** | High | Easy | Brief noemt dit expliciet als senior-blocker; mensen die alleen teruggebeld willen worden haken af bij e-mailveld. | `components/AfspraakForm.tsx` regel 13: e-mail rule `required` schrappen of email helemaal weghalen. Alternatief: tweede shortcut-form "vraag terugbel" met alleen naam + telefoon. |
| 3 | **Homepage hero mist trust-signaal boven de fold** | Med-High | Easy | Eyebrow op `/` zegt "IT-Student aan huis · Zuid-Holland" — geen review-count, geen jaartal. Op `/computerhulp-aan-huis` staat al "5000+ tevreden klanten". | `app/page.tsx` regel 223: vervang door `{BUSINESS.REVIEW_COUNT} tevreden klanten`. |
| 4 | **StickyMobileBar verschijnt pas laat** (>10% scroll + >300px) | Med | Easy | Senioren scrollen weinig vóór beslissing; bellbalk hoort eerder zichtbaar te zijn. | `components/layout/StickyMobileBar.tsx` regel 31: drempel verlagen naar `pct > 0.03` of `scrolled > 100`. |
| 5 | **"je" op de afspraak-pagina** breekt formele consistentie | Low-Med | Trivial | `app/afspraak-maken/page.tsx` regel 12: *"contact met **je** op"*. Hele site gebruikt "u". Voor senioren een dissonant moment op het commitment-scherm. | Tekst aanpassen naar "contact met u op". |

---

## Per landingspagina

### Homepage (`app/page.tsx`)

| Check | Status | Detail |
|---|---|---|
| Telefoonnummer boven de fold | ⚠️ | Aanwezig (regel 247) maar in glass-knop, niet prominent. |
| Tel: link correct geformatteerd | ✅ | `tel:+31858002006` (internationaal, iOS-veilig). |
| Primaire CTA boven de fold | ✅ | Maar is "Afspraak Maken" — verkeerde primair voor doelgroep. |
| Trust signal boven de fold | ❌ | Eyebrow = service-naam, geen review-count of jaartal. |
| Value proposition < 8 woorden | ✅ | H1: "Computerhulp aan huis" (3 woorden). |
| Mobile: tel: link >= 48px hoog | ✅ | `btn-hero-secondary` met `py-3.5` ≈ 50px. |
| Hamburger-menu nodig om telefoon te zien? | ⚠️ | Hero phone OK; tussen md (768-1023) toont header alleen telefoon-**icoon** zonder nummer. |
| Hero h1 matcht keyword "computerhulp aan huis" | ✅ | Exacte match. |
| Specifieke reviews met naam + plaats | ❌ | Testimonials hebben naam, geen plaats. |
| Hero-knop volgorde (Afspraak vs Bel) | ⚠️ | Afspraak eerst, Bel tweede. Op hub omgekeerd na recente fix. Inconsistent over de site. |
| Hero-pills sluiten aan op intent | ⚠️ | "Betaalbare tarieven · HBO-opgeleide studenten · 7 dagen per week" mist "binnen 24 uur" (sterkste conversie-claim). |

### Hub: `/computerhulp-aan-huis` (`app/computerhulp-aan-huis/page.tsx`)

| Check | Status | Detail |
|---|---|---|
| Hero CTA-volgorde | ✅ | Witte phone-knop (primair) + blauwe afspraak — recent gefixt. |
| Hero eyebrow met trust signal | ✅ | "5000+ tevreden klanten". |
| Hero in 2 paragrafen (concrete pijn + belofte) | ✅ | "Geen zorgen — onze IT-studenten…" + "Storing, trage laptop…". |
| Diensten met icoon + 1-regel beschrijving | ✅ | Recent toegevoegd. |
| Pricing card | ✅ | Compact 3-stat (€14,99 · €10 · 3 kwartier). |
| Reviews subtitle weg | ✅ | |
| WhyChooseUs CTA disabled | ✅ | Geen middenpagina CTA-fatigue. |
| Werkgebied eyebrow | ✅ | |

### City-template (`components/CityPageTemplate.tsx` — 338 pagina's)

| Check | Status | Detail |
|---|---|---|
| Hero CTA-volgorde computerhulp | ✅ | Witte phone-knop primair. |
| Student variant hero CTA-volgorde | ✅ | Recent geüpdatet. |
| H1 matcht keyword "computerhulp [stad]" | ✅ | `Computerhulp aan Huis [Stad]`. |
| Reviews subtitle weg | ✅ | Beide varianten. |
| WhyChooseUs CTA uit | ✅ | Beide varianten. |
| Hero pills | ✅ | Verwijderd voor beide varianten. |
| Tarief-card consistent | ✅ | Via `PricingSection` component. |

### Dienstpagina-sample: `/diensten/computer-laptop-hulp`

| Check | Status | Detail |
|---|---|---|
| H1 matcht intent | ✅ | "Computer & Laptop Hulp aan Huis Zuid-Holland". |
| Telefoon-CTA boven de fold | ⚠️ | Te verifiëren — file gebruikt eigen hero-structuur, niet hub/city-template. |
| Structured data | ✅ | Service + FAQPage + BreadcrumbList. |
| FAQ aanwezig | ✅ | 5 vragen. |
| Reviews | ✅ | SHORT_TESTIMONIALS (eerste 3). |

*N.B.: 19 dienstpagina's hebben elk eigen hero-implementaties; aanbeveling: in een latere fase een gedeelde `ServicePageTemplate` introduceren analoog aan `CityPageTemplate` zodat consistentie geborgd is.*

### Afspraak-pagina (`app/afspraak-maken/page.tsx` + `components/AfspraakForm.tsx`)

| Check | Status | Detail |
|---|---|---|
| Geen sticky bar (geen ruis) | ✅ | Pad in `hiddenPaths` van `StickyMobileBar`. |
| Aantal velden | ⚠️ | 4 verplichte velden: naam, telefoon, e-mail, beschrijving. Brief: >3 verplichte velden is een drempel. |
| Verplicht e-mailveld | ❌ | Senior-killer. Telefoonnummer is voldoende voor terugbel. |
| Reactietijd-belofte | ✅ | "zo spoedig mogelijk contact". Iets vager dan "binnen 1 uur" maar geen "binnen X werkdagen"-fout. |
| Aanspreekvorm | ❌ | "contact met **je** op" — overal anders "u". |
| Honeypot tegen spam | ✅ | Verborgen `website`-veld. |
| Errorstate geeft tel-link | ✅ | Fallback bij verzendfout met klikbaar nummer. |
| Submit-button label | ✅ | "Hulp Vragen" — actief en concreet. |

---

## Cross-cutting issues

### NAP-consistentie
- **Telefoon:** `BUSINESS.PHONE_HREF = 'tel:+31858002006'` overal via constants. ✅
- **Weergave-nummer:** `085-8002006` consistent. ✅
- **WhatsApp:** `06-42548451` — een ANDER nummer dan de hoofdlijn. ⚠️ Mogelijke identiteits-verwarring voor klanten die het WhatsApp-nummer in hun adresboek opslaan en daarna terugbellen op een nummer dat niet door jullie wordt opgenomen.
- **KvK / BTW:** alleen in Footer (KvK 91310318, BTW NL865613461B01). ✅
- **Regio:** consistent "Zuid-Holland" via `BUSINESS.REGION`. ✅

### Tarief-consistentie
- Alle pagina's gebruiken `PRICING.PER_QUARTER = €14,99` en `PRICING.TRAVEL = €10`. ✅
- Eerdere audit-bevinding van €14,50 vs €14,99 niet meer aanwezig.
- "Minimum 3 kwartier (€44,97)" / "all-in vanaf €54,97" consistent waar genoemd.

### Trust-signaal coverage
| Pagina | 5000+ klanten | KvK/BTW | Years active | Verzekerd | Reviews |
|---|---|---|---|---|---|
| Homepage | ❌ | Footer only | Body content (10+) | ❌ | Section |
| Computerhulp hub | ✅ hero | Footer | ❌ | ❌ (was, verwijderd) | Section |
| City pages | ✅ hero | Footer | ❌ | ❌ | Section |
| Dienst-pages | ⚠️ varieert | Footer | ⚠️ varieert | ⚠️ varieert | Section |
| Afspraak-pagina | ❌ | Footer | ❌ | ❌ | ❌ |

→ **Inzicht:** "Betalen pas na afloop" en "verzekerd" zijn juist op de afspraak-pagina (commitment-moment) afwezig. Voor first-time klanten die net hun gegevens invullen is een kort reassurance-blok ("achteraf via Tikkie · 5000+ tevreden klanten · verzekerd") relevanter dan ergens halverwege de homepage.

### Toon-consistentie (u/je)
- Hele site gebruikt "u" (formeel) — past bij doelgroep.
- **Uitzondering:** `app/afspraak-maken/page.tsx` regel 12: *"contact met **je** op"*.
- Validatie-foutboodschappen `AfspraakForm.tsx`: *"Beschrijf kort **uw** probleem"* — die staan correct in "u"-vorm.

### Header
- Telefoonnummer in header op elke pagina via `BUSINESS.PHONE_HREF`. ✅
- Sticky (`fixed top-0`) op alle pagina's. ✅
- **md (768-1023):** alleen telefoon-**icoon** zichtbaar, nummer pas vanaf lg+. Voor smallere laptops mist visuele bel-affordance.

### Mobile UX
- `StickyMobileBar`: phone-knop (blauwe vol-breedte) + kalender-icoon voor afspraak.
- Drempel: `pct > 0.1 && scrolled > 300` → late zichtbaarheid.
- Hidden op `/afspraak-maken`, `/offerte-aanvragen`, `/afspraak-bevestiging`, `/offerte-bevestiging`. ✅
- `FloatingButtons`: WhatsApp op mobiel, kalender-icoon op desktop. WhatsApp leidt naar persoonlijk 06-nummer (zie NAP-issue hierboven).

### Tracking
- `gtag('event', 'conversion', { send_to: 'AW-16733341823/KWVeCKj-u_gbEP-Qiqs-' })` op elke `tel:` klik via auto-listener in `app/layout.tsx` regels 144-151. ✅
- Geen onderscheid tussen "klik op telefoon in hero" vs "klik op telefoon in sticky bar" vs "klik op telefoon in footer". Voor analyse welke plek converteert is dat een blinde vlek (zou via gtag-event-parameters kunnen).

---

## Wat NIET het probleem is

- **Cookie-banner / GDPR-modal:** niet aanwezig — geen klik-blokkade. ✅
- **Tel: link formaat:** `tel:+31858002006` is internationaal en iOS-veilig (geen spaties). ✅
- **Tarief-inconsistentie:** geen €14,50 vs €14,99 conflict meer (eerdere audit-issue is opgelost). ✅
- **Hero-LCP image:** webp + `priority={true}` — snelle eerste paint waarschijnlijk. ✅
- **Layout shifts:** Image gebruikt `fill` met `sizes` — geen CLS-risico. ✅
- **Hamburger op mobile blokkeert niet de phone-CTA:** op mobiel (< md) is er een aparte zichtbare telefoon-icoon-knop naast de hamburger in de header. ✅
- **Formeel-vorm overall:** "u" wordt overal gebruikt behalve één regel (zie hierboven). ✅
- **Form-text contrast:** `text-gray-700/600` op witte achtergrond — WCAG AA voor lichaamstekst. ✅
- **Tekstgrootte na recente CSS-fix:** body 16px, `text-lg` 18px — voldoende voor senioren (WCAG-baseline 16px).

---

## Aanbevolen volgorde van fixes

**Fase 1 — Quick wins (deze week, < 1 uur werk):**

1. **`/` hero CTA-knoppen swappen** (analoog aan computerhulp-hub): witte phone-knop primair, gradient afspraak-knop secundair. → Hoogste impact.
2. **`/` hero eyebrow** → `{BUSINESS.REVIEW_COUNT} tevreden klanten`.
3. **`AfspraakForm.tsx`** email `required` schrappen.
4. **`afspraak-maken/page.tsx`** "je" → "u".
5. **`StickyMobileBar.tsx`** drempel verlagen (`pct > 0.03 OR scrolled > 100`).

**Fase 2 — Hiërarchie en consistentie (volgende week):**

6. Voeg "binnen 24 uur" toe aan hero-pills van homepage; verwijder zwakste pill.
7. Final CTA strip (zowel `/` als hub): zorg dat phone-knop visueel gelijkwaardig of prominenter is dan Afspraak.
8. Op dienstpagina's: review hero-structuur en harmoniseer met hub-pattern (eyebrow `5000+`, phone-CTA primair).
9. Voeg een reassurance-strook toe op `/afspraak-maken` (Tikkie · verzekerd · 5000+ klanten) onder de form-card.
10. Header: bij md (768-1023) korte telefoon-tekst tonen (laatste 4 cijfers of "Bel ons") naast icoon.

**Fase 3 — Datagedreven (zodra Fase 1+2 paar weken draaien):**

11. Onderscheid bron in `gtag` event-parameters per tel-link locatie (`hero`, `sticky`, `final-cta`, `footer`) zodat je weet welke positie converteert.
12. Overweeg een mini-"vraag terugbel" knop op de homepage hero met alleen naam+telefoon (2 velden) als laag-drempel alternatief op het volledige formulier.
13. WhatsApp-nummer harmoniseren met hoofdlijn óf duidelijk maken in microcopy dat het een andere kanaal is.

---

## Wat ik niet kan checken zonder externe data

- **Echte Lighthouse-scores op productie** (LCP, CLS, INP) — heuristiek alleen via code is suggestief, niet gemeten.
- **Google Ads landing page experience score per pagina** — vereist toegang tot het Ads-account.
- **Mismatch ad copy ↔ landing page** — vereist toegang tot lopende advertentie-creatives.
- **Heatmaps / scroll-depth / session recordings** — geen tooling aanwezig (geen Hotjar of Clarity-snippet gevonden).
- **Bel-tracking met sub-bronnen** — `gtag_report_conversion` log wel kliks maar niet welk element (hero vs sticky vs footer) ze hebben aangeklikt.
- **Welke pagina's daadwerkelijk Google Ads landing pages zijn** — vermoedelijk homepage + `/computerhulp-aan-huis` + city-pages voor lokale keywords + `/diensten/computer-laptop-hulp` voor reparatie-keywords, maar zonder Ads-data niet bevestigbaar.
- **Conversie-percentages per pagina** — vereist GA4 + Ads-koppeling.
- **Verhouding bel-conversies ↔ formulier-conversies** — vereist analytics.

---

## Vervolgstappen buiten code

Aanbevelingen voor Ahmad:

- **Microsoft Clarity (gratis) of Hotjar** installeren — heatmaps + session recordings tonen waar bezoekers afhaken en welke knoppen ze proberen maar niet vinden. Implementatie: één `<Script>` regel in `app/layout.tsx`.
- **Bel-tracking via CallRail of WhatConverts** — laat zien welke advertentie en welke landing page tot welke call leidt; nu kun je alleen "er werd gebeld na een ad-klik" zien, niet welke ad.
- **Google Ads landing page koppeling reviewen** — controleer in het Ads-account of campagnes met hoge kosten/lage conversie naar de **homepage** linken (welke een lagere phone-prominence heeft) of naar de **hub/city-pages** (waar phone wel prominent is). Dat alleen al kan een grote leak verklaren.
- **Search Console + GA4 cross-checken** — welke queries trekken kliks aan op pagina's met lage conversie. Mismatch tussen "computerhulp spoed [stad]" → algemene city-page bijvoorbeeld.
- **GTM-tagging uitbreiden**: aparte conversion-events voor `phone_click_hero`, `phone_click_sticky`, `phone_click_footer`, `form_submit` — geeft per-positie inzicht.
- **A/B-test overweging:** kort cijfer-trust ("9,2 / 5000+ klanten") boven de fold vs. lifestyle-foto. Hangt af van wat in ad-creatives gebruikt wordt.
- **Telefoon-routing controleren:** wat horen bellers in de eerste 5 seconden? Een doorkiesmenu (1=spoed, 2=algemeen) is voor senioren een hoge drempel — vergelijk met een directe live-stem.
