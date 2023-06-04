class Figure {
  #a;
  /**
   * @param {number} a 
   * @param {string} name 
   */
  constructor(a) {
    this.#a = a;
    this.name = 'figure';
  }
  getArea() {
    
  }

  get a() {
    return this.#a;
  }

  set a(number) {
    if(typeof number !== 'number') throw TypeError('should be number');
    this.#a = number;
  }
}

class Circle extends Figure {
  /**
   * @param {number} r 
   */
  constructor(r) {
    super(r);
    this.name = 'circle'
  }

  getArea() {
    return Math.PI*this.a**2;
  }
}

// const circle = new Circle(10);
// console.log(circle.getArea());
// console.log(circle.name);

class Animal {
  #nickname;
  #starving;

  constructor(nickname) {
    this.#nickname = nickname;
    this.#starving = false;
  }

  get starving() {
    return this.#starving;
  }

  set starving(starving) {
    if(typeof starving !== 'boolean') throw TypeError('starving should be of type boolean!');
    this.#starving = starving;
  }

  move() {
    console.log('Animal is moving...');
    this.starving = true;
    console.log('Your animal is starving now!');
  }

  eat() {
    
  }

  speak() {

  }
}

class Cat extends Animal{

  constructor(nickname) {
    super(nickname);
  }

  eat() {
    console.log('cat is eating...');
    this.starving = false;
  }

  speak() {
    console.log('cat is speaking...');
  }
}

class Snake extends Animal {
  eat() {
    console.log('snake is eating...');
    this.starving = false;
  }

  speak() {
    console.log('snake is speaking...');
  }
}

class Parot extends Animal {
  eat() {
    console.log('parot is eating...');
    this.starving = false;
  }

  speak() {
    console.log('parot is speaking...');
  }
}

const cat = new Cat('Cat');
const snake = new Snake('Snake');
const parot = new Parot('Parot');

cat.move();
cat.eat();
cat.speak();

// snake.move();
// snake.eat();
// snake.speak();

// parot.move();
// parot.eat();
// parot.speak();