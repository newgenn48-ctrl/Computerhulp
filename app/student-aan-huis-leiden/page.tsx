import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('leiden')!

export const metadata: Metadata = {
  title: 'Student aan Huis Leiden | Binnen 24u',
  
  keywords: "student aan huis Leiden, IT student Leiden, computerhulp student Leiden, computer hulp Leiden, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Leiden | Binnen 24u',
    description: 'Student aan huis in Leiden. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-leiden',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-leiden',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
