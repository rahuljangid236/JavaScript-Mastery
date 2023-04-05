// Only functions provide prototype property
function hello() {
  console.log("Hello World");
}
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function () {
  return "song";
};
console.log(hello.prototype);
console.log(hello.prototype.sing());

// if (hello.prototype) {
//   console.log("prototype present");
// } else {
//   console.log("not present");
// }

// const obj = {
//   key1: "value1",
//   key2: "value2",
// };

// if (obj.prototype) {
//   console.log("prototype present");
// } else {
//   console.log("not present");
// }
