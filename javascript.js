console.log(`Helllo! from your computer`)

let x = {};

//  Could be written as let x = new Object ();
console.log(Object.getPrototypeOf(x));

console.log(x.toString())
console.log(x.__proto__)

let y = [];
// Could be written as let y = new Array();

console.log(Object.getPrototypeOf(y))
console.log(y.__proto__.__proto__)
console.log(Array.prototype.isPrototypeOf(x));
console.log(y instanceof Array);


function Hero(name, level) {
    this.name = name;
    this.level = level;
}

function Movie(title, star, quality){
    this.title = title;
    this.star = star;
    this.quality = quality;
}

// let hero1 = new Hero('Bjorn', 1)

let movie1 = new Movie(`Top Gun`, `Tom Cruise`, `decent`);
let movie2 = new Movie(`American Sniper`, `Christian Bale`, `very good`);

console.log(Object.getPrototypeOf(movie2))

Hero.prototype.greet = function () {
    console.log(`${this.name} says hello.`);
}

Movie.prototype.review = function(){
    console.log(`The film: "${this.title}" starring ${this.star} is ${this.quality}`);
}

movie1.review();
movie2.review();


function Warrior(name, level, weapon) {
    //Chain constructor with call:
    Hero.call(this, name, level);

    //Add a new property:
    this.weapon = weapon;
}


function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}

Warrior.prototype.attack = function(){
    console.log(`${this.name} attacks with the ${this.weapon}`);
}

Healer.prototype.heal = function(){
    console.log(`${this.name} casts ${this.spell}.`);
}


const hero1 = new Warrior(`Bjorn`, 1, `axe`);
const hero2 = new Healer(`Kanin`, 1, `cure`);

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

hero2.heal();
hero1.attack();

hero1.greet();


function Bike(brand, model, type){
    this.brand = brand;
    this.model = model;
    this.type = type;
}

let bike1 = new Bike(`Trek`, `Slash`, `mtb`);
console.log(bike1);
