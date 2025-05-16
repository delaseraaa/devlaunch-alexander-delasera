/* En este ejercicio de programacion, se te encarga crear un programa que imprima 
los numeros del 1 al 10, clasificando cada numero como par e impar 

Para lograr esto, desarrollaras una funcion que itere a traves de los numeros por debajo
de un numero dado por parametro , en este caso  en numero 10  como ejemplo 

Verificando en cada iteracion si ese numero es divisible por 2, Si un numero es divisible por 2 
se clasifica como par o inpar 

Importante que la funcion creada devuelva la cadena de valores juntos y formateados en un solo string 
donde para cada iteracion habra un salto de linea 

NO es valido que la funcion contenga ningun console.log dentro, solo es posible afuera */

for (let i = 0; i <= 9; i++) { 


if(i % 2 === 0){

    console.log(`${i} is even`)

} else {

   console.log(`${i} is odd`)

}
}