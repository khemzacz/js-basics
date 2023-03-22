
let first = [1, 2, 3];
let second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

let sliced = combined.slice(2, 4) // index from, index until
console.log(sliced);

// copies the primitives and references, 
// does not copy referred objects
const copy = combined.slice() 

first = [{id: 1}]
sliced = first.slice(); // only the reference is copied
console.log(sliced);
first[0].id = 10;
console.log(sliced);

