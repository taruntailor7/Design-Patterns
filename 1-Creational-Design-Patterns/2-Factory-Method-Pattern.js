class Animal {
    speak() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog Barks');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Cat meows');
    }
}

class AnimalFactory {
    static createAnimal(type) {
        switch (type) {
            case 'dog':
                return new Dog();
            case 'cat':
                return new Cat();
            default:
                return new Animal();
        }
    }
}

const dog = AnimalFactory.createAnimal('dog');
dog.speak();

const cat = AnimalFactory.createAnimal('cat');
cat.speak();


// What is the Factory Method Design Pattern?
// The Factory Method Design Pattern is a creational design pattern used in software development. It provides an interface for creating objects in a superclass while allowing subclasses to specify the types of objects they create.

// This pattern simplifies the object creation process by placing it in a dedicated method, promoting loose coupling between the object creator and the objects themselves.
// This approach enhances flexibility, extensibility, and maintainability, enabling subclasses to implement their own factory methods for creating specific object types.