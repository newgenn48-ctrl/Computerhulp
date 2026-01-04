import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('voorschoten')!

export const metadata: Metadata = {
  title: 'Student aan Huis Voorschoten | Binnen 24u',
  
  keywords: "student aan huis Voorschoten, IT student Voorschoten, computerhulp student Voorschoten, computer hulp Voorschoten, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Voorschoten | Binnen 24u',
    description: 'Student aan huis in Voorschoten. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-voorschoten',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-voorschoten',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
