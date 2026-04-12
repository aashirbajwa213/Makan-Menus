const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');

function cleanFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Remove strong tags and preserve content
    content = content.replace(/<strong>(.*?)<\/strong>/gs, '$1');
    content = content.replace(/<b>(.*?)<\/b>/gs, '$1');

    // Remove any remaining stars just in case
    content = content.replace(/\*\*/g, '');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Unbolded: ${filePath}`);
    }
}

// Clean all data files
const dataFiles = fs.readdirSync(dataDir);
dataFiles.forEach(file => {
    if (file.endsWith('.ts')) {
        cleanFile(path.join(dataDir, file));
    }
});

console.log('Unbolding of data files complete.');
