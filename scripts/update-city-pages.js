/**
 * Script to update all city pages to use the shared CityPageTemplate
 * This reduces code duplication from ~600 lines per page to ~30 lines
 *
 * Run with: node scripts/update-city-pages.js
 */

const fs = require('fs')
const path = require('path')

// Import cities from the central source (we'll read the file directly)
const citiesFile = fs.readFileSync(
  path.join(__dirname, '../lib/cities.ts'),
  'utf8'
)

// Parse the cities array from the TypeScript file
const citiesMatch = citiesFile.match(/export const cities: City\[\] = \[([\s\S]*?)\]/)
if (!citiesMatch) {
  console.error('Could not parse cities from lib/cities.ts')
  process.exit(1)
}

// Extract city data
const cityLines = citiesMatch[1].split('\n').filter(line => line.includes('slug:'))
const cities = cityLines.map(line => {
  const slugMatch = line.match(/slug: '([^']+)'/)
  const nameMatch = line.match(/name: '([^']+)'/)
  return {
    slug: slugMatch ? slugMatch[1] : null,
    name: nameMatch ? nameMatch[1] : null
  }
}).filter(c => c.slug && c.name)

console.log(`Found ${cities.length} cities to process`)

// Template for computerhulp-aan-huis pages
function generateComputerhulpPage(city) {
  return `import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('${city.slug}')!

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis ${city.name} | Binnen 24u bij u Thuis',
  description: 'Computerhulp aan huis in ${city.name}. Binnen 24 uur bij u thuis! Computer, laptop, printer, WiFi. Geen voorrijkosten. Transparant tarief. Bel 06-42548451.',
  openGraph: {
    title: 'Computerhulp aan Huis ${city.name} | Binnen 24u bij u Thuis',
    description: 'Binnen 24 uur bij u thuis in ${city.name}. Computer, laptop, printer, WiFi problemen opgelost. Geen voorrijkosten. Bel 06-42548451',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-${city.slug}',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-${city.slug}',
  },
}

export default function Page() {
  return <CityPageTemplate city={city} pageType="computerhulp-aan-huis" />
}
`
}

// Template for student-aan-huis pages
function generateStudentPage(city) {
  return `import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('${city.slug}')!

export const metadata: Metadata = {
  title: 'Student aan Huis ${city.name} | Binnen 24u bij u Thuis',
  description: 'Student aan huis in ${city.name}. Binnen 24 uur bij u thuis! Computer, laptop, printer, WiFi. Geen voorrijkosten. Studenttarief. Bel 06-42548451.',
  openGraph: {
    title: 'Student aan Huis ${city.name} | Binnen 24u bij u Thuis',
    description: 'Binnen 24 uur bij u thuis in ${city.name}. Computer, laptop, printer, WiFi problemen opgelost. Studenttarief. Bel 06-42548451',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-${city.slug}',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-${city.slug}',
  },
}

export default function Page() {
  return <CityPageTemplate city={city} pageType="student-aan-huis" />
}
`
}

const appDir = path.join(__dirname, '../app')
let updatedCount = 0

// Update computerhulp-aan-huis pages
cities.forEach(city => {
  const dirPath = path.join(appDir, `computerhulp-aan-huis-${city.slug}`)
  const pagePath = path.join(dirPath, 'page.tsx')

  if (fs.existsSync(dirPath)) {
    fs.writeFileSync(pagePath, generateComputerhulpPage(city))
    updatedCount++
    console.log(`Updated: computerhulp-aan-huis-${city.slug}`)
  }
})

// Update student-aan-huis pages
cities.forEach(city => {
  const dirPath = path.join(appDir, `student-aan-huis-${city.slug}`)
  const pagePath = path.join(dirPath, 'page.tsx')

  if (fs.existsSync(dirPath)) {
    fs.writeFileSync(pagePath, generateStudentPage(city))
    updatedCount++
    console.log(`Updated: student-aan-huis-${city.slug}`)
  }
})

console.log(`\nDone! Updated ${updatedCount} city pages.`)
console.log('All pages now use the shared CityPageTemplate component.')
