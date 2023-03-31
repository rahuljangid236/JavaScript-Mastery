const person = {
  firstName: "Rahul",
  gender: "Male",
  age: 23,
};

function printDeatails({ firstName, gender, age }) {
  console.log(firstName);
  console.log(gender);
  console.log(age);
}
printDeatails(person);
