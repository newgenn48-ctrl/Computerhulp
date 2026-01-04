import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('pijnacker-nootdorp')!

export const metadata: Metadata = {
  title: 'Student aan Huis Pijnacker-Nootdorp | Binnen 24u',
  
  keywords: "student aan huis Pijnacker Nootdorp, IT student Pijnacker Nootdorp, computerhulp student Pijnacker Nootdorp, computer hulp Pijnacker Nootdorp, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Pijnacker-Nootdorp | Binnen 24u',
    description: 'Student aan huis in Pijnacker-Nootdorp. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-pijnacker-nootdorp',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-pijnacker-nootdorp',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
