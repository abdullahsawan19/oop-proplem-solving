class Human {}

class Man extends Human {}

class Woman extends Human {}

class God {
  static create() {
    return [new Man(), new Woman()];
  }
}

const humans = God.create();

console.log(humans[0] instanceof Man);    // true
console.log(humans[1] instanceof Woman);  // true
console.log(humans[0] instanceof Human);  // true
console.log(humans[1] instanceof Human);  // true