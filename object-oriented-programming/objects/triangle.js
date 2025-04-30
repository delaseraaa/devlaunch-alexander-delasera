/* Un triangulo es una forma geometrica fundamental , es un poligono caracterizado por tener 3 lados y 3 vertices
De acuerdo con el teorema de la desigualdad del triangulo, en cualquier triangulo valido, la suma de las longitudes 
de dos lados cuales quiera debe ser mayor que la longitud del tercer lado.

Tu tarea es crear un objecto que represente un triangulo

Este objeto debe tener tres propiedades , cada una correspondiente a uno de sus lados 

Ademas se requiere una funcion para validar si los lados dados cumplen con el teorema de la desigualdad del triangulo

Por ejemplo, considera un triangulo con longitudes de lados : a = 7 , b = 10 y c = 5

Para determinar si estos lados forman un triangulo valido, evaluamos si la suma de cada par de lados es mayor que 
la longitud del lado restante 

En este caso verifiquemos si (b+c) > a , (a+c) > b y (a+b) > c

Si se cumplen las tres condiciones , entonces los lados efectivamente forman un triangulo */

const triangle = {
    sideA: 7,
    sideB: 10,
    sideC: 5,

    isValid: function() {
        const a = this.sideA;
        const b = this.sideB;
        const c = this.sideC;

        if ((a + b > c) && (a + c > b) && (b + c > a)) {
            console.log('El triángulo es válido');
            return true;
        } else {
            console.log('El triángulo NO es válido');
            return false;
        }
    }
};

console.log(triangle);
triangle.isValid();
