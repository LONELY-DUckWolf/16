class Car {        
    constructor(maxSpeed, price) {
        this.maxSpeed = maxSpeed;
        this.speed = 0;
        this.isOn = false;
        this.distance = 0;
        this.price = price;

    }

    static getSpecs(car) {
        return console.log(
          `Max Speed: ${car.maxSpeed}, Speed: ${car.speed}, Is On: ${car.isOn}, Distance: ${car.distance}, Price: ${car.price}`
        );
      }


    get price() {
        return this._price;
    }

    set price(newPrice){
        this._price = newPrice;
    }



    turnOn() {
        this.isOn = true;
    }
   

    turnOff() {
        this.isOn = false;
        this.speed = 0
    }
   

    accelerate(value) {
        if (this.speed + value <= this.maxSpeed) {
            return (this.speed += value);
          }
    }
   

    decelerate(value) {
        if (this.speed - value >= 0) {
            return (this.speed -= value);
          } else {
            return (this.speed === 0);
        }

        }
    



    drive(hours) {
        if (this.isOn === true) {
            return this.distance += hours * this.speed
           }
        
    }
   }
   
   const mustang = new Car({ maxSpeed: 200, price: 2000 });

   mustang.turnOn();
   mustang.accelerate(50);
   mustang.drive(2);
   
   Car.getSpecs(mustang);
   // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
   
   mustang.decelerate(20);
   mustang.drive(1);
   mustang.turnOff();
   
   Car.getSpecs(mustang);
   // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
   
   console.log(mustang.price); // 2000
   mustang.price = 4000;
   console.log(mustang.price); // 4000