class OldCalculator {
    add(a,b) {
        return a + b;
    }
}

class CalculatorAdapter {
    constructor() {
        this.oldCalc = new OldCalculator();
    }

    add(a, b) {
        return this.oldCalc.add(a, b);
    }
}

const adapter = new CalculatorAdapter();
console.log(adapter.add(3, 5));