# Scripts Directory

Dit document beschrijft alle beschikbare scripts en hun doel.

## Actieve Scripts (Regelmatig Gebruik)

### `update-city-pages.js`
**Doel:** Update alle stad pagina's om de gedeelde CityPageTemplate te gebruiken.
```bash
node scripts/update-city-pages.js
```
Gebruik dit script na wijzigingen aan de CityPageTemplate component.

### `audit-seo-titles.js`
**Doel:** Audit alle pagina's op SEO titel en description lengte.
```bash
node scripts/audit-seo-titles.js
```

### `fix-seo-complete.js`
**Doel:** Complete SEO fixes voor meta descriptions en titels.
```bash
node scripts/fix-seo-complete.js
```

### `fix-long-descriptions.js`
**Doel:** Trim meta descriptions naar 160 karakters of minder.
```bash
node scripts/fix-long-descriptions.js
```

---

## Eenmalige Migratie Scripts (Archief)

Deze scripts zijn gebruikt voor eenmalige migraties en hoeven normaal niet opnieuw te worden uitgevoerd:

| Script | Beschrijving | Status |
|--------|-------------|--------|
| `add-hero-images.js` | Voegt hero images toe aan pagina's | Voltooid |
| `add-nearby-cities.js` | Voegt NearbyCities component toe | Voltooid |
| `fix-city-schema.js` | Fixt schema.org data voor steden | Voltooid |
| `fix-diensten-seo.js` | SEO fixes voor diensten pagina's | Voltooid |
| `fix-eslint-entities.js` | Fixt ESLint HTML entity warnings | Voltooid |
| `fix-extra-closing-div.js` | Verwijdert extra closing divs | Voltooid |
| `fix-hero-background.js` | Fixt hero background images | Voltooid |
| `fix-jsx-comments.js` | Converteert HTML comments naar JSX | Voltooid |
| `fix-logo-paths.js` | Corrigeert logo paden | Voltooid |
| `fix-schema-contentUrl.js` | Voegt contentUrl toe aan schema | Voltooid |
| `fix-schema-images.js` | Fixt schema image URLs | Voltooid |
| `fix-seo-titles.js` | Fixt SEO titels | Voltooid |
| `generate-favicons.js` | Genereert favicon assets | Voltooid |
| `optimize-city-pages.js` | Optimaliseert stad pagina's | Voltooid |
| `remove-contact-section.js` | Verwijdert contact secties | Voltooid |
| `remove-hero-prefixes.js` | Verwijdert hero prefixes | Voltooid |
| `remove-price-dates.js` | Verwijdert prijs datums | Voltooid |
| `remove-trust-badges.js` | Verwijdert trust badges | Voltooid |
| `restore-image-import.js` | Herstelt Image imports | Voltooid |
| `update-customer-count.js` | Update klant aantallen | Voltooid |

---

## Nieuwe Script Maken

Bij het maken van een nieuw script:

1. Gebruik ES6 module syntax waar mogelijk
2. Voeg error handling toe
3. Log voortgang naar console
4. Documenteer in deze README

### Template:
```javascript
/**
 * Script: naam-van-script.js
 * Doel: Beschrijving van wat het script doet
 *
 * Gebruik: node scripts/naam-van-script.js
 */

const fs = require('fs')
const path = require('path')

const appDir = path.join(__dirname, '../app')

// Script logic here

console.log('Done!')
```

---

## NPM Scripts

De volgende npm scripts zijn beschikbaar:

```bash
npm run generate-cities  # Genereert stad pagina's
npm run dev              # Start development server
npm run build            # Build voor productie
npm run lint             # Run ESLint
npm test                 # Run Jest tests
```
