const rawDrinks = `Coffee & Espresso 	Asian Dolce Latte	RM16.50
Coffee & Espresso 	Caffe Americano	RM11.50
Coffee & Espresso 	Caffe Latte	RM13.50
Coffee & Espresso 	Caffe Mocha	RM15.50
Coffee & Espresso 	Cappuccino	RM13.50
Coffee & Espresso 	Caramel Macchiato	RM16.50
Coffee & Espresso 	Cocoa Cappuccino	RM15.50
Coffee & Espresso 	Coffee by the Press	RM12.50
Coffee & Espresso 	Cold Brew	RM13.00
Coffee & Espresso 	Cold Foam Iced Espresso	RM16.00
Coffee & Espresso 	DoubleShot Iced Shaken Espresso	RM15.50
Coffee & Espresso 	Matcha Cold Foam Iced Americano	RM17.00
Coffee & Espresso 	Vanilla Sweet Cream Cold Brew	RM15.00
Tea & Chocolate	Black Tea Latte	RM15.50
Tea & Chocolate	Freshly Brewed Tea	RM10.50
Tea & Chocolate	Green Tea Latte	RM16.50
Tea & Chocolate	Iced Shaken Lemon Tea	RM13.50
Tea & Chocolate	Caramel Hot Chocolate	RM16.50
Tea & Chocolate	Signature Hot Chocolate	RM15.50
Tea & Chocolate	Strawberry Açaí With Lemonade Starbucks Refreshers Beverage	RM17.50
Tea & Chocolate	Pink Drink With Strawberry Açaí Starbucks Refreshers Beverage	RM18.50
Frappuccino Blended Beverage	Caramel Frappuccino Blended Beverage	RM17.50
Frappuccino Blended Beverage	Chocolate Cream Chip Frappuccino Blended Beverage	RM18.50
Frappuccino Blended Beverage	Dark Mocha Frappuccino Blended Beverage	RM18.50
Frappuccino Blended Beverage	Espresso Frappuccino Blended Beverage	RM16.50
Frappuccino Blended Beverage	Java Chip Frappuccino Blended Beverage	RM18.50
Frappuccino Blended Beverage	Green Tea Cream Frappuccino Blended Beverage	RM18.50
Frappuccino Blended Beverage	Mocha Frappuccino Blended Beverage	RM17.50`;

const rawFoods = `Bakery	Donut	RM6.58
Bakery	Chocolate Lava Muffin	RM10.98
Bakery	Banana Chocolate Muffin	RM10.98
Bakery	Skinny Blueberry Muffin	RM10.98
Bakery	Jumbo Croissant	RM8.58
Bakery	Chocolate Roll	RM10.58
Bakery	Croissant (Eclat du Terroir)	RM9.50
Bakery	Zataar Croissant	RM10.50
Bakery	Chunky Apple Turnover	RM11.50
Bakery	Triple Chocolate Extravaganza	RM12.50
Bakery	Breakfast at Brittany's	RM14.50
Bakery	Choco-Nut Crescents	RM11.50
Bakery	Olive Tomato Focaccia	RM13.50
Bakery	Tiramisu King Brioche	RM15.50
Cakes & Deserts	Chocolate Tuxedo Truffles	RM18.98
Cakes & Deserts	Signature Red Velvet	RM18.98
Cakes & Deserts	Tiramisu	RM16.90
Cakes & Deserts	Hazelnut Chocolate Cake	RM19.58
Cakes & Deserts	Triple Chocolate Cheesecake	RM18.98
Sandwiches	Trio Cheese Smoked Chicken	RM12.97
Sandwiches	Croque Monsieur	RM12.38
Sandwiches	Wholemeal Tuna Sandwich	RM8.98
Sandwiches	Croissant Bun with Chicken Loaf, Egg & Cheese	RM12.97
Sandwiches	Chicken Patty & Spinach Sandwich	RM12.97
Sandwiches	Baked Chicken Teriyaki Sandwich	RM14.98
Savory Bites	Mushroom Danish	RM11.98
Savory Bites	Ozzie Sausage Mushroom Roll	RM10.97
Savory Bites	Butter Chicken Pie	RM18.27
Savory Bites	Black Pepper Lamb Pie	RM12.97
Savory Bites	Thai Basil Chicken Danish	RM9.97
Savory Bites	Curry Puff with Potato & Egg	RM7.58
Savory Bites	Chic O’ Cheese	RM11.98
Savory Bites	Beef Ragu Pie	RM12.97
Savory Bites	Mini Cocktail with Nacho Cheese	RM8.98
Savory Bites	Cheese Chicken Onion Danish	RM13.98
Savory Bites	Garlic Cheesy Melt Baguette	RM14.50
Springs	Strawberry Crumble Cheesecake	RM18.95
Springs	Rose Lychee Éclair	RM11.56
Springs	Magical Pumpkin Pie	RM14.50
Whole Cakes 	Chocolate Tuxedo Truffles (Whole)	RM165.00
Whole Cakes 	Red Velvet (Whole)	RM155.00
Whole Cakes 	Tiramisu (Whole)	RM145.00`;

function parse(raw, menuType) {
    return raw.trim().split('\n').map(line => {
        const parts = line.split('\t');
        return {
            name: parts[1].trim(),
            price: parts[2].trim(),
            category: parts[0].trim(),
            description: "Freshly prepared Starbucks " + parts[0].trim().toLowerCase() + " item.",
            menuType: menuType
        };
    });
}

const drinks = parse(rawDrinks, "Drinks Menu");
const foods = parse(rawFoods, "Food Menu");

console.log(JSON.stringify([...drinks, ...foods], null, 2));
