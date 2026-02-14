const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');

// Get all student-aan-huis directories
const dirs = fs.readdirSync(appDir).filter(dir => dir.startsWith('student-aan-huis-'));

console.log(`Found ${dirs.length} student-aan-huis pages to update\n`);

let updatedCount = 0;

dirs.forEach(dir => {
  const pagePath = path.join(appDir, dir, 'page.tsx');

  if (!fs.existsSync(pagePath)) {
    console.log(`Skipping ${dir} - no page.tsx found`);
    return;
  }

  let content = fs.readFileSync(pagePath, 'utf8');

  // Extract city name from the current title
  const titleMatch = content.match(/title: 'Student aan Huis ([^|]+) \|/);
  if (!titleMatch) {
    console.log(`Skipping ${dir} - could not find city name in title`);
    return;
  }

  const cityName = titleMatch[1].trim();

  // New title format: "Student aan Huis [Stad] | Binnen 24u"
  const newTitle = `Student aan Huis ${cityName} | Binnen 24u`;

  // New description format (max 155 chars)
  const newDescription = `Student aan huis in ${cityName} voor computer, laptop en tablet hulp. Binnen 24 uur, geen voorrijkosten. Deskundige IT-studenten. Bel 085-8002006.`;

  // New OG description (shorter)
  const newOgDescription = `Student aan huis in ${cityName}. Computer, laptop, tablet hulp. Binnen 24 uur, geen voorrijkosten. Bel 085-8002006.`;

  // Replace main title
  content = content.replace(
    /title: 'Student aan Huis [^']+\| Binnen 24u bij u Thuis'/,
    `title: '${newTitle}'`
  );

  // Replace openGraph title
  content = content.replace(
    /openGraph: \{[\s\S]*?title: 'Student aan Huis [^']+\| Binnen 24u bij u Thuis'/,
    (match) => match.replace(/title: 'Student aan Huis [^']+'/, `title: '${newTitle}'`)
  );

  // Replace main description
  content = content.replace(
    /description: 'Student aan huis in [^.]+\. Binnen 24 uur bij u thuis![^']+'/,
    `description: '${newDescription}'`
  );

  // Replace openGraph description
  content = content.replace(
    /openGraph: \{[\s\S]*?description: 'Binnen 24 uur bij u thuis in [^']+'/,
    (match) => match.replace(/description: 'Binnen 24 uur bij u thuis in [^']+'/, `description: '${newOgDescription}'`)
  );

  fs.writeFileSync(pagePath, content);
  console.log(`Updated: ${dir} (${cityName})`);
  updatedCount++;
});

console.log(`\nDone! Updated ${updatedCount} pages.`);
