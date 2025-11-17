# 🎨 Favicon Setup - Computerhulp Zuid-Holland

## ✅ Wat is al gedaan (Automatisch via Next.js):

1. **app/icon.tsx** - Genereert favicon.ico automatisch (32x32)
2. **app/apple-icon.tsx** - Genereert Apple Touch Icon automatisch (180x180)
3. **app/manifest.ts** - PWA Web Manifest geconfigureerd

**Deze worden automatisch gegenereerd wanneer je `npm run build` draait!**

---

## 📋 Wat je HANDMATIG moet doen:

### Stap 1: Genereer Android Chrome Icons

Je moet 2 PNG files maken van je logo `/Computerhulp Zuid Holland Logo.webp`:

**Optie A: Online Tool (Makkelijkst)**
1. Ga naar: https://realfavicongenerator.net/
2. Upload: `public/Computerhulp Zuid Holland Logo.webp`
3. Download de generated files
4. Pak alleen deze 2 files:
   - `android-chrome-192x192.png` → plaats in `/public`
   - `android-chrome-512x512.png` → plaats in `/public`

**Optie B: Met ImageMagick (command line)**
```bash
# Install ImageMagick eerst
magick "public/Computerhulp Zuid Holland Logo.webp" -resize 192x192 public/android-chrome-192x192.png
magick "public/Computerhulp Zuid Holland Logo.webp" -resize 512x512 public/android-chrome-512x512.png
```

**Optie C: Met Photoshop/GIMP**
1. Open `Computerhulp Zuid Holland Logo.webp`
2. Resize naar 192x192px → Export as PNG → `android-chrome-192x192.png`
3. Resize naar 512x512px → Export as PNG → `android-chrome-512x512.png`
4. Plaats beide in `/public` folder

---

## 🔍 Verificatie Checklist:

Na het toevoegen van de Android icons, check:

- [ ] `public/android-chrome-192x192.png` bestaat
- [ ] `public/android-chrome-512x512.png` bestaat
- [ ] Run `npm run build` om icon.tsx en apple-icon.tsx te genereren
- [ ] Run `npm run dev` en check http://localhost:3000/favicon.ico
- [ ] Check http://localhost:3000/apple-icon.png
- [ ] Check http://localhost:3000/manifest.webmanifest

---

## 🌐 Browser Support:

Na deze setup werk je favicon op:

✅ **Chrome/Edge** - favicon.ico (32x32) via icon.tsx
✅ **Safari** - apple-icon.png (180x180) via apple-icon.tsx
✅ **Firefox** - favicon.ico via icon.tsx
✅ **iOS Home Screen** - apple-icon.png (180x180)
✅ **Android Home Screen** - android-chrome-512x512.png via manifest
✅ **PWA Install** - Alle sizes via manifest.webmanifest

---

## 📱 Hoe het werkt:

### Next.js Automatische Generatie:

**app/icon.tsx** →  Genereert `/favicon.ico`
- 32x32 pixels
- Blauwe gradient achtergrond
- "CH" letters (Computerhulp)
- Automatisch geserveerd op alle pagina's

**app/apple-icon.tsx** → Genereert `/apple-icon.png`
- 180x180 pixels
- Blauwe gradient achtergrond
- "CH" letters
- Gebruikt door iOS Safari

**app/manifest.ts** → Genereert `/manifest.webmanifest`
- PWA configuratie
- Theme colors (blue #3B82F6)
- App naam & beschrijving
- Icon references

### Waarom "CH" letters?

De dynamisch gegenereerde icons gebruiken "CH" (Computerhulp) als simpel, herkenbaar symbool.

**Alternatief:** Als je de VOLLEDIGE logo in favicons wilt:
1. Gebruik een tool om webp → png/ico te converteren
2. Vervang icon.tsx en apple-icon.tsx door static files
3. Plaats files direct in `/public`:
   - `/public/favicon.ico`
   - `/public/apple-touch-icon.png`

---

## 🎯 Metadata in Root Layout:

De root layout (app/layout.tsx) heeft al de correcte OpenGraph image:

```typescript
openGraph: {
  images: [{
    url: '/Computerhulp Zuid Holland Logo.webp',
    width: 1200,
    height: 630,
  }],
}
```

Dit betekent:
- Facebook shares tonen je logo ✓
- LinkedIn shares tonen je logo ✓
- WhatsApp shares tonen je logo ✓

---

## 🚀 Deploy Checklist:

Voor productie deploy:

1. [ ] Voeg android-chrome PNG's toe aan public/
2. [ ] Run `npm run build`
3. [ ] Check `.next/static` bevat gegenereerde icons
4. [ ] Deploy naar Vercel/Netlify/etc
5. [ ] Test op mobiel: voeg site toe aan home screen
6. [ ] Test op desktop: check favicon in browser tab

---

## 💡 Tips:

- **Logo te complex voor kleine icons?** Overweeg een vereenvoudigde versie voor 16x16/32x32
- **Wil je andere kleuren?** Edit de `background` in icon.tsx en apple-icon.tsx
- **PWA features nodig?** Manifest.ts ondersteunt al standalone mode
- **Dark mode support?** Voeg `theme-color` media query toe in layout

---

**Huidige Status:** 🟡 80% Compleet

✅ Favicon automatisch generatie
✅ Apple Touch Icon automatisch
✅ PWA Manifest geconfigureerd
✅ OpenGraph image correct
⚠️  Android Chrome icons handmatig toevoegen (2 PNG's)

**Na toevoegen Android icons:** 🟢 100% Compleet!
