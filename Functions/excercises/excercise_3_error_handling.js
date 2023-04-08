const numbers = [1, 2, 3, 4, 5, 1];

try {
    console.log(countOccurrences(null, 1));
} catch (e) {
    console.log(e.message);
}
try {
    console.log(countOccurrences(true, 1));
} catch (e) {
    console.log(e.message);
}


function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error('Invalid array.');
    }

    return array.reduce((accumulator, element) => {
        return accumulator + (element === searchElement ? 1 : 0);
    }, 0);
}
