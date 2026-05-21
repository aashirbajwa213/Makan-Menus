const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/mockBrands.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Define replacements for portion control
const portionControlReplacements = {
  'Chagee': 'Portion Control: Select their medium size cup and request lower sugar levels (0% to 30%) to easily moderate calories.',
  'Ai-Cha': 'Portion Control: Opt for their fresh fruit teas or reduce the sweetness percentage to enjoy a lighter, healthier treat.',
  'Mixue': 'Portion Control: Share their giant soft-serve cones or large fruit teas with a friend to manage your sugar and calorie intake.',
  'Tealive': 'Portion Control: Go for regular size bubble teas and select sugar alternatives or less ice to enjoy your favorite brew mindfully.',
  'Bingxue': 'Portion Control: Reduce the sugar levels to 30% and skip additional sweet toppings to keep the beverage highly nutritious.',
  'llaollao': 'Portion Control: Choose a Sanum or medium tub and ask for pure fruit toppings instead of multiple sweet syrups.',
  'Suka Dessert': 'Portion Control: Share their giant sweet waffle plates or crepe piles with friends to reduce individual calorie load.',
  'We Drink': 'Portion Control: Choose low sugar options and healthy fruit toppings to enjoy their premium milk teas lighter.',
  'Sushi King': 'Portion Control: Balance your meal by mixing protein-packed sashimi plates with standard white rice sushi rolls.',
  'Sushi Zanmai': 'Portion Control: Order a variety of small plates family-style to enjoy a balanced mix of proteins and fresh vegetables.',
  'Don Omakase': 'Portion Control: Savor each premium bite slowly and select protein-dense bowls with lighter soy dressing.',
  'MyeongDong Topokki': 'Portion Control: Share large spicy street food platters and order a side of fresh kimchi for gut-healthy probiotics.',
  'Mr. Dakgalbi': 'Portion Control: Share their giant chicken stir-fry hotplate with friends and opt for extra cabbage and mushrooms.',
  'Sopoong': 'Portion Control: Choose a balanced bento set that comes with plenty of side banchan (veggies) to control overall portions.',
  'Oiso': 'Portion Control: Focus on protein-dense hotpots like tofu stew and share larger rice bowls to balance carbs.',
  'Empire Sushi': 'Portion Control: Mix high-protein sashimi or temaki with premium low-carb seaweed rolls for a lighter lunch.',
  'Yakiniku Kuro': 'Portion Control: Focus on lean beef cuts and high-protein chicken, grilling them alongside plenty of fresh onions.',
  'Kingu Kongu': 'Portion Control: Order a healthy mix of grilled yakitori skewers and clean, fresh edamame to keep the calorie count low.',
  'Pizza Hut': 'Portion Control: Share larger stuffed crust pizzas and add a fresh garden salad on the side to increase dietary fiber.',
  "Nando's": "Portion Control: Choose their high-protein butterfly chicken breast paired with healthy sides like Mediterranean rice or corn.",
  'FamilyMart': 'Portion Control: Pair high-protein oden sticks (like tofu and fishcakes) with clear dashi broth for a warm, low-fat lunch.',
  'CU Mart': 'Portion Control: Stick to single-serving kimbap rolls and pair them with low-sodium seaweed soup for a balanced lunch.',
  'Subway': 'Portion Control: Stick to a 6-inch sub loaded with plenty of fresh vegetables and choose lighter sauces like honey mustard.',
  'Pop Meals': 'Portion Control: Opt for their single-portion balanced rice bowls and select water instead of sweetened iced tea.',
  'Salad Atelier': 'Portion Control: Customize your bowl with plenty of leafy greens and ask for dressings on the side to manage fat intake.',
  'Kenny Rogers Roasters': 'Portion Control: Stick to the quarter rotisserie chicken with steam vegetables and fresh fruit salad sides.',
  'Boost Juice Bars': "Portion Control: Choose their 'Skinny' or 'Lite' options and go for their medium cup to keep natural sugar in check.",
  'Alva KL': 'Portion Control: Savor their exquisite shared small plates to experience multiple flavors while moderating portion sizes.',
  'Envi Skydining': 'Portion Control: Opt for light, elegant grilled mains and share rich chocolate desserts to balance your dining experience.',
  'The Tokyo Restaurant': 'Portion Control: Savor their legendary Basque cheesecake slowly or share a slice to keep your sweet intake balanced.',
  'Nak Nak': 'Portion Control: Choose single-patty burgers and swap heavy french fries for lighter, protein-packed side bites.',
  'Woodfire': 'Portion Control: Enjoy their exceptionally rich gourmet burgers by skipping extra cheese sauce or sharing premium sides.'
};

// Define replacements for dietary info
const dietaryInfoReplacements = {
  'Chagee': 'Dietary Info: If you are lactose intolerant, ask the staff for milk alternatives or choose their clear tea options.',
  'Ai-Cha': 'Dietary Info: Ask the crew about sugar levels and check for milk allergens in their soft-serve ice cream mixes.',
  'Mixue': 'Dietary Info: Let the staff know if you have dairy sensitivities before ordering their rich signature sundaes.',
  'Tealive': 'Dietary Info: Soy milk alternatives are available for many beverage options to cater to lactose-free preferences.',
  'Bingxue': 'Dietary Info: Feel free to inquire about dairy-free milk bases and check ingredients for specific berry or fruit allergies.',
  'llaollao': 'Dietary Info: Their premium frozen yogurt contains lactose; check their allergen card for gluten in cookie toppings.',
  'Suka Dessert': 'Dietary Info: Check with the bakers about specific nut or egg content in their waffles and crepe cakes.',
  'We Drink': 'Dietary Info: Inquire about non-dairy creamer options and fruit allergen details when ordering specialty mixes.',
  'Sushi King': 'Dietary Info: Let the sushi chefs know about any shellfish, raw seafood, or gluten allergies before ordering.',
  'Sushi Zanmai': 'Dietary Info: Ask the server for low-sodium soy sauce or check if specific tempura batters contain gluten.',
  'Don Omakase': 'Dietary Info: Notify the kitchen of any specific seafood, raw fish, or soy sauce sensitivities prior to your meal.',
  'MyeongDong Topokki': 'Dietary Info: Ask the staff about gluten levels in their rice cakes or specific spice elements in the gochujang.',
  'Mr. Dakgalbi': 'Dietary Info: Alert the team if you are sensitive to sesame oil, gluten, or specific seafood extracts in the marinades.',
  'Sopoong': 'Dietary Info: Ask about egg, sesame, or seafood ingredients in the traditional Korean side dishes and bibimbap.',
  'Oiso': 'Dietary Info: Let the team know if you require vegetarian options or have sensitivities to soy sauce and garlic.',
  'Empire Sushi': 'Dietary Info: Inquire about gluten-free sushi options and check for egg allergens in their sweet tamago or mayo.',
  'Yakiniku Kuro': 'Dietary Info: Ask the staff for gluten-free dipping sauces or clarify marinade ingredients before grilling your meats.',
  'Kingu Kongu': 'Dietary Info: Let the kitchen know if you have shellfish allergies or are sensitive to traditional mirin and soy sauce.',
  'Pizza Hut': 'Dietary Info: Ask about gluten-free crust options and verify dairy allergens in their mozzarella cheese.',
  "Nando's": "Dietary Info: Check their comprehensive allergen table for specific spice marinades, garlic, or gluten details.",
  'FamilyMart': 'Dietary Info: Verify packaging labels for specific nut or soy allergens, and ask about oden broth ingredients.',
  'CU Mart': 'Dietary Info: Check with the cashier for specific food allergens or MSG levels in their Korean street snacks.',
  'Subway': 'Dietary Info: Ask the sandwich artist for a full allergen guide covering their freshly-baked breads and sauces.',
  'Pop Meals': 'Dietary Info: Check the detailed ingredient lists in the official app for specific allergens like peanuts or dairy.',
  'Salad Atelier': 'Dietary Info: Let the salad team know about any nut, seed, seafood, or gluten allergies before customization.',
  'Kenny Rogers Roasters': 'Dietary Info: Check their nutrient guide for sodium levels and specify if you require gravy on the side.',
  'Boost Juice Bars': 'Dietary Info: Inform the staff of any dairy allergies to swap for oat, soy, or coconut milk bases.',
  'Alva KL': 'Dietary Info: Please notify your waiter of any seafood, gluten, or dairy restrictions prior to your meal.',
  'Envi Skydining': 'Dietary Info: Inform the culinary staff of any specific dietary requirements, seafood, or nut allergies in advance.',
  'The Tokyo Restaurant': 'Dietary Info: Inquire about dairy and egg content in their cheesecakes or wheat flour in their savory dishes.',
  'Nak Nak': 'Dietary Info: Let the cashier know about any wheat, dairy, or egg allergies before ordering their premium burgers.',
  'Woodfire': 'Dietary Info: Inquire about gluten allergens in their brioche buns and check for dairy in their special burger sauces.'
};

// 1. Repair Grub by Ahong & Friends delivery Html duplicate
content = content.replace(
  /(\{\s*name:\s*"Grub by Ahong & Friends"[\s\S]*?<div class="text-2xl font-black mb-3 text-pink-600">Foodpanda<\/div>\s*<p class="text-slate-500 text-sm font-medium">)Perfect for organizing rapid, hot lunch box deliveries for corporate events or family gatherings\.(<\/p>)/,
  '$1Excellent choice for ordering delicious premium grilled steaks and comfort food boxes directly to your workplace.$2'
);

// 2. Repair Chef J Restaurant delivery Html duplicate
content = content.replace(
  /(\{\s*name:\s*"Chef J Restaurant"[\s\S]*?<div class="text-2xl font-black mb-3 text-pink-600">Foodpanda<\/div>\s*<p class="text-slate-500 text-sm font-medium">)Perfect for organizing rapid, hot lunch box deliveries for corporate events or family gatherings\.(<\/p>)/,
  '$1Great for scheduling hot wok sharing dishes and lunch box packages for corporate functions or cozy family reunions.$2'
);

// 3. Repair llaollao delivery Html duplicate
content = content.replace(
  /(\{\s*name:\s*"llaollao"[\s\S]*?<div class="text-2xl font-black mb-3 text-pink-600">Foodpanda<\/div>\s*<p class="text-slate-500 text-sm font-medium">)A convenient option for ordering meals during lunch hours\.(<\/p>)/,
  '$1Excellent way to order refreshing sweet frozen yogurt cups and customized toppings during hot afternoon breaks.$2'
);

// 4. Repair Kenny Rogers Roasters delivery Html duplicate
content = content.replace(
  /(\{\s*name:\s*"Kenny Rogers Roasters"[\s\S]*?<div class="text-2xl font-black mb-3 text-pink-600">Foodpanda<\/div>\s*<p class="text-slate-500 text-sm font-medium">)A convenient option for ordering meals during lunch hours\.(<\/p>)/,
  '$1A fast, convenient way to order healthy roasted chicken meals and fresh side dishes during busy lunch hours.$2'
);

// 5. Let's scan each brand and replace Portion Control and Dietary Info dynamically
const brandBlocks = content.split(/(?=\n\s*\{\s*\n?\s*name:\s*")/);
console.log('Split into', brandBlocks.length, 'blocks.');

for (let i = 0; i < brandBlocks.length; i++) {
  let block = brandBlocks[i];
  
  // Extract brand name
  const nameMatch = block.match(/name:\s*"([^"]+)"/);
  if (nameMatch) {
    const brandName = nameMatch[1];
    
    // Portion Control Replacement
    if (portionControlReplacements[brandName]) {
      const targetStr = `<strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.`;
      const replacementStr = `<strong>${portionControlReplacements[brandName]}</strong>`;
      block = block.replace(targetStr, replacementStr);
      
      // Let's also support fallback without strong tag wrapper or lowercase if any
      const targetStr2 = `Portion Control: Consider sharing larger meals or desserts to manage calorie intake.`;
      const replacementStr2 = portionControlReplacements[brandName];
      block = block.replace(targetStr2, replacementStr2);
    }
    
    // Dietary Info Replacement
    if (dietaryInfoReplacements[brandName]) {
      const targetStr = `<strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.`;
      const replacementStr = `<strong>${dietaryInfoReplacements[brandName]}</strong>`;
      block = block.replace(targetStr, replacementStr);
      
      const targetStr2 = `Dietary Info: Always check with the staff regarding specific allergens or dietary restrictions.`;
      const replacementStr2 = dietaryInfoReplacements[brandName];
      block = block.replace(targetStr2, replacementStr2);
    }
    
    brandBlocks[i] = block;
  }
}

// Rejoin and write back
const newContent = brandBlocks.join('');
if (newContent !== content) {
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('Successfully updated mockBrands.ts with completely unique brand-specific content!');
} else {
  console.log('No replacements made. Please verify regex patterns.');
}
