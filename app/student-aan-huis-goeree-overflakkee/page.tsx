import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('goeree-overflakkee')!

export const metadata: Metadata = {
  title: 'Student aan Huis Goeree-Overflakkee | Binnen 24u',
  
  keywords: "student aan huis Goeree Overflakkee, IT student Goeree Overflakkee, computerhulp student Goeree Overflakkee, computer hulp Goeree Overflakkee, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Goeree-Overflakkee | Binnen 24u',
    description: 'Student aan huis in Goeree-Overflakkee. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-goeree-overflakkee',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-goeree-overflakkee',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
