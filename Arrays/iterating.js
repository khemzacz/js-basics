
const numbers = [1, 2, 3, 4];

for (let number of numbers) {
    console.log(number);
}

numbers.forEach(number =>  console.log(number));
// index is optional and starts with 0
numbers.forEach((number, index) =>  console.log(number, index)); 
