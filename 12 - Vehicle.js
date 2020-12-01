class Vehicle {
  constructor(model, make, color, speed, noOfWheels, maxSpeed) {
   this.model = model;
   this.make = make;
   this.color = color;
   this.speed = speed;
   this.noOfWheels = noOfWheels;
   this.maxSpeed = maxSpeed; 
  }

  speedUp(addSpeed) {
    if (this.speed + addSpeed < this.maxSpeed) {
        this.speed = this.speed + addSpeed;
    } else {
        this.speed = this.maxSpeed;
    };
    return this.speed;
}

speedDown(decreaseSpeed) {
    if (this.speed - decreaseSpeed > 0) {
        this.speed = this.speed - decreaseSpeed;
    } else {
        this.speed = 0;
    }
    return this.speed;
  }

}

class Truck extends Vehicle {
  constructor(model, make, color, speed, noOfWheels = 6) {
    super(model, make, color, speed, noOfWheels);
    this.maxSpeed = 50;
  }
}

class Motorcycle extends Vehicle {
  constructor(model, make, color, speed, noOfWheels = 2) {
    super(model, make, color, speed, noOfWheels);
    this.maxSpeed = 200;
  }
}

class Car extends Vehicle {
  constructor(model, make, color, speed, noOfWheels = 4) {
    super(model, make, color, speed, noOfWheels);
    this.maxSpeed = 180;
  }
}

let truck = new Truck('Lastbil', 'Volvo', 'Silver', 60);
let motorcycle = new Motorcycle('Kawasaki', 'Ninja', 'Green', 300, 2);
let car = new Car('Volvo', 'V90', 'Osmium Grey', 160, 4);

console.log(truck);
console.log(motorcycle);
console.log(car);
car.speedDown(180);
console.log(car);