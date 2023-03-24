
const numbers = [1, -1, 2, 3, -4];

let filtered = numbers.filter((element) => element >=0 );
console.log(filtered);

const items = filtered.map((element) => '<li>' + element + '</li>');

const html = '<ul>' + items.join('') + '</ul>';

console.log(html);

let objects = numbers.map((element) => {
    return { value: element};
});
console.log(objects);

// wil not work, braces are interpreted as a code block
objects = numbers.map((element) => { value: element} ); 
console.log(objects);

// workarround
objects = numbers.map((element) => ({ value: element})); 
console.log(objects);

// chaining
filtered = numbers
    .filter((element) => element >=0 )
    .map((element) => ({ value: element}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
console.log(filtered);
