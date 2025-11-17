import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Afspraak Maken | Binnen 24u Geholpen | Computerhulp Zuid-Holland',
  description: '📅 Maak direct een afspraak! ✓ Binnen 24u bij u thuis ✓ Gratis kennismaking ✓ Geen voorrijkosten ✓ €14,50 per kwartier. Bel 06-42548451.',
  openGraph: {
    title: 'Afspraak Maken | Computerhulp Zuid-Holland',
    description: 'Maak direct een afspraak. Binnen 24 uur bij u thuis in Zuid-Holland. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/afspraak-maken',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/afspraak-maken',
  },
}

export default function AfspraakMakenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
