import ComputerhulpCityPageTemplate, { generateComputerhulpPageMetadata } from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('voorhout')!

export const metadata = generateComputerhulpPageMetadata(city)

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
