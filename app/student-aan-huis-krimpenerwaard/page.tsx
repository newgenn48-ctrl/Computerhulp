import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('krimpenerwaard')!

export const metadata: Metadata = {
  title: 'Student aan Huis Krimpenerwaard | Binnen 24u',
  
  keywords: "student aan huis Krimpenerwaard, IT student Krimpenerwaard, computerhulp student Krimpenerwaard, computer hulp Krimpenerwaard, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Krimpenerwaard | Binnen 24u',
    description: 'Student aan huis in Krimpenerwaard. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-krimpenerwaard',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-krimpenerwaard',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
