import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('gouda')!

export const metadata: Metadata = {
  title: 'Student aan Huis Gouda | Binnen 24u',
  
  keywords: "student aan huis Gouda, IT student Gouda, computerhulp student Gouda, computer hulp Gouda, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Gouda | Binnen 24u',
    description: 'Student aan huis in Gouda. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-gouda',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-gouda',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
