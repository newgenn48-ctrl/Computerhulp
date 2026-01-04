import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('alblasserdam')!

export const metadata: Metadata = {
  title: 'Student aan Huis Alblasserdam | Binnen 24u',
  
  keywords: "student aan huis Alblasserdam, IT student Alblasserdam, computerhulp student Alblasserdam, computer hulp Alblasserdam, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Alblasserdam | Binnen 24u',
    description: 'Student aan huis in Alblasserdam. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-alblasserdam',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-alblasserdam',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
