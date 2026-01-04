import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('vlaardingen')!

export const metadata: Metadata = {
  title: 'Student aan Huis Vlaardingen | Binnen 24u',
  
  keywords: "student aan huis Vlaardingen, IT student Vlaardingen, computerhulp student Vlaardingen, computer hulp Vlaardingen, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Vlaardingen | Binnen 24u',
    description: 'Student aan huis in Vlaardingen. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-vlaardingen',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-vlaardingen',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
