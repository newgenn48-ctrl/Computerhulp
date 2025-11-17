const fs = require('fs');
const path = require('path');

// Script om prefix badges uit alle hero secties te verwijderen
console.log('🧹 Removing hero prefix badges from all pages...\n');

const appDir = path.join(__dirname, '..', 'app');

// Patronen om te zoeken voor prefix badges
const patterns = [
  // Pattern 1: inline-flex badge met animate-pulse
  /<div className="inline-flex items-center gap-2 px-\d+ py-\d+ rounded-full bg-blue-\d+ text-blue-\d+ text-sm font-semibold mb-\d+">\s*<div className="w-\d+ h-\d+ rounded-full bg-blue-\d+ animate-pulse"><\/div>\s*[^<]*<\/div>/g,

  // Pattern 2: Shorter version
  /<div className="[^"]*inline-flex[^"]*rounded-full[^"]*bg-blue[^"]*animate-pulse[^"]*">[\s\S]*?<\/div>/g,

  // Pattern 3: Multi-line badge
  /\s*<div className="inline-flex[^>]*>\n?\s*<div className="[^"]*animate-pulse[^"]*"><\/div>\n?\s*[^\n<]*\n?\s*<\/div>\n?/g
];

function removePrefix(content) {
  let modified = content;
  let foundMatch = false;

  patterns.forEach((pattern, index) => {
    if (pattern.test(modified)) {
      console.log(`  ✓ Found pattern ${index + 1}`);
      modified = modified.replace(pattern, '');
      foundMatch = true;
    }
  });

  return { content: modified, modified: foundMatch };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: newContent, modified } = removePrefix(content);

    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ ${path.basename(filePath)} - Prefix removed`);
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
console.log(`\n✨ Done!`);
