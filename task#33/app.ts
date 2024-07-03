//*ordinal number: ordinal number indcates their position in a array such as 1st or 2nd. most ordinal number end in th, except 1, 2 
//and 3. 
// store the no 1 through 9 in a array.
//loop through the array.
//use an if-else chain inside the loop to print the proper ordinal ending for each number. your output should read 
// 1st to 9th and each result nshould be on seperate line. 
let numbers=[1,2,3,4,5,6,7,8,9];
for (let oneNumber of numbers){
    let ordinalEnding :string;
    if (oneNumber === 1){
        ordinalEnding="st"
    }else if (oneNumber===2){
        ordinalEnding="nd"
    }else if (oneNumber===3){
    ordinalEnding="rd"
}else {
    ordinalEnding = "th"
}
console.log(`${oneNumber}, ${ordinalEnding}`);


}