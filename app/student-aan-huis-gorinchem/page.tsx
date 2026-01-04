import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('gorinchem')!

export const metadata: Metadata = {
  title: 'Student aan Huis Gorinchem | Binnen 24u',
  
  keywords: "student aan huis Gorinchem, IT student Gorinchem, computerhulp student Gorinchem, computer hulp Gorinchem, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Gorinchem | Binnen 24u',
    description: 'Student aan huis in Gorinchem. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-gorinchem',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-gorinchem',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
