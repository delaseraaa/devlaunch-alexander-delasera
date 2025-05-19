/* Es un casino en linea han implementado un juego que consiste en lanzar tres dados y anotar sus valores .
si la suma de estos valores es mayor o igual a 10 el apostador gana $10, de lo contrario pierde $15 

Para probar el programa a fondo, simularas50 intentos de personas jugando , cada jugador simula un intento 

Despues de que todos los jugadores hayan terminado sus intentos encuentra el resultado de las ganancias del casino empezando de cero 

El resultado puede ser tnato positivo como negativo , donde negativo representa que el casino perdio dinero ya que los jugadores ganaron 
mas dinero del que perdieron 

Si pruebas varias veces el codigo puedes topar con diferentes resultados como: 100, 150 , -50 , -25, 75

Pero mayormente dara numeros positivos que negativos en ganancias , porque recuerden la casa del casino nunca pierde... */

function simularIntentos(jugadores: number): number {
    let gananciasCasino = 0;

    for (let i = 0; i < jugadores; i++) {
      
        const dados = [3, 2, 1].map(() => Math.floor(Math.random() * 6) + 1);
        const sumaDados = dados.reduce((acc, val) => acc + val, 0);

        
        if (sumaDados >= 10) {
            gananciasCasino += 10;  
        } else {
            gananciasCasino -= 15;  
        }
    }

    return gananciasCasino;
}


const resultado = simularIntentos(50);
console.log(resultado);


