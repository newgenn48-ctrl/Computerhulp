const fs = require('fs');
const path = require('path');

const cities = [
  { name: 'Leiden', slug: 'leiden', gpsLat: '52.1601', gpsLon: '4.4970' },
  { name: 'Zoetermeer', slug: 'zoetermeer', gpsLat: '52.0575', gpsLon: '4.4937' },
  { name: 'Dordrecht', slug: 'dordrecht', gpsLat: '51.8133', gpsLon: '4.6901' },
  { name: 'Delft', slug: 'delft', gpsLat: '52.0116', gpsLon: '4.3571' },
  { name: 'Gouda', slug: 'gouda', gpsLat: '52.0115', gpsLon: '4.7108' },
  { name: 'Schiedam', slug: 'schiedam', gpsLat: '51.9186', gpsLon: '4.3997' },
  { name: 'Alphen aan den Rijn', slug: 'alphen-aan-den-rijn', gpsLat: '52.1285', gpsLon: '4.6573' },
  { name: 'Vlaardingen', slug: 'vlaardingen', gpsLat: '51.9122', gpsLon: '4.3419' },
  { name: 'Rijswijk', slug: 'rijswijk', gpsLat: '52.0367', gpsLon: '4.3208' },
  { name: 'Capelle aan den IJssel', slug: 'capelle-aan-den-ijssel', gpsLat: '51.9289', gpsLon: '4.5778' },
  { name: 'Rotterdam', slug: 'rotterdam', gpsLat: '51.9225', gpsLon: '4.47917' }
];

// Read templates
const computerhulpTemplate = fs.readFileSync('./app/computerhulp-aan-huis/page.tsx', 'utf8');
const studentTemplate = fs.readFileSync('./app/student-aan-huis/page.tsx', 'utf8');

cities.forEach(city => {
  // Generate computerhulp page
  let computerhulpContent = computerhulpTemplate
    .replace(/Zuid-Holland/g, city.name)
    .replace(/zuid-holland/g, city.slug)
    .replace(/computerhulp-aan-huis'/g, `computerhulp-aan-huis-${city.slug}'`)
    .replace(/computerhulp-aan-huis"/g, `computerhulp-aan-huis-${city.slug}"`)
    .replace(/computerhulp-aan-huis`/g, `computerhulp-aan-huis-${city.slug}\``)
    .replace(/Computerhulp aan Huis'/g, `Computerhulp aan Huis ${city.name}'`)
    .replace(/latitude: '52.0705'/g, `latitude: '${city.gpsLat}'`)
    .replace(/longitude: '4.3007'/g, `longitude: '${city.gpsLon}'`)
    .replace(/addressRegion: 'Zuid-Holland'/g, `addressLocality: '${city.name}', addressRegion: 'Zuid-Holland'`);

  const computerhulpDir = `./app/computerhulp-aan-huis-${city.slug}`;
  if (!fs.existsSync(computerhulpDir)) {
    fs.mkdirSync(computerhulpDir, { recursive: true });
  }
  fs.writeFileSync(path.join(computerhulpDir, 'page.tsx'), computerhulpContent);

  // Generate student page
  let studentContent = studentTemplate
    .replace(/Zuid-Holland/g, city.name)
    .replace(/zuid-holland/g, city.slug)
    .replace(/student-aan-huis'/g, `student-aan-huis-${city.slug}'`)
    .replace(/student-aan-huis"/g, `student-aan-huis-${city.slug}"`)
    .replace(/student-aan-huis`/g, `student-aan-huis-${city.slug}\``)
    .replace(/Student aan Huis'/g, `Student aan Huis ${city.name}'`)
    .replace(/latitude: '52.0705'/g, `latitude: '${city.gpsLat}'`)
    .replace(/longitude: '4.3007'/g, `longitude: '${city.gpsLon}'`)
    .replace(/addressRegion: 'Zuid-Holland'/g, `addressLocality: '${city.name}', addressRegion: 'Zuid-Holland'`);

  const studentDir = `./app/student-aan-huis-${city.slug}`;
  if (!fs.existsSync(studentDir)) {
    fs.mkdirSync(studentDir, { recursive: true });
  }
  fs.writeFileSync(path.join(studentDir, 'page.tsx'), studentContent);

  console.log(`✓ Generated pages for ${city.name}`);
});

console.log('\n✓ All 22 city pages generated successfully!');
