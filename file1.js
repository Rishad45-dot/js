//a single line comment in javascript with two forward-slash.
//👌👌👌👌, print('text'),.....~~~`&^^^ anything goes in comment

/*
a multi line comment
most commonly used for all purpose
*/

/**
 * this is 
 * even better
 */

var petDog = 'Rex'; // Task 1 solution
var dogSound = "woof"; // Task 8 solution
console.log(petDog, "says", dogSound); //comma to concatenate

var petCat = 'Pepper'
var catSound = 'purr'
console.log(petCat, 'says', catSound)

//&& operator
var currentTime = 12
console.log(currentTime > 9 && currentTime < 17)



/**
 * ok three things here
 * 1. Equality operator ==
 * 2. Inequality operator != 
 * 3. Strict Inequality !==
 * 
 * Here is how it works. 
 * == this one doesn't check for data type. just he number
 * != this one also doesn't check the data type. just the number
 * !== this one checks data type and the number
 */

console.log(5 == 5) //returns true
console.log(5 == '5') //returns also true, not checking the data typr
console.log(5 != 5) //returns false 
console.log(5 != '5') //also returns false, cause it's false to claim number 5 is not equal to number 5, even tho one is string and other number
console.log(5 !== 5) //returns false as strict inequality
console.log(5 !== '5') //returns true , as one is string and other is number

/**
 * while using + operator  between string and number , javascript automatically converts the number into a string 
 * and then concatenates both strings
 * */
console.log( 12 + ' months') //number 12 automatically gets converted to string then = operator concatenates both string

/**
 * Associativity . Operator Associativity thing. 
 * 1. Left-to-Right associativity
 * 2. Right-to-Left associativity
 */
console.log(5>4>3) //returns false, because the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`

