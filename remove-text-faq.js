const fs = require('fs');
const path = require('path');

// Directory to search
const appDir = path.join(__dirname, 'app');

// Function to recursively find all .tsx files
function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules, .next, etc
      if (!file.startsWith('.') && file !== 'node_modules') {
        findTsxFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to update file content
function updateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Check if file contains the text to remove
  if (content.includes(' U betaalt alleen voor de tijd die we nodig hebben om uw probleem op te lossen.')) {
    // Remove the sentence (including the space before it)
    const updatedContent = content.replace(/ U betaalt alleen voor de tijd die we nodig hebben om uw probleem op te lossen\./g, '');

    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
    return true;
  }

  return false;
}

// Main execution
console.log('🔍 Searching for .tsx files with the text to remove...\n');

const tsxFiles = findTsxFiles(appDir);
let updatedCount = 0;

tsxFiles.forEach(file => {
  if (updateFile(file)) {
    updatedCount++;
  }
});

console.log(`\n✨ Done! Updated ${updatedCount} files.`);
