class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
}
class Men extends Animal {
    constructor(name, weight, lang) {
        super(name, weight); // dziedziczenie class Animal
        this.lang = lang;
    }
}
let dog = new Animal("szarik", 25);
let janusz = new Men("janusz", 75, "pl");
console.log(dog.name + " " + dog.weight);
console.log(janusz.name + " " + janusz.weight + " " + janusz.lang);