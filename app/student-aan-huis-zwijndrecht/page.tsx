import StudentCityPageTemplate, { generateStudentPageMetadata } from '@/components/StudentCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('zwijndrecht')!

export const metadata = generateStudentPageMetadata(city)

export default function Page() {
  return <StudentCityPageTemplate city={city} />
}
