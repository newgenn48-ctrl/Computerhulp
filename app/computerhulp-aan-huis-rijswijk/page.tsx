import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('rijswijk')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Rijswijk | Binnen 24u bij u Thuis',
  description: 'Professionele computerhulp aan huis in Rijswijk. Hulp met computer, laptop, printer, WiFi en meer. Geen voorrijkosten, binnen 24 uur. Bel 06-42548451.',
  openGraph: {
    title: 'Computerhulp aan Huis Rijswijk | Binnen 24u bij u Thuis',
    description: 'Computerhulp aan huis in Rijswijk. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-rijswijk',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-rijswijk',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
