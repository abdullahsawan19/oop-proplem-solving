class Person {
  constructor(name, age) {
    this.name = name || "Unknown";
    this.age = age || 0;
  }
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

const person1 = new Person("Abdullah", 25);
console.log(person1.info);
