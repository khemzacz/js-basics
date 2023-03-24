
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined= [...first, 'a', ...second];

const slice = combined.slice(); // will copy the table
const copy = [...combined]; // will also copy the table
console.log(copy); 
console.log(slice);
