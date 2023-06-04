class MyArray {
  #length;
  constructor() {
    this.#length = 0;
  }

  push(...elements) {
    for(let el of elements) {
      this[this.#length] = el;
      this.#length++;
    }
    return this.#length;
  }

  unshift(...elements) {
    let tempArr = Object.values(this);
    this.#length = 0;
    for(let el of elements) {
      this[this.#length] = el;
      this.#length++;
    }
    this.push(...tempArr);
    return this.#length;
  }

  shift() {
    let tempArr = Object.values(this);
    let firstEl = tempArr[0];
    [,...tempArr] = tempArr;
    this.#length = 0;
    this.push(...tempArr);
    delete this[this.#length];
    return firstEl;
  }

  forEach(callbackFn) {
    if(typeof callbackFn !== 'function') throw TypeError('There should be a function!');
    let values = Object.values(this);
    for(let el of values) {
      callbackFn(el);
    }
  }

  map(callbackFn) {

    let tempArr = Object.values(this);
    let result = new MyArray();
    let i = 0;

    result.push(...tempArr);
    
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

console.log(myArray.push(5, 6, 20, true));
// console.log(myArray);

// console.log(myArray.unshift(0));
// // console.log(myArray);

// console.log(myArray.shift())
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