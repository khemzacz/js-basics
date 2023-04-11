
// HtmlElement

// HtmlSelectElement

function HtmlElement () {
    this.click = function() {
        console.log('clicked');
    }
}

HtmlElement.prototype.render = function() {

}

HtmlElement.prototype.focus = function() {
    console.log('focused');    
}

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item);
    }
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

function HtmlImageElement(imgSrcArg = '') {
    let imgSrc = imgSrcArg;
    
    Object.defineProperty(this, 'imgSrc', {
        get: function() { return imgSrc; },
        set: function(value) { imgSrc = value; } 
    });
}

function extend(Child, Parent) {
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;
}

extend(HtmlImageElement, HtmlElement);
extend(HtmlSelectElement, HtmlElement);

HtmlImageElement.prototype.render = function () {
    return `<img src="${this.imgSrc}" />`
}

HtmlSelectElement.prototype.render = function () {
    result = `"<select>
`
    this.items.forEach(item => 
        result += `  <option>${item}</option>
`);
    result += '</select>"';
    return result;
}


const e = new HtmlElement();
const s = new HtmlSelectElement([1, 2, 3]);
const img = new HtmlImageElement();

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('http://')
]

for (let element of elements) {
    console.log(element.render());
}