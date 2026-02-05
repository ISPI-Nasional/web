const fs = require('fs');
const path = require('path');

const staticDir = path.join(__dirname, '..', 'static');
const downloadsFile = path.join(__dirname, '..', 'docs', 'downloads.md');

const directories = ['Baru', 'pdf'];
let markdown = `---\nsidebar_position: 7\n---\n\n# Downloads\n\nBerikut adalah daftar dokumen yang dapat diunduh:\n\n`;

directories.forEach(dirName => {
    const dirPath = path.join(staticDir, dirName);
    if (fs.existsSync(dirPath)) {
        markdown += `## ${dirName}\n\n`;
        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
            if (fs.statSync(path.join(dirPath, file)).isFile() && !file.startsWith('.')) {
                const url = `/${dirName}/${encodeURIComponent(file)}`;
                markdown += `- [${file}](${url})\n`;
            }
        });
        markdown += '\n';
    }
});

fs.writeFileSync(downloadsFile, markdown);
console.log('Updated downloads.md');
