

console.log(fizzBuzz(3));
console.log(fizzBuzz(15));
console.log(fizzBuzz(25));
console.log(fizzBuzz(7));
console.log(fizzBuzz(''));
console.log(fizzBuzz(undefined));
console.log(fizzBuzz(NaN));

function fizzBuzz(input) {
    if (isNaN(parseInt(input))) {
        return 'Not a number'
    } else if (input % 3 === 0 && input % 5 === 0) {
        return 'FizzBuzz';
    } else if (input % 3 === 0) {
        return 'Fizz';
    } else if (input % 5 === 0) {
        return 'Buzz';
    } 

    return input
}
