class RealImage {
    constructor(filename) {
      this.filename = filename;
      this.loadFromDisk();
    }
  
    loadFromDisk() {
      console.log(`Loading ${this.filename}`);
    }
  
    display() {
      console.log(`Displaying ${this.filename}`);
    }
}
  
class ProxyImage {
    constructor(filename) {
      this.realImage = null;
      this.filename = filename;
    }
  
    display() {
      if (this.realImage === null) {
        this.realImage = new RealImage(this.filename);
      }
      this.realImage.display();
    }
}
  
  const image = new ProxyImage('image1.png');
  image.display();  // Loading image1.png
                    // Displaying image1.png
  
  image.display();  // Displaying image1.png
  