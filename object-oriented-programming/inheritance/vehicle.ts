/* Eres responsable de diseñar un sistema sencillo de gestion de vehiculos para una empresa de trasporte 
el sistema debe de representar diferentes tipos de vehiculos y sus comportamientos utilizando una
estructura
todos los vehiculos tienen un emoji, marca, modelo, y año de fabricacion 
Los vehiculos deben de poder arrancar y mostrar su informacion 
Los coches tienen un numero especifico de puertas y deben poder encender el aire acondicionado 
Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie)*/

class Vehicle {
    private emoji: string;
    private brand: string;
    private model: string;
    private year: number;
    private isOn: boolean;

    constructor(
        emoji: string,
        brand: string,
        model: string,
        year: number,
    ) {
        this.emoji = emoji;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isOn = false;
    }

    run() {
        this.isOn = true;
    }

    toString() {
        return `Nombre: ${this.emoji}\nMarca: ${this.brand}\nModelo: ${this.model}\nAño: ${this.year}`;
    }
}

class Car extends Vehicle {
    private isAirOn: boolean;
    private numOfDoors: number;

    constructor(
        emoji: string,
        brand: string,
        model: string,
        year: number,
        numOfDoors: number = 4,
    ) {
        super(emoji, brand, model, year);
        this.numOfDoors = numOfDoors;
        this.isAirOn = false;
    }
}

class Motorcycle extends Vehicle {
    constructor(
        emoji: string,
        brand: string,
        model: string,
        year: number,
    ) {
        super(emoji, brand, model, year);
    }

    wheelie() {
        return '¡Haciendo un caballito!';
    }
}

const car1 = new Car('🚗', 'Toyota', 'Tacoma', 2025);
const mtc1 = new Motorcycle('🏍️', 'Yamaha', 'Dt', 2025);

console.log(car1.toString());
console.log(mtc1.toString());
