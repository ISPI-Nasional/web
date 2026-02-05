const fs = require('fs');
const path = require('path');

const staticDir = path.join(__dirname, '..', 'static');
const downloadsFile = path.join(__dirname, '..', 'docs', 'downloads.md');

// Directories to scan (relative to static)
const rootDirectories = ['Baru', 'pdf'];

let markdown = `---\nsidebar_position: 7\ntitle: Downloads\n---\n\n# Downloads\n\nBerikut adalah daftar dokumen yang dapat diunduh:\n\n`;

function scanDirectory(basePath, relativePath = '') {
    const fullPath = path.join(basePath, relativePath);

    if (!fs.existsSync(fullPath)) return;

    const items = fs.readdirSync(fullPath);
    let files = [];
    let dirs = [];

    items.forEach(item => {
        if (item.startsWith('.') || item === 'node_modules') return;

        const itemPath = path.join(fullPath, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
            dirs.push(item);
        } else {
            files.push(item);
        }
    });

    // Add files in current directory
    if (files.length > 0) {
        // Create a header based on the relative path
        const headerName = relativePath ? relativePath.replace(/\\/g, '/') : path.basename(basePath);
        markdown += `## ${headerName}\n\n`;

        files.forEach(file => {
            // Construct URL: /RootDir/SubDir/File.ext
            // We need to resolve the path relative to 'static'
            // basePath is like .../static/Baru
            // relativePath is like 'Template'
            // We want /Baru/Template/File.ext

            const rootDirName = path.basename(basePath); // e.g., Baru or pdf
            const urlPath = path.join(rootDirName, relativePath, file).replace(/\\/g, '/');
            const url = `/${urlPath.split('/').map(encodeURIComponent).join('/')}`;

            markdown += `- [${file}](${url})\n`;
        });
        markdown += '\n';
    }

    // Recurse into subdirectories
    dirs.forEach(dir => {
        scanDirectory(basePath, path.join(relativePath, dir));
    });
}

rootDirectories.forEach(dirName => {
    const dirPath = path.join(staticDir, dirName);
    if (fs.existsSync(dirPath)) {
        scanDirectory(dirPath);
    }
});

fs.writeFileSync(downloadsFile, markdown);
console.log('Updated downloads.md with recursive scan');
