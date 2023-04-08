
console.log(sum(1, 2, 3, 4));
console.log(sum([1, 2, 3, 4], 1, 2, [1, 2]));

console.log(better_sum(1, 2, 3, 4));
console.log(better_sum([1, 2, 3, 4], 1, 2, [1, 2]));


//Array.isArray()

function sum() {
    let sum = 0;
    for (arg of arguments) {
        if (Array.isArray(arg)) {
            for (val of arg) {
                sum += val;
            }

        } else {
            sum += arg;
        }
    }
    return sum;
}

function better_sum(...items) { // use spread operator
    return items.reduce((a, b) => {
        if (Array.isArray(b)) {
            return a + b.reduce((accumulator, bb) => accumulator + bb);
        } else{
            return a + b;
        }
    }, 0);
}


