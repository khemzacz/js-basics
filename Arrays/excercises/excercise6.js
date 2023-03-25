
const numbers = [1, 9, 3, 4, 5, 1];

console.log(getMax(numbers));

function getMax(array) {
    return array.reduce((accumulator, element) => {
        return accumulator = 
            element > accumulator ? element : accumulator;
    }, Number.MIN_SAFE_INTEGER);
}