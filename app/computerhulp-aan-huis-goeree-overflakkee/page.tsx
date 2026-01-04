import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('goeree-overflakkee')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Goeree-Overflakkee | Binnen 24u',
  description: 'Professionele computerhulp aan huis in Goeree-Overflakkee. Hulp met computer, laptop, printer, WiFi en meer. Geen voorrijkosten, binnen 24 uur. Bel 06-42548451.',
  openGraph: {
    title: 'Computerhulp aan Huis Goeree-Overflakkee | Binnen 24u',
    description: 'Computerhulp aan huis in Goeree-Overflakkee. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-goeree-overflakkee',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-goeree-overflakkee',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
