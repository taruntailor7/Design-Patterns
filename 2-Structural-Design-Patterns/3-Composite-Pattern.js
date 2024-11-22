class Leaf {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }
}

class Composite {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    add(child) {
        this.children.push(child);
    }

    display() {
        console.log(this.name);
        this.children.forEach((child) => child.display());
    }
}

const tree = new Composite('root');
const branch1 = new Composite('branch1');
const leaf1 = new Leaf('leaf1');

branch1.add(leaf1);
tree.add(branch1);

tree.display();