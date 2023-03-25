
console.log(arrayFromRange(1, 4));
console.log(arrayFromRange(-10, -4));
console.log(arrayFromRange(3, 2));

function arrayFromRange(min, max) {
    if (min > max) {
        return [];
    }
    const array = [];
    for (let i = min; i <= max; i++) {
        array.push(i);
    }
    return array;
}
