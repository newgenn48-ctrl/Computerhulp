const fs = require('fs');
const path = require('path');

// City data with SEO-optimized metadata
const cities = [
  { slug: 'alblasserdam', name: 'Alblasserdam' },
  { slug: 'albrandswaard', name: 'Albrandswaard' },
  { slug: 'alphen-aan-den-rijn', name: 'Alphen aan den Rijn' },
  { slug: 'barendrecht', name: 'Barendrecht' },
  { slug: 'bodegraven-reeuwijk', name: 'Bodegraven-Reeuwijk' },
  { slug: 'capelle-aan-den-ijssel', name: 'Capelle aan den IJssel' },
  { slug: 'delft', name: 'Delft' },
  { slug: 'den-haag', name: 'Den Haag' },
  { slug: 'dordrecht', name: 'Dordrecht' },
  { slug: 'goeree-overflakkee', name: 'Goeree-Overflakkee' },
  { slug: 'gorinchem', name: 'Gorinchem' },
  { slug: 'gouda', name: 'Gouda' },
  { slug: 'hardinxveld-giessendam', name: 'Hardinxveld-Giessendam' },
  { slug: 'hendrik-ido-ambacht', name: 'Hendrik-Ido-Ambacht' },
  { slug: 'hillegom', name: 'Hillegom' },
  { slug: 'hoeksche-waard', name: 'Hoeksche Waard' },
  { slug: 'kaag-en-braassem', name: 'Kaag en Braassem' },
  { slug: 'katwijk', name: 'Katwijk' },
  { slug: 'krimpen-aan-den-ijssel', name: 'Krimpen aan den IJssel' },
  { slug: 'krimpenerwaard', name: 'Krimpenerwaard' },
  { slug: 'lansingerland', name: 'Lansingerland' },
  { slug: 'leiden', name: 'Leiden' },
  { slug: 'leiderdorp', name: 'Leiderdorp' },
  { slug: 'leidschendam-voorburg', name: 'Leidschendam-Voorburg' },
  { slug: 'lisse', name: 'Lisse' },
  { slug: 'maassluis', name: 'Maassluis' },
  { slug: 'midden-delfland', name: 'Midden-Delfland' },
  { slug: 'molenlanden', name: 'Molenlanden' },
  { slug: 'nieuwkoop', name: 'Nieuwkoop' },
  { slug: 'nissewaard', name: 'Nissewaard' },
  { slug: 'noordwijk', name: 'Noordwijk' },
  { slug: 'oegstgeest', name: 'Oegstgeest' },
  { slug: 'papendrecht', name: 'Papendrecht' },
  { slug: 'pijnacker-nootdorp', name: 'Pijnacker-Nootdorp' },
  { slug: 'ridderkerk', name: 'Ridderkerk' },
  { slug: 'rijswijk', name: 'Rijswijk' },
  { slug: 'rotterdam', name: 'Rotterdam' },
  { slug: 'schiedam', name: 'Schiedam' },
  { slug: 'sliedrecht', name: 'Sliedrecht' },
  { slug: 'teylingen', name: 'Teylingen' },
  { slug: 'vlaardingen', name: 'Vlaardingen' },
  { slug: 'voorschoten', name: 'Voorschoten' },
  { slug: 'waddinxveen', name: 'Waddinxveen' },
  { slug: 'wassenaar', name: 'Wassenaar' },
  { slug: 'westland', name: 'Westland' },
  { slug: 'westvoorne', name: 'Westvoorne' },
  { slug: 'zoetermeer', name: 'Zoetermeer' },
  { slug: 'zoeterwoude', name: 'Zoeterwoude' },
  { slug: 'zwijndrecht', name: 'Zwijndrecht' },
];

// Generate SEO-optimized title (50-60 chars for optimal display)
function generateTitle(cityName) {
  // Format: "Computerhulp aan Huis [Stad] | Binnen 24u bij u Thuis"
  const title = `Computerhulp aan Huis ${cityName} | Binnen 24u bij u Thuis`;
  if (title.length > 60) {
    // Fallback for long city names
    return `Computerhulp aan Huis ${cityName} | Binnen 24u`;
  }
  return title;
}

// Generate SEO-optimized description (150-160 chars for optimal display)
function generateDescription(cityName) {
  // Primary format with all keywords - aim for 150-160 chars
  const desc = `Professionele computerhulp aan huis in ${cityName}. Hulp met computer, laptop, printer, WiFi en meer. Geen voorrijkosten, binnen 24 uur. Bel 06-42548451.`;

  if (desc.length <= 160) {
    return desc;
  }

  // Shorter fallback for long city names
  return `Computerhulp aan huis in ${cityName}. Computer, laptop, printer, WiFi hulp. Geen voorrijkosten, binnen 24 uur. Bel 06-42548451.`;
}

// Generate OG description (shorter, max 120 chars)
function generateOgDescription(cityName) {
  return `Computerhulp aan huis in ${cityName}. Computer, laptop, WiFi hulp. Binnen 24u, geen voorrijkosten.`;
}

// Generate page content
function generatePageContent(city) {
  const title = generateTitle(city.name);
  const description = generateDescription(city.name);
  const ogDescription = generateOgDescription(city.name);

  return `import { Metadata } from 'next'
import ComputerhulpCityPageTemplate from '@/components/ComputerhulpCityPageTemplate'
import { getCityBySlug } from '@/lib/cities'

const city = getCityBySlug('${city.slug}')!

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  openGraph: {
    title: '${title}',
    description: '${ogDescription}',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-${city.slug}',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-${city.slug}',
  },
}

export default function Page() {
  return <ComputerhulpCityPageTemplate city={city} />
}
`;
}

// Main execution
const appDir = path.join(__dirname, '..', 'app');
let updatedCount = 0;
let createdCount = 0;

console.log('Updating Computerhulp aan Huis city pages with premium template and SEO...\n');

cities.forEach(city => {
  const dirPath = path.join(appDir, `computerhulp-aan-huis-${city.slug}`);
  const pagePath = path.join(dirPath, 'page.tsx');

  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: computerhulp-aan-huis-${city.slug}`);
  }

  const content = generatePageContent(city);
  const existed = fs.existsSync(pagePath);

  fs.writeFileSync(pagePath, content);

  if (existed) {
    updatedCount++;
    console.log(`Updated: ${city.name}`);
  } else {
    createdCount++;
    console.log(`Created: ${city.name}`);
  }

  // Log SEO info
  const title = generateTitle(city.name);
  const desc = generateDescription(city.name);
  console.log(`  Title (${title.length} chars): ${title}`);
  console.log(`  Desc (${desc.length} chars): ${desc.substring(0, 60)}...`);
  console.log('');
});

console.log('\n========================================');
console.log(`Done! Updated ${updatedCount} pages, created ${createdCount} new pages.`);
console.log('========================================\n');

// Summary of SEO optimizations
console.log('SEO Optimizations Applied:');
console.log('- Title format: "Computerhulp aan Huis [Stad] | Binnen 24u" (max 60 chars)');
console.log('- Description includes: city name, services, USPs, phone number (max 155 chars)');
console.log('- OpenGraph tags with optimized descriptions');
console.log('- Canonical URLs for each city page');
console.log('- Using new ComputerhulpCityPageTemplate with:');
console.log('  * Premium hero design with photo');
console.log('  * LocalBusiness structured data');
console.log('  * Service schema with pricing');
console.log('  * FAQ schema with city-specific questions');
console.log('  * BreadcrumbList schema');
console.log('  * Internal links to services and nearby cities');
