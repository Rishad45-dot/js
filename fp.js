/**
 * This is functional programming. In this example a function is being used as value for variable, function is getting passed as a
 * parameter in another function. So a function getting returned from another function.
 */

function addTwoNumbs(num1, num2){
    console.log(num1+num2)
}


function randomNum(){
    return Math.floor((Math.random() * 10)+1)
}

function specificNum(){
    return 42
}

var userRandom = true;

var getNumber;

if(userRandom) {
    getNumber = randomNum //function as variable value
} else {
    getNumber = specificNum
}

addTwoNumbs(getNumber(), getNumber()) //function passed as parameter and returned from other function