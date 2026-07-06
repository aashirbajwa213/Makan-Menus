const fs = require('fs');
const path = require('path');

const brandsFile = path.join(__dirname, '../src/data/mockBrands.ts');

function main() {
    let content = fs.readFileSync(brandsFile, 'utf-8');
    
    // Regex to match { name: "...", slug: "...", ... image: "..." }
    const regex = /name:\s*["']([^"']+)["'],\s*slug:\s*["']([^"']+)["'][^}]+?image:\s*["']([^"']+)["']/gs;
    
    let match;
    let newContent = content;
    let count = 0;

    while ((match = regex.exec(content)) !== null) {
        const fullMatch = match[0];
        const name = match[1];
        const slug = match[2];
        const currentImage = match[3];

        // Skip if already a custom local logo or favicon (unless it's an unsplash one)
        if (currentImage.includes('unsplash.com')) {
            let cleanSlug = slug.replace(/[^a-z0-9]/g, '');
            let domain = `${cleanSlug}.com.my`;
            
            // Special cases for famous brands to get better logos
            if(slug === 'mcdonalds') domain = 'mcdonalds.com.my';
            if(slug === 'kfc') domain = 'kfc.com.my';
            if(slug === 'burger-king') domain = 'burgerking.com.my';
            if(slug === 'dominos') domain = 'dominos.com.my';
            if(slug === 'starbucks') domain = 'starbucks.com.my';
            if(slug === 'subway') domain = 'subway.com.my';
            if(slug === 'pizza-hut') domain = 'pizzahut.com.my';
            if(slug === 'tealive') domain = 'tealive.com.my';
            if(slug === 'chagee') domain = 'chagee.com.my';
            
            const newImage = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=256`;
            
            const newBlock = fullMatch.replace(currentImage, newImage);
            newContent = newContent.replace(fullMatch, newBlock);
            count++;
        }
    }

    fs.writeFileSync(brandsFile, newContent);
    console.log(`Successfully updated ${count} dummy images to official Google Favicons!`);
}

main();
