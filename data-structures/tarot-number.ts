/* En el tarot se usa la numerologia para entender mejor unaa persona . Para encontrar su numero de tarot, observamos su fecha de nacimiento 
Al sumar los digitos de su fecha de nacimiento podemos encontrar un numero especial que los representa.

Para empezar, pensemos en alguien nacido el 28 de noviembre de 1989 para descubrir el numero, debemos seguir varios pasos:

Sumamos los numeros de su fecha de nacimiento el dia el mes y el año.
Entonces sumamos 28, 11 y 1989 obteniendo 2028.

Ahora descomponemos este numero grande en partes mas pequeñas asi que para 2028 sumamos 2 + 0 + 2 + 8 lo cual da 12

Finalmente, simplificamos este numero aun mas. para 12, sumamos 1 + 2 lo cual da 3 
Y ese es el numero especial que estamos buscando 

Recuerda utilizar bucles para reducir al maximo los calculos numericos realizados y validar que la fecha ingresada sea correcta, no puedes recibir
una fecha como 50/50/2020

Aunque si podrias recibir una fecha como 12/12/1000 -> ya que podria ser que alguien del futuro use tu codigo*/


import promptSync from 'prompt-sync';
const prompt = promptSync();

const dayOfBirth = Number(prompt("Day Of Birth: "));
const monthOfBirth = Number(prompt("Month Of Birth: "));
const yearOfBirth = Number(prompt("Year of Birth: "));


if (isNaN(dayOfBirth) || isNaN(monthOfBirth) || isNaN(yearOfBirth)) {
  console.log("Invalid input: all values must be numbers.");
  process.exit(1);
}

const date = new Date(yearOfBirth, monthOfBirth - 1, dayOfBirth);
if (
  date.getFullYear() !== yearOfBirth ||
  date.getMonth() !== monthOfBirth - 1 ||
  date.getDate() !== dayOfBirth
) {
  console.log("Not a valid date...");
  process.exit(1);
}


function sumOfDates(day: number, month: number, year: number): number {
  return day + month + year;
}


function sumDigitsOfNumber(num: number): number {
  return num
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, val) => acc + val, 0);
}


function reduceToSingleDigit(num: number): number {
  while (num >= 10) {
    num = sumDigitsOfNumber(num);
  }
  return num;
}

const total = sumOfDates(dayOfBirth, monthOfBirth, yearOfBirth);
const yearDigitsSum = sumDigitsOfNumber(yearOfBirth);
const reducedYearDigit = reduceToSingleDigit(yearOfBirth);

console.log(`Total (day + month + year): ${total}`);
console.log(`Sum of digits in year ${yearOfBirth}: ${yearDigitsSum}`);
console.log(`Number Special: ${reducedYearDigit}`);





