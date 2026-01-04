import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('oegstgeest')!

export const metadata: Metadata = {
  title: 'Student aan Huis Oegstgeest | Binnen 24u',
  
  keywords: "student aan huis Oegstgeest, IT student Oegstgeest, computerhulp student Oegstgeest, computer hulp Oegstgeest, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Oegstgeest | Binnen 24u',
    description: 'Student aan huis in Oegstgeest. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-oegstgeest',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-oegstgeest',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
