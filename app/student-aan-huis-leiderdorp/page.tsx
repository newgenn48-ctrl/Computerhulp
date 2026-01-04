import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('leiderdorp')!

export const metadata: Metadata = {
  title: 'Student aan Huis Leiderdorp | Binnen 24u',
  
  keywords: "student aan huis Leiderdorp, IT student Leiderdorp, computerhulp student Leiderdorp, computer hulp Leiderdorp, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Leiderdorp | Binnen 24u',
    description: 'Student aan huis in Leiderdorp. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-leiderdorp',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-leiderdorp',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
