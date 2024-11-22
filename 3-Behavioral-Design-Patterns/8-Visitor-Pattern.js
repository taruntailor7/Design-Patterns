class Visitor {
  visit(element) {
    throw "visit() must be implemented";
  }
}

class ConcreteVisitor extends Visitor {
  visit(element) {
    console.log("Visiting", element.getName());
  }
}

class Element {
  accept(visitor) {
    visitor.visit(this);
  }

  getName() {
    return "Element";
  }
}

const element = new Element();
const visitor = new ConcreteVisitor();
element.accept(visitor); // Visiting Element
