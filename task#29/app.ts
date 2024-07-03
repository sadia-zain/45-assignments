/*task 29 favorite fruit; make array of favorite fruits, and write in series of independent if statements that check fruits in array.
. make array of three favorite fruits and call it favorite_fruits.
.write five if statement. each should check whether a certain kind of fruit is in your array. if the fruit is in your array, then if block
should print a statement such as you really like bananas.*/
let favorite_fruits: string[]= ["Apple", "Mango", "Banana"];
if (favorite_fruits.includes(`Banana`)){
    console.log(`you really like Banana `)
}
if (favorite_fruits.includes(`Mango`)){
    console.log(`you really like Mango `)
} 
if (favorite_fruits.includes(`Apple`)){
    console.log(`you really like Apple`)
}
if (favorite_fruits.includes(`orange`)){
    console.log(`you did not like orange `)
}