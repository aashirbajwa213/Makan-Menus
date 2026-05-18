import { kfcMenu } from './kfcMenu';
import { secretRecipeMenu } from './secretRecipeMenu';
import { zusCoffeeMenu } from './zusCoffeeMenu';
import { aiChaMenu } from './aiChaMenu';
import { texasChickenMenu } from './texasChickenMenu';
import { mixueMenu } from './mixueMenu';
import { chageeMenu } from './chageeMenu';
import { coffeeBeanMenu } from './coffeeBeanMenu';
import { nandosMenu } from './nandosMenu';
import { sushiKingMenu } from './sushiKingMenu';
import { pizzaHutMenu } from './pizzaHutMenu';
import { marrybrownMenu } from './marrybrownMenu';
import { orientalKopiMenu } from './orientalKopiMenu';
import { tealiveMenu } from './tealiveMenu';
import { familyMartMenu } from './familyMartMenu';
import { nakNakMenu } from './nakNakMenu';
import { burgerKingMenu } from './burgerKingMenu';
import { bingxueMenu } from './bingxueMenu';
import { woodfireMenu } from './woodfireMenu';
import { alvaKlMenu } from './alvaKlMenu';
import { sushiZanmaiMenu } from './sushiZanmaiMenu';
import { thongBowlMenu } from './thongBowlMenu';
import { damascusMenu } from './damascusMenu';
import { sukaDessertMenu } from './sukaDessertMenu';
import { weDrinkMenu } from './weDrinkMenu';
import { awMenu } from './awMenu';
import { jollibeeMenu } from './jollibeeMenu';
import { fourFingersMenu } from './fourFingersMenu';
import { enviSkydiningMenu } from './enviSkydiningMenu';
import { cuMartMenu } from './cuMartMenu';
import { popMealsMenu } from './popMealsMenu';
import { boostJuiceMenu } from './boostJuiceMenu';
import { theTokyoRestaurantMenu } from './theTokyoRestaurantMenu';
import { donOmakaseMenu } from './donOmakaseMenu';
import { myeongdongTopokkiMenu } from './myeongdongTopokkiMenu';
import { mrDakgalbiMenu } from './mrDakgalbiMenu';
import { sopoongMenu } from './sopoongMenu';
import { oisoMenu } from './oisoMenu';
import { empireSushiMenu } from './empireSushiMenu';
import { yakinikuKuroMenu } from './yakinikuKuroMenu';
import { kinguKonguMenu } from './kinguKonguMenu';



export const brandMocks: Record<string, any[]> = {
  'fast-food': [
    {
      name: "McDonald's",
      slug: "mcdonalds",
      category: 'fast-food',
      image: "https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?auto=format&fit=crop&q=80&w=600&h=400",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Burgers, Fries & Fried Chicken",
      seoArticle: `\n<h2>McDonald's: A Malaysian Morning Tradition</h2>
<p>There is a reason why almost every neighborhood in Malaysia has a McDonald's. Whether it's picking up a quick Sausage McMuffin before hitting the morning traffic, or grabbing a Nasi Lemak McD when you're craving something local, their consistency is unmatched. Our guide provides the most accurate pricing to help you decide between a classic Big Mac or the spicy Ayam Goreng McD for your next drive-thru run.</p>\n`,
      nutritionHtml: `
            <p class="text-lg">
              McDonald's offers clear nutritional data for those mindful of their diet. The iconic Big Mac is approximately 508 kcal, while a standard McChicken sits around 400 kcal.
            </p>
            <ul class="space-y-3 list-none">
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Calorie Conscious:</strong> Swap fries for a corn cup to save around 200 calories on your McValue meal.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Halal Certified:</strong> McDonald's Malaysia is fully JAKIM Halal certified.</span>
              </li>
            </ul>
      `,
      healthyTip: `"For a lighter meal, grab a Grilled Chicken Burger (GCB) instead of fried options and choose water or Coke Zero instead of regular soda."`,
      deliveryHtml: `
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-red-600">McDelivery</div>
                <p class="text-slate-500 text-sm font-medium">Use the official McDonald's app to earn My McD rewards on every order.</p>
              </div>
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
                <p class="text-slate-500 text-sm font-medium">Fastest delivery times for late-night cravings across Malaysia.</p>
              </div>
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
                <p class="text-slate-500 text-sm font-medium">Check for seasonal discounts and free delivery promos.</p>
              </div>
            </div>
      `,
      faqs: [
        { q: "Is the McDonald's Malaysia menu Halal?", a: "Yes, 100% of McDonald's restaurants in Malaysia are Halal certified by JAKIM." },
        { q: "What time does McDonald's breakfast end?", a: "Breakfast is usually served until 10:00 AM on weekdays and 11:00 AM on weekends." },
        { q: "Can I get a Big Mac without pickles?", a: "Yes, you can customize your burger via the self-ordering kiosks or delivery apps." },
        { q: "Does McDonald's Malaysia serve pork?", a: "No, McDonald's Malaysia does not serve any pork or alcohol." }
      ],
      menu: [
        // All Time Favourites
        { name: "Big Mac", price: "RM 12.50", category: "All Time Favourites", description: "The iconic burger with two all-beef patties, special sauce, lettuce, cheese, pickles, and onions." },
        { name: "Beefburger", price: "RM 5.95", category: "All Time Favourites", description: "100% pure beef patty with pickles, onions, mustard, and ketchup." },
        { name: "Cheeseburger", price: "RM 7.50", category: "All Time Favourites", description: "The classic cheeseburger with a 100% pure beef patty." },
        { name: "Double Cheeseburger", price: "RM 10.95", category: "All Time Favourites", description: "Double the beef and double the cheese for double the satisfaction." },
        { name: "Filet-O-Fish", price: "RM 10.50", category: "All Time Favourites", description: "Sustainable wild-caught fish with tartare sauce and cheese." },
        { name: "GCB - Grilled Chicken Burger", price: "RM 13.95", category: "All Time Favourites", description: "Grilled chicken thigh topped with charcoal bun and chargrilled sauce." },
        { name: "McChicken", price: "RM 9.50", category: "All Time Favourites", description: "Crispy chicken patty with lettuce and mayonnaise." },
        { name: "Spicy Chicken McDeluxe", price: "RM 14.50", category: "All Time Favourites", description: "Spicy whole-muscle chicken thigh with lettuce and special sauce." },
        { name: "Chicken McNuggets (6pcs)", price: "RM 10.50", category: "All Time Favourites", description: "6 pieces of tender, juicy Chicken McNuggets." },
        { name: "Ayam Goreng McD (2pcs)", price: "RM 13.95", category: "All Time Favourites", description: "Two pieces of our signature spicy and crispy fried chicken." },
        { name: "Bubur Ayam McD (M)", price: "RM 7.50", category: "All Time Favourites", description: "Hearty chicken porridge topped with spring onions and ginger." },
        { name: "Nasi Lemak McD", price: "RM 7.50", category: "All Time Favourites", description: "Authentic Malaysian favorite served with coconut rice and sambal." },

        // Breakfast
        { name: "Sausage McMuffin", price: "RM 7.64", category: "Breakfast", description: "Sausage patty and cheese on a toasted English muffin." },
        { name: "Sausage McMuffin with Egg", price: "RM 8.58", category: "Breakfast", description: "Sausage patty, egg, and cheese at the start of your day." },
        { name: "Hotcakes (2pcs)", price: "RM 11.46", category: "Breakfast", description: "Golden brown pancakes served with butter and maple syrup." },
        { name: "Big Breakfast", price: "RM 12.83", category: "Breakfast", description: "A complete breakfast set with sausage, egg, hash brown, and muffin." },
        { name: "Crispy Chicken Muffin", price: "RM 8.87", category: "Breakfast", description: "Crispy chicken patty on a toasted English muffin." },
        { name: "Crispy Chicken Muffin with Egg", price: "RM 9.81", category: "Breakfast", description: "Crispy chicken patty and egg breakfast classic." },
        { name: "Hash Browns", price: "RM 4.95", category: "Breakfast", description: "Golden, crispy potato patties." },

        // Happy Meals
        { name: "Happy Meal: Chicken Burger", price: "RM 11.95", category: "Happy Meals", description: "Includes a chicken burger, side, drink, and a toy!" },
        { name: "Happy Meal: Chicken McNuggets (4pcs)", price: "RM 11.95", category: "Happy Meals", description: "4 pieces of McNuggets with a toy and meal set." },
        { name: "Happy Meal: Cheeseburger", price: "RM 11.95", category: "Happy Meals", description: "Classic cheeseburger Happy Meal for the kids." },
        { name: "Happy Meal: Ayam Goreng McD (1pc)", price: "RM 12.50", category: "Happy Meals", description: "One piece of crispy fried chicken for smaller appetites." },
        { name: "Happy Meal: Sausage McMuffin", price: "RM 12.05", category: "Happy Meals", description: "Breakfast Happy Meal with Sausage McMuffin." },
        { name: "Happy Meal: 2pc Hotcakes", price: "RM 12.10", category: "Happy Meals", description: "A sweet breakfast treat for kids." },

        // Deserts & Sides
        { name: "French Fries (M)", price: "RM 5.50", category: "Deserts & Sides", description: "The world's favorite crispy golden potato fries." },
        { name: "Corn Cup (M)", price: "RM 5.20", category: "Deserts & Sides", description: "Warm, sweet steamed corn kernels." },
        { name: "Apple Pie", price: "RM 4.50", category: "Deserts & Sides", description: "Warm, crispy pastry filled with spiced apple chunks." },
        { name: "Sundae (Chocolate / Strawberry)", price: "RM 5.95", category: "Deserts & Sides", description: "Creamy vanilla soft serve with your choice of topping." },
        { name: "Oreo McFlurry", price: "RM 8.50", category: "Deserts & Sides", description: "Vanilla soft serve mixed with crunchy Oreo bits." },
        { name: "Sundae Cone", price: "RM 1.90", category: "Deserts & Sides", description: "Classic vanilla soft serve on a crisp cone." },
        { name: "ChocoTop", price: "RM 2.90", category: "Deserts & Sides", description: "Vanilla cone dipped in rich chocolate coating." },

        // Drinks
        { name: "Minute Maid Orange Juice", price: "RM 7.83", category: "Drinks", description: "Refreshing 100% orange juice." },
        { name: "Hot Milo", price: "RM 5.66", category: "Drinks", description: "Malaysian favorite hot chocolate malt drink." },
        { name: "Iced Milo (M)", price: "RM 8.02", category: "Drinks", description: "Chilled chocolate malt goodness." },
        { name: "Drinking Water", price: "RM 4.72", category: "Drinks", description: "Bottled mineral water." },
        { name: "100Plus (M)", price: "RM 5.47", category: "Drinks", description: "Isotonic drink for active hydration." },
        { name: "Carbonated Soft Drink (Coca-Cola / Sprite) (M)", price: "RM 5.47", category: "Drinks", description: "Your choice of chilled carbonated beverage." },
        { name: "Iced Lemon Tea (M)", price: "RM 6.89", category: "Drinks", description: "Cool and zesty iced tea." },

        // McCafé
        { name: "Americano Espresso", price: "RM 6.50", category: "McCafé", description: "Rich, bold espresso-based Americano." },
        { name: "Small Espresso", price: "RM 5.50", category: "McCafé", description: "Single shot of premium McCafé espresso." },
        { name: "Americano", price: "RM 6.51", category: "McCafé", description: "Classical hot black coffee." },
        { name: "Hot Chocolate", price: "RM 10.85", category: "McCafé", description: "Rich and creamy hot cocoa." },
        { name: "Mocha", price: "RM 10.50", category: "McCafé", description: "Perfect blend of espresso and chocolate." },
        { name: "Cappuccino", price: "RM 7.45", category: "McCafé", description: "Frothy coffee made with high-quality beans." },
        { name: "Latte", price: "RM 7.45", category: "McCafé", description: "Smooth espresso with steamed milk." },
        { name: "Iced Latte", price: "RM 8.40", category: "McCafé", description: "Chilled smooth espresso and milk." },
        { name: "Iced Americano", price: "RM 7.45", category: "McCafé", description: "Cooling black coffee fix." },
        { name: "Iced Chocolate", price: "RM 10.85", category: "McCafé", description: "Ice-cold premium chocolate drink." },
        { name: "Ice Blended Mocha", price: "RM 13.68", category: "McCafé", description: "Refreshing blended coffee and chocolate treat." },
        { name: "Belgium Chocolate Cake - Sliced", price: "RM 13.11", category: "McCafé", description: "Decadent and rich chocolate layer cake." },
        { name: "Classic Cheesecake - Sliced", price: "RM 13.11", category: "McCafé", description: "Creamy baked cheesecake on a crust." },
        { name: "Red Velvet Cake - Sliced", price: "RM 13.11", category: "McCafé", description: "Distinctive velvet cake with cream cheese frosting." }
      ]
    },
    {
      name: "KFC",
      slug: "kfc",
      category: 'fast-food',
      image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&q=80&w=600&h=400",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Finger Lickin' Good Fried Chicken",
      seoArticle: `\n<h2>KFC: The Undisputed King of Fried Chicken</h2>
<p>For decades, KFC has been the go-to spot for family gatherings and celebrations across Malaysia. The secret blend of 11 herbs and spices remains as iconic as ever. Beyond the classic dinner plate, many locals swear by the comforting Bubur Ayam or the Zinger Burger for a satisfying lunch. Browse our updated guide to see current bucket prices and combo meals.</p>\n`,
      nutritionHtml: `
            <p class="text-lg">
              KFC is famous for its Original Recipe and Hot & Spicy fried chicken. A single piece of Original Recipe chicken contains around 240-320 kcal depending on the cut.
            </p>
            <ul class="space-y-3 list-none">
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Lighter Choices:</strong> The Whipped Potato and Coleslaw are popular side dishes that balance the meal.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Halal Certified:</strong> All KFC outlets across Malaysia adhere strictly to JAKIM's Halal standards.</span>
              </li>
            </ul>
      `,
      healthyTip: `"To reduce your calorie intake, you can peel off the fried skin from the chicken or choose the Colonel Rice Combo instead of fries."`,
      deliveryHtml: `
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-red-600">KFC App</div>
                <p class="text-slate-500 text-sm font-medium">Order via the KFC App to earn Reward Points and access exclusive app-only buckets.</p>
              </div>
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
                <p class="text-slate-500 text-sm font-medium">Great for ordering Snack Plates or Zinger burgers during lunch hours.</p>
              </div>
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
                <p class="text-slate-500 text-sm font-medium">Reliable delivery tracking directly to your doorstep anywhere in Malaysia.</p>
              </div>
            </div>
      `,
      faqs: [
        { q: "Is the KFC Malaysia menu completely Halal?", a: "Absolutely. KFC Malaysia has been Halal-certified by JAKIM for decades." },
        { q: "Can I choose specific chicken parts in my KFC Bucket?", a: "Yes, you can request specific parts, but it is subject to availability at the outlet and may incur a surcharge for all-drumsticks." },
        { q: "What is the difference between Snack Plate and Dinner Plate?", a: "The Snack Plate comes with 2 pieces of chicken, while the Dinner Plate gives you 3 pieces of chicken. Both include coleslaw, whipped potato, and a bun." },
        { q: "Does KFC Malaysia still serve the Cheezy Wedges?", a: "Yes, Cheezy Wedges remain one of the most popular permanent side dishes on the KFC Malaysia menu." }
      ],
      menu: kfcMenu
    },
    {
      name: "Texas Chicken",
      slug: "texas-chicken",
      category: 'fast-food',
      image: "/images/texas-chicken.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Fresh Fried Chicken & Honey Butter Biscuits",
      seoArticle: `\n<h2>Texas Chicken: Big Flavors and Buttery Biscuits</h2>
<p>If you're tired of the usual fast food options, Texas Chicken provides a massive crunch and bold, Southern-style flavors. Their honey butter biscuits alone are worth the trip, perfectly balancing the heat from their spicy chicken cuts. This guide is your perfect companion for checking current combo deals and family meal savings.</p>\n`,
      nutritionHtml: `
            <p class="text-lg">
              Texas Chicken uses larger chicken cuts, which means slightly higher calories per piece compared to competitors. A signature Spicy piece is roughly 280-350 kcal.
            </p>
            <ul class="space-y-3 list-none">
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Honey Butter Biscuits:</strong> One biscuit contains around 190 calories. Enjoy them in moderation!</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Halal Certified:</strong> Texas Chicken Malaysia operates with strict JAKIM Halal compliance.</span>
              </li>
            </ul>
      `,
      healthyTip: `"Pair your fried chicken with the Texas Chicken coleslaw instead of mashed potatoes, and skip the extra honey butter drizzle if you want to cut down on sugar."`,
      deliveryHtml: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-orange-500">ShopeeFood</div>
                <p class="text-slate-500 text-sm font-medium">Offers frequent free delivery vouchers for Texas Chicken during monthly sales.</p>
              </div>
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
                <p class="text-slate-500 text-sm font-medium">The best option for ordering the 8-pc or 12-pc family buckets directly to your home.</p>
              </div>
            </div>
      `,
      faqs: [
        { q: "Is Texas Chicken in Malaysia Halal?", a: "Yes, all Texas Chicken outlets in Malaysia are certified Halal by JAKIM." },
        { q: "Do they still serve free drink refills?", a: "Most standalone and dine-in Texas Chicken outlets in Malaysia offer bottomless soft drink refills." },
        { q: "Why is it called Texas Chicken and not Church's Chicken?", a: "Outside the Americas, the brand operates as Texas Chicken due to naming rights and cultural localization." }
      ],
      menu: texasChickenMenu
    },
    {
      name: "Marrybrown",
      slug: "marrybrown",
      category: 'fast-food',
      image: "/images/marrybrown.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Something Different Every Day",
      seoArticle: `\n<h2>Marrybrown: Malaysia's Homegrown Pride</h2>
<p>Combining Western fast food with familiar Asian spices, Marrybrown is a local success story. They were one of the first to introduce a proper Nasi Lemak combo into a fast-food setting, and it remains a massive hit. From their crispy chicken to the unique Mi Kari, use our updated guide to explore their proudly Malaysian offerings.</p>\n`,
      nutritionHtml: `
            <p class="text-lg">
              Marrybrown offers a unique mix of fast food and local cuisine. The Nasi Lemak MB is a favorite, though it sits around 650-700 kcal. Their crispy chicken provides roughly 250 kcal per piece.
            </p>
            <ul class="space-y-3 list-none">
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Local Flavors:</strong> The Nasi Bowls provide a balanced meal of protein and carbs compared to heavy fried combos.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Halal Certified:</strong> As a homegrown Malaysian brand, Marrybrown is 100% Halal certified.</span>
              </li>
            </ul>
      `,
      healthyTip: `"For a lighter fast-food experience, opt for the Chicken Porridge (Bubur Ayam) which is much lower in calories compared to the heavy burgers and fries."`,
      deliveryHtml: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-red-600">MB App Delivery</div>
                <p class="text-slate-500 text-sm font-medium">Download the Marrybrown app for exclusive birthday deals and delivery discounts.</p>
              </div>
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
                <p class="text-slate-500 text-sm font-medium">Great for ordering the famous Nasi Lemak MB directly to your office for lunch.</p>
              </div>
            </div>
      `,
      faqs: [
        { q: "Is Marrybrown a Malaysian company?", a: "Yes, Marrybrown was founded in Johor Bahru in 1981 and is Malaysia's largest homegrown fast-food chain." },
        { q: "Does Marrybrown still serve the Nasi Kandar?", a: "Yes, Nasi Kandar and Nasi Lemak are permanent signatures on the Local Delights menu." },
        { q: "What comes in a Marrybrown Kiddy Meal?", a: "Kiddy Meals usually include a main (like nuggets or a burger), a side, a drink, and a collectible toy." }
      ],
      menu: marrybrownMenu
    },
    {
      name: "Burger King",
      slug: "burger-king",
      category: 'fast-food',
      image: "/images/burgerking.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Home of the Whopper",
      seoArticle: `\n<h2>Burger King: The Flame-Grilled Difference</h2>
<p>When you want a burger that actually tastes like it came off a grill, Burger King is the answer. The Whopper has stood the test of time, offering a massive, fresh, and beefy bite that rarely disappoints. Check out our price breakdown to find the best value meals and seasonal promotions they currently offer.</p>\n`,
      nutritionHtml: `
            <p class="text-lg">
              Burger King's signature flame-grilling process drains excess fat from the beef. A standard Whopper is about 650 kcal, whereas the smaller Whopper Jr. is a much lighter 310 kcal.
            </p>
            <ul class="space-y-3 list-none">
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Customizable:</strong> Burger King famously lets you "Have It Your Way," meaning you can easily remove mayo or cheese to cut calories.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Halal Certified:</strong> All ingredients and outlets in Malaysia are fully JAKIM Halal certified.</span>
              </li>
            </ul>
      `,
      healthyTip: `"Order a Whopper Jr. without mayonnaise and pair it with a bottled water instead of a sugary soda to save over 300 calories."`,
      deliveryHtml: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-orange-500">ShopeeFood</div>
                <p class="text-slate-500 text-sm font-medium">Frequently offers massive discount vouchers during double-digit sales days for BK combos.</p>
              </div>
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
                <p class="text-slate-500 text-sm font-medium">Fast and reliable for getting that hot Whopper delivered directly to you.</p>
              </div>
            </div>
      `,
      faqs: [
        { q: "Is Burger King Malaysia Halal?", a: "Yes, Burger King Malaysia is 100% Halal certified by JAKIM." },
        { q: "Can I customize my Whopper?", a: "Yes! Burger King's motto 'Have It Your Way' allows you to add extra beef patties, remove sauces, or add extra cheese." },
        { q: "What is the difference between a Whopper and a standard hamburger?", a: "The Whopper features a wider 4-inch sesame seed bun and a larger, flame-grilled beef patty compared to the standard 3-inch hamburger." }
      ],
      menu: burgerKingMenu
    },
    {
      name: "A&W",
      slug: "aw",
      category: 'fast-food',
      image: "/images/aw.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Home of the Famous Root Beer & Coney",
      seoArticle: `\n<h2>A&W: Nostalgia in a Frosted Mug</h2>
<p>A trip to A&W in Malaysia is often a trip down memory lane. The combination of a frosty Root Beer Float, crispy curly fries, and a Coney Dog is an experience you can't get anywhere else. Our guide highlights their classic favorites and current combo prices so you can plan your next retro dining experience.</p>\n`,
      nutritionHtml: `
            <p class="text-lg">
              A&W offers classic comfort food. A signature Beef Coney is around 450 kcal, while the famous Root Beer Float packs about 250 kcal depending on the scoop size.
            </p>
            <ul class="space-y-3 list-none">
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Drink Options:</strong> Opt for standard Root Beer without the ice cream float to save on sugar and calories.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Halal Certified:</strong> A&W was the first fast-food chain in Malaysia to receive full JAKIM Halal certification.</span>
              </li>
            </ul>
      `,
      healthyTip: `"If you're craving the Coney but want to reduce carbs, you can ask for the Coney sauce over a side of chicken instead of the hotdog bun."`,
      deliveryHtml: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
                <p class="text-slate-500 text-sm font-medium">The most reliable way to get your Root Beer Floats delivered without spilling.</p>
              </div>
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
                <p class="text-slate-500 text-sm font-medium">Excellent for finding late-night delivery deals for A&W's Golden Aroma Chicken.</p>
              </div>
            </div>
      `,
      faqs: [
        { q: "Is A&W Malaysia Halal?", a: "Yes, A&W Malaysia is strictly Halal certified by JAKIM." },
        { q: "Do they still serve Root Beer in frosty glass mugs?", a: "Yes! If you dine in at any A&W outlet, your Root Beer will be served in their iconic frosty glass mugs." },
        { q: "What does A&W stand for?", a: "A&W stands for Roy Allen and Frank Wright, the founders of the brand." }
      ],
      menu: awMenu
    },
    {
      name: "Jollibee",
      slug: "jollibee",
      category: 'fast-food',
      image: "/images/jollibee.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Home of the World-Famous Chickenjoy",
      seoArticle: `\n<h2>Jollibee: The Sweet and Savory Sensation</h2>
<p>This Filipino powerhouse has taken Malaysia by storm with its unique flavor profiles. The Chickenjoy is legendary for its crispy skin and savory gravy, while the Jolly Spaghetti offers an unexpectedly sweet, meaty comfort that locals have grown to love. Use this guide to explore their expanding menu and current meal prices.</p>\n`,
      nutritionHtml: `
            <p class="text-lg">
              Jollibee's famous Chickenjoy is known for its crispy skin and juicy meat. A 1-piece Chickenjoy meal with rice is approximately 450-500 kcal.
            </p>
            <ul class="space-y-3 list-none">
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Jolly Spaghetti:</strong> A serving of Jolly Spaghetti contains around 400 kcal and is a great alternative to fries.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Halal Certified:</strong> All Jollibee outlets in Malaysia adhere to JAKIM Halal guidelines.</span>
              </li>
            </ul>
      `,
      healthyTip: `"For a more balanced meal, order the Chickenjoy with a side of rice rather than fries, as the rice provides longer-lasting energy and fewer unhealthy fats."`,
      deliveryHtml: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
                <p class="text-slate-500 text-sm font-medium">Offers the widest delivery radius for Jollibee outlets in Klang Valley and Sabah.</p>
              </div>
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
                <p class="text-slate-500 text-sm font-medium">Check for exclusive Foodpanda combos that pair Chickenjoy with Peach Mango Pies.</p>
              </div>
            </div>
      `,
      faqs: [
        { q: "Is Jollibee Halal in Malaysia?", a: "Yes, Jollibee Malaysia is 100% Halal certified." },
        { q: "Why is the Jollibee spaghetti sweet?", a: "Jolly Spaghetti is made Filipino-style, which uses a sweeter tomato sauce mixed with hotdog slices and cheese." },
        { q: "Does Jollibee Malaysia serve the Palabok?", a: "Currently, the Palabok (a traditional Filipino noodle dish) is only available at selected outlets or during special promotions." }
      ],
      menu: jollibeeMenu
    },
    {
      name: "4Fingers Crispy Chicken",
      slug: "4fingers",
      category: 'fast-food',
      image: "/images/4fingers.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Hand-Painted Crispy Chicken Perfection",
      seoArticle: `\n<h2>4Fingers: Addictive Asian Crispy Chicken</h2>
<p>Say goodbye to heavy batter and hello to thin, ultra-crispy skin coated in addictive soy garlic or spicy sauces. 4Fingers brings the best of Asian-style fried chicken to a quick-service environment. Whether you are craving drumsticks or a massive chicken katsu sandwich, our guide covers all their latest offerings.</p>\n`,
      nutritionHtml: `
            <p class="text-lg">
              4Fingers signature technique relies on hand-painting rather than thick batter, meaning their chicken is generally less greasy. A 3-piece winglette set is roughly 250 kcal.
            </p>
            <ul class="space-y-3 list-none">
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Soy Garlic Magic:</strong> The signature soy garlic sauce is a fermented recipe free from artificial MSG.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-500 font-bold">✓</span>
                <span><strong>Halal Certified:</strong> All 4Fingers outlets in Malaysia operate with full JAKIM Halal certification.</span>
              </li>
            </ul>
      `,
      healthyTip: `"For a guilt-free crunch, swap the Seaweed Fries for a Chicken Katsu Salad which offers crisp greens and high protein without the heavy carbs."`,
      deliveryHtml: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
                <p class="text-slate-500 text-sm font-medium">Offers premium insulated delivery to ensure your Soy Garlic wings stay crackly and hot.</p>
              </div>
              <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
                <div class="text-2xl font-black mb-3 text-orange-500">ShopeeFood</div>
                <p class="text-slate-500 text-sm font-medium">Frequently features massive discounts on the 4Fingers 12-piece wing combos.</p>
              </div>
            </div>
      `,
      faqs: [
        { q: "Is 4Fingers Crispy Chicken Halal?", a: "Yes, 4Fingers Malaysia is 100% Halal certified." },
        { q: "What is the difference between Soy Garlic and Spicy sauce?", a: "Soy Garlic is savory and sweet, while the Spicy sauce packs a serious, fiery punch. You can also ask for 'Mixed' to get half of each!" },
        { q: "Are the 'Look Ma, No Bones' chicken bites breast meat?", a: "Yes, they are made from premium boneless chicken breast chunks." }
      ],
      menu: fourFingersMenu
    }
  ],

  'coffee-bakeries': [
    {
      name: "Starbucks",
      slug: "starbucks",
      category: 'coffee-bakeries',
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=600&h=400",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Premium Coffee & Beverages",
      seoArticle: `\n<h2>Starbucks: The Ultimate 'Third Place'</h2>
<p>For years, Starbucks has been the cozy spot between home and the office for many Malaysians. Whether you're dropping by for a morning Pike Place Roast, a business meeting, or treating yourself to seasonal Frappuccinos, our guide helps you navigate their extensive offerings. We've compiled the latest prices so you can plan your daily coffee run with ease.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Starbucks provides diverse options from high-calorie Frappuccinos to low-calorie Americanos (approx 15 kcal).</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Customization:</strong> Switch to almond or oat milk to reduce calories and dairy intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Halal Certified:</strong> Starbucks Malaysia is fully JAKIM Halal certified.</span></li>
</ul>`,
      healthyTip: `"Order a Cold Brew or Americano without added syrups for a strong caffeine kick with nearly zero calories."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Delivers your coffee in spill-proof packaging straight to your door.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">Great for ordering afternoon tea sets and cakes to the office.</p>
  </div>
</div>`,
      faqs: [
        { q: "Is Starbucks Malaysia Halal?", a: "Yes, all Starbucks branches in Malaysia are Halal certified." },
        { q: "Can I bring my own tumbler?", a: "Yes, Starbucks Malaysia encourages reusable tumblers and often provides a small discount for doing so." }
      ],
      menu: [
        // Drinks Menu
        { name: "Asian Dolce Latte", price: "RM16.50", category: "Coffee & Espresso", menuType: "Drinks Menu", description: "Smooth espresso with Asian dolce sauce and steamed milk." },
        { name: "Caffe Americano", price: "RM11.50", category: "Coffee & Espresso", menuType: "Drinks Menu", description: "Rich, full-bodied espresso with hot water." },
        { name: "Caffe Latte", price: "RM13.50", category: "Coffee & Espresso", menuType: "Drinks Menu", description: "Rich espresso balanced with steamed milk and a thin layer of foam." },
        { name: "Caffe Mocha", price: "RM15.50", category: "Coffee & Espresso", menuType: "Drinks Menu", description: "Espresso with bittersweet mocha sauce and steamed milk." },
        { name: "Cappuccino", price: "RM13.50", category: "Coffee & Espresso", menuType: "Drinks Menu", description: "Espresso with a smooth layer of thick milk foam." },
        { name: "Caramel Macchiato", price: "RM16.50", category: "Coffee & Espresso", menuType: "Drinks Menu", description: "Freshly steamed milk with vanilla-flavored syrup marked with espresso and caramel." },
        { name: "Cocoa Cappuccino", price: "RM15.50", category: "Coffee & Espresso", menuType: "Drinks Menu", description: "Classic cappuccino with a rich chocolate twist." },
        { name: "Coffee by the Press", price: "RM12.50", category: "Coffee & Espresso", menuType: "Drinks Menu", description: "Freshly brewed coffee using a French press for maximum flavor." },
        { name: "Cold Brew", price: "RM13.00", category: "Coffee & Espresso", menuType: "Drinks Menu", description: "Slow-steeped in cool water for 20 hours for a super-smooth taste." },
        { name: "Cold Foam Iced Espresso", price: "RM16.00", category: "Coffee & Espresso", menuType: "Drinks Menu", description: "Iced espresso topped with a smooth layer of cold milk foam." },
        { name: "DoubleShot Iced Shaken Espresso", price: "RM15.50", category: "Coffee & Espresso", menuType: "Drinks Menu", description: "Double shot of espresso shaken with ice and a touch of sweetness." },
        { name: "Matcha Cold Foam Iced Americano", price: "RM17.00", category: "Coffee & Espresso", menuType: "Drinks Menu", description: "Bold Americano topped with creamy matcha-infused cold foam." },
        { name: "Vanilla Sweet Cream Cold Brew", price: "RM15.00", category: "Coffee & Espresso", menuType: "Drinks Menu", description: "Cold Brew topped with a float of house-made vanilla sweet cream." },
        { name: "Black Tea Latte", price: "RM15.50", category: "Tea & Chocolate", menuType: "Drinks Menu", description: "Bold black tea with steamed milk and a touch of sweetness." },
        { name: "Freshly Brewed Tea", price: "RM10.50", category: "Tea & Chocolate", menuType: "Drinks Menu", description: "Your choice of premium Starbucks brewed tea." },
        { name: "Green Tea Latte", price: "RM16.50", category: "Tea & Chocolate", menuType: "Drinks Menu", description: "Smooth and creamy matcha sweetened and served with steamed milk." },
        { name: "Iced Shaken Lemon Tea", price: "RM13.50", category: "Tea & Chocolate", menuType: "Drinks Menu", description: "Premium black tea shaken with ice and zesty lemonade." },
        { name: "Caramel Hot Chocolate", price: "RM16.50", category: "Tea & Chocolate", menuType: "Drinks Menu", description: "Rich hot chocolate with a sweet caramel flavor." },
        { name: "Signature Hot Chocolate", price: "RM15.50", category: "Tea & Chocolate", menuType: "Drinks Menu", description: "Starbucks' classic rich and creamy hot chocolate." },
        { name: "Strawberry Açaí With Lemonade Starbucks Refreshers Beverage", price: "RM17.50", category: "Tea & Chocolate", menuType: "Drinks Menu", description: "Sweet strawberry flavors with passion fruit and acai notes, balanced with lemonade." },
        { name: "Pink Drink With Strawberry Açaí Starbucks Refreshers Beverage", price: "RM18.50", category: "Tea & Chocolate", menuType: "Drinks Menu", description: "Strawberry Açaí Starbucks Refreshers with creamy coconut milk." },
        { name: "Caramel Frappuccino Blended Beverage", price: "RM17.50", category: "Frappuccino Blended Beverage", menuType: "Drinks Menu", description: "Coffee blended with caramel syrup, milk, and ice, topped with whipped cream." },
        { name: "Chocolate Cream Chip Frappuccino Blended Beverage", price: "RM18.50", category: "Frappuccino Blended Beverage", menuType: "Drinks Menu", description: "Creamy blend of chocolate chips, milk, and ice, topped with whipped cream." },
        { name: "Dark Mocha Frappuccino Blended Beverage", price: "RM18.50", category: "Frappuccino Blended Beverage", menuType: "Drinks Menu", description: "Extra-rich mocha coffee blended with milk and ice." },
        { name: "Espresso Frappuccino Blended Beverage", price: "RM16.50", category: "Frappuccino Blended Beverage", menuType: "Drinks Menu", description: "Coffee is combined with a shot of espresso and milk, then blended with ice." },
        { name: "Java Chip Frappuccino Blended Beverage", price: "RM18.50", category: "Frappuccino Blended Beverage", menuType: "Drinks Menu", description: "Coffee with choco chips, milk, and ice, topped with whipped cream and mocha drizzle." },
        { name: "Green Tea Cream Frappuccino Blended Beverage", price: "RM18.50", category: "Frappuccino Blended Beverage", menuType: "Drinks Menu", description: "Sweetened matcha green tea, milk, and ice blended together." },
        { name: "Mocha Frappuccino Blended Beverage", price: "RM17.50", category: "Frappuccino Blended Beverage", menuType: "Drinks Menu", description: "Mocha sauce, coffee, milk, and ice blended together." },

        // Food Menu
        { name: "Donut", price: "RM6.58", category: "Bakery", menuType: "Food Menu", description: "Classic soft and fluffy Starbucks donut." },
        { name: "Chocolate Lava Muffin", price: "RM10.98", category: "Bakery", menuType: "Food Menu", description: "Rich chocolate muffin with a gooey molten center." },
        { name: "Banana Chocolate Muffin", price: "RM10.98", category: "Bakery", menuType: "Food Menu", description: "Sweet banana-flavored muffin with chocolate chunks." },
        { name: "Skinny Blueberry Muffin", price: "RM10.98", category: "Bakery", menuType: "Food Menu", description: "A lighter muffin option packed with fresh blueberries." },
        { name: "Jumbo Croissant", price: "RM8.58", category: "Bakery", menuType: "Food Menu", description: "Large, buttery, and flaky classic croissant." },
        { name: "Chocolate Roll", price: "RM10.58", category: "Bakery", menuType: "Food Menu", description: "Sweet bread roll filled with rich chocolate." },
        { name: "Croissant (Eclat du Terroir)", price: "RM9.50", category: "Bakery", menuType: "Food Menu", description: "Premium French-style butter croissant." },
        { name: "Zataar Croissant", price: "RM10.50", category: "Bakery", menuType: "Food Menu", description: "Savory croissant topped with traditional Zataar spice." },
        { name: "Chunky Apple Turnover", price: "RM11.50", category: "Bakery", menuType: "Food Menu", description: "Flaky pastry filled with sweet, chunky apple filling." },
        { name: "Triple Chocolate Extravaganza", price: "RM12.50", category: "Bakery", menuType: "Food Menu", description: "Ultimate treat for chocolate lovers with three types of chocolate." },
        { name: "Breakfast at Brittany's", price: "RM14.50", category: "Bakery", menuType: "Food Menu", description: "A hearty bakery-style breakfast pastry." },
        { name: "Choco-Nut Crescents", price: "RM11.50", category: "Bakery", menuType: "Food Menu", description: "Delicate crescent-shaped pastry with chocolate and nuts." },
        { name: "Olive Tomato Focaccia", price: "RM13.50", category: "Bakery", menuType: "Food Menu", description: "Italian-style flatbread topped with olives and tomatoes." },
        { name: "Tiramisu King Brioche", price: "RM15.50", category: "Bakery", menuType: "Food Menu", description: "Soft brioche bun with coffee and cream tiramisu flavors." },
        { name: "Chocolate Tuxedo Truffles", price: "RM18.98", category: "Cakes & Deserts", menuType: "Food Menu", description: "Rich layers of dark and white chocolate mousse." },
        { name: "Signature Red Velvet", price: "RM18.98", category: "Cakes & Deserts", menuType: "Food Menu", description: "Classic red velvet cake with smooth cream cheese frosting." },
        { name: "Tiramisu", price: "RM16.90", category: "Cakes & Deserts", menuType: "Food Menu", description: "Coffee-soaked sponge with mascarpone cream and cocoa." },
        { name: "Hazelnut Chocolate Cake", price: "RM19.58", category: "Cakes & Deserts", menuType: "Food Menu", description: "Decadent chocolate cake with crunchy hazelnut layers." },
        { name: "Triple Chocolate Cheesecake", price: "RM18.98", category: "Cakes & Deserts", menuType: "Food Menu", description: "Creamy cheesecake with three layers of chocolate goodness." },
        { name: "Trio Cheese Smoked Chicken", price: "RM12.97", category: "Sandwiches", menuType: "Food Menu", description: "Three cheeses with savory smoked chicken on premium bread." },
        { name: "Croque Monsieur", price: "RM12.38", category: "Sandwiches", menuType: "Food Menu", description: "Classic French-style ham and cheese grilled sandwich." },
        { name: "Wholemeal Tuna Sandwich", price: "RM8.98", category: "Sandwiches", menuType: "Food Menu", description: "Healthy wholemeal bread filled with seasoned tuna." },
        { name: "Croissant Bun with Chicken Loaf, Egg & Cheese", price: "RM12.97", category: "Sandwiches", menuType: "Food Menu", description: "Flaky croissant bun with chicken loaf, egg, and cheese." },
        { name: "Chicken Patty & Spinach Sandwich", price: "RM12.97", category: "Sandwiches", menuType: "Food Menu", description: "Savory chicken patty with fresh spinach on toasted bread." },
        { name: "Baked Chicken Teriyaki Sandwich", price: "RM14.98", category: "Sandwiches", menuType: "Food Menu", description: "Tender baked chicken in sweet teriyaki sauce." },
        { name: "Mushroom Danish", price: "RM11.98", category: "Savory Bites", menuType: "Food Menu", description: "Savory pastry filled with sautéed mushrooms." },
        { name: "Ozzie Sausage Mushroom Roll", price: "RM10.97", category: "Savory Bites", menuType: "Food Menu", description: "Traditional sausage roll with a mushroom twist." },
        { name: "Butter Chicken Pie", price: "RM18.27", category: "Savory Bites", menuType: "Food Menu", description: "Classic pie filled with creamy butter chicken." },
        { name: "Black Pepper Lamb Pie", price: "RM12.97", category: "Savory Bites", menuType: "Food Menu", description: "Flaky pie filled with spicy black pepper lamb." },
        { name: "Thai Basil Chicken Danish", price: "RM9.97", category: "Savory Bites", menuType: "Food Menu", description: "Savory Danish with spicy Thai basil chicken filling." },
        { name: "Curry Puff with Potato & Egg", price: "RM7.58", category: "Savory Bites", menuType: "Food Menu", description: "Traditional Malaysian curry puff with potato and egg." },
        { name: "Chic O’ Cheese", price: "RM11.98", category: "Savory Bites", menuType: "Food Menu", description: "Savory chicken and cheese filled pastry." },
        { name: "Beef Ragu Pie", price: "RM12.97", category: "Savory Bites", menuType: "Food Menu", description: "Hearty pie filled with slow-cooked beef ragu." },
        { name: "Mini Cocktail with Nacho Cheese", price: "RM8.98", category: "Savory Bites", menuType: "Food Menu", description: "Mini cocktail sausages served with nacho cheese dip." },
        { name: "Cheese Chicken Onion Danish", price: "RM13.98", category: "Savory Bites", menuType: "Food Menu", description: "Savory Danish with chicken, cheese, and onion." },
        { name: "Garlic Cheesy Melt Baguette", price: "RM14.50", category: "Savory Bites", menuType: "Food Menu", description: "Crispy baguette topped with garlic butter and melted cheese." },
        { name: "Strawberry Crumble Cheesecake", price: "RM18.95", category: "Springs", menuType: "Food Menu", description: "Creamy cheesecake topped with strawberry crumble." },
        { name: "Rose Lychee Éclair", price: "RM11.56", category: "Springs", menuType: "Food Menu", description: "Light pastry filled with rose-scented lychee cream." },
        { name: "Magical Pumpkin Pie", price: "RM14.50", category: "Springs", menuType: "Food Menu", description: "Seasonal pumpkin pie with warm spices." },
        { name: "Chocolate Tuxedo Truffles (Whole)", price: "RM165.00", category: "Whole Cakes", menuType: "Food Menu", description: "Full-sized decadent chocolate tuxedo truffle cake." },
        { name: "Red Velvet (Whole)", price: "RM155.00", category: "Whole Cakes", menuType: "Food Menu", description: "Full-sized signature red velvet cake." },
        { name: "Tiramisu (Whole)", price: "RM145.00", category: "Whole Cakes", menuType: "Food Menu", description: "Full-sized traditional Starbucks tiramisu cake." }
      ]
    },
    {
      name: "ZUS Coffee",
      slug: "zus-coffee",
      category: 'coffee-bakeries',
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600&h=400",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "A Necessity, Not a Luxury",
      seoArticle: `\n<h2>ZUS Coffee: Premium Brews for Everyone</h2>
<p>ZUS Coffee completely disrupted the local cafe scene by making specialty coffee accessible and affordable. Their tech-driven app ordering makes picking up a Spanish Latte incredibly seamless. If you haven't tried their CEO Latté or their unique matcha blends, this guide will walk you through their best-selling drinks and current pricing.</p>\n`,
      nutritionHtml: `
<p class="text-lg">ZUS Coffee focuses on high-quality beans and unique local blends. A standard Spanish Latte has around 220 kcal.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Less Sweet:</strong> You can always request 'less sweet' to cut down on sugar.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Halal Certified:</strong> ZUS Coffee operates with strict Halal compliance.</span></li>
</ul>`,
      healthyTip: `"Try the CEO Latte with Oat Milk and half sugar for a creamier texture without the heavy dairy."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-blue-600">ZUS App</div>
    <p class="text-slate-500 text-sm font-medium">The best way to order for pickup or delivery while earning reward points.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Convenient for fast delivery across major cities in Malaysia.</p>
  </div>
</div>`,
      faqs: [
        { q: "Is ZUS Coffee a Malaysian brand?", a: "Yes, ZUS Coffee is a proudly Malaysian tech-driven coffee chain." },
        { q: "What is their signature drink?", a: "The Spanish Latte and the CEO Latte are their most popular signature beverages." }
      ],
      menu: zusCoffeeMenu
    },
    {
      name: "Oriental Kopi",
      slug: "oriental-kopi",
      category: 'coffee-bakeries',
      image: "/images/oriental-kopi.png",
      tags: [{ name: "Pork-Free", colors: "bg-orange-500 text-white" }],
      desc: "Traditional Taste, Modern Experience",
      seoArticle: `\n<h2>Oriental Kopi: The Egg Tart Phenomenon</h2>
<p>You can usually spot an Oriental Kopi outlet by the massive queue outside. Famous for their incredibly thick, flaky egg tarts and rich Polo Buns, this is traditional Nanyang coffee shop culture elevated for the modern mall-goer. Check our guide for their signature dishes like the Curry Laksa and Nasi Lemak.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Oriental Kopi serves traditional Nanyang dishes. Their famous Polo Bun and Egg Tarts are rich in butter and carbs (around 300 kcal each).</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Balanced Meals:</strong> Pair sweet pastries with traditional black coffee (Kopi O) to balance the flavors.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Pork-Free:</strong> The menu is entirely pork-free and muslim-friendly.</span></li>
</ul>`,
      healthyTip: `"If you're watching calories, share the signature Egg Tart with a friend and opt for Kopi O Kosong (no sugar) instead of regular Kopi."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Excellent for getting warm egg tarts delivered directly to your home.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-orange-500">ShopeeFood</div>
    <p class="text-slate-500 text-sm font-medium">Offers reliable delivery with frequent free delivery vouchers.</p>
  </div>
</div>`,
      faqs: [
        { q: "Are Oriental Kopi's egg tarts halal?", a: "Yes, all ingredients used are halal-certified and the restaurants are pork-free." },
        { q: "What is Oriental Kopi famous for?", a: "They are famous for their extra thick Polo Buns, giant Egg Tarts, and traditional Nanyang Kopi." }
      ],
      menu: orientalKopiMenu
    },
    {
      name: "Coffee Bean & Tea Leaf",
      slug: "coffee-bean-tea-leaf",
      category: 'coffee-bakeries',
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600&h=400",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Find Your Flavor with Premium Coffee & Tea",
      seoArticle: `\n<h2>Coffee Bean & Tea Leaf: A Relaxed Retreat</h2>
<p>CB&TL offers a quieter, often more relaxed alternative in the premium coffee space. Their Ice Blended drinks remain iconic, and their hot teas are steeped to perfection. With a solid range of hot food and cakes, our price guide helps you find the perfect pairing for your afternoon tea break.</p>\n`,
      nutritionHtml: `
<p class="text-lg">CBTL offers rich Ice Blended drinks that are higher in calories, but their pure teas and cold brews are virtually calorie-free.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Healthy Sides:</strong> The salads and fresh sandwiches offer a nutritious lunch alternative.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Halal Certified:</strong> CBTL Malaysia strictly adheres to JAKIM Halal guidelines.</span></li>
</ul>`,
      healthyTip: `"Choose an Americano or a pure Tea Leaf infusion instead of the Ice Blended series to save over 300 calories."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">Great for ordering bagels and hot lattes for a quick morning breakfast.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Fast delivery to ensure your Ice Blended drinks arrive perfectly chilled.</p>
  </div>
</div>`,
      faqs: [
        { q: "Is Coffee Bean & Tea Leaf Halal?", a: "Yes, all branches in Malaysia are Halal certified." },
        { q: "Do they serve food?", a: "Yes, CBTL serves a variety of pastas, sandwiches, pizzas, and cakes alongside their beverages." }
      ],
      menu: coffeeBeanMenu
    }
  ],
  'local-asian': [
    {
      name: "Secret Recipe",
      slug: "secret-recipe",
      category: 'local-asian',
      image: "/images/secret-recipe.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Gourmet Cakes & Cafe Meals",
      seoArticle: `\n<h2>Secret Recipe: Malaysia's Cake Destination</h2>
<p>No birthday or celebration in Malaysia feels complete without a box from Secret Recipe. While their Chocolate Indulgence and New York Cheese cakes are legendary, their hot food menu—especially the Tom Yum Kung—is surprisingly robust. Browse our guide to see current slice prices and whole cake options.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Known for decadent cakes, a slice of Chocolate Indulgence is around 400-500 kcal. Their hot meals offer generous portions.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Lighter Meals:</strong> The Vietnamese Beef Noodle Soup is a hearty yet lower-calorie option compared to creamy pastas.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Halal Certified:</strong> Secret Recipe is proudly Halal certified by JAKIM.</span></li>
</ul>`,
      healthyTip: `"Share a slice of cake with a friend after your meal to satisfy your sweet tooth without consuming all the calories yourself."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-red-600">SR GO! App</div>
    <p class="text-slate-500 text-sm font-medium">Order directly through their app for pick-up or delivery and earn reward points.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">The most popular choice for getting whole cakes delivered for birthdays.</p>
  </div>
</div>`,
      faqs: [
        { q: "Is Secret Recipe Halal?", a: "Yes, Secret Recipe has been Halal certified by JAKIM for many years." },
        { q: "Can I order a whole cake for delivery?", a: "Yes, you can order whole cakes via the SR GO! app or through GrabFood depending on location." }
      ],
      menu: secretRecipeMenu
    },
    {
      name: "PappaRich",
      slug: "papparich",
      category: 'local-asian',
      image: "https://images.unsplash.com/photo-1626804475297-41609ea0db49?auto=format&fit=crop&q=80&w=600&h=400",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Authentic Malaysian Delights",
      seoArticle: `\n<h2>PappaRich: Authentic Malaysian Kopitiam Fare</h2>
<p>PappaRich brings the classic Malaysian Kopitiam experience into a comfortable, air-conditioned setting. Their extensive menu covers everything from Hainanese toast with kaya to rich, spicy laksa and flavorful Nasi Biryani. It's the perfect spot for family lunches where everyone wants something different.</p>\n`,
      nutritionHtml: `
<p class="text-lg">PappaRich offers traditional Malaysian comfort food. Famous dishes like Nasi Lemak and Curry Laksa are rich in flavor but can be high in calories.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Healthier Swaps:</strong> Opt for clear noodle soups (like Ipoh Kuey Teow Soup) to save on calories and saturated fats.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Halal Certified:</strong> PappaRich is fully Halal certified.</span></li>
</ul>`,
      healthyTip: `"When ordering Nasi Lemak, ask for less rice and sambal on the side to manage your caloric intake."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Enjoy warm, comforting Malaysian dishes delivered directly to your home.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A popular choice for ordering Hainan toast and coffee for breakfast.</p>
  </div>
</div>`,
      faqs: [
        { q: "Is PappaRich Halal?", a: "Yes, PappaRich Malaysia is strictly Halal certified by JAKIM." },
        { q: "What is the most popular dish?", a: "The Nasi Lemak with Curry Chicken and the Pappa Curry Laksa are fan favorites." }
      ],
      menu: []
    },
    {
      name: "OldTown White Coffee",
      slug: "oldtown-white-coffee",
      category: 'local-asian',
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600&h=400",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "The True White Coffee Origination",
      seoArticle: `\n<h2>OldTown White Coffee: The Taste of Ipoh</h2>
<p>Famous for their aromatic, smooth white coffee originating from Ipoh, OldTown is a breakfast staple. Pair their signature brew with a classic serving of Kaya Butter Toast or a hearty bowl of Ipoh Chicken Hor Fun. Our guide covers all their comforting local classics and current pricing.</p>\n`,
      nutritionHtml: `
<p class="text-lg">OldTown is famous for its rich White Coffee and classic toast sets.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Vegetarian Options:</strong> They offer a dedicated plant-based and vegetarian menu series.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Halal Certified:</strong> OldTown White Coffee is fully Halal certified.</span></li>
</ul>`,
      healthyTip: `"For a lighter coffee, choose the 'Kosong' (no sugar/milk) option to fully enjoy the roasted aroma without the added calories."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">Excellent for morning breakfast deliveries, bringing warm toast to your door.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Convenient for lunch meals and ordering their signature noodles.</p>
  </div>
</div>`,
      faqs: [
        { q: "Are all OldTown White Coffee outlets Halal?", a: "Yes, all OldTown White Coffee outlets in Malaysia are Halal certified." },
        { q: "What is White Coffee?", a: "White Coffee is a traditional Malaysian coffee roasting method using margarine, producing a smoother, lighter-colored brew." }
      ],
      menu: []
    },
    {
      name: "Madam Kwan's",
      slug: "madam-kwans",
      category: 'local-asian',
      image: "/images/madam-kwans.png",
      tags: [{ name: "Pork-Free", colors: "bg-orange-500 text-white" }],
      desc: "Truly Malaysian Cuisine",
      seoArticle: `\n<h2>Madam Kwan's: Truly Malaysian Comfort Food</h2>
<p>When locals want to treat guests to elevated Malaysian cuisine, Madam Kwan's is often the first choice. Their Nasi Lemak is legendary, featuring incredibly tender chicken curry and aromatic coconut rice. This guide will help you explore their premium local dishes and signature desserts like the Cendol.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Madam Kwan's serves premium Malaysian dishes. Signature meals like Nasi Bojari feature deep-fried chicken and aromatic rice, making them indulgent options.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Pork-Free:</strong> The menu uses no pork or lard.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Sharing Portions:</strong> Many dishes are generously sized, perfect for sharing.</span></li>
</ul>`,
      healthyTip: `"For a lighter meal, try the Steamed Fish or clear soups instead of the rich coconut-based curries."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Offers premium delivery for your family dinners straight from the mall to your home.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A reliable alternative for fast delivery during lunch hours.</p>
  </div>
</div>`,
      faqs: [
        { q: "Is Madam Kwan's Halal?", a: "Madam Kwan's is pork-free and uses halal-certified ingredients, though some outlets may serve alcohol." },
        { q: "What is their most famous dish?", a: "The Nasi Bojari, a tri-colored rice served with fried chicken, beef rendang, and assam prawns, is their iconic dish." }
      ],
      menu: []
    },
    {
      name: "Thong Bowl",
      slug: "thong-bowl",
      category: 'local-asian',
      image: "/images/thong-bowl.png",
      tags: [{ name: "Halal-Certified", colors: "bg-green-500 text-white" }],
      desc: "Traditional Taste, Modern Noodle Experience",
      seoArticle: `\n<h2>Thong Bowl: Thai Boat Noodles Redefined</h2>
<p>If you're craving intense, complex Thai flavors, Thong Bowl delivers a premium boat noodle experience. Their rich, dark broth paired with high-quality beef cuts makes for a deeply satisfying meal. Check our guide for their best noodle combinations and refreshing Thai milk teas.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Thong Bowl specializes in hearty noodle dishes. Traditional Pan Mee and Char Kueh Teow are savory but typically higher in sodium and carbohydrates.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Customization:</strong> You can often request less oil or less soy sauce for stir-fried dishes.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Halal Certified:</strong> Thong Bowl operates with full Halal certification.</span></li>
</ul>`,
      healthyTip: `"For a lower-calorie meal, choose soup-based noodles over dry or stir-fried versions to reduce your oil intake."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Perfect for ordering hot noodle soups securely packaged for delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-orange-500">ShopeeFood</div>
    <p class="text-slate-500 text-sm font-medium">A great option to find vouchers and discounts for your lunch orders.</p>
  </div>
</div>`,
      faqs: [
        { q: "Is Thong Bowl Halal?", a: "Yes, Thong Bowl is Halal-certified and strictly adheres to Islamic dietary guidelines." },
        { q: "What should I order for the first time?", a: "The TK Style Char Kueh Teow and the Signature Hainan Toast are highly recommended for first-timers." }
      ],
      menu: thongBowlMenu
    },
    {
      name: "Damascus Bukit Bintang",
      slug: "damascus-bukit-bintang",
      category: 'local-asian',
      image: "/images/damascus.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Authentic Middle Eastern Shawarma & Grills",
      seoArticle: `\n<h2>Damascus: The Heart of Middle Eastern Flavor</h2>
<p>Located in the bustling streets of Bukit Bintang, Damascus is famous for its incredible shawarmas and authentic Syrian cuisine. The scent of roasting meats draws massive crowds daily. Our guide helps you navigate their massive portions, from mixed grill platters to their iconic garlic sauce wraps.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Middle Eastern cuisine is rich in protein and healthy fats. A Chicken Shawarma wrap contains roughly 400-500 kcal depending on the garlic sauce.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Healthy Sides:</strong> Hummus and Baba Ghanoush are excellent sources of plant-based protein and fiber.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Halal Certified:</strong> Damascus serves 100% Halal and authentic Arabic food.</span></li>
</ul>`,
      healthyTip: `"Skip the fries and pair your shawarma with a fresh Arabic Salad or Tabouleh for a lighter, refreshing crunch."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Fast delivery from Bukit Bintang straight to your hotel or office.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">Excellent for late-night shawarma cravings in the KL city center.</p>
  </div>
</div>`,
      faqs: [
        { q: "Is Damascus Bukit Bintang Halal?", a: "Yes, all meat and ingredients used are strictly Halal." },
        { q: "Does Damascus have seating?", a: "Yes, they have both indoor seating and an outdoor dining area where you can experience the vibrant Bukit Bintang atmosphere." }
      ],
      menu: damascusMenu
    }
  ],
  'teas-desserts': [
    {
      name: "Chagee",
      slug: "chagee",
      category: 'teas-desserts',
      image: "/images/chagee.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Premium Fresh Milk Tea & Oolong Specialists",
      seoArticle: `\n<h2>Chagee: Premium Tea in a Modern Cup</h2>
<p>Chagee has redefined the bubble tea experience in Malaysia by focusing on high-quality tea leaves rather than just sugar and pearls. Their beautifully designed cups and fragrant Jasmine Green Milk Tea have created a massive following. Use our guide to find the perfect brew and explore their fresh fruit tea options.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Chagee offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Chagee."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Chagee directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Chagee meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Chagee offer delivery?",
                "a": "Yes, Chagee is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Chagee?",
                "a": "Yes, Chagee provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: chageeMenu
    },
    {
      name: "Ai-Cha",
      slug: "ai-cha",
      category: 'teas-desserts',
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=600&h=400",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Ice Cream & Specialty Tea",
      seoArticle: `\n<h2>Ai-Cha: Sweet Treats That Don't Break the Bank</h2>
<p>Taking the dessert scene by storm, Ai-Cha offers incredibly affordable ice cream and refreshing teas. Their signature Ai-Scream cones and fruit smoothies are perfect for beating the Malaysian heat. Check our guide to see how far a RM10 note can go at this popular dessert spot.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Ai-Cha offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Ai-Cha."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Ai-Cha directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Ai-Cha meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Ai-Cha offer delivery?",
                "a": "Yes, Ai-Cha is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Ai-Cha?",
                "a": "Yes, Ai-Cha provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: aiChaMenu
    },
    {
      name: "Mixue",
      slug: "mixue",
      category: 'teas-desserts',
      image: "/images/mixue.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Ice Cream & Fruit Tea Specialists",
      seoArticle: `\n<h2>Mixue: The Ice Cream Giant</h2>
<p>Mixue's catchy theme song and iconic snowman mascot have made it a favorite among students and families. Known for their massive, budget-friendly soft serve cones and 1-liter fruit teas, they offer unbeatable value. Our guide breaks down their simple but highly addictive menu.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Mixue offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Mixue."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Mixue directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Mixue meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Mixue offer delivery?",
                "a": "Yes, Mixue is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Mixue?",
                "a": "Yes, Mixue provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: mixueMenu
    },
    {
      name: "Tealive",
      slug: "tealive",
      category: 'teas-desserts',
      image: "/images/tealive.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Always in your cup",
      seoArticle: `\n<h2>Tealive: Always in Your Cup</h2>
<p>As Malaysia's premier homegrown bubble tea brand, Tealive is constantly innovating. From their classic Bang Bang Milk Tea with warm brown sugar pearls to their newer 'Eats' menu featuring Toasteas, they offer a complete lifestyle cafe experience. Browse our guide for the latest seasonal drops.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Tealive offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Tealive."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Tealive directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Tealive meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Tealive offer delivery?",
                "a": "Yes, Tealive is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Tealive?",
                "a": "Yes, Tealive provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: tealiveMenu
    },
    {
      name: "Bingxue",
      slug: "bingxue",
      category: 'teas-desserts',
      image: "/images/bingxue.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Ice Cream & Tea Experience",
      seoArticle: `\n<h2>Bingxue: Refreshing Fruit Teas & Sundaes</h2>
<p>Bingxue brings a vibrant mix of colorful fruit teas and creamy sundaes to the table. Their massive beverage buckets are perfect for sharing or keeping hydrated all day. If you haven't tried their matcha creations or waffle desserts, our guide has all the details you need.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Bingxue offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Bingxue."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Bingxue directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Bingxue meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Bingxue offer delivery?",
                "a": "Yes, Bingxue is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Bingxue?",
                "a": "Yes, Bingxue provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: bingxueMenu
    },
    {
      name: "llaollao",
      slug: "llaollao",
      category: 'teas-desserts',
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600&h=400",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Natural Frozen Yogurt",
      seoArticle: `\n<h2>llaollao: Natural Frozen Yogurt Joy</h2>
<p>llaollao (pronounced yao-yao) is the undisputed king of froyo in Malaysia. Their Sanum—a towering mix of natural yogurt, fresh fruits, crunch, and rich sauces—is a customizable masterpiece. Our guide helps you plan your perfect topping combination for your next sweet, tangy treat.</p>\n`,
      nutritionHtml: `
<p class="text-lg">llaollao offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>`,
      healthyTip: `"Opt for fresh fruit toppings instead of sweet sauces to keep your froyo balanced."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order llaollao directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering meals during lunch hours.</p>
  </div>
</div>`,
      faqs: [
        { "q": "Does llaollao offer delivery?", "a": "Yes, llaollao is available on major delivery platforms like GrabFood and Foodpanda in most areas." },
        { "q": "Are there vegetarian options at llaollao?", "a": "Yes, llaollao provides several meat-free and vegetarian-friendly options on their menu." }
      ],
      menu: []
    },
    {
      name: "Gong Cha",
      slug: "gong-cha",
      category: 'teas-desserts',
      image: "https://images.unsplash.com/photo-1558137623-ce933996c730?auto=format&fit=crop&q=80&w=600&h=400",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Brewing Happiness Daily",
      seoArticle: `\n<h2>Gong Cha: Brewing Happiness Daily</h2>
<p>With a focus on brewing quality, Gong Cha remains a steadfast favorite for traditional milk tea lovers. Their signature milk foam series offers a perfect sweet and savory balance that many competitors try to imitate. Check our guide for their classic winter melon tea and latest pricing.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Gong Cha offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>`,
      healthyTip: `"Opt for 0% or 30% sugar to keep your tea balanced."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering meals during lunch hours.</p>
  </div>
</div>`,
      faqs: [
        { "q": "Does Gong Cha offer delivery?", "a": "Yes, Gong Cha is available on major delivery platforms like GrabFood and Foodpanda in most areas." },
        { "q": "Are there vegetarian options at Gong Cha?", "a": "Yes, Gong Cha provides several meat-free and vegetarian-friendly options on their menu." }
      ],
      menu: []
    },
    {
      name: "Suka Dessert",
      slug: "suka-dessert",
      category: 'teas-desserts',
      image: "/images/suka-dessert.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Paradise for Chocolate & Brownie Lovers",
      seoArticle: `\n<h2>Suka Dessert: A Chocolate Lover's Paradise</h2>
<p>If you have a serious sweet tooth, Suka Dessert is your heaven. Famous for their viral Choco Jars and Mountain Lava Brownies, they don't hold back on the premium melted chocolate. Use this guide to explore their indulgent, sugar-packed offerings before your next cheat day.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Suka Dessert offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Suka Dessert."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Suka Dessert directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Suka Dessert meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Suka Dessert offer delivery?",
                "a": "Yes, Suka Dessert is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Suka Dessert?",
                "a": "Yes, Suka Dessert provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: sukaDessertMenu
    },
    {
      name: "We Drink",
      slug: "we-drink",
      category: 'teas-desserts',
      image: "/images/we-drink.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Fresh Ice Cream & Fruit Tea Specialist",
      seoArticle: `\n<h2>We Drink: Cool Down with Fresh Fruit</h2>
<p>We Drink offers a refreshing escape from the heat with their focus on fresh fruit juices and light ice creams. Their bright, accessible stores are perfect for grabbing a quick, hydrating beverage on the go. Our guide lists their best zesty combinations and current prices.</p>\n`,
      nutritionHtml: `
<p class="text-lg">We Drink offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at We Drink."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order We Drink directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering We Drink meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does We Drink offer delivery?",
                "a": "Yes, We Drink is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at We Drink?",
                "a": "Yes, We Drink provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: weDrinkMenu
    }
  ],
  'japanese-korean': [
    {
      name: "Sushi King",
      slug: "sushi-king",
      category: 'japanese-korean',
      image: "/images/sushi-king.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Japan's Finest at Your Fingertips Since 1995",
      seoArticle: `\n<h2>Sushi King: Malaysia's First Kaiten Experience</h2>
<p>Sushi King introduced conveyor belt sushi to Malaysia and remains a nostalgic favorite. With affordable colored plates and massive seasonal 'Bonanza' deals, it's the perfect spot for a casual family dinner. Browse our guide to plan your strategy for their extensive sushi and bento offerings.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Sushi King offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Sushi King."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Sushi King directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Sushi King meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Sushi King offer delivery?",
                "a": "Yes, Sushi King is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Sushi King?",
                "a": "Yes, Sushi King provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: sushiKingMenu
    },
    {
      name: "Sushi Zanmai",
      slug: "sushi-zanmai",
      category: 'japanese-korean',
      image: "/images/sushi-zanmai.png",
      tags: [{ name: "Pork-Free", colors: "bg-orange-500 text-white" }],
      desc: "Authentic & Accessible Conveyor Belt Sushi",
      seoArticle: `\n<h2>Sushi Zanmai: Authentic Japanese Dining</h2>
<p>When you want a step up in quality without breaking the bank, Sushi Zanmai is the go-to. Their Mentaiko Spider Roll and fresh sashimi cuts are highly praised by regulars. Our guide covers their extensive menu, including their comforting hot udon and donburi bowls.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Sushi Zanmai offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Sushi Zanmai."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Sushi Zanmai directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Sushi Zanmai meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Sushi Zanmai offer delivery?",
                "a": "Yes, Sushi Zanmai is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Sushi Zanmai?",
                "a": "Yes, Sushi Zanmai provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: sushiZanmaiMenu
    },
    {
      name: "Don Omakase",
      slug: "don-omakase",
      category: 'japanese-korean',
      image: "/images/don-omakase.png",
      tags: [{ name: "International", colors: "bg-blue-500 text-white" }],
      desc: "Premium Omakase-Style Donburi Bowls",
      seoArticle: `\n<h2>Don Omakase: Premium Japanese Bowls</h2>
<p>Don Omakase focuses on delivering high-quality, chef-curated rice bowls. Whether it's premium wagyu beef or fresh salmon roe, every bowl is crafted with precision and care. Use our guide to explore their luxurious but accessible Japanese comfort food.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Don Omakase offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Don Omakase."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Don Omakase directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Don Omakase meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Don Omakase offer delivery?",
                "a": "Yes, Don Omakase is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Don Omakase?",
                "a": "Yes, Don Omakase provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: donOmakaseMenu
    },
    {
      name: "MyeongDong Topokki",
      slug: "myeongdong-topokki",
      category: 'japanese-korean',
      image: "/images/myeongdong-topokki.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Authentic Korean Street Food",
      seoArticle: `\n<h2>MyeongDong Topokki: Korean Street Food Vibes</h2>
<p>Craving the bustling streets of Seoul? MyeongDong Topokki brings authentic Korean street food into comfortable mall settings. From spicy tteokbokki to crispy kimali and hearty kimchi jjigae, our guide helps you navigate their vibrant, spicy, and deeply satisfying menu.</p>\n`,
      nutritionHtml: `
<p class="text-lg">MyeongDong Topokki offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at MyeongDong Topokki."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order MyeongDong Topokki directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering MyeongDong Topokki meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does MyeongDong Topokki offer delivery?",
                "a": "Yes, MyeongDong Topokki is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at MyeongDong Topokki?",
                "a": "Yes, MyeongDong Topokki provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: myeongdongTopokkiMenu
    },
    {
      name: "Mr. Dakgalbi",
      slug: "mr-dakgalbi",
      category: 'japanese-korean',
      image: "/images/mr-dakgalbi.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Authentic Stir-Fried Chicken (Dakgalbi)",
      seoArticle: `\n<h2>Mr. Dakgalbi: The Ultimate Pan-Fried Feast</h2>
<p>Mr. Dakgalbi offers an interactive dining experience where spicy marinated chicken, cabbage, and sweet potatoes are stir-fried right at your table. Adding cheese and a ramen noodle finish is practically mandatory. Check our guide to see their set meals perfect for group dining.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Mr. Dakgalbi offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Mr. Dakgalbi."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Mr. Dakgalbi directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Mr. Dakgalbi meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Mr. Dakgalbi offer delivery?",
                "a": "Yes, Mr. Dakgalbi is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Mr. Dakgalbi?",
                "a": "Yes, Mr. Dakgalbi provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: mrDakgalbiMenu
    },
    {
      name: "Sopoong",
      slug: "sopoong",
      category: 'japanese-korean',
      image: "/images/sopoong.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Traditional Korean Comfort Food",
      seoArticle: `\n<h2>Sopoong: Wholesome Korean Meals</h2>
<p>Sopoong is perfect for those seeking a complete, balanced Korean meal. Their bibimbap is fresh and crunchy, and their bulgogi is marinated to sweet and savory perfection. Our guide highlights their generous banchan (side dishes) and affordable set menus.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Sopoong offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Sopoong."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Sopoong directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Sopoong meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Sopoong offer delivery?",
                "a": "Yes, Sopoong is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Sopoong?",
                "a": "Yes, Sopoong provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: sopoongMenu
    },
    {
      name: "Oiso",
      slug: "oiso",
      category: 'japanese-korean',
      image: "/images/oiso.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Traditional Korean Cuisine & Fried Chicken",
      seoArticle: `\n<h2>Oiso: Traditional Korean Flavors</h2>
<p>Focusing on traditional recipes, Oiso delivers authentic Korean flavors that feel home-cooked. Their hearty soups and perfectly grilled mackerel are highly recommended for a comforting lunch. Browse our updated guide for their latest traditional offerings.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Oiso offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Oiso."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Oiso directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Oiso meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Oiso offer delivery?",
                "a": "Yes, Oiso is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Oiso?",
                "a": "Yes, Oiso provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: oisoMenu
    },
    {
      name: "Empire Sushi",
      slug: "empire-sushi",
      category: 'japanese-korean',
      image: "/images/empire-sushi.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Malaysia's Favorite Grab-and-Go Sushi",
      seoArticle: `\n<h2>Empire Sushi: Premium Grab-and-Go</h2>
<p>Empire Sushi revolutionized how Malaysians eat sushi by offering high-quality, creative pieces in a convenient kiosk format. Their Inari selection and spicy mentai toppings are incredibly popular for quick mall snacks. Our guide breaks down their affordable 'per piece' pricing.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Empire Sushi offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Empire Sushi."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Empire Sushi directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Empire Sushi meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Empire Sushi offer delivery?",
                "a": "Yes, Empire Sushi is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Empire Sushi?",
                "a": "Yes, Empire Sushi provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: empireSushiMenu
    },
    {
      name: "Yakiniku Kuro",
      slug: "yakiniku-kuro",
      category: 'japanese-korean',
      image: "/images/yakiniku-kuro.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Premium Japanese BBQ & Yakiniku",
      seoArticle: `\n<h2>Yakiniku Kuro: The Personal BBQ Experience</h2>
<p>Yakiniku Kuro brings the solo-dining BBQ culture to Malaysia. With individual grills and premium cuts of beef, it's a meat lover's dream that you can enjoy at your own pace. Check our guide for their best value meat platters and dipping sauces.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Yakiniku Kuro offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Yakiniku Kuro."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Yakiniku Kuro directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Yakiniku Kuro meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Yakiniku Kuro offer delivery?",
                "a": "Yes, Yakiniku Kuro is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Yakiniku Kuro?",
                "a": "Yes, Yakiniku Kuro provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: yakinikuKuroMenu
    },
    {
      name: "Kingu Kongu",
      slug: "kingu-kongu",
      category: 'japanese-korean',
      image: "/images/kingu-kongu.png",
      tags: [{ name: "Muslim-Owned", colors: "bg-orange-500 text-white" }, { name: "Pork-Free", colors: "bg-gray-500 text-white" }],
      desc: "Trendy Japanese Izakaya & Fusion Dining",
      seoArticle: `\n<h2>Kingu Kongu: Fun and Flavorful Izakaya</h2>
<p>With its vibrant retro-Japanese decor and lively atmosphere, Kingu Kongu offers a modern take on the Izakaya experience. Their yakitori skewers and creative donburi bowls are perfect for weekend gatherings. Use our guide to explore their unique, Instagram-worthy menu.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Kingu Kongu offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Kingu Kongu."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Kingu Kongu directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Kingu Kongu meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Kingu Kongu offer delivery?",
                "a": "Yes, Kingu Kongu is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Kingu Kongu?",
                "a": "Yes, Kingu Kongu provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: kinguKonguMenu
    }
  ],
  'pizza-italian': [
    {
      name: "Pizza Hut",
      slug: "pizza-hut",
      category: 'pizza-italian',
      image: "/images/pizza-hut.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "No One OutPizzas The Hut",
      seoArticle: `\n<h2>Pizza Hut: The Iconic Pan Pizza</h2>
<p>There's nothing quite like the crispy, oily, and fluffy crust of a Pizza Hut Pan Pizza. It's been a staple for Malaysian parties and late-night cravings for decades. Our guide helps you navigate their current combo deals, stuffed crust options, and classic pasta dishes.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Pizza Hut offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Pizza Hut."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Pizza Hut directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Pizza Hut meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Pizza Hut offer delivery?",
                "a": "Yes, Pizza Hut is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Pizza Hut?",
                "a": "Yes, Pizza Hut provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: pizzaHutMenu
    }
  ],
  'western-grilled': [
    {
      name: "Nando's",
      slug: "nandos",
      category: 'western-grilled',
      image: "/images/nandos.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Home of PERi-PERi Flame-Grilled Chicken",
      seoArticle: `\n<h2>Nando's: Fiery PERi-PERi Perfection</h2>
<p>Nando's is the ultimate destination for flame-grilled chicken with a kick. Whether you prefer the mild Lemon & Herb or the daring Extra Hot, their PERi-PERi sauce is legendary. Check our guide for their bottomless drink options and the best hearty side dishes to pair with your meal.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Nando's offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Nando's."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Nando's directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Nando's meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Nando's offer delivery?",
                "a": "Yes, Nando's is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Nando's?",
                "a": "Yes, Nando's provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: nandosMenu
    }
  ],
  'convenience-stores': [
    {
      name: "FamilyMart",
      slug: "familymart",
      category: 'convenience-stores',
      image: "/images/familymart.png",
      tags: [{ name: "Pork-Free", colors: "bg-orange-500 text-white" }],
      desc: "Fresh Oden, Bento, Onigiri & Sofuto",
      seoArticle: `\n<h2>FamilyMart: The Konbini Culture</h2>
<p>FamilyMart changed the convenience store game in Malaysia. Their Tom Yum Oden is practically a national treasure, and their matcha Sofuto is a must-have dessert. Our guide lists their best ready-to-eat bento boxes, onigiri, and seasonal snack releases.</p>\n`,
      nutritionHtml: `
<p class="text-lg">FamilyMart offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at FamilyMart."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order FamilyMart directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering FamilyMart meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does FamilyMart offer delivery?",
                "a": "Yes, FamilyMart is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at FamilyMart?",
                "a": "Yes, FamilyMart provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: familyMartMenu
    },
    {
      name: "CU Mart",
      slug: "cu-mart",
      category: 'convenience-stores',
      image: "/images/cu-mart.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Korean Street Food & Convenience Store",
      seoArticle: `\n<h2>CU Mart: Korean Convenience at its Best</h2>
<p>Bringing the Hallyu wave straight to your neighborhood, CU Mart offers an incredible selection of Korean street food. Their creamy Rose Tteokbokki and massive Dosirak lunch boxes are perfect for quick, flavorful meals. Browse our guide for the best spicy snacks and K-drinks.</p>\n`,
      nutritionHtml: `
<p class="text-lg">CU Mart offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at CU Mart."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order CU Mart directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering CU Mart meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does CU Mart offer delivery?",
                "a": "Yes, CU Mart is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at CU Mart?",
                "a": "Yes, CU Mart provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: cuMartMenu
    }
  ],
  'sandwiches-health': [
    {
      name: "Subway",
      slug: "subway",
      category: 'sandwiches-health',
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=600&h=400",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Eat Fresh",
      seoArticle: `\n<h2>Subway: Eat Fresh, Your Way</h2>
<p>When you need a quick, customizable, and relatively healthy meal, Subway is always reliable. From the hearty Italian B.M.T to the classic Roasted Chicken Wrap, you control exactly what goes into your sandwich. Our guide covers their latest daily promotions and cookie options.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Subway offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Subway."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Subway directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Subway meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Subway offer delivery?",
                "a": "Yes, Subway is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Subway?",
                "a": "Yes, Subway provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: [
        // Regular Menu - Subs
        { name: "Roasted Chicken", price: "6-inch: RM14.50 | Footlong: RM24.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "Tender chicken breast roasted to perfection." },
        { name: "BBQ Chicken", price: "6-inch: RM14.50 | Footlong: RM24.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "Succulent chicken strips glazed with sweet and smoky BBQ sauce." },
        { name: "Bulgogi Chicken", price: "6-inch: RM15.50 | Footlong: RM26.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "Korean-style savory and sweet Bulgogi chicken." },
        { name: "Chicken Teriyaki", price: "6-inch: RM15.50 | Footlong: RM26.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "Tender chicken strips glazed with sweet teriyaki sauce." },
        { name: "Spicy Mayo Chicken", price: "6-inch: RM14.50 | Footlong: RM24.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "Zesty chicken mixed with creamy spicy mayo." },
        { name: "Chicken Slice", price: "6-inch: RM13.50 | Footlong: RM22.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "Classic lean chicken slices." },
        { name: "Italian B.M.T.", price: "6-inch: RM15.90 | Footlong: RM26.90", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "Layered with pepperoni, Genoa salami, and chicken slice." },
        { name: "Steak & Cheese", price: "6-inch: RM17.50 | Footlong: RM29.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "Tender steak strips topped with melted cheese." },
        { name: "Roast Beef", price: "6-inch: RM17.50 | Footlong: RM29.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "Thinly sliced, tender roast beef." },
        { name: "Spicy Italian", price: "6-inch: RM14.50 | Footlong: RM24.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "A spicy combo of pepperoni and Genoa salami." },
        { name: "Meatball Marinara", price: "6-inch: RM14.50 | Footlong: RM24.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "Hearty meatballs in a rich marinara sauce." },
        { name: "Tuna", price: "6-inch: RM14.50 | Footlong: RM24.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "Flaked tuna mixed with creamy mayonnaise." },
        { name: "Seafood Sensation", price: "6-inch: RM15.50 | Footlong: RM26.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "Creamy blend of seafood and mayo." },
        { name: "Egg Mayo Tuna", price: "6-inch: RM15.00 | Footlong: RM25.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "A combination of classic tuna and creamy egg mayo." },
        { name: "Egg Mayo", price: "6-inch: RM12.50 | Footlong: RM21.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "Simple and satisfying creamy egg mayonnaise." },
        { name: "Veggie Delite", price: "6-inch: RM12.50 | Footlong: RM21.50", category: "6 Inches/Foot long Subs", menuType: "Regular Menu", description: "A healthy mix of your favorite fresh vegetables." },

        // Regular Menu - Wraps
        { name: "Roasted Chicken Wrap", price: "RM15.50", category: "Wraps", menuType: "Regular Menu", description: "Tender roasted chicken in a soft flour wrap." },
        { name: "BBQ Chicken Wrap", price: "RM15.50", category: "Wraps", menuType: "Regular Menu", description: "Sweet BBQ chicken strips wrapped with fresh veggies." },
        { name: "Bulgogi Chicken Wrap", price: "RM16.50", category: "Wraps", menuType: "Regular Menu", description: "Flavorful Bulgogi chicken in a convenient wrap." },
        { name: "Chicken Teriyaki Wrap", price: "RM16.50", category: "Wraps", menuType: "Regular Menu", description: "Sweet and savory chicken teriyaki wrap." },
        { name: "Spicy Mayo Chicken Wrap", price: "RM15.50", category: "Wraps", menuType: "Regular Menu", description: "Zesty spicy mayo chicken wrap." },
        { name: "Chicken Slice Wrap", price: "RM14.50", category: "Wraps", menuType: "Regular Menu", description: "Classic chicken slice breakfast or lunch wrap." },
        { name: "Italian B.M.T. Wrap", price: "RM16.90", category: "Wraps", menuType: "Regular Menu", description: "Signature Italian cold cuts in a wrap." },
        { name: "Steak & Cheese Wrap", price: "RM18.50", category: "Wraps", menuType: "Regular Menu", description: "Premium steak and cheese in a soft wrap." },
        { name: "Roast Beef Wrap", price: "RM18.50", category: "Wraps", menuType: "Regular Menu", description: "Tender roast beef wrapped with fresh vegetables." },
        { name: "Spicy Italian Wrap", price: "RM15.50", category: "Wraps", menuType: "Regular Menu", description: "Spicy pepperoni and salami wrap." },
        { name: "Meatball Marinara Wrap", price: "RM15.50", category: "Wraps", menuType: "Regular Menu", description: "Meatballs and sauce in a portable wrap." },
        { name: "Tuna Wrap", price: "RM15.50", category: "Wraps", menuType: "Regular Menu", description: "Classic tuna mayo in a soft wrap." },
        { name: "Seafood Sensation Wrap", price: "RM16.50", category: "Wraps", menuType: "Regular Menu", description: "Creamy seafood blend wrap." },
        { name: "Egg Mayo Tuna Wrap", price: "RM16.00", category: "Wraps", menuType: "Regular Menu", description: "Duo of tuna and egg mayo in a wrap." },
        { name: "Egg Mayo Wrap", price: "RM13.50", category: "Wraps", menuType: "Regular Menu", description: "Simple egg mayo breakfast wrap." },
        { name: "Veggie Delite Wrap", price: "RM13.50", category: "Wraps", menuType: "Regular Menu", description: "Vegetable-packed healthy wrap." },

        // Regular Menu - Salads
        { name: "Roasted Chicken Salad", price: "RM16.50", category: "Salads", menuType: "Regular Menu", description: "Roasted chicken bowl with fresh greens." },
        { name: "BBQ Chicken Salad", price: "RM16.50", category: "Salads", menuType: "Regular Menu", description: "Smoky BBQ chicken with a variety of vegetables." },
        { name: "Bulgogi Chicken Salad", price: "RM17.50", category: "Salads", menuType: "Regular Menu", description: "Savory Bulgogi chicken salad." },
        { name: "Chicken Teriyaki Salad", price: "RM17.50", category: "Salads", menuType: "Regular Menu", description: "Chicken teriyaki bowl with fresh greens." },
        { name: "Spicy Mayo Chicken Salad", price: "RM16.50", category: "Salads", menuType: "Regular Menu", description: "Spicy mayo chicken over a bed of fresh veggies." },
        { name: "Chicken Slice Salad", price: "RM15.50", category: "Salads", menuType: "Regular Menu", description: "Classic chicken slice salad." },
        { name: "Italian B.M.T. Salad", price: "RM17.90", category: "Salads", menuType: "Regular Menu", description: "The B.M.T. proteins served as a salad." },
        { name: "Steak & Cheese Salad", price: "RM19.50", category: "Salads", menuType: "Regular Menu", description: "Steak and melted cheese over fresh salad." },
        { name: "Roast Beef Salad", price: "RM19.50", category: "Salads", menuType: "Regular Menu", description: "Premium roast beef salad." },
        { name: "Spicy Italian Salad", price: "RM16.50", category: "Salads", menuType: "Regular Menu", description: "Spicy pepperoni and salami salad." },
        { name: "Meatball Marinara Salad", price: "RM16.50", category: "Salads", menuType: "Regular Menu", description: "Marinara meatballs served over fresh greens." },
        { name: "Tuna Salad", price: "RM16.50", category: "Salads", menuType: "Regular Menu", description: "Classic tuna salad." },
        { name: "Seafood Sensation Salad", price: "RM17.50", category: "Salads", menuType: "Regular Menu", description: "Seafood blend salad." },
        { name: "Egg Mayo Tuna Salad", price: "RM17.00", category: "Salads", menuType: "Regular Menu", description: "Combo salad with tuna and egg mayo." },
        { name: "Egg Mayo Salad", price: "RM14.50", category: "Salads", menuType: "Regular Menu", description: "Creamy egg mayo salad." },
        { name: "Veggie Delite Salad", price: "RM14.50", category: "Salads", menuType: "Regular Menu", description: "A fresh and crunchy vegetable salad bowl." },

        // Breakfast Menu
        { name: "6-inch Egg & Cheese", price: "RM10.50", category: "Breakfast", menuType: "Breakfast Menu", description: "Simple breakfast sub with fluffy eggs and melted cheese." },
        { name: "Wrap Egg & Cheese", price: "RM11.50", category: "Breakfast", menuType: "Breakfast Menu", description: "Hand-held breakfast wrap with eggs and cheese." },
        { name: "6-inch Chicken Slice & Egg", price: "RM11.50", category: "Breakfast", menuType: "Breakfast Menu", description: "Chicken slices and eggs in a breakfast sub." },
        { name: "Wrap Chicken Slice & Egg", price: "RM12.50", category: "Breakfast", menuType: "Breakfast Menu", description: "Chicken slices and eggs in a soft wrap." },
        { name: "6-inch Tuna & Egg", price: "RM12.50", category: "Breakfast", menuType: "Breakfast Menu", description: "Tuna and eggs for a protein-packed morning." },
        { name: "Wrap Tuna & Egg", price: "RM13.50", category: "Breakfast", menuType: "Breakfast Menu", description: "Tuna and eggs wrapped in a soft flour tortilla." },

        // Regular Menu - Cookies & Snacks
        { name: "Chocolate Chip Cookie", price: "RM2.50", category: "Cookies & Snacks", menuType: "Regular Menu", description: "Starbucks' famous chewy chocolate chip cookie." },
        { name: "Double Chocolate Chip Cookie", price: "RM2.50", category: "Cookies & Snacks", menuType: "Regular Menu", description: "Rich chocolate cookie with semi-sweet chocolate chips." },
        { name: "Oatmeal Raisin Cookie", price: "RM2.50", category: "Cookies & Snacks", menuType: "Regular Menu", description: "Traditional oatmeal cookie with sweet raisins." },
        { name: "White Chocolate Chip Macadamia Cookie", price: "RM2.50", category: "Cookies & Snacks", menuType: "Regular Menu", description: "White chocolate chips and macadamia nuts." },
        { name: "Subway Chips (Lays/Mister Potato)", price: "RM3.50", category: "Cookies & Snacks", menuType: "Regular Menu", description: "Your choice of crunchy potato chips." },
        { name: "Soup Bowl", price: "RM5.50", category: "Cookies & Snacks", menuType: "Regular Menu", description: "Warm and comforting soup of the day." },
        { name: "Corn in Cup (Garlic Herb Butter)", price: "RM4.90", category: "Cookies & Snacks", menuType: "Regular Menu", description: "Sweet corn kernels tossed in garlic herb butter." },
        { name: "2pcs Cheesy Garlic Toasties", price: "RM5.50", category: "Cookies & Snacks", menuType: "Regular Menu", description: "Toasted bread with aromatic garlic and melted cheese." },
        { name: "Mac & Cheese Bowl", price: "RM10.50", category: "Cookies & Snacks", menuType: "Regular Menu", description: "Creamy macaroni and cheese bowl." },
        { name: "Cheesy Meatball Bowl", price: "RM11.50", category: "Cookies & Snacks", menuType: "Regular Menu", description: "Hearty meatballs topped with lots of melted cheese." }
      ]
    },
    {
      name: "Pop Meals",
      slug: "pop-meals",
      category: 'sandwiches-health',
      image: "/images/pop-meals.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Top Rated Food Voted by People",
      seoArticle: `\n<h2>Pop Meals: Data-Driven Comfort Food</h2>
<p>Pop Meals curates its menu based on what Malaysians actually want to eat. Their Mac & Cheese and Salted Egg Buttermilk Chicken are consistently voted as top favorites. Check our guide to explore their highly affordable, tech-forward menu.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Pop Meals offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Pop Meals."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Pop Meals directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Pop Meals meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Pop Meals offer delivery?",
                "a": "Yes, Pop Meals is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Pop Meals?",
                "a": "Yes, Pop Meals provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: popMealsMenu
    },
    {
      name: "Salad Atelier",
      slug: "salad-atelier",
      category: 'sandwiches-health',
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600&h=400",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Customizable Healthy Bowls",
      seoArticle: `\n<h2>Salad Atelier: Healthy Made Delicious</h2>
<p>Healthy eating doesn't have to be boring, and Salad Atelier proves it. With highly customizable salad bowls, poke bowls, and wraps, you can pack in the nutrients without sacrificing flavor. Our guide helps you build the perfect macro-friendly meal.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Salad Atelier offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Salad Atelier."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Salad Atelier directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Salad Atelier meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Salad Atelier offer delivery?",
                "a": "Yes, Salad Atelier is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Salad Atelier?",
                "a": "Yes, Salad Atelier provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: []
    },
    {
      name: "Kenny Rogers Roasters",
      slug: "kenny-rogers-roasters",
      category: 'sandwiches-health',
      image: "https://images.unsplash.com/photo-1626082929543-eed647a6a43e?auto=format&fit=crop&q=80&w=600&h=400",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Less Fat, Less Salt, Less Calories",
      seoArticle: `\n<h2>Kenny Rogers Roasters: Guilt-Free Rotisserie</h2>
<p>Famous for their rotisserie chicken that is less fat, less salt, and lower in calories, Kenny Rogers is a wholesome dining choice. Their side dishes, especially the famous corn muffins and macaroni and cheese, are just as beloved as the chicken. Use our guide to find the best family meal deals.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Kenny Rogers offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>`,
      healthyTip: `"Opt for fresh side salads and avoid heavy dressings."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering meals during lunch hours.</p>
  </div>
</div>`,
      faqs: [
        { "q": "Does Kenny Rogers offer delivery?", "a": "Yes, Kenny Rogers is available on major delivery platforms like GrabFood and Foodpanda in most areas." },
        { "q": "Are there vegetarian options at Kenny Rogers?", "a": "Yes, Kenny Rogers provides several meat-free and vegetarian-friendly options on their menu." }
      ],
      menu: []
    },
    {
      name: "Boost Juice Bars",
      slug: "boost-juice",
      category: 'sandwiches-health',
      image: "/images/boost-juice.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Love Life! Fresh Smoothies & Juices",
      seoArticle: `\n<h2>Boost Juice: The Ultimate Smoothie Fix</h2>
<p>Whether you need a post-workout protein hit or a refreshing mango treat, Boost Juice Bars deliver high-quality, freshly blended smoothies. Their vibrant cups are a common sight in any major mall. Check our guide for their most popular blends and calorie-conscious options.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Boost Juice Bars offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Boost Juice Bars."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Boost Juice Bars directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Boost Juice Bars meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Boost Juice Bars offer delivery?",
                "a": "Yes, Boost Juice Bars is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Boost Juice Bars?",
                "a": "Yes, Boost Juice Bars provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: boostJuiceMenu
    }
  ],
  'buffet-dining': [
    {
      name: "Alva KL",
      slug: "alva-kl",
      category: 'buffet-dining',
      image: "/images/alva-kl.png",
      tags: [{ name: "Pork-Free", colors: "bg-orange-500 text-white" }],
      desc: "Sky Dining & Gourmet Experience",
      seoArticle: `\n<h2>Alva KL: Elevated Dining Experience</h2>
<p>Alva KL offers a sophisticated atmosphere paired with a meticulously crafted menu. It's the perfect venue for romantic dinners or celebrating special milestones with premium ingredients and exceptional service. Our guide provides a glimpse into their luxurious culinary offerings.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Alva KL offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Alva KL."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Alva KL directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Alva KL meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Alva KL offer delivery?",
                "a": "Yes, Alva KL is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Alva KL?",
                "a": "Yes, Alva KL provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: alvaKlMenu
    },
    {
      name: "Envi Skydining",
      slug: "envi-skydining",
      category: 'buffet-dining',
      image: "/images/envi-skydining.png",
      tags: [{ name: "Pork-Free", colors: "bg-orange-500 text-white" }],
      desc: "Buffet & Fine Dining with KL Skyline Views",
      seoArticle: `\n<h2>Envi Skydining: Dinner with a View</h2>
<p>Located high above the city, Envi Skydining provides breathtaking panoramic views of the Kuala Lumpur skyline, right next to the Twin Towers. Their premium steaks and pastas are matched only by the incredible ambiance. Check our guide to plan your next unforgettable date night.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Envi Skydining offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Envi Skydining."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Envi Skydining directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Envi Skydining meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Envi Skydining offer delivery?",
                "a": "Yes, Envi Skydining is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Envi Skydining?",
                "a": "Yes, Envi Skydining provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: enviSkydiningMenu
    },
    {
      name: "The Tokyo Restaurant",
      slug: "the-tokyo-restaurant",
      category: 'buffet-dining',
      image: "/images/the-tokyo-restaurant.png",
      tags: [{ name: "International", colors: "bg-blue-500 text-white" }],
      desc: "Contemporary Japanese Fusion & Famous Cheesecake",
      seoArticle: `\n<h2>The Tokyo Restaurant: The Famous Cheesecake</h2>
<p>While their sushi rolls and Japanese fusion dishes are excellent, The Tokyo Restaurant is most famous for its legendary 6th Avenue Cheesecake. It is rich, creamy, and melts perfectly in your mouth. Use our guide to explore their full menu before you visit for dessert.</p>\n`,
      nutritionHtml: `
<p class="text-lg">The Tokyo Restaurant offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at The Tokyo Restaurant."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order The Tokyo Restaurant directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering The Tokyo Restaurant meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does The Tokyo Restaurant offer delivery?",
                "a": "Yes, The Tokyo Restaurant is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at The Tokyo Restaurant?",
                "a": "Yes, The Tokyo Restaurant provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: theTokyoRestaurantMenu
    }
  ],
  'specialty-burgers': [
    {
      name: "Nak Nak",
      slug: "nak-nak",
      category: 'specialty-burgers',
      image: "/images/naknak.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Authentic Korean-Inspired Fast Food",
      seoArticle: `\n<h2>Nak Nak: Premium Korean Burgers & Chicken</h2>
<p>Nak Nak brings a premium, modern twist to Korean fast food. Their smashed burgers and perfectly glazed fried chicken are quickly becoming the talk of the town. Check our guide for their bold flavor profiles and crinkle-cut fries.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Nak Nak offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Nak Nak."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Nak Nak directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Nak Nak meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Nak Nak offer delivery?",
                "a": "Yes, Nak Nak is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Nak Nak?",
                "a": "Yes, Nak Nak provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: nakNakMenu
    },
    {
      name: "Woodfire",
      slug: "woodfire",
      category: 'specialty-burgers',
      image: "/images/woodfire.png",
      tags: [{ name: "Halal", colors: "bg-green-500 text-white" }],
      desc: "Gourmet Wood-Fired Burgers",
      seoArticle: `\n<h2>Woodfire: The Artisanal Burger Masters</h2>
<p>If you are tired of standard fast-food burgers, Woodfire offers massive, messy, and incredibly satisfying artisanal creations. Their smoked meats and thick patties are a carnivore's dream. Browse our guide to see their epic burger stacks and loaded fries.</p>\n`,
      nutritionHtml: `
<p class="text-lg">Woodfire offers a wide variety of items. It's always best to balance your meal by choosing lighter options when available.</p>
<ul class="space-y-3 list-none">
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Portion Control:</strong> Consider sharing larger meals or desserts to manage calorie intake.</span></li>
  <li class="flex items-start gap-3"><span class="text-yellow-500 font-bold">✓</span><span><strong>Dietary Info:</strong> Always check with the staff regarding specific allergens or dietary restrictions.</span></li>
</ul>
      `,
      healthyTip: `"Opt for water or sugar-free drinks to keep your meal balanced while dining at Woodfire."`,
      deliveryHtml: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-green-600">GrabFood</div>
    <p class="text-slate-500 text-sm font-medium">Order Woodfire directly to your door with fast delivery.</p>
  </div>
  <div class="bg-white p-8 rounded-2xl border-2 border-slate-100 text-center flex flex-col items-center">
    <div class="text-2xl font-black mb-3 text-pink-600">Foodpanda</div>
    <p class="text-slate-500 text-sm font-medium">A convenient option for ordering Woodfire meals during lunch hours.</p>
  </div>
</div>
      `,
      faqs: [
        {
                "q": "Does Woodfire offer delivery?",
                "a": "Yes, Woodfire is available on major delivery platforms like GrabFood and Foodpanda in most areas."
        },
        {
                "q": "Are there vegetarian options at Woodfire?",
                "a": "Yes, Woodfire provides several meat-free and vegetarian-friendly options on their menu."
        }
      ],
      
      menu: woodfireMenu
    }
  ]
};
