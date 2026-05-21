const fs = require('fs');
const path = require('path');
const vm = require('vm');

const filePath = path.join(__dirname, '../src/data/mockBrands.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Strip imports
content = content.replace(/^import\s+.*$/gm, '');

// Strip typescript annotations
content = content.replace(/: Record<string, any\[\]>/g, '');

// Strip export keyword
content = content.replace(/\bexport\s+/g, '');

// Replace menu imports/assignments with empty array
content = content.replace(/menu:\s*[a-zA-Z0-9_]+/g, 'menu: []');

// Wrap and export brandMocks
content = content + '\nmodule.exports = { brandMocks };';

try {
    const sandbox = { module: {}, require: () => ({}) };
    vm.createContext(sandbox);
    vm.runInContext(content, sandbox);
    const brandMocks = sandbox.module.exports.brandMocks;
    console.log('Successfully parsed brandMocks! Total categories:', Object.keys(brandMocks).length);
    
    // Flatten brands
    const allBrands = [];
    Object.entries(brandMocks).forEach(([category, brands]) => {
        brands.forEach(b => {
            allBrands.push({ ...b, categorySlug: category });
        });
    });
    console.log('Total brands found:', allBrands.length);
    
    // Now let's check for duplicate paragraphs in seoArticle, nutritionHtml, and deliveryHtml
    const paragraphMap = new Map();
    const headingMap = new Map();
    const faqMap = new Map();
    const healthyTipMap = new Map();
    const nutritionMap = new Map();
    const deliveryMap = new Map();
    
    allBrands.forEach(brand => {
        const name = brand.name;
        
        // Check healthyTip
        if (brand.healthyTip) {
            const tip = brand.healthyTip.trim().replace(/^['"]|['"]$/g, '');
            if (healthyTipMap.has(tip)) {
                healthyTipMap.get(tip).push(name);
            } else {
                healthyTipMap.set(tip, [name]);
            }
        }

        // Check nutritionHtml
        if (brand.nutritionHtml) {
            const pMatches = brand.nutritionHtml.match(/<p[\s>][\s\S]*?<\/p>/g) || [];
            const liMatches = brand.nutritionHtml.match(/<li[\s>][\s\S]*?<\/li>/g) || [];
            const matches = [...pMatches, ...liMatches];
            matches.forEach(m => {
                const text = m.replace(/<[^>]+>/g, '').trim().toLowerCase();
                if (text.length > 20) {
                    if (nutritionMap.has(text)) {
                        nutritionMap.get(text).push(name);
                    } else {
                        nutritionMap.set(text, [name]);
                    }
                }
            });
        }

        // Check deliveryHtml
        if (brand.deliveryHtml) {
            const pMatches = brand.deliveryHtml.match(/<p[\s>][\s\S]*?<\/p>/g) || [];
            const divMatches = brand.deliveryHtml.match(/<div[\s>][\s\S]*?<\/div>/g) || [];
            const matches = [...pMatches, ...divMatches];
            matches.forEach(m => {
                const text = m.replace(/<[^>]+>/g, '').trim().toLowerCase();
                if (text.length > 30) {
                    if (deliveryMap.has(text)) {
                        deliveryMap.get(text).push(name);
                    } else {
                        deliveryMap.set(text, [name]);
                    }
                }
            });
        }
        
        // Check seoArticle
        if (brand.seoArticle) {
            // Find paragraphs
            const pMatches = brand.seoArticle.match(/<p>([\s\S]*?)<\/p>/g) || [];
            pMatches.forEach(p => {
                const text = p.replace(/<[^>]+>/g, '').trim().toLowerCase();
                if (text.length > 20) {
                    if (paragraphMap.has(text)) {
                        paragraphMap.get(text).push(name);
                    } else {
                        paragraphMap.set(text, [name]);
                    }
                }
            });
            
            // Find headings
            const hMatches = brand.seoArticle.match(/<h[23]>([\s\S]*?)<\/h[23]>/g) || [];
            hMatches.forEach(h => {
                const text = h.replace(/<[^>]+>/g, '').trim().toLowerCase();
                if (text.length > 5) {
                    if (headingMap.has(text)) {
                        headingMap.get(text).push(name);
                    } else {
                        headingMap.set(text, [name]);
                    }
                }
            });
        }
        
        // Check FAQs
        if (brand.faqs && Array.isArray(brand.faqs)) {
            brand.faqs.forEach(faq => {
                const qText = faq.q.trim().toLowerCase();
                const aText = faq.a.trim().toLowerCase();
                if (faqMap.has(qText)) {
                    faqMap.get(qText).push({ name, a: aText });
                } else {
                    faqMap.set(qText, [{ name, a: aText }]);
                }
            });
        }
    });
    
    console.log('\n--- Duplicate Healthy Tips ---');
    let hasTipDuplicates = false;
    for (const [tip, brands] of healthyTipMap.entries()) {
        if (brands.length > 1) {
            hasTipDuplicates = true;
            console.log(`Tip: "${tip}" matches in brands:`, brands);
        }
    }
    if (!hasTipDuplicates) console.log('No duplicate Healthy Tips!');
    
    console.log('\n--- Duplicate Headings in SEO Article ---');
    let hasHeadingDuplicates = false;
    for (const [heading, brands] of headingMap.entries()) {
        if (brands.length > 1) {
            hasHeadingDuplicates = true;
            console.log(`Heading: "${heading}" matches in brands:`, brands);
        }
    }
    if (!hasHeadingDuplicates) console.log('No duplicate Headings!');
    
    console.log('\n--- Duplicate Paragraphs in SEO Article (length > 20 chars) ---');
    let hasParagraphDuplicates = false;
    for (const [text, brands] of paragraphMap.entries()) {
        if (brands.length > 1) {
            hasParagraphDuplicates = true;
            console.log(`Paragraph snippet: "${text.substring(0, 100)}..." matches in brands:`, brands);
        }
    }
    if (!hasParagraphDuplicates) console.log('No duplicate Paragraphs!');

    console.log('\n--- Duplicate Nutrition Paragraphs / List Items ---');
    let hasNutritionDuplicates = false;
    for (const [text, brands] of nutritionMap.entries()) {
        if (brands.length > 1) {
            hasNutritionDuplicates = true;
            console.log(`Nutrition snippet: "${text.substring(0, 100)}..." matches in brands:`, brands);
        }
    }
    if (!hasNutritionDuplicates) console.log('No duplicate Nutrition snippets!');

    console.log('\n--- Duplicate Delivery Paragraphs / Divs ---');
    let hasDeliveryDuplicates = false;
    for (const [text, brands] of deliveryMap.entries()) {
        if (brands.length > 1) {
            hasDeliveryDuplicates = true;
            console.log(`Delivery snippet: "${text.substring(0, 100)}..." matches in brands:`, brands);
        }
    }
    if (!hasDeliveryDuplicates) console.log('No duplicate Delivery snippets!');
    
    console.log('\n--- Duplicate FAQ Questions ---');
    let hasFaqDuplicates = false;
    for (const [qText, answers] of faqMap.entries()) {
        if (answers.length > 1) {
            hasFaqDuplicates = true;
            console.log(`Question: "${qText}" matches in:`, answers.map(x => `${x.name} (Answer: "${x.a.substring(0, 50)}...")`));
        }
    }
    if (!hasFaqDuplicates) console.log('No duplicate FAQ Questions!');
    
} catch (err) {
    console.error('Error running parser script:', err);
}
