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
}

const arr = [];
const myArray = new MyArray();

console.log(myArray.push(5, 6, 20, true));
// console.log(myArray);

console.log(myArray.unshift(0));
// console.log(myArray);

console.log(myArray.shift())
console.log(myArray);
console.log(myArray.shift())
console.log(myArray);
console.log(myArray.shift())
console.log(myArray);
console.log(myArray.shift())
console.log(myArray);
console.log(myArray.shift())
console.log(myArray);