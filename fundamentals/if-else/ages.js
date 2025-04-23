/* El programa solicita al usuario su edad con prompt-sync, la convierte a numero y 
utiliza el ternary operator para clasificar:

0-2 años. "You are a baby"
3 a 13 años: "You are a child"
14 a 17 años: "You are a teenager"
18 a 29 años: "You are a young adult"
30 a 60 años: "You are an adult"
Mas de 60 años: "You are an elderly"

Si la edad es menor que 0, muestra "The institution does not support your age, please try again"
Es una forma clara y util de categorizar edades*/ 

const prompt = require('prompt-sync')();
let age = Number(prompt('Please enter your age: '))

let numberCategory = (age < 0) ? "The Institution does not support your age, please try again" : 
                     (age <= 2) ? "You are a baby" :
                     (age <= 13) ? "Your are a child" :
                     (age <= 17) ? "Your are a teenager" :
                     (age <= 29) ? "Your are a young adult" :
                     (age <= 60) ? "Your are an adult" :
                     "You are a enderly" ;

                     console.log(numberCategory)
                     

                     

                   
