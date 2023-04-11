
function Circle(radius) {
    this.radius = radius;

    // this.draw = function() { // function will occupy memory for each instance
    //     console.log('draw');
    // };

    this.move = function() {
        this.draw();
        console.log('move');
    }
}

const circle = new Circle(10);

let person = { name: 'Mosh'};

Object.defineProperty(person, 'name', {
    writable: false, // when set to false, reassign will have no effect
    enumerable: true, // true required to enable enumeration, and printing the property
    configurable: false // when set to false, delete will have no effect
});

person.name = 'John';
delete person.name

console.log(Object.keys(person));
console.log(person);

Object.getPrototypeOf(person);

const c1 = new Circle(1);
const c2 = new Circle(2);

Circle.prototype.draw = function() {
    console.log('draw');
}

// the order of prototype modification vs instantiation does not matter
Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}

console.log(c1.toString());
console.log(c2.toString());
c1.move();
c2.move();

// Object.keys(x) only takes instance members
console.log(Object.keys(c1));
// For loop iterates over instance members + prototype members
for (let key in c1) {
    console.log(key);
}

// dont modify the objects you don't own





