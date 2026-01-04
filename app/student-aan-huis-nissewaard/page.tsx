import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('nissewaard')!

export const metadata: Metadata = {
  title: 'Student aan Huis Nissewaard | Binnen 24u',
  
  keywords: "student aan huis Nissewaard, IT student Nissewaard, computerhulp student Nissewaard, computer hulp Nissewaard, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Nissewaard | Binnen 24u',
    description: 'Student aan huis in Nissewaard. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-nissewaard',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-nissewaard',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
