'use strict';

// class User {
//   constructor(login, password, age) {
//     this.login = login;
//     this.password = password;
//     this.age = age;
//   }

//   isAdult = () => this.age >=18;
//   test = () => 'test method';
// }

// const user = new User('test', 'test', 1);
// const user2 = new User('test', 'test', 20);

//console.log(user.isAdult());
//console.log(user2.isAdult());

/**
 * class User
 * login
 * password
 * firstname
 * lastName
 * age
 * 
 * isAdult
 * getFullName
 */

/**
 * name setter and getter
 * surname setter and getter
 * fullanme getter
 */

class User {
  #login;
  #password;
  #firstName;
  #lastName;
  #age;
  constructor(login, password, firstName, lastName, age) {
    this.#login = login;
    this.#password = password;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  set firstName(name) {
    if(typeof name !== 'string') throw TypeError('first name should be of type string');
    this.#firstName = name;
  }

  set lastName(name) {
    if(typeof name !== 'string') throw TypeError('last name should be of type string');
    this.#lastName = name;
  }

  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  set fullName(name) {
    if(typeof name !== 'string') return TypeError('full name should be of type string');
    const list = name.split(' ');
    this.#firstName = list[0];
    this.#lastName = list[1];
  }

  isAdult = () => this.#age >=18;
  getFullName = () => `${this.firstName} ${this.lastName}`;
}

const user1 = new User('alex', '123', 'Alex', 'Brown', 10);
const user2 = new User('marry', '123', 'Marry', 'Brown', 20);

console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.fullName);
user1.firstName = 'testName';
user1.lastName = 'testName';
console.log(user1.fullName);
// user1.firstName = 5;
user1.fullName = 'TEST TEST';
console.log(user1.fullName);
// console.log(`Does Alex adult? ${user1.isAdult()}`);
// console.log(`Does Marry adult? ${user2.isAdult()}`);

// console.log(user1.getFullName());
// console.log(user2.getFullName());

/**
 * Worker
 * name
 * surname
 * salary (by days)
 * days number
 * 
 * getSalary()
 */

class Worker {

  // setting the private rule for the daySalary field
  #daySalary;

  constructor(firstName, lastName, daySalary, workDays) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#daySalary = daySalary;
    this.workDays = workDays;
  }

  /**
   * getters and setters are created before constructor
   */
  get workDays() {
    return this._workDays;
  }

  get daySalary() {
    return this.#daySalary;
  }

  set workDays(days) {

    if(typeof days !== 'number' || isNaN(days)) {
      throw new TypeError('Days must be number');
    }

    if(days < 0) {
      throw new RangeError('worked days can\'t be negative');
    }

    this._workDays = days;
  }

  getSalary() {
    return this.#daySalary * this._workDays;
  }
}

try {
  const worker = new Worker('Alex', 'Brown', 40, 30);
  //calling setter
  worker.workDays = 10;
  // worker.#daySalary = 5;
  console.log(worker.daySalary);
  console.log(worker.getSalary());
  //calling getter
  console.log(worker.workDays);
} catch(error) {
  console.log(error);
}
