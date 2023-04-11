
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('draw')
}

// intermediate function inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child; // set prototype.construstor to 
    // Circle constructor function. It is a good practice
}

function Circle(color, radius) {
    // call shape constructor to inherit fields
    // the below is incorrect, 
    // it will assign to the window, or global object
    // new Shape(color);
    // the below is correct
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

// must be after extend or will override the prototype
Circle.prototype.duplicate = function() {
    // to call the overriden method
    //Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}


Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape('blue');
const c = new Circle('green', 1);

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log('duplicate square');
}

const shapes = [
    new Circle(),
    new Square()
]

for (let shape of shapes) {
    shape.duplicate();
}

const sq = new Square(10);