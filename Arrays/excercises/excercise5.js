
const numbers = [1, 2, 3, 4, 5, 1];

console.log(countOccurrences(numbers, 1));

function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, element) => {
        return accumulator + (element === searchElement ? 1 : 0);
    }, 0);
}