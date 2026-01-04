import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('hendrik-ido-ambacht')!

export const metadata: Metadata = {
  title: 'Student aan Huis Hendrik-Ido-Ambacht | Binnen 24u',
  
  keywords: "student aan huis Hendrik Ido Ambacht, IT student Hendrik Ido Ambacht, computerhulp student Hendrik Ido Ambacht, computer hulp Hendrik Ido Ambacht, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Hendrik-Ido-Ambacht | Binnen 24u',
    description: 'Student aan huis in Hendrik-Ido-Ambacht. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-hendrik-ido-ambacht',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-hendrik-ido-ambacht',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
