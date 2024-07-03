/*task 30; Hello Admin: make an array of five or more user name , including the name ,'admin' . imagine you are writing a code that 
will print a greeting to each user after athey log in to a website. loop through the array and print a greeting to user;
.if the use is admin print a special greeting, uch as hello admin would you like to see a status reposrt?
. otherwise print a genaric greeting such as hello eric, thank you for log in again. */
let userName: string[]=["admin", "sadia", "saira", "iqra", "namra"];
for (let i =0; i < userName.length; i++){
    if (userName[i] === `admin`){
        console.log(`Hello Admin, would you like to see a status report?`)
    }
    else{
        console.log(`Hello, ${userName[i]}`, `Thank you to log in again`);
    }
}