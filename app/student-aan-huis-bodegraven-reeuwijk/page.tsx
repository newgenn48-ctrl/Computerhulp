import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('bodegraven-reeuwijk')!

export const metadata: Metadata = {
  title: 'Student aan Huis Bodegraven-Reeuwijk | Binnen 24u',
  
  keywords: "student aan huis Bodegraven Reeuwijk, IT student Bodegraven Reeuwijk, computerhulp student Bodegraven Reeuwijk, computer hulp Bodegraven Reeuwijk, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Bodegraven-Reeuwijk | Binnen 24u',
    description: 'Student aan huis in Bodegraven-Reeuwijk. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-bodegraven-reeuwijk',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-bodegraven-reeuwijk',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
