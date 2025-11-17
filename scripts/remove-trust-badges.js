const fs = require('fs');
const path = require('path');

// Script om trust badges te verwijderen van alle pagina's
console.log('🧹 Removing trust badges from all pages...\n');

const appDir = path.join(__dirname, '..', 'app');

function removeTrustBadge(content) {
  let modified = content;
  let foundMatch = false;

  // Pattern voor trust badge met jaar ervaring + tevreden klanten
  const patterns = [
    // Pattern 1: Trust badge met shield icon
    /\s*{\/\* Trust Badge \*\/}\s*\n\s*<div className="inline-flex items-center gap-2 bg-blue-600\/20[^>]*>[\s\S]*?<\/div>\s*\n/g,

    // Pattern 2: Zonder comment
    /<div className="inline-flex items-center gap-2 bg-blue-600\/20 backdrop-blur-sm border border-blue-400\/30 rounded-full[^>]*>[\s\S]*?jaar ervaring[^<]*<\/span>\s*<\/div>\s*\n/g,

    // Pattern 3: Meer algemeen
    /<div className="[^"]*inline-flex[^"]*bg-blue-600\/20[^>]*>[\s\S]*?tevreden klanten[^<]*<\/span>\s*<\/div>\s*\n?/g
  ];

  patterns.forEach((pattern, index) => {
    if (pattern.test(modified)) {
      console.log(`  ✓ Found trust badge pattern ${index + 1}`);
      modified = modified.replace(pattern, '');
      foundMatch = true;
    }
  });

  return { content: modified, modified: foundMatch };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: newContent, modified } = removeTrustBadge(content);

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
console.log(`\n✨ All trust badges removed!`);
