
// Function declaration
function walk() {
    console.log('walk');
}

// Anonymous function expression
let run = function() {
    console.log('run');
};

let move = run;
run();
move();