// magician: make  an array of magician's name. pass the array to a function caled show_magician() which print the name of each 
// magician in an array,
function show_magician( magicians : string[]){
    magicians.forEach(name=> console.log(name));
}
let magicianNames=["Harry Potter", "Sadia", 'Saira'];
show_magician(magicianNames);