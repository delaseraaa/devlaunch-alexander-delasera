/* En este ejercicio, crearas una funcion que reciba una cadena de texto y cuente el numero de vocales 
que contiene (tanto minusculas como mayusculas)

La funcion debera iterar a traves de cada caracter en la cadena dada y verificar si es una vocal (a,e,i,o,u) para facilitar la verificacion
puedes almacenar las vocales en un conjunto 

La funcion debe devolver un objeto con el total de vocales encontradas y un desglose de cuantas veces aparece cada vocal en la cadena */



function contarVocales(cadena: string): { total: number, detalle: { [vocal: string]: number } } {
 
  const vocales = new Set(['a', 'e', 'i', 'o', 'u']);

  
  const detalle: { [vocal: string]: number } = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  };

  let total = 0;


  for (const char of cadena.toLowerCase()) {
    if (vocales.has(char)) {
      detalle[char] += 1; 
      total += 1;         
    }
  }

 
  return {
    total,
    detalle
  };
}

const resultado = contarVocales("Hola Mundo AEIOU");
console.log(resultado);


