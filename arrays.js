/**
 * arrays are objects and objects have built in methods like
 * push(), pull()
 */
var fruits = [];
fruits.push('mango');
fruits.push('banana');
fruits.push('jackfruit');

//to remove the last item from and array object just pull()
fruits.pop();


//now creating array by a function
function arrayBuilder(one,two,three,four){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    arr.push(four);
    return arr;
}

var simplearray = arrayBuilder(1,2,3,4)
console.log(simplearray)