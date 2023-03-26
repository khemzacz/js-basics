
const person2 = {
    firstName: 'Jonatan',
    lastName: 'Joosutaa',
    get fullName() { /* makes a getter */
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        if (typeof value !== 'string') {
            const e = new Error('Value is not a string.');
            throw e; // the moment the error is thrown, we refer to 
            // it as an exception
        } 
        const parts = value.split(' ');
        if (parts.length !== 2) {
            throw new Error('Enter a first and last name.');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}



console.log(`${person2.firstName} ${person2.lastName}`);
try {
    person2.fullName = null;
}
catch (e) {
    console.log(e);
}
console.log(person2.fullName);
person2.fullName = 'Kotaro Jujo';
try {
    person2.fullName = '';
}
catch (e) {
    console.log(e);
}
console.log(person2.fullName);

