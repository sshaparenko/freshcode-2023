class MyArray {
  #length;
  constructor(...elements) {
    this.#length = 0;
    this.push(...elements);
  }

  /*
    - loop through method arguments;
    - at each iteration create new property 
    and set the value;
    - return length.
    - time complexity O(n)
  */
  push(...elements) {
    for(let el of elements) {
      this[this.#length] = el;
      this.#length++;
    }
    return this.#length;
  }

  /*
    - write values of object into tempArr var
    - set length to 0
    - push method arguments first
    and old values after that
    - time complexity O(n + k)
  */
  unshift(...elements) {
    let tempArr = Object.values(this);
    this.#length = 0;
    this.push(...elements, ...tempArr);
    return this.#length;
  }

  /*
    - write values of object into tempArr var
    - save first element
    - remove first element and rewrite tempArr
    - push new arr of values
    - delete last property  
    - time complexity O(n) 
  */
  shift() {
    let tempArr = Object.values(this);
    let firstEl = tempArr[0];
    [,...tempArr] = tempArr;
    this.#length = 0;
    this.push(...tempArr);
    delete this[this.#length];
    return firstEl;
  }

  /*
    - check the argument type
    - write values of object into values var
    - loop through the values and execute callback function
    - time complexity O(n)
  */
  forEach(callbackFn) {
    if(typeof callbackFn !== 'function') throw TypeError('There should be a function!');
    let values = Object.values(this);
    for(let el of values) {
      callbackFn(el);
    }
  }

  /*
    - write values of object into tempArr var
    - create new instance of MyArray as result variable
    - loop through the properties of MyArray object
    and execute the callback function
      - in case of console.log() be a callbackFn =>
      the return value will be undefined and we
      just execute the function itself
      - in case if the type of the returned value is not
      undefined => the callbackFn will modify the element
    - time complexity O(n)
  */
  map(callbackFn) {
    if(typeof callbackFn !== 'function') throw TypeError('There should be a function!');

    let tempArr = Object.values(this);
    let result = new MyArray(...tempArr);
    let i = 0;
    
    for(let el of tempArr) {
      if(typeof callbackFn(el) === 'undefined') {
        callbackFn(el);
      } else {
        result[i] = callbackFn(el);
        i++;
      }
    }
    return result;
  }

  static isMyArray = (obj) => obj instanceof MyArray;

  reverse() {
    let count = this.#length-1;
    for(let i = 0; i < (this.#length / 2); i++) {
      let temp = this[i];
      this[i] = this[count];
      this[count] = temp;
      count--;
    }
    return this;
  }
}

class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }

  add(array) {
    array.forEach(el => {
      this.sum += el;
      ++this.count;
    });
  }
}

const arr = [];
const myArray = new MyArray();

console.log(myArray.push(5, 6, 20, true, 7));
console.log(myArray);

console.log(myArray.unshift(1, 2, 3));
console.log(myArray);

console.log(myArray.shift())
// console.log(myArray);
// console.log(myArray.shift())
// console.log(myArray);
// console.log(myArray.shift())
// console.log(myArray);
// console.log(myArray.shift())
// console.log(myArray);
// console.log(myArray.shift())
console.log(myArray);

myArray.forEach(el => console.log(el));
let counter = new Counter();
counter.add(myArray);
console.log(counter);

const newArr = myArray.map(x => x*2);
console.log(newArr);
console.log(myArray);

[1, 2, 4].map(el => console.log(el));
console.log(MyArray.isMyArray(myArray));

const reversed = myArray.reverse();
console.log(reversed);