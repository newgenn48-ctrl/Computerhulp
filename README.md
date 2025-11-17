# Computerhulp Zuid-Holland - Professionele Website

Moderne, SEO-geoptimaliseerde website voor computerhulp aan huis door heel Zuid-Holland.

## Snelstart

### 1. Installeer dependencies
```bash
npm install
```

### 2. Configureer environment variabelen
```bash
copy .env.local.example .env.local
```

Vul in `.env.local`:
- SMTP gegevens voor e-mail
- Google Analytics ID
- reCAPTCHA keys
- Site URL

### 3. Genereer stad-pagina's
```bash
npm run generate-cities
```

### 4. Start development server
```bash
npm run dev
```

Website draait op: http://localhost:3000

## Project Structuur

```
computerhulp-zh/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── diensten/          # Services page
│   ├── tarieven/          # Pricing page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── blog/              # Blog pages
│   ├── [stad]/            # Dynamic city pages
│   └── api/               # API routes
├── components/            # React components
├── lib/                   # Utility functions
├── content/               # Markdown content
├── public/                # Static assets
└── scripts/               # Build scripts
```

## Deployment naar Vercel

1. Push naar GitHub
2. Importeer project in Vercel
3. Voeg environment variabelen toe
4. Deploy!

Of via CLI:
```bash
npm i -g vercel
vercel login
vercel --prod
```

## Features

✅ Next.js 14 + TypeScript
✅ Tailwind CSS
✅ SEO geoptimaliseerd
✅ Lighthouse score ≥ 90
✅ Responsive design
✅ Contact formulier
✅ WhatsApp & Telefoon integratie
✅ Google Analytics
✅ reCAPTCHA v3
✅ Blog met Markdown
✅ JSON-LD structured data

## Contact

📞 06-42548451
📧 info@computerhulpzh.nl
🌐 https://computerhulpzh.nl

KvK: 91310318 | BTW: NL865613461B01
