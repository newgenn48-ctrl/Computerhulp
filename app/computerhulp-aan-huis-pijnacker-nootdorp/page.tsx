import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('pijnacker-nootdorp')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Pijnacker-Nootdorp | Binnen 24u',
  description: 'Professionele computerhulp aan huis in Pijnacker-Nootdorp. Hulp met computer, laptop, printer, WiFi en meer. Geen voorrijkosten, binnen 24 uur. Bel 06-42548451.',
  openGraph: {
    title: 'Computerhulp aan Huis Pijnacker-Nootdorp | Binnen 24u',
    description: 'Computerhulp aan huis in Pijnacker-Nootdorp. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-pijnacker-nootdorp',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-pijnacker-nootdorp',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
