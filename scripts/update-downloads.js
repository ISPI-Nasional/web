const fs = require('fs');
const path = require('path');

const STATIC_DIR = path.join(__dirname, '../static');
const DOCS_DIR = path.join(__dirname, '../docs');
const DOWNLOADS_FILE = path.join(DOCS_DIR, 'downloads.md');

const EXCLUDED_DIRS = ['img', 'logo', '.git', 'node_modules'];
const EXCLUDED_FILES = ['.nojekyll', '.DS_Store'];

// Helper to recursively walk directory
function walkSync(dir, filelist = [], rootDir = dir) {
    const files = fs.readdirSync(dir);

    files.forEach(function (file) {
        if (EXCLUDED_FILES.includes(file)) return;
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);

        if (stat.isDirectory()) {
            if (EXCLUDED_DIRS.includes(file)) return;
            // Also exclude directories starting with . just in case
            if (file.startsWith('.')) return;

            filelist = walkSync(filepath, filelist, rootDir);
        } else {
            // Relative path from static dir, e.g. "Baru/file.pdf"
            const relativePath = path.relative(rootDir, filepath);
            filelist.push({
                fullPath: filepath,
                relativePath: relativePath,
                fileName: file,
                dirName: path.dirname(relativePath) === '.' ? 'Root' : path.dirname(relativePath)
            });
        }
    });
    return filelist;
}

function generateMarkdown() {
    console.log('Scanning static directory:', STATIC_DIR);
    const allFiles = walkSync(STATIC_DIR);

    // Group by directory
    const filesByDir = {};
    allFiles.forEach(f => {
        // Use forward slashes for keys to be consistent
        const normalizedDir = f.dirName.split(path.sep).join('/');
        if (!filesByDir[normalizedDir]) {
            filesByDir[normalizedDir] = [];
        }
        filesByDir[normalizedDir].push(f);
    });

    // Sort directories to ensure consistent order
    // We want shorter paths first? or Alphabetical?
    // Let's do Alphabetical, but prioritize non-nested?
    // Alphabetical is standard.
    const sortedDirs = Object.keys(filesByDir).sort();

    let markdownContent = `---
sidebar_position: 7
title: Downloads
---

# Downloads

Berikut adalah daftar dokumen yang dapat diunduh:

`;

    sortedDirs.forEach(dir => {
        // Skip Root if empty or not needed, but usually static root might have things.
        // If Root has files, we can header "General" or just list them? 
        // Based on current file, there is no root section, everything is in subfolders.
        // If dir is 'Root', maybe use "Lainnya" or just "General".
        let headerName = dir;
        if (dir === 'Root') {
            headerName = 'Lainnya';
        }

        // Use H2 for top level, H3 for nested?
        // Simple approach: Use ## for everything, show full relative path for clarity if nested.
        // E.g. ## Baru/Template
        markdownContent += `## ${headerName}\n\n`;

        // Sort files by name
        filesByDir[dir].sort((a, b) => a.fileName.localeCompare(b.fileName));

        filesByDir[dir].forEach(file => {
            // Encode URI components but keep slashes
            const uriPath = '/' + file.relativePath.split(path.sep).map(part => encodeURIComponent(part)).join('/');
            markdownContent += `- [${file.fileName}](${uriPath})\n`;
        });

        markdownContent += '\n';
    });

    console.log(`Found ${allFiles.length} files in ${sortedDirs.length} directories.`);

    fs.writeFileSync(DOWNLOADS_FILE, markdownContent);
    console.log('Updated:', DOWNLOADS_FILE);
}

try {
    generateMarkdown();
} catch (error) {
    console.error('Error generating downloads:', error);
    process.exit(1);
}
