"use strict";
//task 28; stages of life write if else statement and and determine the person's stage life.
//if the person less then 2 year old, print message is a baby
//if person atleast 4 years old print tha thte person is kid
//if person  atleast 13 years old  but lesss then 20 years , then print that the person is teenager.
// if the prson is atleast 20 years old but less then 65 print person is adult
//if the person is age 65 or older then the person is elder.
let age = 65;
if (age < 2) {
    console.log(` the person is a baby`);
}
else if (age >= 2 && age < 4) {
    console.log(`the person  is kid`);
}
else if (age <= 13 && age < 20) {
    console.log(` the person is teenager`);
}
else if (age <= 20 && age < 65) {
    console.log(` the person is adult`);
}
else if (age >= 20 && age <= 65) {
    console.log(`the person is elder`);
}
else {
    console.log(`please enter a valid code`);
}
