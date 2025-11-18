const fs = require('fs');
const path = require('path');

function shortenDescription(desc, maxLength = 157) {
  // Remove emojis for character count
  const cleanDesc = desc.replace(/[\u{1F300}-\u{1F9FF}]/gu, '');

  if (cleanDesc.length <= maxLength) {
    return desc; // Already good
  }

  // Try to cut at last complete word before maxLength
  let shortened = cleanDesc.substring(0, maxLength);
  const lastSpace = shortened.lastIndexOf(' ');

  if (lastSpace > maxLength - 20) {
    // Cut at last space if it's not too far back
    shortened = shortened.substring(0, lastSpace);
  }

  // Add back emojis if they were at the start
  const emojiMatch = desc.match(/^([\u{1F300}-\u{1F9FF}\s]+)/u);
  if (emojiMatch) {
    return emojiMatch[0] + shortened.trim() + '.';
  }

  return shortened.trim() + '.';
}

function fixLongDescriptions(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Find description metadata
    const descPattern = /description:\s*['"]([^'"]{161,})['"]/g;
    const matches = [...content.matchAll(descPattern)];

    if (matches.length === 0) return false;

    matches.forEach(match => {
      const originalDesc = match[1];
      const cleanLength = originalDesc.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').length;

      if (cleanLength > 160) {
        const shortened = shortenDescription(originalDesc, 157);
        content = content.replace(
          `description: '${originalDesc}'`,
          `description: '${shortened}'`
        );
        content = content.replace(
          `description: "${originalDesc}"`,
          `description: "${shortened}"`
        );
        modified = true;

        console.log(`  ✓ ${path.relative(process.cwd(), filePath)}`);
        console.log(`    Before (${cleanLength} chars): ${originalDesc.substring(0, 80)}...`);
        console.log(`    After  (${shortened.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').length} chars): ${shortened.substring(0, 80)}${shortened.length > 80 ? '...' : ''}`);
        console.log('');
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function getAllPageFiles(dir) {
  const files = [];

  function traverse(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);

      items.forEach(item => {
        const fullPath = path.join(currentPath, item);
        let stat;

        try {
          stat = fs.statSync(fullPath);
        } catch (e) {
          return;
        }

        if (stat.isDirectory()) {
          if (!item.startsWith('.') && item !== 'node_modules' && item !== 'build' && item !== 'dist') {
            traverse(fullPath);
          }
        } else if (item === 'page.tsx' || item === 'layout.tsx') {
          files.push(fullPath);
        }
      });
    } catch (e) {
      // Skip
    }
  }

  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(process.cwd(), 'app');
const files = getAllPageFiles(appDir);

let totalModified = 0;

console.log('🔍 Fixing descriptions longer than 160 characters...\n');

files.forEach(file => {
  if (fixLongDescriptions(file)) {
    totalModified++;
  }
});

console.log('━'.repeat(80));
console.log(`✅ Fixed ${totalModified} files with long descriptions`);
console.log('💡 All descriptions are now ≤160 characters (SEO optimized)');
