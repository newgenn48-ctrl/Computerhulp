import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('hardinxveld-giessendam')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Hardinxveld-Giessendam | Binnen 24u',
  description: 'Computerhulp aan huis in Hardinxveld-Giessendam. Computer, laptop, printer, WiFi hulp. Geen voorrijkosten, binnen 24 uur. Bel 06-42548451.',
  openGraph: {
    title: 'Computerhulp aan Huis Hardinxveld-Giessendam | Binnen 24u',
    description: 'Computerhulp aan huis in Hardinxveld-Giessendam. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-hardinxveld-giessendam',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-hardinxveld-giessendam',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
