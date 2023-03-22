
let address1 = new Address('Karmelicka', 'Kraków', '31-010');
let address2 = new Address('Rzemieślnicza', 'Kraków', '31-039');
let address3 = new Address('Karmelicka', 'Kraków', '31-010');
let address4 = address1;

// class declaration
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}


function areEqual(address1, address2) {
    if (address1 === address2) {
        return true;
    }
    if (address1.constructor === address2.constructor) {
        return (address1.street === address2.street &&
                address1.city === address2.city &&
                address1.zipCode === address2.zipCode);
    }
}

function areSame(address1, address2) {
    return (address1 === address2);
}

console.log('areEqual()');
console.log(areEqual(address1, address2));
console.log(areEqual(address1, address3));
console.log(areEqual(address2, address3));
console.log(areEqual(address1, address4));
console.log('areSame()');
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));
console.log(areSame(address2, address3));
console.log(areSame(address1, address4));