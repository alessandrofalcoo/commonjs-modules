/* Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file. */

const myName = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName: lastName
    };
};

module.exports = { myName };
