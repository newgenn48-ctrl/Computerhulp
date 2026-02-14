import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('krimpenerwaard')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Krimpenerwaard | Binnen 24u',
  description: 'Professionele computerhulp aan huis in Krimpenerwaard. Hulp met computer, laptop, printer, WiFi en meer. Geen voorrijkosten, binnen 24 uur. Bel 085-8002006.',
  openGraph: {
    title: 'Computerhulp aan Huis Krimpenerwaard | Binnen 24u',
    description: 'Computerhulp aan huis in Krimpenerwaard. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-krimpenerwaard',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-krimpenerwaard',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
