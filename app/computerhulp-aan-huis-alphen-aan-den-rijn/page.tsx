import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('alphen-aan-den-rijn')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Alphen aan den Rijn | Binnen 24u',
  description: 'Computerhulp aan huis in Alphen aan den Rijn. Computer, laptop, printer, WiFi hulp. Geen voorrijkosten, binnen 24 uur. Bel 06-42548451.',
  openGraph: {
    title: 'Computerhulp aan Huis Alphen aan den Rijn | Binnen 24u',
    description: 'Computerhulp aan huis in Alphen aan den Rijn. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-alphen-aan-den-rijn',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-alphen-aan-den-rijn',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
