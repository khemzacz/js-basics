
const numbers = [1, 2, 3, 4, 5];

console.log('0, 0: ', move(numbers, 0, 0));
console.log('0, 4: ', move(numbers, 0, 4));
console.log('0, 5: ', move(numbers, 0, 5));
console.log('1, 1: ', move(numbers, 1, 1));
console.log('1, 2: ', move(numbers, 1, 2));
console.log('0, -1: ', move(numbers, 0, -1));
console.log('3, -2: ', move(numbers, 3, -2));
console.log('1, -1: ', move(numbers, 1, -1));

function move(array, index, offset) {
    if ((index < 0 ) 
        ||((index + offset) >= array.length)
        ||((index + offset) < 0)) {
        console.error("invalid offset.");
        return;
    }

    const output = [...array];
    if (offset === 0) {
        output;
    }
    const indexElement = output.splice(index, 1);
    output.splice(index + offset, 0, ...indexElement);
    return output;

   
}
