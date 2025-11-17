# 🚀 Deployment Guide - Computerhulp Zuid-Holland

## Pre-deployment Checklist ✅

- [x] Security audit voltooid
- [x] XSS protection geïmplementeerd
- [x] Input validatie toegevoegd
- [x] Dependencies geüpdatet
- [x] .gitignore geconfigureerd
- [x] Build succesvol (129 pages)
- [x] Google Ads conversion tracking actief

---

## 📋 Stap 1: GitHub Repository Setup

### Initialiseer Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Computerhulp Zuid-Holland website"
```

### Maak GitHub Repository

1. Ga naar https://github.com/new
2. Repository naam: `computerhulpzh`
3. Maak PRIVATE repository (bevat business logic)
4. **NIET** "Initialize with README" aanvinken

### Push naar GitHub

```bash
git remote add origin https://github.com/JOUW_USERNAME/computerhulpzh.git
git branch -M main
git push -u origin main
```

---

## 🌐 Stap 2: Vercel Deployment

### Vercel Account Setup

1. Ga naar https://vercel.com
2. Log in met je GitHub account
3. Klik op "Add New Project"
4. Importeer je `computerhulpzh` repository

### Environment Variables Configureren in Vercel

⚠️ **BELANGRIJK**: Voeg deze environment variables toe in Vercel:

```
NEXT_PUBLIC_SITE_URL=https://computerhulpzh.nl
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-16733341823

# SMTP Configuration (TransIP)
SMTP_HOST=smtp.transip.email
SMTP_PORT=465
SMTP_USER=info@computerhulpzh.nl
SMTP_PASS=@Ahmad48@@
SMTP_FROM=info@computerhulpzh.nl
SMTP_TO=info@computerhulpzh.nl
```

**Hoe toe te voegen:**
1. Ga naar Project Settings > Environment Variables
2. Voeg elke variabele INDIVIDUEEL toe
3. Selecteer "Production", "Preview", en "Development"
4. Klik "Add" voor elke variabele

### Build Settings (Automatisch gedetecteerd)

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Node Version: 18.x (of hoger)
```

### Deploy

1. Klik "Deploy"
2. Wacht tot build succesvol is (± 2-3 minuten)
3. Je krijgt een `.vercel.app` URL

---

## 🌍 Stap 3: Custom Domain Setup (computerhulpzh.nl)

### In Vercel

1. Ga naar Project Settings > Domains
2. Voeg toe: `computerhulpzh.nl`
3. Voeg toe: `www.computerhulpzh.nl`
4. Vercel geeft je DNS instructies

### Bij je Domain Provider (TransIP)

Voeg deze DNS records toe:

**Voor `computerhulpzh.nl` (apex domain):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**Voor `www.computerhulpzh.nl`:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Wacht 24-48 uur** voor DNS propagatie (meestal binnen 1 uur actief)

---

## 🔐 Stap 4: Post-Deployment Security Check

### Controleer deze punten na deployment:

- [ ] HTTPS is actief (Vercel doet dit automatisch)
- [ ] Test formulieren:
  - [ ] Afspraak maken werkt
  - [ ] Offerte aanvraag werkt
  - [ ] Contact formulier werkt
- [ ] Emails worden correct verzonden
- [ ] Google Ads conversion tracking werkt
- [ ] Geen errors in Vercel logs

### Test Formulier Beveiliging

Probeer deze inputs in formulieren (moeten geblokkeerd worden):
```
Naam: <script>alert('xss')</script>
Email: niet-een-email
Telefoon: abc123
```

Als deze geblokkeerd worden ✅ Security werkt!

---

## 📊 Stap 5: Monitoring Setup

### Vercel Analytics (Gratis)

1. Ga naar Analytics tab in Vercel
2. Enable Web Analytics
3. Je krijgt real-time statistieken

### Google Ads Conversies Controleren

1. Log in op Google Ads
2. Ga naar Tools > Conversions
3. Maak conversie acties aan:
   - **Afspraak Aanvraag** (Conversion ID: AW-16733341823/aDxYCK7Ct-gaEP-Qiqs-)
   - **Offerte Aanvraag** (gebruik zelfde conversion ID)
4. Monitor conversies in dashboard

---

## 🆘 Troubleshooting

### Build Fails

```bash
# Lokaal testen:
npm run build

# Check errors in Vercel logs
```

### Emails werken niet

1. Check SMTP credentials in Vercel Environment Variables
2. Controleer of TransIP email actief is
3. Check Vercel Function Logs

### Domain werkt niet

1. Controleer DNS settings met: https://dnschecker.org
2. Wacht langer (max 48u)
3. Vercel > Domains > Refresh SSL certificate

### Conversie tracking werkt niet

1. Open browser DevTools > Console
2. Zoek naar gtag errors
3. Controleer of Google Ads tag laadt: `window.gtag`

---

## 📞 Support

- **Vercel Support**: https://vercel.com/support
- **Next.js Docs**: https://nextjs.org/docs
- **TransIP Support**: https://www.transip.nl/support

---

## 🎉 Success Checklist

Na deployment, controleer:

- [ ] Website bereikbaar op computerhulpzh.nl
- [ ] HTTPS actief (groen slotje)
- [ ] Alle pagina's laden correct (129 pages)
- [ ] Formulieren versturen emails
- [ ] Google Ads tracking actief
- [ ] Geen console errors
- [ ] Mobile responsive werkt
- [ ] SEO metadata correct

**🚀 Je bent LIVE!**
