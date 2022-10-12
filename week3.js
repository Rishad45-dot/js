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

