import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('krimpen-aan-den-ijssel')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Krimpen aan den IJssel | Binnen 24u',
  description: 'Computerhulp aan huis in Krimpen aan den IJssel. Computer, laptop, printer, WiFi hulp. Geen voorrijkosten, binnen 24 uur. Bel 06-42548451.',
  openGraph: {
    title: 'Computerhulp aan Huis Krimpen aan den IJssel | Binnen 24u',
    description: 'Computerhulp aan huis in Krimpen aan den IJssel. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-krimpen-aan-den-ijssel',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-krimpen-aan-den-ijssel',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
