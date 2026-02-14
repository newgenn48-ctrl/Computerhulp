import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('leidschendam-voorburg')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Leidschendam-Voorburg | Binnen 24u',
  description: 'Computerhulp aan huis in Leidschendam-Voorburg. Computer, laptop, printer, WiFi hulp. Geen voorrijkosten, binnen 24 uur. Bel 085-8002006.',
  openGraph: {
    title: 'Computerhulp aan Huis Leidschendam-Voorburg | Binnen 24u',
    description: 'Computerhulp aan huis in Leidschendam-Voorburg. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-leidschendam-voorburg',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-leidschendam-voorburg',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
