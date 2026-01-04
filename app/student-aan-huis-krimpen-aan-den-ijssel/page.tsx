import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('krimpen-aan-den-ijssel')!

export const metadata: Metadata = {
  title: 'Student aan Huis Krimpen aan den IJssel | Binnen 24u',
  
  keywords: "student aan huis Krimpen Aan Den Ijssel, IT student Krimpen Aan Den Ijssel, computerhulp student Krimpen Aan Den Ijssel, computer hulp Krimpen Aan Den Ijssel, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Krimpen aan den IJssel | Binnen 24u',
    description: 'Student aan huis in Krimpen aan den IJssel. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-krimpen-aan-den-ijssel',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-krimpen-aan-den-ijssel',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
