// intro to arryas
// reference Types
// ordered collection of items

// how to create arrays
let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));

// array push pop

// push method insert in last
// fruits.push("kiwi");
// console.log(fruits);

// pop method remove from last
// fruits.pop();
// console.log(fruits);

// unshift mehtod insert from first
// fruits.unshift("kiwi");
// console.log(fruits);

// shift method remove from start
// fruits.shift();
// console.log(fruits);

// how to clone array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array1 === array2);
// clone using slice method
let array3 = array1.slice(0);
console.log(array3);

// clone using concatenate two array
let array4 = [].concat(array1);
console.log(array4);
