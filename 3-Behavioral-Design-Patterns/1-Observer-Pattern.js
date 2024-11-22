class Subjet {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(message) {
        this.observers.forEach((observer) => observer.update(message))
    }
}

class Observer {
    update(message) {
        console.log("Received: ", message);
    }
}

const subject = new Subjet();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("Hello, observers!");