//unchanged magician: start with exercise 42 call the function with the copy of array of magicians names. becuase the original array
//will be unchanged return the new array and store it new array. call show_magician with each array to show that yo have the one array of 
// original name and one array wiht great addded to each magician name.
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Sadia", "Saira", "Namra"];
//making copy 
var copy_magician_names = magician_names.slice();
//modification of copied array
var copy_great_magicians = make_great(copy_magician_names);
//showing both array
console.log("original array/n");
show_magician(magician_names);
console.log("copied array/n");
show_magician(copy_great_magicians);
console.log();
