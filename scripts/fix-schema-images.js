const fs = require('fs');
const path = require('path');

// Script om ALLE schema.org image references te fixen naar onze echte logo
// We gebruiken overal: /Computerhulp Zuid Holland Logo.webp

console.log('🔧 Fixen van alle schema.org image references...\n');

const appDir = path.join(__dirname, '..', 'app');

// Functie om recursief alle page.tsx en layout.tsx files te vinden
function findAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findAllFiles(filePath, fileList);
    } else if (file === 'page.tsx' || file === 'layout.tsx') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

const allFiles = findAllFiles(appDir);
console.log(`📁 Gevonden ${allFiles.length} bestanden om te scannen\n`);

let fixedCount = 0;
let filesModified = 0;

allFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  const relativePath = path.relative(path.join(__dirname, '..'), filePath);

  // Fix 1: /logo.png → /Computerhulp Zuid Holland Logo.webp
  if (content.includes('/logo.png')) {
    content = content.replace(/['"]\/logo\.png['"]/g, "'/Computerhulp Zuid Holland Logo.webp'");
    console.log(`  ✅ Fixed /logo.png in ${relativePath}`);
    fixedCount++;
    modified = true;
  }

  // Fix 2: /og-image.jpg → /Computerhulp Zuid Holland Logo.webp
  if (content.includes('/og-image.jpg')) {
    content = content.replace(/['"]\/og-image\.jpg['"]/g, "'/Computerhulp Zuid Holland Logo.webp'");
    console.log(`  ✅ Fixed /og-image.jpg in ${relativePath}`);
    fixedCount++;
    modified = true;
  }

  // Fix 3: Zorg dat logo dimensions kloppen (250x60 zoals in spec)
  // Maar alleen als het een logo object is
  if (content.includes("width: '250'") && content.includes("height: '60'")) {
    // Dit is al correct, skip
  } else if (content.includes("'@type': 'ImageObject'") && content.includes('Logo')) {
    // Check of dimensions missing zijn
    if (!content.includes("width:") && content.includes('logo:')) {
      console.log(`  ⚠️  Logo dimensions mogelijk ontbreken in ${relativePath}`);
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesModified++;
  }
});

console.log(`\n✅ Klaar!`);
console.log(`   ${fixedCount} image references gefixed`);
console.log(`   ${filesModified} bestanden aangepast`);
console.log(`\n💡 Alle schema.org markup gebruikt nu:`);
console.log(`   /Computerhulp Zuid Holland Logo.webp (98 KB)`);
console.log(`\n📋 Next step: Favicon genereren van dezelfde logo!`);
