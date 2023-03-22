
// String primitive
const message = 'This is my first message';
message.slice(0,1); // js engine will wrap it up in an object

// String object 
let another = new String('hi');
another.slice(0, 1); // strings are immutable