import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('albrandswaard')!

export const metadata: Metadata = {
  title: 'Student aan Huis Albrandswaard | Binnen 24u',
  
  keywords: "student aan huis Albrandswaard, IT student Albrandswaard, computerhulp student Albrandswaard, computer hulp Albrandswaard, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Albrandswaard | Binnen 24u',
    description: 'Student aan huis in Albrandswaard. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-albrandswaard',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-albrandswaard',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
