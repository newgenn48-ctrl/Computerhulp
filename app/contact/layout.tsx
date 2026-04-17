import { Metadata } from 'next'
import { BUSINESS, HOURS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Contact | ${BUSINESS.NAME} | Bel ${BUSINESS.PHONE}`,
  description: `Neem contact op met ${BUSINESS.NAME}. Bel ${BUSINESS.PHONE} of vul het formulier in. Binnen 1 uur reactie. ${HOURS.DAYS} bereikbaar.`,
  openGraph: {
    title: `Contact | ${BUSINESS.NAME}`,
    description: `Neem contact op voor computerhulp aan huis. Bel ${BUSINESS.PHONE} of vul het formulier in. Binnen 1 uur reactie.`,
    type: 'website',
    url: `${BUSINESS.URL}/contact`,
  },
  alternates: {
    canonical: `${BUSINESS.URL}/contact`,
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
