import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('midden-delfland')!

export const metadata: Metadata = {
  title: 'Student aan Huis Midden-Delfland | Binnen 24u',
  
  keywords: "student aan huis Midden Delfland, IT student Midden Delfland, computerhulp student Midden Delfland, computer hulp Midden Delfland, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Midden-Delfland | Binnen 24u',
    description: 'Student aan huis in Midden-Delfland. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-midden-delfland',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-midden-delfland',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
