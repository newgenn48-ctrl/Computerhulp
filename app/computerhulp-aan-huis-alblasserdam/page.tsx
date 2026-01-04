import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('alblasserdam')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Alblasserdam | Binnen 24u bij u Thuis',
  description: 'Professionele computerhulp aan huis in Alblasserdam. Hulp met computer, laptop, printer, WiFi en meer. Geen voorrijkosten, binnen 24 uur. Bel 06-42548451.',
  openGraph: {
    title: 'Computerhulp aan Huis Alblasserdam | Binnen 24u bij u Thuis',
    description: 'Computerhulp aan huis in Alblasserdam. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-alblasserdam',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-alblasserdam',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
