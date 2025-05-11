//* Descripción: El programa elige un número aleatorio del 1 al 100, y el usuario tiene que adivinarlo.
//  Después de cada intento, el programa le dice al usuario si el número es muy alto, muy bajo, o correcto.

const prompt = require('prompt-sync')();

const number = Number(prompt('Enter a number: '))

let numberGame = Math.floor(Math.random() * 101);
console.log(numberGame);

if (number > numberGame) {
console.log("Very high number, keep trying")
} 

else if (number < numberGame) {
console.log("Very low number, keep trying")
} 

else if (number === numberGame){
console.log("CONGRATULATIONS!!!!")
}



