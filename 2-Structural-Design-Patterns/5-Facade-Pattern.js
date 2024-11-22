class Light {
    on() {
        console.log("Light is on");
    }

    off() {
        console.log("Light is off");
    }
}

class Television {
    on() {
        console.log("TV is on");
    }

    off() {
        console.log("TV is off");
    }
}

class HomeTheaterFacade {
    constructor(light, tv) {
      this.light = light;
      this.tv = tv;
    }
  
    startMovie() {
      this.light.off();
      this.tv.on();
    }
  
    endMovie() {
      this.tv.off();
      this.light.on();
    }
}

const light = new Light();
const tv = new Television();
const homeTheater = new HomeTheaterFacade(light, tv);

homeTheater.startMovie();  // Light is off, TV is on
homeTheater.endMovie();    // TV is off, Light is on