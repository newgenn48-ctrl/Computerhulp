const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing JSX comment formatting...\n');

const appDir = path.join(__dirname, '..', 'app');

function fixComments(content) {
  // Fix the specific issue where comment is on same line as opening tag
  const modified = content.replace(
    '<div className="max-w-4xl mx-auto text-center">            {/* Main Headline */}',
    '<div className="max-w-4xl mx-auto text-center">\n            {/* Main Headline */}'
  );

  if (modified === content) {
    return { content, modified: false };
  }

  return { content: modified, modified: true };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: newContent, modified } = fixComments(content);

    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ ${path.relative(appDir, filePath)}`);
      return true;
    } else {
      console.log(`⏭️  ${path.relative(appDir, filePath)} - No issue found`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Only process computerhulp-aan-huis pages
const dirs = fs.readdirSync(appDir);
let filesProcessed = 0;
let filesModified = 0;

dirs.forEach(dir => {
  if (dir.startsWith('computerhulp-aan-huis')) {
    const filePath = path.join(appDir, dir, 'page.tsx');
    if (fs.existsSync(filePath)) {
      filesProcessed++;
      if (processFile(filePath)) {
        filesModified++;
      }
    }
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Files scanned: ${filesProcessed}`);
console.log(`   Files modified: ${filesModified}`);
console.log(`\n✨ JSX comments fixed!`);
