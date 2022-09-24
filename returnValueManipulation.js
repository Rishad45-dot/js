/*
 *This does return value manaipulation 
 */
function doubleIt(num){
    return num * 2
}

function objectMaker(val){
    //return can be an object
    return {
        prop: val
    }
}

console.log(objectMaker(10));
console.log(doubleIt(20).toString());

console.log(objectMaker(doubleIt(123)));