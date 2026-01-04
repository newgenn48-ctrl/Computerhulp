import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('alphen-aan-den-rijn')!

export const metadata: Metadata = {
  title: 'Student aan Huis Alphen aan den Rijn | Binnen 24u',
  
  keywords: "student aan huis Alphen Aan Den Rijn, IT student Alphen Aan Den Rijn, computerhulp student Alphen Aan Den Rijn, computer hulp Alphen Aan Den Rijn, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Alphen aan den Rijn | Binnen 24u',
    description: 'Student aan huis in Alphen aan den Rijn. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-alphen-aan-den-rijn',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-alphen-aan-den-rijn',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
