//pizzas; think at least three inds of pizza. store these in array then use for loop to print ht ename of each pizza.
//modify loop to print sentence using the name of pizza instead the name. for each pizza you should have one line of output 
//containing simple statement like i like pepproni pizza.
var pizzas = ["fajita", "tikka", "peprika"];
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var onePizza = pizzas_1[_i];
    console.log("i like ".concat(onePizza, " very much"));
}
console.log(" i like ".concat(pizzas));
