import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('katwijk')!

export const metadata: Metadata = {
  title: 'Student aan Huis Katwijk | Binnen 24u',
  
  keywords: "student aan huis Katwijk, IT student Katwijk, computerhulp student Katwijk, computer hulp Katwijk, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Katwijk | Binnen 24u',
    description: 'Student aan huis in Katwijk. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-katwijk',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-katwijk',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
