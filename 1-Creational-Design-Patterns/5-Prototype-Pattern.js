class Vehicle {
    constructor(type) {
        this.type = type;
    }

    clone() {
        return Object.assign({}, this);
    }
}

const car = new Vehicle('car');

const clonedCar = car.clone();
console.log(clonedCar.type);


// What is Prototype Design Pattern?
// The prototype pattern is a creational design pattern which is required when object creation is a time-consuming, and costly operation, so we create objects with the existing object itself to by copying the existing ones.

// The newly copied object may change the same properties only if required. This approach saves costly resources and time, especially when object creation is a heavy process.
// One of the best available ways to create an object from existing objects is the clone() method. Clone is the simplest approach to implementing a prototype pattern. However, it is your call to decide how to copy existing objects based on your business model.
