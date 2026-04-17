import { Metadata } from 'next'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Afspraak maken | ${BUSINESS.NAME} | Binnen 24u`,
  description: `Maak een afspraak voor computerhulp aan huis in ${BUSINESS.REGION}. Binnen 24 uur geholpen. ${PRICING.TRAVEL} voorrijkosten. ${HOURS.DAYS} beschikbaar.`,
  openGraph: {
    title: `Afspraak maken | ${BUSINESS.NAME}`,
    description: `Plan uw computerhulp afspraak. Binnen 24 uur bij u thuis in ${BUSINESS.REGION}.`,
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
