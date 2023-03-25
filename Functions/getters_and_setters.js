
const person = {
    firstName: 'Jonatan',
    lastName: 'Joosutaa',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    } 
}

console.log(`${person.firstName} ${person.lastName}`);
console.log(person.fullName());


const person2 = {
    firstName: 'Jonatan',
    lastName: 'Joosutaa',
    get fullName() { /* makes a getter */
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(`${person2.firstName} ${person2.lastName}`);
console.log(person2.fullName);
person2.fullName = 'Kotaro Jujo';
console.log(person2.fullName);
