
const numbers = [1, 2, 3, 4, 5];

console.log(move(numbers, 0, 0));
console.log(move(numbers, 0, 5));
console.log(move(numbers, 1, 2));
console.log(move(numbers, 0, -1));
console.log(move(numbers, 3, -2));


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
    let start;
    let end;
    let moveLeft = 0;
    let moveRight = 0;

    if (offset > 0) {
        for (let i = index; i < index + offset; i++) {
            output[i] = output[i + 1];
        }
    } 
    if (offset < 0) {
        for (let i = index; i > index + offset; i--) {
            output[i] = output[i - 1];
        }
    }


    output[index + offset] = indexElement;
    return output;
}

