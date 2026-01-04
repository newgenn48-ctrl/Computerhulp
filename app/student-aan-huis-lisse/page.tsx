import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('lisse')!

export const metadata: Metadata = {
  title: 'Student aan Huis Lisse | Binnen 24u',
  
  keywords: "student aan huis Lisse, IT student Lisse, computerhulp student Lisse, computer hulp Lisse, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Lisse | Binnen 24u',
    description: 'Student aan huis in Lisse. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-lisse',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-lisse',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
