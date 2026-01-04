import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('nieuwkoop')!

export const metadata: Metadata = {
  title: 'Student aan Huis Nieuwkoop | Binnen 24u',
  
  keywords: "student aan huis Nieuwkoop, IT student Nieuwkoop, computerhulp student Nieuwkoop, computer hulp Nieuwkoop, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Nieuwkoop | Binnen 24u',
    description: 'Student aan huis in Nieuwkoop. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-nieuwkoop',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-nieuwkoop',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
