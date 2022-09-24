//This is the start of js coding
console.log('Testing...')

/*this
%c is to integrate CSS in second "" after , in console.log() statement
and it's not working on this vs code. but worked on browser
 */

console.log("%cTesting....", "color: blue; font-size: 40px");

//if else conditional statements
var result = 30;

if (result > 40) {
    console.log('Passed')
} else {
    console.log('failed')
}


//another if, else if, else conditional statement
var place = 'first';

if (place == 'first') {
    console.log('Gold')
} else if (place == 'second') {
    console.log('Silver')
} else if (place == 'third') {
    console.log('Bronze')
} else {
    console.log('No medal')
}

//switch conditional statements with a 'default' 
var place = 'seCond';

switch(place) {
    case 'first':
        console.log('Gold Medal');
        break;
    case 'seCond':
        console.log('Silver Medal');
        break;
    case 'third':
        console.log('Bronze Medal');
        break;
    default:
        console.log('No Medal');
}

//looping constructs
for (var i = 1; i< 11; i++){
    console.log(i)
}

//while loop
var start_counter = 11;
while (i < 21) {
    console.log(i);
    i = i + 1;
}

var counter = 3;
while(counter > 0) {
    console.log(counter);
    counter = counter - 1;
}

//functions

/* function addTwoNum(){
    var a = 10
    var b = 20
    var c = a + b
    console.log(c)
 }
addTwoNum()
*/

//now use parameters . Function parameters

function addTwoNum(a,b) {
    var c = a + b;
    console.log(c);
}
//addTwoNum(5,7)

