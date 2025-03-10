/* Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file. */

function myName(firstName, lastName) {
    return {
        first: firstName,
        last: lastName
    }
}

module.exports = { myName };