import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('den-haag')!

export const metadata: Metadata = {
  title: 'Student aan Huis Den Haag | Binnen 24u',
  
  keywords: "student aan huis Den Haag, IT student Den Haag, computerhulp student Den Haag, computer hulp Den Haag, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Den Haag | Binnen 24u',
    description: 'Student aan huis in Den Haag. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-den-haag',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-den-haag',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
