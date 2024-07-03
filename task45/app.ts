// define a function to create the car object with ooptional options.
function create_car(manufacturer, model, ...options){
    let car ={
        manufacturer: manufacturer,
        model:model
    };
//Add additional options to the car object
options.forEach(option => {
    let [key, value]= option.split(":");
    car[key.trim()]=value.trim();
});
return car;
}
//call the function 
let my_car = create_car("Toyota", "Corolla", "color: Black","Sunroof: True" );
//print
console.log(my_car);