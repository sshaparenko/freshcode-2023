/**
 * Car
 * name
 * max speed
 * current speed
 * 
 * разгон
 * тормаз
 * 
 * скорость и макс скорость не можуть бути < 0
 */

class Car {
  constructor(name, maxSpeed, currentSpeed) {
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.currentSpeed = currentSpeed;
  }

  get maxSpeed() {
    return this._maxSpeed;
  }

  get currentSpeed() {
    return this._currentSpeed;
  }

  set currentSpeed(speed) {
    if(typeof speed !== 'number' || isNaN(speed)){
      throw TypeError('speed should be a number');
    }
    
    if(typeof this._currentSpeed !== 'undefined') {
      const temp = this._currentSpeed + speed;
      if(temp < 0 || speed > this.maxSpeed) throw RangeError('current speed cannot be less then 0 or grater then your max speed');
      this._currentSpeed = temp;
    } else {
      if(speed < 0 || speed > this.maxSpeed) throw RangeError('current speed cannot be less then 0 or grater then your max speed');
      this._currentSpeed = speed;
    }
    
  }

  set maxSpeed(speed) {
    if(typeof speed !== 'number') throw TypeError('speed should be a number');
    if(speed < 0) throw RangeError('maximum speed cannot be less then 0');
    this._maxSpeed = speed;
  }

  overclocking(speed) {
    this.currentSpeed = speed;
    return this.currentSpeed;
  }

  brake(speed) {
    if(speed > 0) throw RangeError('brake speed should be less then 0');
    this.currentSpeed = speed;
    return this.currentSpeed;
  }
}

const car = new Car('test', 15, 5);
console.log(car.overclocking(10));
console.log(car.brake(-2));