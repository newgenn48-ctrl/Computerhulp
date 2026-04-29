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
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      // Font-size schaal overgenomen van hulpmetit-nextgen (groter dan Tailwind default,
      // betere leesbaarheid voor senior doelgroep).
      fontSize: {
        'sm':   ['0.9375rem', { lineHeight: '1.5' }],   // 15px
        'base': ['1.0625rem', { lineHeight: '1.6' }],   // 17px
        'lg':   ['1.1875rem', { lineHeight: '1.6' }],   // 19px
        'xl':   ['1.375rem',  { lineHeight: '1.4' }],   // 22px
        '2xl':  ['1.75rem',   { lineHeight: '1.3' }],   // 28px
        '3xl':  ['2.25rem',   { lineHeight: '1.2' }],   // 36px
        '4xl':  ['2.75rem',   { lineHeight: '1.1' }],   // 44px
        '5xl':  ['3.5rem',    { lineHeight: '1.1' }],   // 56px
      },
      letterSpacing: {
        tightest: '-0.04em',
        'display-tight': '-0.025em',
      },
      boxShadow: {
        'card-hover': '0 20px 40px -12px rgb(37 99 235 / 0.15)',
        'soft': '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'soft-lg': '0 10px 25px -5px rgb(0 0 0 / 0.08), 0 4px 10px -3px rgb(0 0 0 / 0.05)',
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
