//city_name > write a function called city_country that takes in the name of the city and its country .the function should return 
// a string formatted like this:
// "lahore , pakistan"
// call your function with atleast three city-country and print the value that returned.
function city_country(city: string, country: string ): string{
    return`${city}, ${country}`;


}
city_country("Karachi", "Pakistan");
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Berlin", "Germany"));



