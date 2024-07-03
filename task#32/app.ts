/*checking username: do the following to create a program that how websites ensure that everyone has a unique user name.
make a list of five or more usernames called current user
make another list of five user name called new users. make sure one or two new username are also in the current users list.
loop through the new user list to ee if each new user has already been used if it has print a message that the person will need to enter 
a new user name, if a use rname has not been used print a message syaing that the username is avaialble. */
let currentUsers: string[]= ["sadia", "saira", "iqra", "namra","sumera"];
let newUsers:string[]=["Sadia", "iqra", "Sana","Saima", "Samina"];
let currentUsers_lower:string[]=currentUsers.map