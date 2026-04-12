const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent);
        console.log(`Updated: ${file}`);
    }
});
