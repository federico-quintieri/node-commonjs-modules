const funzioneNames = (firstName, lastName) => {
    const oggetto = {
      firstName,
      lastName,
    };
    return oggetto;
  };
  
  // Esporto un oggetto con una proprietà chiamata e contenente la funzione fatta poco fa
  module.exports = {
    funzioneNames,
  };
  