const message: string = "hello world" // variable tipada si dice STRING SOLO STRING O NUMBER Y SOLO NUMBER

console.log(message)

// FUNCION EJEMPLO TYPESCRIPT

function add(a: number, b:number): number {
return a + b;
}

let result = add(1, 2);
console,log(result);

//INTERFAZ

interface account {
    id: number
    name: string
    balance: number
    deposit: (amount) => void 
}

const createAccount = (id: number, name: string, balance: number = 0): account => {
return {
    id,
    name,
    balance,
    deposit: (amount: number) => {
    console.log(’Depositing ${amount}’)

    }
}
} 

 const aac1 = createAccount(1, '', 0)
 acc1.deposit('')


 /// TYPE

 interface account {
    id: number
    name: string
    balance: number
    deposit: (amount) => void 
}

////// ASI SE HACE UN PROMPT SYNC EN TYPESCRIPT

import promptSync from 'prompt-sync';


const prompt = promptSync();


const nombre = prompt('¿Cuál es tu nombre? ');
console.log(`Hola, ${nombre}!`);
