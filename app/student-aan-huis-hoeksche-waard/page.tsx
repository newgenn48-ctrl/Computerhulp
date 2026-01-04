import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('hoeksche-waard')!

export const metadata: Metadata = {
  title: 'Student aan Huis Hoeksche Waard | Binnen 24u',
  
  keywords: "student aan huis Hoeksche Waard, IT student Hoeksche Waard, computerhulp student Hoeksche Waard, computer hulp Hoeksche Waard, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Hoeksche Waard | Binnen 24u',
    description: 'Student aan huis in Hoeksche Waard. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-hoeksche-waard',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-hoeksche-waard',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
