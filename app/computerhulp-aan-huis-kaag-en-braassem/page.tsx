import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('kaag-en-braassem')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Kaag en Braassem | Binnen 24u',
  description: 'Professionele computerhulp aan huis in Kaag en Braassem. Hulp met computer, laptop, printer, WiFi en meer. Geen voorrijkosten, binnen 24 uur. Bel 06-42548451.',
  openGraph: {
    title: 'Computerhulp aan Huis Kaag en Braassem | Binnen 24u',
    description: 'Computerhulp aan huis in Kaag en Braassem. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-kaag-en-braassem',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-kaag-en-braassem',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
