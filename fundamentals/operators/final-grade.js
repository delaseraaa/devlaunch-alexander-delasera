/* Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes
en una escuela. Como parte de este desafio, primero configuras el entorno para recibir entradas del usuario
permitiendo que ingresen tres notas.

Luego, procesas estos datos para calcular el promedio de manera precisa.

Finalmente, presentas el resultado formateando con maximo dos decimales para asegurar una lectura clara

Si el usuario ingresa las calificaciones 80, 70 y 90 la salida sera 80 */

const prompt = require('prompt-sync')();

const MAX_DIGITS = 2

const textQualification = ('El promedio final de su curso es de  ')

let calificacion1 = parseFloat(prompt("Introduce la primera calificación: "));
let calificacion2 = parseFloat(prompt("Introduce la segunda calificación: "));
let calificacion3 = parseFloat(prompt("Introduce la tercera calificación: "));

const sumaPromedios = (calificacion1 + calificacion2 + calificacion3)
const promedioFinal = (sumaPromedios / 3)



console.log(` Promedio Final: ${textQualification} ${promedioFinal.toFixed(MAX_DIGITS)}\n
              
                                               `)
