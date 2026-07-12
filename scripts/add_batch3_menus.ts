import * as fs from 'fs';
import * as path from 'path';

// Helper to convert to camelCase
function toCamelCase(str: string): string {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '');
}

// Helper to convert to slug
function toSlug(str: string): string {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

const input = `local-asian	Jeff Lee Kitchen
local-asian	Jomamigo
coffee-bakeries	Brew And Bread Kota Kemuning
coffee-bakeries	Cafe Salim
coffee-bakeries	Shikomi Coffee
teas-desserts	High Tea
local-asian	Dewakan
local-asian	Alibaba Karaoke
local-asian	Ora Dining
local-asian	Mee Hiris China Muslim
local-asian	Rotiboy
local-asian	Cookies And Ginger
western-grilled	Jibby East Grill
local-asian	Too Yumm Sashimi
pizza-italian	Rico's Pizza Cafe
coffee-bakeries	Pak Mat Western Cafe
local-asian	Rata
local-asian	Kampunglah Raja Laut
japanese-korean	Hama Japanese Dining
coffee-bakeries	Big Apple Donuts
local-asian	Thieves Apw
local-asian	Two Sons On The Park
local-asian	Eden Wizards
japanese-korean	Bbq Town
local-asian	O'briens
japanese-korean	Donkai
coffee-bakeries	Daily Coffee
local-asian	Zukkini
coffee-bakeries	Ekues Cabin Cafe
local-asian	TGI Fridays
local-asian	Cleaver Shed
japanese-korean	Sushi Ya
local-asian	Wallace
local-asian	Bienz
local-asian	Pretty Hot Chicken
local-asian	Alwis Food
local-asian	Red Brick Kitchen
local-asian	Nasi Goreng
local-asian	Stuff'd
local-asian	Kyomo
sandwiches-health	Salad Atelier
coffee-bakeries	Sogno Coffee
local-asian	Oceano Symphony
coffee-bakeries	Makan Fizzy Cafe
local-asian	Q House
fast-food	Burger & Lobster
local-asian	Dip N Dip
local-asian	Do A Bakehouse`;

const restaurants = input.split('\n').filter(l => l.trim()).map(line => {
    const parts = line.split('\t');
    return {
        category: parts[0].trim(),
        name: parts[1].trim()
    };
});

// A pool of some high quality food image IDs from unsplash to cycle through
const imagePool = [
    "1504674900247-0877df9cc836", "1476224203421-9ce22602115a", "1493770348161-369560ae357d",
    "1473093295043-cdd812d0e601", "1550547660-d9450f859349", "1517248135467-4c7edcad34c4",
    "1568901346375-23c9450c58cd", "1569058242253-92a9c755a0ec", "1525610553991-2bede1a236e2",
    "1555396273-367ea4eb4db5", "1497935586351-b67a49e012bf", "1554118811-1e0d58224f24",
    "1483695028939-5bb13f8648b0", "1509440159596-0249088772ff", "1509042239860-f550ce710b93",
    "1414235077428-338989a2e8c0", "1481833761820-0509d3217039", "1559314809-0d155014e29e",
    "1565557623262-b51c2513a641", "1512058564366-18510be2db19", "1582878826629-29b7ad1cb438",
    "1484723091786-b0da660d3efa", "1546069901-ba6c37922b7a", "1540189549336-e6e99c3679fe",
    "1565299624946-b28f40a0ae38", "1504754522776-8f4fdfce8e37", "1551183053-8b77a7df361f",
    "1490645935967-20ef6a10ba8f", "1534080564583-6be75777b700",
    "1481931098730-318b6f776db0", "1467003909585-2f8a72700288", "1478145046317-39f10e56b5e9",
    "1482049149124-69bfb0c8046f", "1432139555190-58524dae6a55", "1475090169767-40ed8d18f67d",
    "1494859802808-5c602bf41db6", "1496116218417-1a781b1c416c",
    "1520201163981-8cc95007dd2a", "1529042410766-c6c2044365fc", "1534422298391-e4f8c172dd36",
    "1551024709-8f23befc6f87", "1588168333986-5078d1255e82", "1593504049208-8e68dbbaf912",
    "1600891964092-4b11428adc09", "1604908176997-125f25cc6f3d"
];

imagePool.sort(() => Math.random() - 0.5);

function getGenericItems(theme: string, count: number) {
    const items = [];
    const prefixes = ["Signature", "Classic", "Premium", "Spicy", "Crispy", "Grilled", "Traditional", "Chef's Special", "Authentic", "Ultimate"];
    const mains = theme === "coffee-bakeries" ? ["Latte", "Espresso", "Cappuccino", "Mocha", "Croissant", "Muffin", "Cheesecake", "Brownie", "Sandwich", "Bagel"] :
                  theme === "pizza-italian" ? ["Pizza Margherita", "Pasta Carbonara", "Lasagna", "Garlic Bread", "Risotto", "Tiramisu", "Fettuccine Alfredo", "Bruschetta", "Calzone", "Ravioli"] :
                  theme === "japanese-korean" ? ["Sushi Roll", "Sashimi Platter", "Ramen", "Udon", "Bibimbap", "Kimchi Fried Rice", "Bulgogi", "Takoyaki", "Matcha Ice Cream", "Mochi"] :
                  theme === "western-grilled" ? ["Ribeye Steak", "Grilled Chicken", "Fish & Chips", "Beef Burger", "BBQ Ribs", "Lamb Chops", "Mashed Potatoes", "Caesar Salad", "Chicken Wings", "Onion Rings"] :
                  theme === "teas-desserts" ? ["Milk Tea", "Fruit Tea", "Bubble Tea", "Waffle", "Pancake", "Ice Cream Sundae", "Crepe", "Macaron", "Shaved Ice", "Pudding"] :
                  theme === "sandwiches-health" ? ["Club Sandwich", "Caesar Wrap", "Avocado Toast", "Green Salad", "Turkey Sandwich", "Quinoa Bowl", "Fruit Smoothie", "Protein Shake", "Granola Bowl", "Chicken Wrap"] :
                  theme === "fast-food" ? ["Burger", "Fried Chicken", "French Fries", "Chicken Nuggets", "Hot Dog", "Onion Rings", "Milkshake", "Sundae", "Wrap", "Cola"] :
                  /* local-asian */ ["Nasi Lemak", "Mee Goreng", "Char Kway Teow", "Hainan Chicken Rice", "Laksa", "Satay", "Roti Canai", "Tom Yum Soup", "Beef Rendang", "Nasi Goreng"];

    const descs = [
        "A delightful classic made with fresh ingredients.",
        "Our signature recipe, loved by many.",
        "Perfectly prepared for a satisfying meal.",
        "A rich and flavorful dish that hits the spot.",
        "Authentic taste cooked to perfection.",
        "A customer favorite, bursting with flavor.",
        "Carefully crafted with premium ingredients.",
        "A wonderful combination of textures and tastes.",
        "Served fresh and hot, just the way you like it.",
        "A must-try item from our special menu."
    ];

    for (let i = 0; i < count; i++) {
        const pre = prefixes[Math.floor(Math.random() * prefixes.length)];
        const main = mains[Math.floor(Math.random() * mains.length)];
        const desc = descs[Math.floor(Math.random() * descs.length)];
        const price = (Math.floor(Math.random() * 30) + 10) + ".90";
        items.push({
            name: `${pre} ${main}`,
            price: `RM ${price}`,
            description: `${desc} ${main} prepared uniquely for our guests.`
        });
    }
    return items;
}

const targetDir = path.resolve('./src/data');
let mockBrandsContent = fs.readFileSync(path.join(targetDir, 'mockBrands.ts'), 'utf8');

let importedMenus = "";
let mockBrandsAdditions: any = {
    "local-asian": [],
    "coffee-bakeries": [],
    "pizza-italian": [],
    "japanese-korean": [],
    "western-grilled": [],
    "teas-desserts": [],
    "buffet-dining": [],
    "fast-food": [],
    "sandwiches-health": []
};

const processedSlugs = new Set();
restaurants.forEach((restaurant, idx) => {
    const slug = toSlug(restaurant.name);
    
    // Check if we already processed it in this batch
    if (processedSlugs.has(slug)) {
        console.log("Skipping duplicate in batch: " + restaurant.name);
        return;
    }
    processedSlugs.add(slug);
    
    // Check if it's already in mockBrands.ts
    if (mockBrandsContent.includes('slug: "' + slug + '"') || mockBrandsContent.includes("slug: '" + slug + "'")) {
        console.log("Skipping already existing: " + restaurant.name);
        return;
    }

    let camelName = toCamelCase(restaurant.name);
    if (/^[0-9]/.test(camelName)) {
        camelName = 'menu' + camelName;
    }
    const menuVarName = `${camelName}Menu`;
    const imageId = imagePool[idx % imagePool.length];
    
    const categories = ["Starters", "Main Course", "Specials", "Beverages", "Desserts", "Sides"];
    
    let menuFileContent = `export const ${menuVarName} = [\n`;
    
    categories.forEach(cat => {
        const numItems = Math.floor(Math.random() * 3) + 8;
        const items = getGenericItems(restaurant.category, numItems);
        items.forEach(item => {
            menuFileContent += `  { name: "${item.name}", price: "${item.price}", category: "${cat}", description: "${item.description}" },\n`;
        });
    });
    
    menuFileContent += `];\n`;
    
    fs.writeFileSync(path.join(targetDir, `${menuVarName}.ts`), menuFileContent);
    
    importedMenus += `import { ${menuVarName} } from './${menuVarName}';\n`;
    
    // Safety check just in case the category is entirely new and not in mockBrandsAdditions
    if (!mockBrandsAdditions[restaurant.category]) {
        mockBrandsAdditions[restaurant.category] = [];
    }

    mockBrandsAdditions[restaurant.category].push(`
    {
      name: "${restaurant.name}",
      slug: "${slug}",
      category: "${restaurant.category}",
      image: "https://images.unsplash.com/photo-${imageId}?w=600&h=400&fit=crop",
      tags: [{ name: "${restaurant.category.replace('-', ' ').toUpperCase()}", colors: "bg-blue-500 text-white" }],
      content: \`
<h2>${restaurant.name} Menu</h2>
<p>Welcome to ${restaurant.name}. We offer a wide variety of delicious options tailored to satisfy your cravings. Enjoy our carefully curated menu featuring the best of ${restaurant.category.replace('-', ' ')} cuisine, prepared with fresh ingredients and passion.</p>
\`,
      faqs: [
        {
          q: "What are the operating hours?",
          a: "We are open from 10:00 AM to 10:00 PM daily."
        },
        {
          q: "Do you offer delivery?",
          a: "Yes, delivery is available through major delivery partners."
        }
      ],
      menu: ${menuVarName}
    }`);
});

const importInsertIndex = mockBrandsContent.indexOf('export const brandMocks');
mockBrandsContent = mockBrandsContent.slice(0, importInsertIndex) + importedMenus + '\n' + mockBrandsContent.slice(importInsertIndex);

Object.keys(mockBrandsAdditions).forEach(cat => {
    const arr = mockBrandsAdditions[cat];
    if (arr.length > 0) {
        const regex = new RegExp(`['"]${cat}['"]:\\s*\\[`);
        const match = regex.exec(mockBrandsContent);
        if (match) {
            const insertPos = match.index + match[0].length;
            mockBrandsContent = mockBrandsContent.slice(0, insertPos) + arr.join(',') + ',' + mockBrandsContent.slice(insertPos);
        } else {
            console.error("Warning: Could not find array for category " + cat + " in mockBrands.ts.");
        }
    }
});

fs.writeFileSync(path.join(targetDir, 'mockBrands.ts'), mockBrandsContent);

console.log("Successfully generated " + restaurants.length + " menus and updated mockBrands.ts");
