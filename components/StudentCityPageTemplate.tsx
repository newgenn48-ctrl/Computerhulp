import CityPageTemplate, { generateStudentPageMetadata } from '@/components/CityPageTemplate'
import { City } from '@/lib/cities'

export { generateStudentPageMetadata }

interface StudentCityPageTemplateProps {
  city: City
}

export default function StudentCityPageTemplate({ city }: StudentCityPageTemplateProps) {
  return <CityPageTemplate city={city} variant="student" />
}
