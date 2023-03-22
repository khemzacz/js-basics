
let numbers = [1, 2, 3, 4];
let numberz = numbers;

// solution 1, stays in memory until garbage collected
numbers = []
console.log(numbers);
console.log(numberz);


// solution 2
numbers = [1, 2, 3, 4];
numberz = numbers;
numbers.length = 0;

console.log(numbers);
console.log(numberz);

// solution 3
numbers = [1, 2, 3, 4];
numberz = numbers;
numbers.splice(0, numbers.length);

console.log(numbers);
console.log(numberz);

// solution 4, not recomended
numbers = [1, 2, 3, 4];
numberz = numbers;
while (numbers.length > 0 ) {
    numbers.pop();
}
console.log(numbers);
console.log(numberz);


