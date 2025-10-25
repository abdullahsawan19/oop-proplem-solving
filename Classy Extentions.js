class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

const cat1 = new Cat("Mr Whiskers");
console.log(cat1.speak());
