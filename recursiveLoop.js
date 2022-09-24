/**
 * recursive functions create infinite loops
 * so it requires a loop controlling mechanism
 */
let counter = 3;
function recursiveLoop(){
    console.log(counter);
    counter = counter -1;
    if (counter === 0) return;
    recursiveLoop();
}
console.log(recursiveLoop())