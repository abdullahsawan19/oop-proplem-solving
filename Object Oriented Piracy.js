class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  isWorthIt() {
    return this.draft - this.crew * 1.5 > 20;
  }
}

const titanic = new Ship(15, 10);
console.log("titanic:", titanic.isWorthIt()); // false

const blackPearl = new Ship(50, 10);
console.log("blackPearl:", blackPearl.isWorthIt()); // true 
