
// street
// city
// zipCode
// showAddress(address)


// Constructor
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

const address = new Address('Kobierzyńska', 'Kraków', '30-300');

showAddress(address);

// Factory Function
function makeAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
} 

const address2 = makeAddress('Bobrzyńskiego', 'Kraków', '30-395');

showAddress(address2);
