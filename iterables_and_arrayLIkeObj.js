// iterables
// jispe hum for of loop laga sakein
// string, array are iterable

// array like object
// jinke pas length property hoti hai
// aur jisko hum index se access kar skte he
// string

// const firstName = "Rahul";
// for (let char of firstName) {
//   console.log(char);
// }

// const items = ["item1", "item2", "item3"];
// for (let item of items) {
//   console.log(item);
// }

// const users = {
//   key1: "value1",
//   key2: "value2",
// };

// for (let user of users) {
//   console.log(user);
// }

// const firstName = "Rahul";
// console.log(firstName.length);
// console.log(firstName[2]);

// Sets (it is iterable)
// store data
// sets also have its own methods
// No index based access
// order is not guranted
// unique items only (no duplicates allowed)

// const numbers = new Set([1, 2, 3, 1]);
// console.log(numbers);

const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
if (numbers.has(1)) {
  console.log("Number is present");
} else {
  console.log("not present");
}
console.log(numbers);

for (let number of numbers) {
  console.log(number);
}
