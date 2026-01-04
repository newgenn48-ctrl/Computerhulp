import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('wassenaar')!

export const metadata: Metadata = {
  title: 'Student aan Huis Wassenaar | Binnen 24u',
  
  keywords: "student aan huis Wassenaar, IT student Wassenaar, computerhulp student Wassenaar, computer hulp Wassenaar, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Wassenaar | Binnen 24u',
    description: 'Student aan huis in Wassenaar. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-wassenaar',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-wassenaar',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
