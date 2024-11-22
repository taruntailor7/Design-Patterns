class Expression {
    interpret(context) {
        throw new Error("This method should be overridden!");
    }
}

class NumberExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    interpret(context) {
        return this.value;
    }
}

class AddExpression extends Expression {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }

    interpret(context) {
        return this.left.interpret(context) + this.right.interpret(context);
    }
}

class SubtractExpression extends Expression {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }

    interpret(context) {
        return this.left.interpret(context) - this.right.interpret(context);
    }
}

// Build the expression: 2 + 3 - 1
const expression = new SubtractExpression(
    new AddExpression(
        new NumberExpression(2),
        new NumberExpression(3)
    ),
    new NumberExpression(1)
);

console.log(expression.interpret()); // Output: 4
