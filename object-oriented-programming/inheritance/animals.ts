/* Un zoologico necesita un sistema para gestionar los animales y sus comportamientos 
debes modelar un conjunto de clases que representan distintos tipos de animales y sus caracterisiticas
todos los animales tienen un nombre, especie y edad. Ademas todos deben poder emitir un sonido y mostrar su informacion basica

Algunos animales , como los leones , pueden rugir y tienen una melena . Los elefantes pueden hacer sonar su trompa y tienen un tamaño especifico
(por ejemplo, pequeño, mediano o grande)

crea una clase base animal con las propiedades y metodos necesarios 

Extender la clase animal para crear clases especificas como leon y elefante que tengan comportamientos y propiedades particulares*/

class Animal {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    makeSound(): string {
      return "Some generic animal sound";
    }
  
    toString(): string {
      return `${this.name} is ${this.age} years old.`;
    }
  }
  
  class Lion extends Animal {
    title: string;
  
    constructor(name: string, title: string, age: number) {
      super(name, age);
      this.title = title;
    }
  
    makeSound(): string {
      return "Roar!";
    }
  
    toString(): string {
      return `${this.title} ${this.name} is ${this.age} years old and says ${this.makeSound()}`;
    }
  }
  
  const l1 = new Lion('Simba', 'King', 8);
  console.log(l1.makeSound());
  console.log(l1.toString());
  
