let john = { id: "John", name: "john smith", age: 27 };
let pete = { id: "Pete", name: "pete smith", age: 30 };
let mary = { id: "Mary", name: "mary peterson", age: 28 };

let arr = [john, pete, mary];

function g(arr) {
  return arr.reduce((sum, el) => sum + el.age, 0);
}

function unique(arr) {
  return arr.map(func);
}

function func(arr) {
  arr.el;
}

console.log(g(arr));
