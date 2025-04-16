/* Escribe un programa en JavaScript que solicite al usuario ingresar el numero de dias y calcule
el numero equivalente de meses y dias restantes, considerando que un mes consta de 30 dias.

Este programa utiliza el modulo prompt-sync para recibir interactivamente la entrada del usuario
Despues de calcular la cantidad de meses y dias restantes segun la entrada, el programa muestra un mensaje al usuario
indicando el equivalente en meses y dias restantes.

Como pista puedes usar Math.floor() para redondear el resultado a un numero entero
si el usuario ingresa 100, la salida sera ; 100 days are 3 months and 10 dias. */ 

const  DAYS_PER_MONTH = 30 

const prompt = require('prompt-sync')();
let days = parseInt(prompt('# Days: '));

const months = Math.floor(days / DAYS_PER_MONTH)

const daysLeft = days % DAYS_PER_MONTH 

console.log(`${days} days are ${months} months and ${daysLeft} days`)


