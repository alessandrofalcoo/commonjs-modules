/* Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto */

const { myName } = require('./names.js');
const { myHobbies } = require('./hobbies.js');

const myFunction = () => {
    const fullName = myName('Joe', 'Black')
    const hobbies = myHobbies('Basket', 'Videogames', 'Go out with friends')

    return {
        fullName,
        hobbies
    }
}

console.log(myFunction());



