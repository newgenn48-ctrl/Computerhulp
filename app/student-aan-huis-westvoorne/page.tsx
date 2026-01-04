import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('westvoorne')!

export const metadata: Metadata = {
  title: 'Student aan Huis Westvoorne | Binnen 24u',
  
  keywords: "student aan huis Westvoorne, IT student Westvoorne, computerhulp student Westvoorne, computer hulp Westvoorne, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Westvoorne | Binnen 24u',
    description: 'Student aan huis in Westvoorne. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-westvoorne',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-westvoorne',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
