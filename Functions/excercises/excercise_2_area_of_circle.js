
// 

const circle = 
{
    radius: function(value) {
        this.radius = value;
    },
    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

circle.radius = 10;
console.log(circle.area);
