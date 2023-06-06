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
    for (let el of elements) {
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
    if(this.#length === 0) {
      return 'undefined';
    }
    
    let tempArr = Object.values(this);
    let firstEl = tempArr[0];
    [, ...tempArr];
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
    if (typeof callbackFn !== "function")
      throw TypeError(`Error: ${typeof callbackFn} is not a function`);

    let values = Object.values(this);
    for (let el of values) {
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
    if (typeof callbackFn !== "function")
      throw TypeError(`Error: ${typeof callbackFn} is not a function`);

    let tempArr = Object.values(this);
    let result = new MyArray(...tempArr);
    let i = 0;
    if (typeof callbackFn(tempArr[0]) === "undefined") {
      for (let el of tempArr) {
        callbackFn(el);
      }
    } else {
      for (let el of tempArr) {
        result[i] = callbackFn(el);
        i++;
      }
    }
    return result;
  }

  static isMyArray = (obj) => obj instanceof MyArray;

  /*
    loop through the array till its half and swap elements
    time complexity O(n)
  */
  reverse() {
    let count = this.#length - 1;
    for (let i = 0; i < this.#length / 2; i++) {
      [this[i], this[count]] = [this[count], this[i]];
      count--;
    }
    return this;
  }

  /*
    - check the type of method argument
    - write values of current array object into tempArr
    - create new instance of MyArray
    - loop through the elements in tempArr
    if the callbackFn true => push element into the new MyArray
    - return the new instance with values added (or without)
    - time complexity O(n)
  */
  filter(callbackFn) {
    if (typeof callbackFn !== "function")
      throw TypeError(`Error: ${typeof callbackFn} is not a function`);

    let tempArr = Object.values(this);
    let result = new MyArray();
    for (let element of tempArr) {
      if (callbackFn(element)) {
        result.push(element);
      }
    }
    return result;
  }
}

const myArray = new MyArray();

console.log("--------- push() method test ---------");
console.log(myArray.push(5, 6, 20, true, 7));
console.log(myArray);

console.log("--------- unshift() method test ---------");
console.log(myArray.unshift(1, 2, 3, "test"));
console.log(myArray);

console.log("--------- shift() method test ---------");
console.log(myArray.shift());

console.log("--------- map() method test ---------");
const newArr = myArray.map((x) => x * 2);
console.log(newArr);
console.log(myArray);

console.log("--------- isMyArray() method test ---------");
console.log(MyArray.isMyArray(myArray));

console.log("--------- reverse() method test ---------");
const reversed = myArray.reverse();
console.log(reversed);

console.log("--------- filter() method test ---------");
console.log(myArray);
const myFilter = myArray.filter((el) => el > 4);
console.log(myFilter);

const thisArr = new MyArray();
console.log(thisArr.shift());

