/**
 * Functions, Arrays, Object
 */
function add2num(a,b){
    var c = a + b
    console.log(c)
}

add2num(3,'5')

function listArrayItems(arr){
    for (var i =0; i < arr.length; i++){
        console.log(i+1, arr[i])
    }
}

function listArrayItems(arr){
    for (var i =0; i < arr.length; i++){
        if ( arr[i] == 'red'){
            console.log(i+1, "It's red tomato")
        }else{
            console.log(i+1, arr[i])
        }

        
        }
}

listArrayItems(['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'])


function letterFinder(word,match){
    for (var i=0; i < word.length; i++){
        if (word[i] == match){
            console.log('Found the', match, 'at', i)
        }else{
            console.log('---No match found at', i)
        }
    }
}

letterFinder('test','e')

/**
 * Object
 */

//object literal syntax {} to build an object
var user = {}

//object literals {} and key-value pairs
var profile = {
    single: 2,
    double: 34,
    mixed: 1
}
console.log(profile)

//dot notation, bracket notation to create object
 var company = {}
 company.date = 2022
 company.address = 'New Add'
 company['About Page'] = 'Classic Page' //with bracket notation, object key string can have spaces in it.

 console.log(company)

 //with bracket notation, one cool thing, bracket notation can evalutes expression such as below example drone[arr0keys[i]]
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

//some maths
//number constants

console.log(Math.PI)
console.log(Math.E) //Euler's constant 2.718281828459045
console.log(Math.LN2) 

console.log(Math.ceil(1.2345))  //celing
console.log(Math.floor(1.2345)) //floor
console.log(Math.round(1.6345)) //round
console.log(Math.trunc(1.2345)) //truncate

var v = 'borders'
for (var i=0; i < v.length; i++){
    console.log(v.charAt(i))
}

var b = 'reminds-me-of'
for (var i = 0; i < b.length; i++){
    console.log(b.split('-'))
}


//error handling
console.log((10).toString(10))

var letters = 'bvgdudhsfui'
console.log(letters.match(/a/))

function addTwoNums(a,b){
    try{
        if(typeof(a) != 'number'){
            throw new ReferenceError('parameter a is not a number')
        }else if(typeof(b) != 'number'){
            throw new ReferenceError('parameter b is not a number')
        }else{
            console.log(a+b)
        }
    }catch(err){
        console.log(err)
    }
   
}
addTwoNums(5,'k')

function letterFinder(word, match) {
    var conditional1 = (typeof(word) == 'string' && word.length >= 2)
    var conditional2 = (typeof(match) == 'string' && match.length == 1)
    if (conditional1 == true && conditional2 == true){
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else{
        console.log("Please pass correct arguments to the function.")
    }
}
letterFinder(34, 3)

var result = null;
console.log(result);

var x;
if(x === null) {
    console.log("null");
  } else if(x === undefined) {
    console.log("undefined");
  } else {
    console.log("ok");
  }


  throw new Error();
  console.log("Hello");
