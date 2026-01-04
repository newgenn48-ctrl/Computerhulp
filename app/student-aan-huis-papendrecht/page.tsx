import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('papendrecht')!

export const metadata: Metadata = {
  title: 'Student aan Huis Papendrecht | Binnen 24u',
  
  keywords: "student aan huis Papendrecht, IT student Papendrecht, computerhulp student Papendrecht, computer hulp Papendrecht, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Papendrecht | Binnen 24u',
    description: 'Student aan huis in Papendrecht. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-papendrecht',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-papendrecht',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
