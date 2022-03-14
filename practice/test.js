// ******* Capitalizing words using Map function with the "words" Array. *******
let words = ['these', 'words', 'need', 'capitalized']
let caps = words.map(word => word.toUpperCase());
console.log(caps);

// ******* Using map to extract City and Population from "cities" Array. *******
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
var cityPopulations = cities.map(function(city){
    return city.population;
});
console.log(cityNames);
console.log(cityPopulations);

// ******* Double Function *******
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

// ******* Checking which number is greater than 1 using Filter method. *******
var numbers = [1,2,3,4,5];
var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);

// ******* Finding names starting with "S" using arrow function. *******
var names = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var nameswithS = names.filter((country) => country.startsWith("s"));
console.log(nameswithS);

// ******* Function for sorting *******
var familyAge = [3,2,39,37,9];
//var sortedAge = familyAge.sort((a,b) => a - b);
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement - anotherElement);
console.log(sortedAge);

// ******* Function for Slicing() *******
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1);
var newwords = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
console.log(newwords.slice(3, ));