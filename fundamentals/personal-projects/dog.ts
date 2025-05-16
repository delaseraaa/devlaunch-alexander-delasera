class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name); 
    }

    makeSound(): void {
        console.log("WAU WAU");
    }
}

const myDog = new Dog("Bruno Berrens");

myDog.makeSound(); 