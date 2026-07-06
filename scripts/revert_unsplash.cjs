const fs = require('fs');
const path = require('path');

const headFile = path.join(__dirname, '../src/data/mockBrands.head.ts');
const currentFile = path.join(__dirname, '../src/data/mockBrands.ts');

let headContent = fs.readFileSync(headFile, 'utf-8');
let currentContent = fs.readFileSync(currentFile, 'utf-8');

const regex = /name:\s*["']([^"']+)["'],\s*slug:\s*["']([^"']+)["'][^}]+?image:\s*["']([^"']+)["']/gs;

let match;
let headImages = {};

// Parse HEAD content to extract all unsplash images
while ((match = regex.exec(headContent)) !== null) {
    const slug = match[2];
    const image = match[3];
    if (image.includes('unsplash.com')) {
        headImages[slug] = image;
    }
}

// Parse Current content to restore unsplash images
let newContent = currentContent;
regex.lastIndex = 0; // Reset regex state
while ((match = regex.exec(currentContent)) !== null) {
    const fullMatch = match[0];
    const slug = match[2];
    const currentImage = match[3];

    if (headImages[slug] && currentImage.includes('faviconV2')) {
        const newBlock = fullMatch.replace(currentImage, headImages[slug]);
        newContent = newContent.replace(fullMatch, newBlock);
    }
}

fs.writeFileSync(currentFile, newContent);
console.log("Reverted back to unsplash images!");
