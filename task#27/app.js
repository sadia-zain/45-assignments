"use strict";
//task 27; 1. if the color is green, then print the player just earned 5 points for shooting the alien.
//. if the color is yellow, print the player just earned 10 point.
//.if the color if red print the player earned 15 points.
// write 3 versions.
//version 1;
let alien_color = `green`;
if (alien_color == `green`) {
    console.log(" congrates you earned 5 points");
}
else if (alien_color != `green`) {
    console.log("congrates you earned 10 points ");
}
else {
    console.log(`the player earned 15 points`);
}
//version 2
alien_color = `yellow`;
if (alien_color == `green`) {
    console.log(" congrates you earned 5 points");
}
else if (alien_color = `yellow`) {
    console.log("congrates you earned 10 points ");
}
else {
    console.log(`the player earned 15 points`);
}
//version 3;
alien_color = `red`;
if (alien_color == `green`) {
    console.log(" congrates you earned 5 points");
}
else if (alien_color == `yellow`) {
    console.log("congrates you earned 10 points ");
}
else {
    console.log(`congrates you earned 15 poitns`);
}
