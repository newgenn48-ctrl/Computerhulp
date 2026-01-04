import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('teylingen')!

export const metadata: Metadata = {
  title: 'Student aan Huis Teylingen | Binnen 24u',
  
  keywords: "student aan huis Teylingen, IT student Teylingen, computerhulp student Teylingen, computer hulp Teylingen, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Teylingen | Binnen 24u',
    description: 'Student aan huis in Teylingen. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-teylingen',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-teylingen',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
