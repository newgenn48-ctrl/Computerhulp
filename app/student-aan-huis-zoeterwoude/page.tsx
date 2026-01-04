import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('zoeterwoude')!

export const metadata: Metadata = {
  title: 'Student aan Huis Zoeterwoude | Binnen 24u',
  
  keywords: "student aan huis Zoeterwoude, IT student Zoeterwoude, computerhulp student Zoeterwoude, computer hulp Zoeterwoude, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Zoeterwoude | Binnen 24u',
    description: 'Student aan huis in Zoeterwoude. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-zoeterwoude',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-zoeterwoude',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
