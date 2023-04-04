// const person = {
//   firstName: "Rahul",
//   age: 23,
//   about: function () {
//     console.log(
//       `Person name is ${this.firstName} and Person age is ${this.age}`
//     );
//   },
// };
// // console.log(person.about);
// person.about();

// .call() method
const user1 = {
  firstName: "Rahul",
  age: 23,
  about: function (hobby, favMusisian) {
    console.log(this.firstName, this.age, hobby, favMusisian);
  },
};
const user2 = {
  firstName: "Subham",
  age: 25,
};

// user1.about.call(user2, "guitar", "moazrt");

// Apply method
// user1.about.apply(user2, ["piano", "badsah"]);

// bind method
const func = user1.about.bind(user2, "piano", "badshah");
func();
