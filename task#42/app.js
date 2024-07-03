//modify the magician name with adding the great in the beginning of anme of magician.
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Sadia", "Saira", "Namra"];
var great_magicians = make_great(magician_names);
show_magician(great_magicians);
