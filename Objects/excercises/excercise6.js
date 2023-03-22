

function PriceRange (type, value) {
    this.type = type;
    this.value = value;
    this.text = '';
    for (let i = 0 ; i < value; i ++) {
        this.text += '$';
    }
}

const arrayOfObjects = [];

arrayOfObjects.push(
    new PriceRange('Inexpensive', 1),
    new PriceRange('Moderate', 2),
    new PriceRange('Pricey', 3),
    new PriceRange('High end', 4)
);

console.log(arrayOfObjects);





