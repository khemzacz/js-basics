
const numbers = [1, 2, 3, 4];
const numberz = [1, 2, 3, 4];

// end
const last = numbers.pop()
console.log(numbers);
console.log(last);

// begining
const first = numbers.shift();
console.log(numbers);
console.log(first);

// middle
numberz.splice(2, 1);
console.log(numberz);
