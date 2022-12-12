export const stringMessages = (title) => {
  const messages = {
    "string.empty": `${title} no puede estar vacío`,
    "string.base": `${title} debe ser una cadena de texto`,
    "string.min": `${title} debe ser mínimo de {#limit} carácteres de largo`,
    "string.max": `${title} debe ser de máximo {#limit} carácteres de largo`,
    "string.length": `${title} debe ser exactamente de {#limit} carácteres de largo`,
    "string.alphanum": `${title} debe contener solo letras y números`,
    "string.token": `${title} debe contener solo letras, números y guines bajos`,
    "string.regex.base":
      'el valor "{{!value}}" no coincide con el pattern requerido: {{pattern}}',
    "string.regex.name":
      'el valor "{{!value}}" no coincide con el nombre de pattern {{name}}',
    "string.email": `debe ser un email válido`,
    "string.uri": `La imagen debe ser una url válida`,
    "string.uriCustomScheme": `debe ser una uri válida con el esquema concidiente con el patrón {{scheme}}`,
    "string.isoDate": `debe ser una fecha en formato ISO 8601 válida`,
    "string.guid": `debe ser un GUID valido`,
    "string.hex": `debe contener solo carácteres hexadecimales`,
    "string.hostname": `deber ser un hostname válido`,
    "string.lowercase": `solo debe contener minúsculas`,
    "string.uppercase": `solo debe contener mayúsculas`,
    "string.trim": `no debe tener espacios en blanco delante o atrás`,
    "string.creditCard": `debe ser una tarjeta de crédito`,
    "string.ref": `referencia "{{ref}}" que no es un número`,
    "string.ip": `debe ser una dirección ip válida con un CDIR {{cidr}}`,
    "string.ipVersion": `debe ser una dirección ip válida de una de las siguientes versiones {{version}} con un CDIR {{cidr}}`,
  };

  return messages;
};

export const numberMessages = (title) => {
  const messages = {
    "number.base": `${title} debe ser un número`,
    "number.min": `${title} debe ser mayor o igual que {#limit}`,
    "number.max": `${title} debe ser menor o igual que {#limit}`,
    "number.less": `${title} debe ser menor a {#limit}`,
    "number.greater": `${title} debe ser mayor a {#limit}`,
    "number.float": `${title} debe ser un numero flotante`,
    "number.integer": `${title} debe ser un número entero`,
    "number.negative": `${title} debe ser un número negativo`,
    "number.positive": `${title} debe ser un número positivo`,
    "number.precision": `${title} no debe tener mas de {#limit} decimales`,
    "number.ref": `${title} referencia a "{{ref}}" que no es un número`,
    "number.multiple": `${title}debe ser un múltiplo de {{multiple}}`,
  };

  return messages;
};

export const dateMessages = (title) => {
  const messages = {
    "date.base": `${title} debe ser una fecha válida`,
    "date.min": `${title} debe ser mayor o igual a {#limit}`,
    "date.max": `${title} debe ser menor o igual que "{#limit}`,
    "date.isoDate": `${title} debe ser una fecha en formato ISO 8601`,
    "date.ref": `referencia a "{{ref}}", que no es una fecha válida`,
  };

  return messages;
};
