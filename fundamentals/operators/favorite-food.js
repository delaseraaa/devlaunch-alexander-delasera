/* Escribe un programa simple en JavaScript que examine las preferencias culinarias 
de tres personas: Maria, Pepe Y Malvern. El programa analiza tres condiciones:

¿Comparte Maria la misma comida favorita que tanto Pepe como Melvern?
¿La comida favorita de Maria coincide ya sea con la de pepe o con la de Melvern?
¿La preferencia de Maria es diferente tanto de la de Pepe como la de Melvern?

Recuerda pedir los valores al usuario para poder elegir diferentes combinaciones
ejemplo: si la comida favorita de Maria es la pizza, la de pepe es el pollo y el de 
Malvern es el pescado.

Los resultados de estas comparaciones se muestran luego, ofreciendo informacion 
sobre las similitudes y diferencias en las preferencias culinarias de los tres individuos
 
La salida del programa sera:

Does Maria share the same favorite food as both Pepe and Malvern? false:
Does Maria favorite food match either Pepe or Malvern? : false  
Does Maria preference differ from both Pepe and Malverns ?: true */

const prompt = require('prompt-sync')();

const FavoriteFoodMaria = prompt(`Whats is your favorite food Maria? `)
const FavoriteFoodPepe = prompt(`Whats is your favorite food Pepe? `)
const FavoriteFoodMalvern = prompt(`Whats is your favorite food Malvern? `)


const isMariaAndPepeSameFavFood = FavoriteFoodMaria === FavoriteFoodPepe
const isMariaAndMalvernSameFavFood = FavoriteFoodMaria === FavoriteFoodMalvern
const allMatch = isMariaAndMalvernSameFavFood && isMariaAndMalvernSameFavFood
const someMatch = isMariaAndPepeSameFavFood || isMariaAndMalvernSameFavFood
const NoMatch = !isMariaAndPepeSameFavFood && !isMariaAndMalvernSameFavFood

console.log(`Does Maria share the same favorite food as both Pepe and Malvern?: ${allMatch}`)
console.log(`Does Maria favorite food match either Pepe or Malvern?: ${someMatch}`)
console.log(`Does Maria preference differ from both Pepe and Malverns ?: ${NoMatch}`)
