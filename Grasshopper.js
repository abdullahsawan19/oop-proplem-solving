function Hero(name) {
  this.name = name || 'Hero';
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

const hero1 = new Hero("Abdullah");
console.log(hero1);

const hero2 = new Hero();
console.log(hero2);
