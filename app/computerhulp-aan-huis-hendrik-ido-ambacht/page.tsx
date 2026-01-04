import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('hendrik-ido-ambacht')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Hendrik-Ido-Ambacht | Binnen 24u',
  description: 'Computerhulp aan huis in Hendrik-Ido-Ambacht. Computer, laptop, printer, WiFi hulp. Geen voorrijkosten, binnen 24 uur. Bel 06-42548451.',
  openGraph: {
    title: 'Computerhulp aan Huis Hendrik-Ido-Ambacht | Binnen 24u',
    description: 'Computerhulp aan huis in Hendrik-Ido-Ambacht. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-hendrik-ido-ambacht',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-hendrik-ido-ambacht',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
