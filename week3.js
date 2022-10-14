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


