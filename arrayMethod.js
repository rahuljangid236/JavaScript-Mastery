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

// const userName = ["Harshit", "Rahul", "Subham", "Kamlesh", "Teena", "Aman"];
// userName.sort();
// console.log(userName);

// const numbers = [5, 9, 1200, 400, 3000];
// numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(numbers);

// 1200,410
// a-b --> 790
// a-b --> positive(greater than 0) ---> b,a

// a-b--> Negative-->a,b
// 5,9--> -4

// const userCart = [
//   { productId: 1, productName: "Mobile", price: 12000 },
//   { productId: 2, productName: "Laptop", price: 22000 },
//   { productId: 3, productName: "TV", price: 10000 },
// ];

// userCart.sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(userCart);

// Find method
// const myArray = ["Horse", "Dog", "cat"];

// const ans = myArray.find((string) => {
//   return string.length === 3;
// });

// console.log(ans);

// const users = [
//   { userId: 1, userName: "Rahul" },
//   { userId: 2, userName: "Kamlesh" },
//   { userId: 3, userName: "Subham" },
//   { userId: 4, userName: "Teena" },
//   { userId: 5, userName: "Poonam" },
//   { userId: 6, userName: "Johnu" },
//   { userId: 7, userName: "Prahlad" },
// ];

// const myUser = users.find((user) => {
//   return user.userId === 5;
// });

// console.log(myUser);

// Every Method
// const numbers = [2, 4, 6, 8, 10];

// const ans = numbers.every((number) => {
//   return number % 2 === 0;
// });
// console.log(ans);

// const userCart = [
//   { productId: 1, productName: "Mobile", price: 12000 },
//   { productId: 2, productName: "Laptop", price: 22000 },
//   { productId: 3, productName: "TV", price: 10000 },
// ];

// const ans = userCart.every((cartItem) => {
//   return cartItem.price < 25000;
// });
// console.log(ans);

// Some method
// const numbers = [2, 4, 6, 1, 10];
// const ans = numbers.some((number) => {
//   return number % 2 === 0;
// });
// console.log(ans);

// const userCart = [
//   { productId: 1, productName: "Mobile", price: 12000 },
//   { productId: 2, productName: "Laptop", price: 22000 },
//   { productId: 3, productName: "TV", price: 10000 },
// ];

// const ans = userCart.some((cartItem) => {
//   return cartItem.price > 15000;
// });
// console.log(ans);

// Fill method

// const myArray = new Array(10).fill(-1);
// console.log(myArray);

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// myArray.fill(0, 2, 5);
// console.log(myArray);

// splice method
const myArray = ["item1", "item2", "item3"];
myArray.splice(1, 1, "item4");
console.log(myArray);
