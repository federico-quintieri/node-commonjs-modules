// Importo l'oggetto dal file names.js e lo metto in una variabile obNames
const obNames = require("./names.js");
// Metto in una variabile il ritorno del metodo funzioneNames
const returnNames = obNames.funzioneNames("Bob", "Billy");
// Printo il return della funzione nel metodo Names
console.log(returnNames);
// In questo caso { firstName: 'Bob', lastName: 'Billy' }
// Questo perché la funzione ritorna un oggetto

// Importo  l'oggetto dal file hobbies.js e lo metto in una variabile di nome obHobbies
const obHobbies = require("./hobbies.js");
// Immagazzino il risultato del metodo funzioneHobbies
const returnHobbies = obHobbies.funzioneHobbies("Marco", "Luca", "Pietro");
// Lo mostro in console.log
console.log(returnHobbies);

// Facciamo una nuova funzione utilizzando quelle importate
const newFunction = () => {
  return { returnNames, returnHobbies };
};
// Mostro in console l'oggetto che la funzione precedente ci restituisce utilizzando le altre due funzioni importate prima
console.log("Valore restituito dalla funzione finale = ", newFunction());
