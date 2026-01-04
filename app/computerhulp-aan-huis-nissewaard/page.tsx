import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('nissewaard')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Nissewaard | Binnen 24u bij u Thuis',
  description: 'Professionele computerhulp aan huis in Nissewaard. Hulp met computer, laptop, printer, WiFi en meer. Geen voorrijkosten, binnen 24 uur. Bel 06-42548451.',
  openGraph: {
    title: 'Computerhulp aan Huis Nissewaard | Binnen 24u bij u Thuis',
    description: 'Computerhulp aan huis in Nissewaard. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-nissewaard',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-nissewaard',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
