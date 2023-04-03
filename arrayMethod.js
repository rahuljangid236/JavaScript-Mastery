// ForEach
// const numbers = [4, 2, 5, 8];

// function myFunc(number, index) {
//   console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(myFunc);

// const users = [
//   { firstName: "Harshit", age: 23 },
//   { firstName: "Subham", age: 20 },
//   { firstName: "Rakesh", age: 21 },
//   { firstName: "Rahul", age: 22 },
// ];

// users.forEach(function (user) {
//   console.log(user.firstName);
// });

// map Method
// const numbers = [3, 4, 6, 1, 8];
// const square = function (number) {
//   return number * number;
// };
// const squareNumb = numbers.map(square);
// console.log(squareNumb);

// const users = [
//   { firstName: "Harshit", age: 23 },
//   { firstName: "Subham", age: 20 },
//   { firstName: "Rakesh", age: 21 },
//   { firstName: "Rahul", age: 22 },
// ];

// const userNames = users.map((user) => {
//   return user.firstName;
// });

// console.log(userNames);

// Filter method
// const numbers = [3, 4, 6, 1, 8];

// const isEven = function (number) {
//   return number % 2 === 0;
// };

// const evenNumbers = numbers.filter((number) => {
//   return number % 2 === 0;
// });
// console.log(evenNumbers);

// reduce method
const numbers = [1,2,3,4,5];
const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
})
console.log(sum);