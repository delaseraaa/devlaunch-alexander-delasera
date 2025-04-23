/* Se solicita al usuario que ingrese su fecha de nacimiento en el formato YYYY/MM/DD
Calculo de la edad: 
Se crea un objeto Date para la fecha de nacimiento y se calcula la edad restando restando el año de nacimiento
del año actual . tambien se verifica si ya ha pasado el cumpleaños del año actual, para ajustar la edad si es necesario.

Verificacion de edad:

se utiliza un if-else para determinar si la persona cumple con la edad legal para beber (18 años o mas)
Este programa permite que el proceso de verificacion de edad sea automatico y preciso, asegurando que so 

podes guiarte con esto:

const prompt = require (prompt-sync)()
const birthdaydate = prompt ("What is you birthdate in format (yyyy/mm/dd) ?:")

const birthday = new Date (birthDate)
const = today = new Date()

const age = today.getFullYear () - birthday.getFullYear () // takes the age of the person */

const prompt = require('prompt-sync')();

const birthdate = prompt ("What is you birthdate in format (YYYY/MM/DD)?: ")

const today = new Date()
const birthday = new Date(birthdate)

let age = today.getFullYear() - birthday.getFullYear()

const birthdayPassed = (
today.getMonth() > birthday.getMonth() ||
(
   today.getMonth() === birthday.getMonth() && 
   today.getDate() >= birthday.getDate() 
)
)


if (!birthdayPassed) {
    age-- 
}

if (age >= 18) {
    console.log('Bienvenido al bar de Moe')   
}   else { 
    console.log('No puedes pasar hasta tener 18 años o mas')

}

console.log(age)