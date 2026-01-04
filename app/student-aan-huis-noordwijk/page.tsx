import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('noordwijk')!

export const metadata: Metadata = {
  title: 'Student aan Huis Noordwijk | Binnen 24u',
  
  keywords: "student aan huis Noordwijk, IT student Noordwijk, computerhulp student Noordwijk, computer hulp Noordwijk, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Noordwijk | Binnen 24u',
    description: 'Student aan huis in Noordwijk. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-noordwijk',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-noordwijk',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
