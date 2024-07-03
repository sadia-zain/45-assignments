//define a function with rest parameters
function makeSandwich(...items: string[]){
    console.log("\n Making a sandwich with the following items\n");
    items.forEach(singleItem =>console.log("-"+singleItem) );
    console.log("\n Now Enjoy Sandwich");
}
// call the function
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
