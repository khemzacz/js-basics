
const numbers = [3, 2, 4, 1];
console.log('before sorting: ', numbers);
numbers.sort();
console.log('after sorting: ', numbers);

numbers.reverse();
console.log('after reverse: ', numbers);

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javaScript' }
];

courses.sort((a, b) => {
    // a < b => -1;
    // a > b => 1;
    // a === b => 0;
    const uppercaseNameA = a.name.toUpperCase();
    const uppercaseNameB = b.name.toUpperCase();

    if (uppercaseNameA < uppercaseNameB) return -1;
    if (uppercaseNameA > uppercaseNameB) return 1;
    return 0;
});

console.log(courses);




