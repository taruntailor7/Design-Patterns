class Handler {
  setNext(handler) {
    this.next = handler;
    return handler;
  }

  handle(request) {
    if (this.next) {
      return this.next.handle(request);
    }
  }
}

class ConcreteHandler1 extends Handler {
  handle(request) {
    if (request === "A") {
      return "Handled by ConcreteHandler1";
    }
    return super.handle(request);
  }
}

class ConcreteHandler2 extends Handler {
  handle(request) {
    if (request === "B") {
      return "Handled by ConcreteHandler2";
    }
    return super.handle(request);
  }
}

const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
handler1.setNext(handler2);

console.log(handler1.handle("A")); // Handled by ConcreteHandler1
console.log(handler1.handle("B")); // Handled by ConcreteHandler2
console.log(handler1.handle("C")); // undefined
