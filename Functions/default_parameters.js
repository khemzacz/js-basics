

function interest(principal, 
    rate = 3.5 /* since js6 */, years = 5) {
    return principal * rate / 100 * years;
}

function interest2(principal, 
    rate = 3.5 /* since js6 */, years) { // smelly code
    return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));
console.log(interest(10000));
console.log(interest2(10000));
console.log(interest2(10000, 5));
console.log(interest2(10000, undefined, 5)); // smelly code