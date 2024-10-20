class Car {
    constructor() {
        this.parts = [];
    }

    addPart(part) {
        this.parts.push(part);
    }

    showParts() {
        console.log(this.parts.join(', '));
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    addEngine() {
        this.car.addPart('Engine');
        return this;
    }

    addWheels() {
        this.car.addPart('Wheels');
        return this;
    }

    addSeats() {
        this.car.addPart('Seats');
        return this;
    }

    build() {
        return this.car;
    }
}

const car = new CarBuilder().addEngine().addWheels().addSeats().build();
car.showParts();

// What is the Builder Method Design Pattern ?
// To “Separate the construction of a complex object from its representation so that the same construction process can create different representations.” Builder pattern is used
// It helps in constructing a complex object step by step and the final step will return the object.