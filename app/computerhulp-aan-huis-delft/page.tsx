import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('delft')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Delft | Binnen 24u bij u Thuis',
  description: 'Professionele computerhulp aan huis in Delft. Hulp met computer, laptop, printer, WiFi en meer. Geen voorrijkosten, binnen 24 uur. Bel 06-42548451.',
  openGraph: {
    title: 'Computerhulp aan Huis Delft | Binnen 24u bij u Thuis',
    description: 'Computerhulp aan huis in Delft. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-delft',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-delft',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
