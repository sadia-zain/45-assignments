"use strict";
//task 26 chooe alien color and write if else chain. if the color is green. print that you should get 5 poitns. if the alien color is not gren, print that the player just earned 3 points. 
//1 version
let alien_color = `green`;
if (alien_color == `green`) {
    console.log(" the player hsould get 5 points");
}
else {
    console.log(" the player should get only 3 points");
}
// 2 version
alien_color = `red`;
if (alien_color == `green`) {
    console.log(`the player should get 5 points`);
}
else {
    console.log('the player should get 10');
}
