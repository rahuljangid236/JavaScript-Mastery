// objects are refernce type
// arrays are good but not sufficient
// for real world data
// object stores key value pairs

// how to create objects
// const person = {
//   name: "Rahul",
//   age: 23,
//   hobbies: ["guitar", "sleeping", "listening music"],
// };

// how to access data from object
// console.log(person.name);

// how to add key value pair in objects
// person.gender = "male";
// console.log(person);
// console.log(person["name"]);

// const key = "email";
// person[key] = "rahuljangid@gmail.com";
// console.log(person);

// how to iterate object
// for (let key in person) {
//   console.log(`${key} : ${person[key]}`);
// }

// const obj = Object.keys(person);
// console.log(obj);

// for (let key of Object.keys(person)) {
//   console.log(key);
// }

// Computed Properties

// const key1 = "objkey1";
// const key2 = "objkey2";

// const obj1 = {
//   [key1]: "value1",
//   [key2]: "value2",
// };
// console.log(obj1);

// Spread Operator in obj

// const obj2 = {
//   key1: "unique",
//   key3: "value3",
//   key4: "value4",
// };

// const newObject = { ...obj1, ...obj2 };
// console.log(newObject);

// Object destructuring

// const { key1, key3, ...restProps } = obj2;
// console.log(key1);
// console.log(key3);
// console.log(restProps);

const users = [
  { userId: 1, firstName: "Rahul", gender: "Male" },
  { userId: 2, firstName: "Raju", gender: "Male" },
  { userId: 3, firstName: "Rakesh", gender: "Male" },
];

for (let user of users) {
  console.log(user);
}

const [{ firstName }, , { gender }] = users;
console.log(firstName);
console.log(gender);
