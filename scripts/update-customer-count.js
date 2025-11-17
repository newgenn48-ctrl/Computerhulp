const fs = require('fs');
const path = require('path');

// Script om klantenaantal van 5000 naar 500 te veranderen
console.log('🔄 Updating customer count from 5000 to 500...\n');

const appDir = path.join(__dirname, '..', 'app');

function updateCustomerCount(content) {
  let modified = content;
  let foundMatch = false;

  // Pattern 1: "5000+ tevreden klanten"
  if (modified.includes('5000+')) {
    modified = modified.replace(/5000\+/g, '500+');
    foundMatch = true;
  }

  // Pattern 2: "Meer dan 5000"
  if (modified.includes('5000')) {
    modified = modified.replace(/5000/g, '500');
    foundMatch = true;
  }

  return { content: modified, modified: foundMatch };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: newContent, modified } = updateCustomerCount(content);

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
console.log(`\n✨ Customer count updated from 5000 to 500!`);
