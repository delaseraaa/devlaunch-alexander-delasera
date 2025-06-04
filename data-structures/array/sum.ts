/* Crea un programa que sume los numeros en las pocisiones correspondientes de dos arreglos 

Esto siginifica sumar el numero en el indice 0 del primer arreglo con el numero con el numero en el indice 0
del segundo arreglo y asi sucesivamente 

Asegurate de que el programa puede manejar arreglos de diferentes longitudes y sume los numeros correctamente. Adema incluye  manejo de errores
para abordar situaciones como arreglos vacios o arreglos con valores numericos

[1,0,2,3,4] + [3,5,6,7,8,13,9] = [4,5,8,10,12,13,9] */

function sumarArreglos(arr1: any[], arr2: any[]): number[] {
    if (arr1.length === 0 && arr2.length === 0) {
        throw new Error("Ambos arreglos están vacíos.");
    } else if (arr1.length === 0) {
        throw new Error("El primer arreglo está vacío.");
    } else if (arr2.length === 0) {
        throw new Error("El segundo arreglo está vacío.");
    }

  
    arr1.forEach((valor, i) => {
        if (typeof valor !== "number") {
            throw new Error(`El valor '${valor}' en el arreglo 1 en la posición ${i} no es numérico.`);
        }
    });

    arr2.forEach((valor, i) => {
        if (typeof valor !== "number") {
            throw new Error(`El valor '${valor}' en el arreglo 2 en la posición ${i} no es numérico.`);
        }
    });

    const maxLen = Math.max(arr1.length, arr2.length);
    const resultado: number[] = [];

    for (let i = 0; i < maxLen; i++) {
        const valor1 = i < arr1.length ? arr1[i] : 0;
        const valor2 = i < arr2.length ? arr2[i] : 0;
        resultado.push(valor1 + valor2);
    }

    return resultado;
}


const arreglo1 = [1, 0, 2, 3, 4];
const arreglo2 = [3, 5, 6, 7, 8, 13, 9];

try {
    const resultado = sumarArreglos(arreglo1, arreglo2);
    console.log("Resultado:", resultado);
} catch (error) {
    console.error("Error:", (error as Error).message);
}



 