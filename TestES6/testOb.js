const isEven = (num1, num2) => {
  return { PrimoNumero: num1 % 2 === 0, SecondoNumero: num2 % 2 === 0 };
};

// Faccio un oggetto in cui metto la funzione appena creata come proprietà
const oggettoEsportato = {
  isEven
};

// Esporto oggetto contenente la mia funzione come proprietà
export default oggettoEsportato;
