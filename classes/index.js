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

class User {
  constructor(login, password, firstName, lastName, age) {
    this.login = login;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  isAdult = () => this.age >=18;
  getFullName = () => `${this.firstName} ${this.lastName}`;
}

const user1 = new User('alex', '123', 'Alex', 'Brown', 10);
const user2 = new User('marry', '123', 'Marry', 'Brown', 20);

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
  constructor(firstName, lastName, daySalary, workDays) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.daySalary = daySalary;
    this.workDays = workDays;
  }

  getSalary() {
    return this.daySalary * this.workDays;
  }
}

const worker = new Worker('Alex', 'Brown', 40, 30);
console.log(worker.getSalary());