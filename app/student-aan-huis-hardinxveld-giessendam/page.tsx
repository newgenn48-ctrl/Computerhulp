import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('hardinxveld-giessendam')!

export const metadata: Metadata = {
  title: 'Student aan Huis Hardinxveld-Giessendam | Binnen 24u',
  
  keywords: "student aan huis Hardinxveld Giessendam, IT student Hardinxveld Giessendam, computerhulp student Hardinxveld Giessendam, computer hulp Hardinxveld Giessendam, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Hardinxveld-Giessendam | Binnen 24u',
    description: 'Student aan huis in Hardinxveld-Giessendam. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-hardinxveld-giessendam',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-hardinxveld-giessendam',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
