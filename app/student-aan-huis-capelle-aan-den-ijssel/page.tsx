import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('capelle-aan-den-ijssel')!

export const metadata: Metadata = {
  title: 'Student aan Huis Capelle aan den IJssel | Binnen 24u',
  
  keywords: "student aan huis Capelle Aan Den Ijssel, IT student Capelle Aan Den Ijssel, computerhulp student Capelle Aan Den Ijssel, computer hulp Capelle Aan Den Ijssel, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Capelle aan den IJssel | Binnen 24u',
    description: 'Student aan huis in Capelle aan den IJssel. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-capelle-aan-den-ijssel',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-capelle-aan-den-ijssel',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
