/* En este escenario, se te proporcionaran varias fracciones y tu tarea sera realizar diversas
operaciones con ellas , tales como suma , resta , multiplicacion y division.
El objetivo es obtener el numerador y el denominador resultantes de estas operaciones 
para lograrlo, deberas definir dos atributos: el numerador y el denominador .
Ademas implementaras metodos correspondientes para cada operacion , devolviendo un objeto 
resultante con el numerador y denominador calculados .

Dando la posibilidad de operar estas fracciones de 2 formas distintas , tanto de funciones aparte del objeto
como incluidos como parte de su funcional dentro del objeto mismo.

const fraction1 = createFraction(3, 4)
const fraction2 = createFraction(2, 3)

add(fraction1, fraction2)

const fraction3 = createFractionWithFunctions(3, 4)
const fraction4 = createFraction(2, 3)

fraction3 .add(fraction4) */


type Fraction = {
    numerator: number;
    denominator: number;
};


function createFraction(numerator: number, denominator: number): Fraction {
    return { numerator, denominator };
}


function add(f1: Fraction, f2: Fraction): Fraction {
    const numerator = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
    const denominator = f1.denominator * f2.denominator;
    return createFraction(numerator, denominator);
}


function subtract(f1: Fraction, f2: Fraction): Fraction {
    const numerator = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
    const denominator = f1.denominator * f2.denominator;
    return createFraction(numerator, denominator);
}


function multiply(f1: Fraction, f2: Fraction): Fraction {
    const numerator = f1.numerator * f2.numerator;
    const denominator = f1.denominator * f2.denominator;
    return createFraction(numerator, denominator);
}


function divide(f1: Fraction, f2: Fraction): Fraction {
    const numerator = f1.numerator * f2.denominator;
    const denominator = f1.denominator * f2.numerator;
    return createFraction(numerator, denominator);
}

    
const f1 = createFraction(3, 4);
const f2 = createFraction(2, 3);

console.log('Add:', add(f1, f2));
console.log('Subtract:', subtract(f1, f2));
console.log('Multiply:', multiply(f1, f2));
console.log('Divide:', divide(f1, f2));



