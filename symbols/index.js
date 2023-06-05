const sym = Symbol('test');

const obj = {
  prop1: 'test',
  prop2: false,
  //add the sumbol as a key to object property
  [sym]: 'test',
  [Symbol('i am safe')]: 'also test',
};

//creation of symbol key
obj[sym] = 'test';

console.log(obj);

const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols);
console.log(symbols[0]); 

const test = Object.keys(obj);
console.log(test);