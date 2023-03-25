
// In function attributes ... is called rest operator
// unlike for the array when it is called spread operator
function sum(...args) {
    return args.reduce((a, b) => a + b)
}


function sum2(discount, ...args) {
    const total = args.reduce((a, b) => a + b);
    return total * (1 - discount);
}

// rest parameter must be the last formal parameter 
// function sum3(discount, ...args, someValue) {
//     const total = args.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }

// reduce does not work for an empty array
// console.log(sum());
console.log(sum(1, 2));
console.log(sum(1));
console.log(sum(1, 2, 3, 4, 5));
