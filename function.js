// function expession
// const happyBirthday = function () {
//   console.log("happy Birthday");
// };
// happyBirthday();

// // Arrow Function
// const arrowFunc = () => {
//   console.log("Happy Birthday");
// };
// arrowFunc();

// Lexical Scope

// function myApp() {
//   var myVar = 5;
//   function myApp1() {
//     function myApp2() {
//       function myApp3() {
//         function myApp4() {
//           function myApp5() {
//             console.log(myVar);
//           }
//           myApp5();
//         }
//         myApp4();
//       }
//       myApp3();
//     }
//     myApp2();
//   }
//   myApp1();
// }
// myApp();

// Default Parameter
// function addTwo(a, b = 5) {
//   return a + b;
// }
// const ans = addTwo(5);
// console.log(ans);

// rest  patameter
function addAll(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
const ans = addAll(4, 5, 6, 7);
console.log(ans);
