
const numbers = [1, 2, 3, 4, 5];

console.log('0, 0: ', move(numbers, 0, 0));
console.log('0, 4: ', move(numbers, 0, 4));
console.log('0, 5: ', move(numbers, 0, 5));
console.log('1, 1: ', move(numbers, 1, 1));
console.log('1, 2: ', move(numbers, 1, 2));
console.log('0, -1: ', move(numbers, 0, -1));
console.log('3, -2 : ', move(numbers, 3, -2));
console.log('1, -1: ', move(numbers, 1, -1));

function move(array, index, offset) {
    if ((index < 0 ) 
        ||((index + offset) >= array.length)
        ||((index + offset) < 0)) {
        console.error("invalid offset.");
        return;
    }

    if (offset === 0) {
        return [...array];
    }

    const output = [...array];
    const indexElement = output[index];

    if (offset > 0) {
        const begin = array.slice(0, index);
        const middle = array.slice(index + 1, index + offset + 1);
        const end = array.slice(index + offset + 1);
        return [...begin, ...middle, indexElement, ...end];
    }

    if (offset < 0) {
        const begin = array.slice(0, index + offset);
        const middle = array.slice(index + offset, index);
        const end = array.slice(index + 1);
        return [...begin, indexElement, ...middle, ...end];
    }

   
}
