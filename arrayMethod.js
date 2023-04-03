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
// const numbers = [1,2,3,4,5];
// const sum = numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// })
// console.log(sum);

// const userCart = [
//   { productId: 1, productName: "Mobile", price: 12000 },
//   { productId: 2, productName: "Laptop", price: 22000 },
//   { productId: 3, productName: "TV", price: 10000 },
// ];

// const totalPrice = userCart.reduce((totalPrice, currentProdPrice) => {
//   return totalPrice + currentProdPrice.price;
// }, 0);

// console.log(totalPrice);

// Sort method

const userName = ["Harshit", "Rahul", "Subham", "Kamlesh", "Teena", "Aman"];
userName.sort();
console.log(userName);

const numbers = [5, 9, 1200, 400, 3000];
numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);
