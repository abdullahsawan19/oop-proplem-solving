class Ghost {
  constructor() {
    const colors = ["white", "yellow", "purple", "red"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    this.color = colors[randomIndex];
  }
}

const ghost1 = new Ghost();
console.log(ghost1.color);
