const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..'); // Project root
const staticDir = path.join(baseDir, 'static');
const outputFilePath = path.join(staticDir, 'file-list.json');

const directoriesToScan = [
  path.join(staticDir, 'Baru'),
  path.join(staticDir, 'docs'),
  path.join(staticDir, 'pdf'),
];

let fileList = [];

function scanDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      scanDirectory(filePath); // Recurse into subdirectories
    } else {
      const relativePath = path.relative(staticDir, filePath).replace(/\\/g, '/'); // Use '/' for URLs
      const fileExtension = path.extname(file);
      const fileName = path.basename(file, fileExtension);

      fileList.push({
        name: fileName + fileExtension, // Full file name
        path: `/${relativePath}`, // URL path
        type: fileExtension.slice(1) // Remove the dot
      });
    }
  }
}

// Clear the fileList before scanning
fileList = [];

for (const dir of directoriesToScan) {
  if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
    scanDirectory(dir);
  } else {
    console.warn(`Directory not found or is not a directory: ${dir}`);
  }
}

// Write the file list to JSON
fs.writeFileSync(outputFilePath, JSON.stringify(fileList, null, 2), 'utf-8');

console.log(`Generated file list with ${fileList.length} files to ${outputFilePath}`);