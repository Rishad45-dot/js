/*
This is Object Literals and Dot notations.
*/

//three common ways to build objects
//common way to add new properties to objects
//object literal systanx is {}
var user = {}

/**
 * building an object literals by using {} and delimited key-value
 * pairs with commas
 */

var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 50,
    specialAbility: 'young and ambitious',
    greeting: "Let's make some money"
}

//another example of object

var table = {
    legs: 4,
    colour: 'brown',
    priceUSD: 100
}

/**
 * using dot notation to build objects
 * first declare an empty object literal to a variable
 */

var house2 = {}
house2.rooms = 6;
house2.style = 'duplex';
house2.colour = 'White';
house2.priceUSD = 500000;

console.log(house2)

/**
 * building objects withing brackets notation
 */
var home = {};
home['rooms'] = 8;
home['style'] = 'Multiplex';
home['priceUSD'] = 10000000;

/**
 * Building objects in javascripts
 * to update an object both dot notation or the bracket can
 * be used
 * 
 */
table.inStock = 'No';
home.inMarket = 'Yes';
house2['inMarket'] = 'No';
console.log(home);
console.log(house2);
console.log(table);