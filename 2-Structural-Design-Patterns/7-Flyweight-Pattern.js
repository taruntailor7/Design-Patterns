class Circle {
    constructor(color) {
      this.color = color; // Intrinsic state (shared)
    }
  
    draw(x, y, radius) {
      // Extrinsic state (unique to each circle)
      console.log(
        `Drawing a ${this.color} circle at (${x}, ${y}) with radius ${radius}.`
      );
    }
}

class CircleFactory {
    constructor() {
      this.circles = new Map();
    }
  
    getCircle(color) {
      if (!this.circles.has(color)) {
        this.circles.set(color, new Circle(color));
        console.log(`Created a new circle of color: ${color}`);
      }
      return this.circles.get(color);
    }
}

const factory = new CircleFactory();

// Reuse the same Circle object for the same color
const redCircle1 = factory.getCircle("Red");
redCircle1.draw(10, 10, 5);

const redCircle2 = factory.getCircle("Red");
redCircle2.draw(20, 20, 10);

const blueCircle = factory.getCircle("Blue");
blueCircle.draw(15, 15, 7);

const anotherRedCircle = factory.getCircle("Red");
anotherRedCircle.draw(25, 25, 15);
