import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('schiedam')!

export const metadata: Metadata = {
  title: 'Student aan Huis Schiedam | Binnen 24u',
  
  keywords: "student aan huis Schiedam, IT student Schiedam, computerhulp student Schiedam, computer hulp Schiedam, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Schiedam | Binnen 24u',
    description: 'Student aan huis in Schiedam. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-schiedam',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-schiedam',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
