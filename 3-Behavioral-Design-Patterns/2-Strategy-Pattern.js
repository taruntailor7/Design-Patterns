class Context {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(a, b) {
        return this.strategy.doOperation(a, b);
    }
}

class AddStrategy {
    doOperation(a, b) {
        return a + b;
    }
}

class MultiplyStrategy {
    doOperation(a, b) {
        return a * b;
    }
}

const context = new Context();
context.setStrategy(new AddStrategy());
console.log(context.executeStrategy(5, 10));

context.setStrategy(new MultiplyStrategy());
console.log(context.executeStrategy(5, 10));