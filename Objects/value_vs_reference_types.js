
let x = { value: 10 };
let y = x;

x.value = 20;

let obj = { internal_value: 10 };
let number = 10;


function increase(obj) {
    console.log("first");
    obj.internal_value++;
}

function increase_number(number) {
    console.log("second");
    number++;
}

increase(obj);
console.log(obj);

increase_number(number);
console.log(number);