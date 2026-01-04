import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('leidschendam-voorburg')!

export const metadata: Metadata = {
  title: 'Student aan Huis Leidschendam-Voorburg | Binnen 24u',
  
  keywords: "student aan huis Leidschendam Voorburg, IT student Leidschendam Voorburg, computerhulp student Leidschendam Voorburg, computer hulp Leidschendam Voorburg, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Leidschendam-Voorburg | Binnen 24u',
    description: 'Student aan huis in Leidschendam-Voorburg. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-leidschendam-voorburg',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-leidschendam-voorburg',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
