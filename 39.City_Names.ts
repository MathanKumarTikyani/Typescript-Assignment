//39• City Names: 

//• Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

//• "Lahore, Pakistan"

function city_country(city : string, country : string) {
  return `${city}, ${country}`;

}

city_country('karachi','Pakistan');

//• Call your function with at least three city-country pairs, and print the value that’s returned.

console.log (city_country('Karachi','Pakistan'));

console.log (city_country('Paris','France'));

console.log (city_country('Tokyo','Japan'));