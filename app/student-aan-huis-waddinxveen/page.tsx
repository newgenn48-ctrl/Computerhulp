import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('waddinxveen')!

export const metadata: Metadata = {
  title: 'Student aan Huis Waddinxveen | Binnen 24u',
  
  keywords: "student aan huis Waddinxveen, IT student Waddinxveen, computerhulp student Waddinxveen, computer hulp Waddinxveen, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Waddinxveen | Binnen 24u',
    description: 'Student aan huis in Waddinxveen. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-waddinxveen',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-waddinxveen',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
