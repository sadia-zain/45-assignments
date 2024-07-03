"use strict";
//task 24; more conditinal tests
//1.test for equality and not equality for strings
//2. test using the lower case function
//3.numerical test
//4. test using "and"mand "or"operators
//5. test whether item is an array
//6. test whether item is not array
let str1 = "Sadia";
let str2 = "Zainulabidin";
let num1 = 2;
let num2 = 5;
let array = ["sadia", "saira", "namra", "iqra"];
console.log(`1. test for equality and not equality for strings`);
console.log(str1 == "Sadia");
console.log(str1 == str2);
console.log(`2. test using the lower case function`);
console.log(str1.toUpperCase() == "SADIA");
console.log(str1.toUpperCase() == str2);
console.log(`3. numerical test`);
console.log(num1 == 2);
console.log(num1 > num2);
console.log(num2 <= 5);
console.log(num2 != num2);
//test using "and" and "or"operators
console.log(`using && and || operators`);
console.log(num1 < num2 && num2 > num1);
console.log(num1 > num2 || num2 < num1);
//test whether the item is an array;
console.log(` the item is an array`);
console.log(array.includes("sadia"));
console.log(array.includes("sana"));
//test whether the item is not an array
console.log(`the item is not array`);
console.log(!array.includes("sana"));
console.log(!array.includes("sadia"));
