const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing logo paths in schema.org JSON-LD...\n');

const appDir = path.join(__dirname, '..', 'app');

function fixLogoPath(content) {
  // Fix logo.png to correct webp path
  const oldPattern = /url: 'https:\/\/computerhulpzh\.nl\/logo\.png'/g;
  const newPath = "url: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp'";

  if (oldPattern.test(content)) {
    return {
      content: content.replace(oldPattern, newPath),
      modified: true
    };
  }

  return { content, modified: false };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: newContent, modified } = fixLogoPath(content);

    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ ${path.relative(appDir, filePath)}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir) {
  let filesProcessed = 0;
  let filesModified = 0;

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const { processed, modified } = walkDir(filePath);
      filesProcessed += processed;
      filesModified += modified;
    } else if (file === 'page.tsx') {
      filesProcessed++;
      if (processFile(filePath)) {
        filesModified++;
      }
    }
  });

  return { processed: filesProcessed, modified: filesModified };
}

const { processed, modified } = walkDir(appDir);

console.log(`\n📊 Summary:`);
console.log(`   Files scanned: ${processed}`);
console.log(`   Files modified: ${modified}`);
console.log(`\n✨ Logo paths fixed!`);
