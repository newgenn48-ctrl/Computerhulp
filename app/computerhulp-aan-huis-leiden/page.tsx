import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('leiden')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Leiden | Binnen 24u bij u Thuis',
  description: 'Professionele computerhulp aan huis in Leiden. Hulp met computer, laptop, printer, WiFi en meer. Geen voorrijkosten, binnen 24 uur. Bel 085-8002006.',
  openGraph: {
    title: 'Computerhulp aan Huis Leiden | Binnen 24u bij u Thuis',
    description: 'Computerhulp aan huis in Leiden. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-leiden',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-leiden',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
