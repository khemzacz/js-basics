
const color = 'red'; // global scope

{
    const message = 'hi';
}

function start() {
    const message = 'hi';
    const color = 'blue'; // global constant is hidden
    if (true) {
        console.log(color); 
        const another = 'bye';
    }
    // console.log(another); // not accessible

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    // console.log(i); // not accessible
}

function stop () {
    const message = 'bye';
}
// console.log(message); // not accessible outside of a block
start();
