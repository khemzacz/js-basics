

function sum () {
    // argument is an object with properties named by 
    // index of passed parameters, callee, length,
    // symbol(Symbol.iterator), proto
    // console.log(arguments);  
    let total = 0;
    for (let value of arguments) {
        total += value;
    }
    return total;
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1));
console.log(sum(1, 2, 3, 4, 5));
