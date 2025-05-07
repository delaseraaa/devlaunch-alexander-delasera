/* Horizon Innovations, una destacada empresa enfocada en el bienestar de los empleados 
esta desrrollando un sistema de seguimiento de salarios que busca mantener registros 
precisos de las remuneraciones de los empleados , incluyendo actualizaciones y modificaciones salariales

Para gestionar y manipular los datos salariales de manera eficiente, es util encapsularlos 
en un sistema de clases. Este enfoque proporciona una estructura clara y organizasa para manejar las 
operaciones relacionadas con los salarios, asegurando la modularidad y la mantenilidad del codigo 

Para implementar esto, crearemos una clase Employee con una variable principal llamada _salary 
que servira como la base para todos los calculos de salario en el sistema

Esta clase incluira dos metodos clave: un "getter" para recuperar el salario actual y un "setter" para
modificarlo. Es importante que el setter valide que el nuevo valor del salario sea positivo,
ya que no se permiten salarios negativos.

Adicionalmente, se incluira un metodo giveRaise para aunmentar el salario en una */

class Employee {
    constructor(
        private _salary: number,
        public firstName: string,
        public lastName: string
    ) {}

    set salary(salary: number) {
        if (salary > 0) {
            this._salary = salary;
        }
    }

    get salary() {
        return this._salary;
    }

    giveRaise(extra: number) {
    const newSalary = this._salary + extra
    this._salary = newSalary 
    return newSalary

    }
}

const e1 = new Employee(30000, 'Alex', 'De La Sera');
console.log(e1.giveRaise(3000000));

