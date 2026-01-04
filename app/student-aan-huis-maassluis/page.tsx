import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('maassluis')!

export const metadata: Metadata = {
  title: 'Student aan Huis Maassluis | Binnen 24u',
  
  keywords: "student aan huis Maassluis, IT student Maassluis, computerhulp student Maassluis, computer hulp Maassluis, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Maassluis | Binnen 24u',
    description: 'Student aan huis in Maassluis. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-maassluis',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-maassluis',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
