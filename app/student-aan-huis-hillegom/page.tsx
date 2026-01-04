import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('hillegom')!

export const metadata: Metadata = {
  title: 'Student aan Huis Hillegom | Binnen 24u',
  
  keywords: "student aan huis Hillegom, IT student Hillegom, computerhulp student Hillegom, computer hulp Hillegom, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Hillegom | Binnen 24u',
    description: 'Student aan huis in Hillegom. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-hillegom',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-hillegom',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
