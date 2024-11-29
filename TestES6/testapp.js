// Importo test.js per provare sintassi ES6
import metodoT from "./test.js";
// In una variabile inseriamo il metodo importato dal file test.js
const returnMetodo = metodoT(5, 2);
// Mostriamo a console la variabile
console.log("Risultato metodo importato con sintassi ES6 = ", returnMetodo);

// Importo testOb.js per provare sintassi ES6
import obEven from "./testOb.js";
const oggettoEsportato = obEven.isEven(5, 10);
console.log(
  "Oggetto contenente funzione esportato con sintassi ES6 = ",
  oggettoEsportato
);
