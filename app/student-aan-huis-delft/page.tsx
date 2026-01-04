import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('delft')!

export const metadata: Metadata = {
  title: 'Student aan Huis Delft | Binnen 24u',
  
  keywords: "student aan huis Delft, IT student Delft, computerhulp student Delft, computer hulp Delft, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Delft | Binnen 24u',
    description: 'Student aan huis in Delft. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-delft',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-delft',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
