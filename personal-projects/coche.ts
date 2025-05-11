class Car {
    marca: string;
    motor: number;
    model: string;

constructor(marca: string, motor: number, model: string){

    this.marca = marca;
    this.motor = motor;
    this.model = model;

}}

const myCar = new Car("Toyota", 1600, "Prado")
console.log(myCar);

const myCar2 = new Car("Nissan", 2000, "Frontier")
console.log(myCar2);