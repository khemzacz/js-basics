
// Construction Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    // return this; // called automatically under the hood
}

const circle = new Circle(1);
circle.draw();
const x = {};
