import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Afspraak Maken | Computerhulp Zuid-Holland | Binnen 24u',
  description: 'Maak een afspraak voor computerhulp aan huis in Zuid-Holland. Binnen 24 uur geholpen. Geen voorrijkosten. 7 dagen per week beschikbaar.',
  openGraph: {
    title: 'Afspraak Maken | Computerhulp Zuid-Holland',
    description: 'Plan uw computerhulp afspraak. Binnen 24 uur bij u thuis in Zuid-Holland.',
    type: 'website',
    url: 'https://computerhulpzh.nl/afspraak-maken',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/afspraak-maken',
  },
}

export default function AfspraakLayout({ children }: { children: React.ReactNode }) {
  return children
}
