import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('ridderkerk')!

export const metadata: Metadata = {
  title: 'Student aan Huis Ridderkerk | Binnen 24u',
  
  keywords: "student aan huis Ridderkerk, IT student Ridderkerk, computerhulp student Ridderkerk, computer hulp Ridderkerk, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Ridderkerk | Binnen 24u',
    description: 'Student aan huis in Ridderkerk. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-ridderkerk',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-ridderkerk',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
