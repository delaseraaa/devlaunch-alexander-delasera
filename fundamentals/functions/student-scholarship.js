/* La universidad de harvard se ha dado cuenta de que manejar manualmente los criterios de becas 
no es eficiente . Ahora buscan una forma mejor de evaluar las numerosas solicitudes. Ahora buscan una mejor forma
de evaluar las numerosas solicitudes de estudiantes que reciben.

El nuevo sistema que planean implementar decidira eficientemente quien califica para las becas normalmente,
los estudiantes deben de ayudar en clases de laboratorio y aprobar cuatro materias 
con sus calificaciones promediadas para verificar la elegibilidad 

Las reglas de elgibilidad son estrictas 

- Los estudiantes necesitan tener un promedio de calificaciones de 9  mas en todas las materias, sin ninguna 
calificacion individual individual menor a 8, independiente como les fue como asistente de laboratorio 

-Alternativamente si tienen un promedio 8,5 o mas, aun pueden calificar si obtuvieron una calificacion de "A" o "B"
como asistente de laboratorio.

-Sin embargo , si obtuvieron una calificacion de "C" como asitente de laborario no calificaran para la beca,
incluso si sus calificaciones generales son buenas.*/

const prompt = require('prompt-sync')();

const grade1 = Number(prompt('Please enter your grade 1: '))
const grade2 = Number(prompt('Please enter your grade 2: '))
const grade3 = Number(prompt('Please enter your grade 3: '))
const laboratoryNote = prompt(`Enter your lab grade A-B-C --->  `).toUpperCase()

const NUMBER_AVG = 3
const MIN_GRADE = 8

function average(grade1, grade2, grade3) {
    const result = grade1 + grade2 + grade3;
    const avg = result / NUMBER_AVG;
    console.log("Promedio:", avg);
    return avg;
}

average(grade1, grade2, grade3);

const avg = (grade1, grade2, grade3)

if (laboratoryNote === "C") {
    console.log("Does not qualify for the scholarship");
}

else if (avg >= 9) {
console.log("Qualify for the scholarship")
}

else if (avg >= 8.5 && (laboratoryNote === "A" || laboratoryNote === "B")) {
console.log("Qualify for the scholarship")
} 

else if (avg < 8,5) {
    console.log("Does not qualify for the scholarship")
    }

else if (grade1 < MIN_GRADE || grade2 < MIN_GRADE || grade3 < MIN_GRADE ) {
    return false
}










