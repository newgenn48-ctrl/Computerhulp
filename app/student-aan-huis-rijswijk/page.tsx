import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('rijswijk')!

export const metadata: Metadata = {
  title: 'Student aan Huis Rijswijk | Binnen 24u',
  
  keywords: "student aan huis Rijswijk, IT student Rijswijk, computerhulp student Rijswijk, computer hulp Rijswijk, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Rijswijk | Binnen 24u',
    description: 'Student aan huis in Rijswijk. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-rijswijk',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-rijswijk',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
