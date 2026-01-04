import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('westland')!

export const metadata: Metadata = {
  title: 'Student aan Huis Westland | Binnen 24u',
  
  keywords: "student aan huis Westland, IT student Westland, computerhulp student Westland, computer hulp Westland, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Westland | Binnen 24u',
    description: 'Student aan huis in Westland. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-westland',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-westland',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
