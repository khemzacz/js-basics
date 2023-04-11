
// rest operator will collect all items into array
function mixin(target, ...sources) {
    // spread operator will extract from the array
    Object.assign(target, ...sources)
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log('eating');
    }
}

const canWalk = {
    eat: function () {
        console.log('walking');
    }
}

const canSwim = {
    swim: function() {
        console.log('swim');
    }
}

function Person() {

}

mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person)

function Goldfish() {

}

mixin(Goldfish.prototype, canEat, canSwim)

const goldfish = new Goldfish();
console.log(goldfish);
