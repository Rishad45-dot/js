/**
 * This is the third week . Topic here functional programming. In this paradigm we keep data and functionalities
 * separate. And we pass data to the function when needed.
 */

function getDistance(mph, t){
    //2 parameters both must be number type. One is speed mesuared in miles per hour. Two the time, measured in hours
    //return value: it's typeof(mph*t) is number
    return mph*t
}
c = getDistance(12, 3)
console.log(c)


/**
 * Object oriented programming or oop. in this paradigm we group data as properties and functionalities as 
 * methos in objects.
 */
var virtualPet = {
    sleepy: true,
    nap: function() {
        //this methos will update properties stored in the object, instead of
        //generating new return values.
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) //this one doesn't update the 'sleepy property'
//until I run the nap() method on it.
virtualPet.nap()
console.log(virtualPet.sleepy) //this time 'sleepy' property is updated.
//and it becomes false.






/**
 * Functions are first class citizens in javascript
 */
function addTwoNums(a,b){
    //a & b parameters are number type. and no return here. only console logging
    try{
        if(typeof(a) != 'number'){
            throw new ReferenceError('parameter a is not a number')
        }else if(typeof(b) != 'number'){
            throw new ReferenceError('parameter b is not a number')
        }else{
            console.log(a+b)
        }
    }catch(err){
        console.log('there has been an error')
    }
}

function randomNum(){
    //no parameter.
    //return: number type. returns numbers from 1 to 10
    return Math.floor((Math.random()*10)+1);
}

function specificNum(){
    //no parameter
    //return: just a specific value. number type
    return 43
}

var useRandom = true
var getNumber

if (useRandom){
    getNumber = randomNum //here 'randomNum' function is being passed as a value
    //to the variable 'getNumber'
} else {
    getNumber = specificNum //here same happening. 'specificNum' function is
    //getting passed to variable 'getNumber' as a value
}

addTwoNums(getNumber(), getNumber())

//higher-order function.. it's just a javascript feature. higher-order functions accepts other functions as arguments, also can returns functions when invoked.
//for example findTwonNums() function can be changed into higher order function.
function findTwonNumsHigerOrder(getNumber1Function, getNumber2Function){
    console.log(getNumber1Function() + getNumber2Function())
}
findTwonNumsHigerOrder(specificNum, randomNum)


/**
 * let, const these are for block scope, let and const are more stricter in usability than the word var. let, const can not be used without declaring them first.
 * with let, const name of the variable can't be redeclared, like it's possible to redeclare with var . var color = 'red'; it's possible to redeclare var red = 'green'
 * and let, const are scopped within the block. not just function block but even within loops, conditionals i.e for loops, if else statements.
 */

//let
console.log(user) //this isn't gonna work, since 'user' wasn't declared as variable with let keyword before console logging it.
let user
//but
let user //this time user variable is declared even though it's not assigned any values to it, console.logging it will work.
console.log(user) //returns undefined, but javascript engine still runs
//now if we re-declare the user variable with 'let' keyword again, and run let user = 'Anna' . it will give syntax error. Hence let keyword variable can't be re-declared
let user = 'Anna'
//but we can assign a value to user variable without using let keyword
user = 'Anna'
console.log(user)


//finally const . it must be declared and assignes before using
const username = 'Anna'
console.log(username)

/**
 * OOP 
 * 1. Inheritance
 * 2. Encapsulation
 * 3. Abstraction
 * 4. Polymorphism
 */

//Inheritance
class Animal {
    /*some code here */
}
//now I use the 'extends' keyword to show inheritance 
class Bird extends Animal { 
    /*some code here */
}
//again using 'extends'
class Egle extends Bird {
    /*some code here */
}

//Encapsulation  is easy. It just means codes are hidden but everyone can use them. such as 'toUpperCase()' method
'abee'.toUpperCase()
//Abstraction is conceptual idea of what someone is trynna do.
//Polymorphism , well same function produing different result baed on context is polymorphism
//for example '+' operator and concat() method. Same functionality. But '+' operator and concat() method 
//produce different result based on different data type used.

console.log('abc'.concat('dfgf')) //this produces 'abcdfgf'
console.log(['abe'].concat(['dfgf'])) //this produce '['abc', 'dfgf']

//now
console.log('abc'+'dfgf') //result 'abcdfgf'
console.log(['abc']+['dfgf']) //result again 'abcdfgf'


/**
 * Constructors
 */
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn;
    }
    lightStatus(){
        console.log('Lights On?  ', this.lightsOn)
    }
    getSelf(){
        console.log(this)
    }
    getPrototype(){
        const proto = Object.getPrototypeOf(this)
        console.log(proto)
    }
}

//build instance of Train class
let tainNumber1 = new Train('white', false)
console.log(tainNumber1)
let tain3 = new Train('Blue', true)
console.log(tain3.getSelf())

//polymorphism example
class HighSpeedTrain extends Train {
    constructor(passesnger, color, lightsOn, speed) {
        super(color, lightsOn)
        this.passesnger = passesnger
        this.speed = speed
    }
    toggoleHighSpeed(){
        this.speed = !this.speed
        console.log('High speed on?  ', this.speed)
    }
}

/**
 * Creating a class
 */
class Airplane{
    constructor(departure_time, destination){
        this.departure_time = departure_time
        this.destination = destination

    }
}

let time = new Date()
departure = time.toLocaleTimeString()
let route1 = new Airplane(departure, 'Moscow')
console.log(route1)


class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs);

class Animal {

}

class Cat extends Animal {
  constructor() {
    super();
    this.noise = "meow";
  }
}

var result = new Animal();
console.log(result.noise);

class Person {
    sayHello() {
        console.log("Hello");
    }
}

class Friend extends Person {
    sayHello() {
        console.log("Hey");
    }
}

var result = new Friend();
result.sayHello();

//for of loop
arr = ['for ', 'of ', 'loop ', 'example']

sentence = ''
for (var word of arr){
    console.log(sentence+=word)
}

//dynamically access one of two properties of drone object by using brackets notation

function textBracketsDynamicAccess(){
    var dynamicKey = Math.random() > 0.5 ? 'speed' : 'color'
     var drone = {
        speed : 110,
        color : 'white'
     }
    console.log(drone[dynamicKey])
}
textBracketsDynamicAccess()

//data structures

