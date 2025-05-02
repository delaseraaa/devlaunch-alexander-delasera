/* Estas diseñando un sistema basico para gestionar cuentas bancarias de clientes.
cada cuenta bancaria tendra un identificador unico, un nombre del titular y un saldo
tu tarea es crear una funcion createAccount que genere un objeto de cuenta bancaria 
el objeto debe ser por medio de function declaration, con todas las propiedades y metodos deben estar definidos 
dentro de la funcion usando this.

Propiedades de la cuenta bancaria (dentro de la funcion usando this)

id: identficador unico de la cuenta 
holderName: Nombre del titular de la cuenta
balance: Saldo de la cuenta 

Metodos de la cuenta bancaria (dentro de la funcion this)

deposit(ammount): incrementa el saldo de la cuenta
withdraw(ammount): disminuye el saldo de la cuenta si hay suficientes fondos
transfer account (to Account, ammount): transfiere fondos de la cuenta actual a otra cuenta,si hay fondos disponibles.*/

// Objeto: Account ----- Propiedades: id, name, balance

function account(id, name, balance = 0) {
    this.id = id;
    this.name = name;
    this.balance = balance;

    this.deposit = (amount) => {
        this.balance += amount;
    };

    this.withdraw = (amount) => {
        if (this.balance >= amount) {
            this.balance -= amount;
            return amount;
        }
        return null;
    };

    this.transfer = (toAccount, amount) => {
        const cash = this.withdraw(amount);
        if (cash !== null) {
            toAccount.deposit(cash);
            return toAccount;
        }
        return null;
    };

    return this;
}


const account1 = new account(1, 'Alex', 10000);
const account2 = new account(2, 'Jamie', 5000);

console.log(account1);
account1.deposit(1000);
console.log(account1);
console.log(account1.withdraw(5000));
console.log(account1);


console.log(account1.transfer(account2, 3000));
console.log(account1);
console.log(account2);
