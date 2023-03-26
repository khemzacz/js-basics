
function start () {
    for (var i = 0; // var i is accesible outside of the
        // defined scope, var scope is limited to the function
         i < 5; i++) { 
            if (true) {
                var color = 'red';
                let color2 = 'akai';
            }
        console.log(i);
    }

    console.log(i);
    console.log(color);
    // console.log(color2) not accesible
}

// before ES6 (ES2015) only var was accesible
// let, const are block scoped.

start();

var color = 'aoi'; // creates a global variable and attaches it to
// Window object in the browser, in node it is just a global
let age = 30;

console.log(color);

// the below function in browser will be attached to 
// a Window object too
function sayHi() {
    console.log('Hi');
}