function convertToObject(cssString) {
    const result = {};
    const declarations = cssString.split(';');

    for (let declaration of declarations) {
        declaration = declaration.trim();
        if (!declaration) continue;
        const colonIndex = declaration.indexOf(':');
        if (colonIndex === -1) continue;

        const property = declaration.slice(0, colonIndex).trim();
        const value = declaration.slice(colonIndex + 1).trim();

        if (property && value) {
            result[property] = value;
        }
    }

    return result;
}

module.exports = convertToObject;
