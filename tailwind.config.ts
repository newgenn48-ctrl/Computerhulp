import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand — vertrouwen & actie
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Warm accent — gebruikt voor highlights, numbers, editorial moments
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        // Actie/conversie — groen. Uitsluitend voor bellen en afspraak maken,
        // zodat blauw het merk blijft en groen altijd 'hier klikken' betekent.
        // action-700 haalt 5.0:1 op wit — ruim AA, ook voor kleine labels.
        action: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Eén zachte paginakleur. Wit = kaart, surface = achtergrond.
        // Daardoor lezen kaarten als losse objecten in plaats van als
        // vlakken die in de pagina oplossen.
        surface: '#f4f5f7',
        // Neutral ink — zachter dan pure black, warmer dan slate
        ink: {
          50: '#fafafa',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        // Zelfde stack als de referentiesite: het systeemlettertype (Segoe UI op Windows,
        // SF op Mac). Geen webfont-download meer, tekst staat er direct.
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      // Font-size schaal overgenomen van hulpmetit-nextgen (groter dan Tailwind default,
      // betere leesbaarheid voor senior doelgroep).
      // Lopende tekst krijgt ruime regelafstand (1.7). Dat is waar een
      // pagina lucht van krijgt en het scheelt onze doelgroep echt moeite.
      // Koppen blijven juist dicht op elkaar staan.
      // Tekstschaal van de referentiesite (computerhulpnh.nl): compactere
      // lopende tekst (0,9-0,95rem), leadtekst 1,22rem, koppen 2rem en groter.
      fontSize: {
        'xs':   ['0.75rem',   { lineHeight: '1.5' }],   // 12px
        'sm':   ['0.875rem',  { lineHeight: '1.6' }],   // 14px
        'base': ['0.95rem',   { lineHeight: '1.7' }],   // 15,2px
        'lg':   ['1.05rem',   { lineHeight: '1.7' }],   // 16,8px
        'xl':   ['1.22rem',   { lineHeight: '1.75' }],  // 19,5px
        '2xl':  ['1.5rem',    { lineHeight: '1.3' }],   // 24px
        '3xl':  ['2rem',      { lineHeight: '1.2' }],   // 32px
        '4xl':  ['2.7rem',    { lineHeight: '1.1' }],   // 43px
        '5xl':  ['3.5rem',    { lineHeight: '1.06' }],  // 56px
        '6xl':  ['5.1rem',    { lineHeight: '1.06' }],  // 82px
      },
      // Rondere hoeken dan Tailwind standaard geeft. Eén stap zachter over
      // de hele lijn, zodat kaarten en knoppen minder hard ogen zonder dat
      // er 219 losse klassen aangepast hoeven te worden.
      borderRadius: {
        'md':  '0.5rem',    // 8px  (was 6)
        'lg':  '0.625rem',  // 10px (was 8)
        'xl':  '0.875rem',  // 14px (was 12)
        '2xl': '1.25rem',   // 20px (was 16)
        '3xl': '1.75rem',   // 28px (was 24)
      },
      letterSpacing: {
        tightest: '-0.04em',
        'display-tight': '-0.025em',
      },
      // Grote, zachte schaduwen met een blauwzwarte tint (slate-900) in
      // plaats van krappe grijze randjes. Dat is wat een witte kaart op een
      // grijze achtergrond echt laat drijven.
      boxShadow: {
        'card-hover': '0 20px 40px -12px rgb(37 99 235 / 0.15)',
        'soft': '0 6px 18px -4px rgb(15 23 42 / 0.06), 0 2px 6px -2px rgb(15 23 42 / 0.04)',
        'soft-lg': '0 18px 46px -12px rgb(15 23 42 / 0.14), 0 6px 16px -6px rgb(15 23 42 / 0.08)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'subtle-grid': 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.04) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
export default config
