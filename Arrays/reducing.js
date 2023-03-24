
const numbers = [1, 5, 2, 3, 7];

const sum = numbers
    .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0 /* starting value for the accumulator, 
    0 by default, when not specified */);
console.log(sum);

