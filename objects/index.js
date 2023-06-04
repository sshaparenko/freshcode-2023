const obj = {
  key: 'value1',
  key2: true
}

//constructor
function User (name, password, age) {
  this.name = name;
  this.password = password;
  this.age = age;
  this.print = function() {return this.name + ' ' + this.password}  
}

//prototype - for same fucntionality (inheritance)
const userProto = {
  isAdult: function (){ return this.age>=18; }
}

obj.__proto__ = userProto;

//prototype with constructor
User.prototype = userProto;

const user = new User('test', 'test', 10);
const user2 = new User('test2', 'test2', 20); 

console.log(user.isAdult());
console.log(user2.isAdult());