const dog = {
name: 'Pipo',
age: 3,
color: c,
owner: {
FirsName: 'Anthony',
LastName: 'Soto'

},

bark: () => {
  return 'GUAU GUAUU!!!'

}

}

console.log(dog.bark())
console.log(dog.owner.FirsName)

console.log(['Size Type']) //* con parentesis cuadrados podemos entrar a los keys o atributos...
console.log(dog['age'])

const prompt = require('prompt-sync')();
const key = prompt ('Que dato quieres: ') //* 24/26 esto sirve para elegir el keys o atributo
console.log(dog[key])

dog.owner.firstName = 'Jose' //* ASIGNACION DE PROPIEDADES....


function dog() {
this.age = 3 
this.name = 'Oreo' //* 31 A LA 37, CREAR OBJETOS CON FUNCIONES
}

const dog = new dog()
console.log(dog.age)

const json = '{ "name": "Alex", "age": S}' //* NOTACION DE OBJETOS LINEA 39 Y 40
console.log (JSON.parse(json))    

const person = {name: 'Alex', age: 27} //* linea 42,43,44 es para clonar un objeto, se llama spread. 
const clone = {...person}
console.log(clone)





