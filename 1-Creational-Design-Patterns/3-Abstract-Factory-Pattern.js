class Chair {}
class VictorianChair extends Chair {}
class ModernChair extends Chair {}

class Table {}
class VictorianTable extends Table {}
class ModernTable extends Table {}

class VictorianFurnitureFactory {
    createChair() {
        return new VictorianChair();
    }

    createTable() {
        return new VictorianTable();
    }
}

class ModernFurnitureFactory {
    createChair() {
        return new ModernChair();
    }

    createTable() {
        return new ModernTable();
    }
}

// Using the factory
const victorianFactory = new VictorianFurnitureFactory();
const chair = victorianFactory.createChair();
const table = victorianFactory.createTable();

// Using the factory
const modernFactory = new VictorianFurnitureFactory();
const modernChair = modernFactory.createChair();
const modernTable = modernFactory.createTable();


// What is the Abstract Factory Pattern?
// The Abstract Factory Pattern is a way of organizing how you create groups of things that are related to each other. It provides a set of rules or instructions that let you create different types of things without knowing exactly what those things are. This helps you keep everything organized and lets you switch between different types easily.

// Abstract Factory pattern is almost same as Factory Pattern and is considered as another layer of abstraction over factory pattern.
// Abstract Factory patterns work around a super-factory which creates other factories.
// At runtime, the abstract factory is coupled with any desired concrete factory which can create objects of the desired type.