// Map object
// Map is an iterable
// Store data in ordered fashion
// store key  value pair (like object)
// duplicate keys are not allowed

// differnet between map and  object
// objects can only have string or symbol as key
// in map we can use anything as key
// like array number string

// const person = new Map();
// person.set("firstName", "Rahul");
// person.set("age", 23);
// person.set(1, "one");
// console.log(person);
// console.log(person.get("firstName"));
// console.log(person.get("age"));
// console.log(person.keys());

// for (let key of person.keys()) {
//   console.log(key, typeof key);
// }

// for (let [key, value] of person) {
//   console.log(key, value);
// }

const person = new Map([
  ["firstName", "Rahul"],
  ["age", 23],
]);
console.log(person);
