class Coffee {
    cost() {
        return 5;
    }
}

class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 2;
    }
}

class SugarDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 1;
    }
}

let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);

console.log(coffee.cost());