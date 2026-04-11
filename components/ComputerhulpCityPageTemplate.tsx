import CityPageTemplate, { generateComputerhulpPageMetadata } from '@/components/CityPageTemplate'
import { City } from '@/lib/cities'

export { generateComputerhulpPageMetadata }

interface ComputerhulpCityPageTemplateProps {
  city: City
}

export default function ComputerhulpCityPageTemplate({ city }: ComputerhulpCityPageTemplateProps) {
  return <CityPageTemplate city={city} variant="computerhulp" />
}
