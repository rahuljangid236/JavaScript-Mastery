function myFunc2() {
  console.log("inside my func 2");
}

function myFunc(callback) {
  callback();
}
myFunc(myFunc2);
