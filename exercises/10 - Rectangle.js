class Rectangle {
  constructor(width = 6, height = 4) {
    this.width = width;
    this.height = height;
  }

  calcOmkrets() {
    console.log("The perimeter of the rectangle is: " + (this.width + this.height) * 2);
  }

  calcArea() {
    console.log("The area of the rectangle is: " + (this.width * this.height));
  }

}

class Square extends Rectangle {
  constructor() {
    
  }
}

const object1 = new Rectangle(15, 5);
const object2 = new Rectangle();

object1.calcOmkrets();
object1.calcArea();

object2.calcOmkrets();
object2.calcArea();

