import { Metadata } from 'next'
import StudentCityPageTemplate from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('zwijndrecht')!

export const metadata: Metadata = {
  title: 'Student aan Huis Zwijndrecht | Binnen 24u',
  
  keywords: "student aan huis Zwijndrecht, IT student Zwijndrecht, computerhulp student Zwijndrecht, computer hulp Zwijndrecht, Zuid-Holland",
  openGraph: {
    title: 'Student aan Huis Zwijndrecht | Binnen 24u',
    description: 'Student aan huis in Zwijndrecht. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-zwijndrecht',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-zwijndrecht',
  },
}

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
