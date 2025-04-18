/* Escribe un programa simple en javascript que evalue el valor de una variable llamada "n"
verifica si el numero es positivo, negativo o cero, y muestra un mensaje correspondiente 
basado en la siguiente evaluacion: 

Si el numero es mayor que cero, imprime "positivo"
Si el numero es menor que cero, imprime "negativo"
Si el numero es exactamente cero, imprime "cero"

Si la variable no es un numero , imprime un mensaje de error; "Por favor introduce un numero"
*/

const prompt = require('prompt-sync')();

const number = Number(prompt('Enter a number: '))


if (isNaN(number)){
    console.log('Please introduce a number')
} else if (number > 0) {
    console.log('Positive')
} else if (number < 0) {
    console.log('Negative')
} else  {
    console.log('Cero')  
} 
