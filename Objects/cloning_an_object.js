
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = {};

// old style
for (let key in circle) {
    another[key] = circle[key];
}

console.log(another);

// newer style
const another2 = 
    Object.assign({ color: 'yellow' } /* target object */, circle);

console.log(another2);

// spread operator

const another3 = { ...circle };

console.log(another3);