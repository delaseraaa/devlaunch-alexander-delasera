interface Pet {
    name: string,
    species: string,
    age: number,

}

class Animal implements Pet {
    name: string;
    species: string;
    age: number;
  
    constructor(name: string, species: string, age: number) {
      this.name = name;
      this.species = species;
      this.age = age;
    }
  }

  