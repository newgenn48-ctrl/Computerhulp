import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('molenlanden')!

export const metadata: Metadata = {
  title: 'Student aan Huis Molenlanden | Binnen 24u',
  
  keywords: "student aan huis Molenlanden, IT student Molenlanden, computerhulp student Molenlanden, computer hulp Molenlanden, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Molenlanden | Binnen 24u',
    description: 'Student aan huis in Molenlanden. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-molenlanden',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-molenlanden',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
