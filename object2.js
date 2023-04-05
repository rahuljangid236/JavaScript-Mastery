const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = Object.create(obj1);
obj2.key3 = "value3";
// console.log(obj2.key1);
console.log(obj2.__proto__);

function hello() {
  console.log("hello world");
}

console.log(hello.name);
hello.myOwnProperty = "value unique value";
console.log(hello.myOwnProperty);
