class Singleton {
    constructor() {
        if(Singleton.instance) {
            return Singleton.instance;
        }
        this.data = {}
        Singleton.instance = this;
    }

    setData(key, value) {
        this.data[key] = value;
    }

    getData(key) {
        return this.data[key];
    }
}


const singleton1 = new Singleton();
singleton1.setData('name', 'Tarun');

const singleton2 = new Singleton();
console.log(singleton2.getData('name'));


// What is Singleton Method Design Pattern?
// The Singleton method or Singleton Design pattern is one of the simplest design patterns. 
// It ensures a class only has one instance, and provides a global point of access to it. 

