
console.log(true && true);
console.log(true && 1);
console.log(true && 'Mosh');
console.log(true && null);
console.log(false || true);
console.log(false || 'Mosh');
console.log(false || 1);

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN 

// Anything that is not Falsy -> Truthy

// Short-circuiting
console.log(false || 1 || 2);

// No short-circuiting
console.log(true && 1 && 2);