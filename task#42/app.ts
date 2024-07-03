//modify the magician name with adding the great in the beginning of anme of magician.
function show_magician( magicians : string[]){

    magicians.forEach(name=> console.log(name));
}
function make_great(magicians :string[]){
    return magicians.map(name => `The Great ${name}`);
}

 
let magician_names=["Sadia", "Saira", "Namra"];

let great_magicians=make_great(magician_names);

show_magician(great_magicians);

