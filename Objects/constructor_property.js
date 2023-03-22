
// constructor property refers to the method which
// created the object

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
}

const circle = createCircle(1);
console.log(circle.constructor);

// Construction Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    // return this; // called automatically under the hood
}

const another = new Circle(1);
console.log(another.constructor);

let x = {}; // it will be created by Object constructor
// let x = new Object();


