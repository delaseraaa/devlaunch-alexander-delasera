/* El programa solicita al usuario del 1 a 7 mediante prompt -sync 
utiliza una declaracion switch para mostrar el dia de la semana correspondiente o "invalid day"
si el numero no es valido . Ejemplo: 3 muestra "Wednesday" 8 muestra "invalid day" . ideal para identificar dias 
en programas simples */

const prompt = require('prompt-sync')();
const option = Number(prompt('Enter a number: '))

    switch(option) {
        case 1: 
        console.log('Monday')
        break;
        case 2:
        console.log('Tuesday')
        break;
        case 3:
        console.log('Wednesday')
        break;
        case 4:
        console.log('Thursday')
        break;
        case 5:
        console.log('Friday')
        break;
        case 6:
        console.log('Saturday')
        break;
        case 7:
        console.log('Sunday')
        break;
        default:
        console.error('Invalid Day')
        break;
    }

    