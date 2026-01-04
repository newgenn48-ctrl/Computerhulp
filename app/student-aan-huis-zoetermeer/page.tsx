import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('zoetermeer')!

export const metadata: Metadata = {
  title: 'Student aan Huis Zoetermeer | Binnen 24u',
  
  keywords: "student aan huis Zoetermeer, IT student Zoetermeer, computerhulp student Zoetermeer, computer hulp Zoetermeer, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Zoetermeer | Binnen 24u',
    description: 'Student aan huis in Zoetermeer. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-zoetermeer',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-zoetermeer',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
