class Game {
  play() {
    this.start();
    this.end();
  }

  start() {
    throw "start() must be implemented";
  }

  end() {
    throw "end() must be implemented";
  }
}

class Football extends Game {
  start() {
    console.log("Football game started");
  }

  end() {
    console.log("Football game ended");
  }
}

const football = new Football();
football.play(); // Football game started, Football game ended
