/* Escribe un programa sencillo en JavaScript que calcule y muestre el indice de masa corporal (IMC)
de un usuario. El programa debe de solicitar al usuario su nombre, altura en metros y peso en kilogramos

Despues de calcular el IMC, el programa debe de mostrar un mensaje al usuario que incluya su nombre y
el valor de su IMC

Calcula el IMC utilizando la formula:

IMC: weight / height^2

Nombre: Jhon
Altura: 1.75
Peso: 70 */

const prompt = require('prompt-sync')();

const name = prompt('Digite su nombre ')
let weight = parseFloat(prompt('Digite su peso: '));
let height = parseFloat(prompt("Digite su estatura: "));

const imc = weight / Math.pow (height, 2)

console.log(`Hi ${name} your BMI is: ${imc.toFixed(2)}`)