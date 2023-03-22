// Construction Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    // return this; // called automatically under the hood
}

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`)

Circle.call({}, 1);

const another = new Circle(1);
