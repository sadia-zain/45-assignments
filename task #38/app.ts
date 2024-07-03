//cities: write function called describe _city () that accept the name of the city and its country. the function should print a simple 
// msg such as karchi is in pakistan. give the parameters of the country a default value.call function with three different cities 
// atleast one of which is not in the default country
function city_country (city : string ="karachi", country : string= "pakistan"){
    console.log(`The ${city} is in ${country}`);
}
city_country();
city_country("lahore");
city_country("peshawar");
city_country("mumbai", "india");