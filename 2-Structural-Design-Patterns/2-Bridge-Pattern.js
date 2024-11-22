class Color {
    constructor(type){
        this.type = type;
    }

    getType() {
        return this.type;
    }
}

class Shape {
    constructor(color) {
        this.color = color
    }

    draw() {
        console.log(`Drawing a shape with color ${this.color.getType()}`);
    }
}

const red = new Color('red');
const green = new Color('green');


const circle = new Shape(red);
circle.draw();

const square = new Shape(green);
square.draw();
