class Context {
    constructor() {
        this.state = null;
    }

    setState(state) {
        this.state = state;
    }

    request() {
        this.state.handle();
    }
}

class StateA {
    handle() {
        console.log('StateA handling request');
    }
}

class StateB {
    handle() {
        console.log('StateB handling request');
    }
}

const context = new Context();
context.setState(new StateA());
context.request();

context.setState(new StateB());
context.request();