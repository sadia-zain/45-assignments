"use strict";
/*task 31; no user ; Add an if test to exercise 28 to make sure the list of users is not empty.
. if the lsit is empty, print meassage we need some to find users!
. remove all usernames from your array and make sure the correct message is printed.*/
let userName = ["admin", "sadia", "saira", "iqra", "namra"];
for (let i = 0; i < userName.length; i++) {
    if (userName[i] === `admin`) {
        console.log(`Hello Admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello, ${userName[i]}`, `Thank you to log in again`);
    }
}
userName = [];
console.log("we need some new users");
