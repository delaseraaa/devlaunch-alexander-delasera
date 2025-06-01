/* En un entorno de laboratorio, los investigadores estan implementando una funcionalidad en linea 
destinada a identificar enfermedades geneticas en individuos 

Los genetistas normalmente realizan la tarea de buscar secuencias especificas dentro del ADN
de una persona para detectar mutaciones geneticas asociadas con varios trastornos

Por ejemplo pueden buscar secuencias de ADN distintivas que se sabe estan correlacionadas con enfermedades 
geneticas

Tu objetivo es desarrollar esta funcionalidad, en la cual recibiras una secuencia y deberas verificar 
su presencia dentro de la cadena de ADN proporcionada. La funcion debe devolver true si la secuencia se encuentra en la cadena de ADN
y false caso contrario
g
El ADN estara representado por una cadena de caracteres , donde cada caracter denota un nucleotido (por ejemplo, "gtggggggtttagaacagcag")

De igual manera la secuencia a buscar tambien estara representada como una cadena de caracteres , representando una serie mas corta de 
nucleotiodos por ejemplo "gtt"*/

const dna = ["gtggggggtttagaacagcag"];

const nucleotides = "cag";

function containsSequence(dnaArray, sequence) {
  for (let i = 0; i < dnaArray.length; i++) {
    if (dnaArray[i].includes(sequence)) {
      return true; 
    }
  }
  return false; 
}

console.log(containsSequence(dna, nucleotides));



