//function to loop over a list of items
function listArrayItem(arr) {
    for (var i=0; i < arr.length; i++){
        if (arr[i] == 'red'){
            console.log(i*100, 'It\'s a tomato!!!!')
        } else{
        console.log(i*100, arr[i])
        }
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
//listArrayItem(colors);

//Your task in this exercise is to code a function which will be able to take a word and locate the position of a chosen letter in that 
//given word

function letterFinder(word, match) {
    for (var i=0; i < word.length; i++){
        if(word[i] == match){
            console.log('Found the',match,'at',i);
        }else{
            console.log('---No match found at',i);
        }
    }
}

letterFinder('test','t')