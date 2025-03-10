/* Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un array di stringhe contenenti gli hobby.
Esporta la funzione dal file. */

function myHobbies(hobbyOne, hobbyTwo, hobbyThree) {
    return {
        first: hobbyOne,
        second: hobbyTwo,
        third: hobbyThree
    }
}

module.exports = { myHobbies }