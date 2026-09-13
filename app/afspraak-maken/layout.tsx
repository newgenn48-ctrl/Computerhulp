import { Metadata } from 'next'
import { BUSINESS, PRICING, HOURS, OG_IMAGE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Afspraak maken | Computerhulp aan huis',
  description: `Maak een afspraak voor computerhulp aan huis in ${BUSINESS.REGION}. Meestal binnen 24 uur geholpen. ${PRICING.TRAVEL} voorrijkosten. ${HOURS.DAYS} beschikbaar.`,
  openGraph: {
    images: OG_IMAGE,
    title: 'Afspraak maken | Computerhulp aan huis',
    description: `Plan uw computerhulp afspraak. Meestal binnen 24 uur bij u thuis in ${BUSINESS.REGION}.`,
    type: 'website',
    url: `${BUSINESS.URL}/afspraak-maken`,
  },
  alternates: {
    canonical: `${BUSINESS.URL}/afspraak-maken`,
  },
}

export default function AfspraakLayout({ children }: { children: React.ReactNode }) {
  return children
}
