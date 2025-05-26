/* En este ejercicio desarrollaras un programa que simula una carrera entre dos perros 
en una pista de 20 metros. Cada perro comenzara al final de la pista y se movera hacia la izquierda en cada iteracion del juego

Cada perro se movera entre 1 y 3 pasos en cada turno, esto se simulara utilizando una funcion que generara un numero aleatorio 

La pista representa como una cadena de caracteres que muestra la posicion actual de cada perro, utilizando emojis para los perros 
un perro amarillo y un perro blanco y huellas de perro para indicar el camino recorrido 

El programa debe determinar cuando un perro cruza la linea de meta, en este caso, se mostrara un mensaje indicando que perro hagando la carrera 
¡tenemos un ganador!

si hay empate debe de mostrar mesnaje de empate */

const maxMeters = 20;
const dogYellow = "🐕‍🦺";
const dogWhite = "🐶";
const fingerPrint = "🐾";

function randomNumber(): number {
  return Math.floor(Math.random() * 3) + 1; // entre 1 y 3
}

function showTrack(posAm: number, posBl: number): void {
  const showAm = fingerPrint.repeat(Math.max(0, maxMeters - posAm)) + dogYellow + " ".repeat(Math.max(0, posAm - 1));
  const showBl = fingerPrint.repeat(Math.max(0, maxMeters - posBl)) + dogWhite + " ".repeat(Math.max(0, posBl - 1));

  console.log("Yellow Dog Track:\n" + showAm);
  console.log("White Dog Track:\n" + showBl);
  console.log("-".repeat(40));
}

// Posiciones iniciales
let posAm = 0;
let posBl = 0;

// Carrera
while (posAm < maxMeters && posBl < maxMeters) {
  posAm += randomNumber();
  posBl += randomNumber();

  showTrack(posAm, posBl);
}

// Resultado
if (posAm >= maxMeters && posBl >= maxMeters) {
  console.log("¡Empate! 🟡🐶");
} else if (posAm >= maxMeters) {
  console.log("¡Ganó el perro amarillo! 🐕‍🦺🎉");
} else {
  console.log("¡Ganó el perro blanco! 🐶🎉");
}
