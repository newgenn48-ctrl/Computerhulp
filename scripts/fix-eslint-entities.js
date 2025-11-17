const fs = require('fs');
const path = require('path');

// Script om alle unescaped entities te fixen
console.log('🔧 Fixing ESLint unescaped entities...\n');

const filesToFix = [
  'app/diensten/email-hulp/page.tsx',
  'app/offerte-aanvragen/page.tsx',
  'app/website-laten-maken/page.tsx'
];

function fixEntities(content) {
  let modified = content;

  // Fix single quotes in JSX text content (not in attributes or JS code)
  // Replace ' with &apos; but only in text nodes, not in code
  modified = modified.replace(/programma's/g, "programma&apos;s");
  modified = modified.replace(/pagina's/g, "pagina&apos;s");

  return modified;
}

filesToFix.forEach(relativePath => {
  const filePath = path.join(__dirname, '..', relativePath);

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = fixEntities(content);

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ Fixed: ${relativePath}`);
    } else {
      console.log(`⏭️  No changes: ${relativePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${relativePath}:`, error.message);
  }
});

console.log('\n✨ Done!');
