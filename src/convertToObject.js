function convertToObject(cssString) {
  const stylesObject = cssString
    .split(';')
    .map(decl => decl.trim())          // usuń spacje
    .filter(Boolean)                   // pomiń puste stringi
    .map(decl => {
      const colonIndex = decl.indexOf(':');
      if (colonIndex === -1) return null; // pomiń nieprawidłowe deklaracje
      const property = decl.slice(0, colonIndex).trim();
      const value = decl.slice(colonIndex + 1).trim();
      return [property, value];
    })
    .filter(Boolean)                   // usuń null z nieprawidłowych deklaracji
    .reduce((stylesObject, [property, value]) => {
      stylesObject[property] = value;
      return stylesObject;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
