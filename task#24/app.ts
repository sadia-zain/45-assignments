//task 24; more conditions
let str1 ='sadia';
let str2 = ' saira';
let num1 = 4;
let num2 = 6;
let array = [1,2,3,4,5];
//equality or unequaity
console.log( `test of equality or unequaltiy`);
console.log( str1==`sadia`);
console.log(str1==str2);
//test of using lowercase
console.log(`test of using lower case`);
console.log(str1.toLowerCase()==`sadia`);
console.log(str2.toLowerCase()!==`saira`);
//numerical test
console.log(`/n test of numerical `);
console.log(4<6);
console.log(num1>=num2);
console.log(num1===4);
console.log(num1 !=4);
//test of && and || operators
console.log(`/n test of && and || operators`);
console.log(num1 < num2 && num2 >num1);
console.log(num1 <3||num2 <2);
//test whether item is an array
console.log(`/n test of item is whther array?`);
console.log(array.includes(3));
console.log(array.includes(6));
//test whether the item is not array
console.log(!array.includes(7));
console.log(!array.includes(3));