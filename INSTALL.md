# Installatie Instructies

## Automatische Setup

De complete website structuur wordt automatisch aangemaakt. Volg deze stappen:

### Stap 1: Genereer alle projectbestanden

Alle code staat klaar in de PROJECT.md en PROJECT_PART2.md bestanden in deze map.

Voor een werkende website heb je nodig:
1. Alle configuratie bestanden (✅ al aangemaakt)
2. App directory met pagina's
3. Components
4. Library functies
5. Content (markdown bestanden)
6. Public assets

### Stap 2: Kopieer de code

Open PROJECT.md en PROJECT_PART2.md en kopieer de code voor elk bestand naar de juiste locatie.

### Stap 3: Installeer dependencies

```bash
npm install
```

### Stap 4: Configureer environment

```bash
copy .env.local.example .env.local
```

Vul je eigen waarden in voor:
- SMTP configuratie
- Google Analytics
- reCAPTCHA
- Site URL

### Stap 5: Maak mappen aan

```bash
mkdir components lib content\\steden content\\blog public scripts tests\\components tests\\pages
```

### Stap 6: Start de website

```bash
npm run dev
```

## Handmatige Setup Alternatief

Als je de bestanden liever handmatig wilt maken, zie de volledige code in:
- `PROJECT.md` - Deel 1 (config, layouts, pages)
- `PROJECT_PART2.md` - Deel 2 (components, lib, content)

Elk bestand is duidelijk gemarkeerd met `## file: pad/naar/bestand`

## Deployment

### Via Vercel (Aanbevolen)

1. Push naar GitHub
2. Koppel repository aan Vercel
3. Voeg environment variabelen toe
4. Deploy

### Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Support

Voor vragen:
- Bekijk README.md
- Check de PROJECT.md bestanden
- Bel 06-42548451
