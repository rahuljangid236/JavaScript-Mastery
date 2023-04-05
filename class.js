class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about() {
    return `${this.firstName} is ${this.age} years old.`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "Song playing";
  }
}

const user1 = new CreateUser(
  "Rahul",
  "Jangid",
  "rahul@gmail.com",
  23,
  "udaipur"
);
console.log(user1.firstName);
