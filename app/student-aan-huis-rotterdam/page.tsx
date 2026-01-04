import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('rotterdam')!

export const metadata: Metadata = {
  title: 'Student aan Huis Rotterdam | Binnen 24u',
  
  keywords: "student aan huis Rotterdam, IT student Rotterdam, computerhulp student Rotterdam, computer hulp Rotterdam, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Rotterdam | Binnen 24u',
    description: 'Student aan huis in Rotterdam. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-rotterdam',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-rotterdam',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
