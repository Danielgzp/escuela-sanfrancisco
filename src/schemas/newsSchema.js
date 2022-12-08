const Joi = require("joi");
const { stringMessages } = require("utils/validations.messages");

const id = Joi.number().integer();
const userId = Joi.number().integer();
// const title = Joi.string().min(5).max(40).messages({
//   "string.base": "debe ser una cadena de texto",
//   "string.min": "debe ser mínimo de {{limit}} caracteres de largo",
//   "string.max": "{#label} debe ser de máximo {#limit} caracteres de largo",
//   "string.length": "debe ser exactamente de {{limit}} caracteres de largo",
//   "string.alphanum": "debe contener solo letras y números",
//   "string.token": "debe contener solo letras, números y guines bajos",
//   "string.regex.base":
//     'el valor "{{!value}}" no coincide con el pattern requerido: {{pattern}}',
//   "string.regex.name":
//     'el valor "{{!value}}" no coincide con el nombre de pattern {{name}}',
//   "string.email": "debe ser un email válido",
//   "string.uri": "debe sre una uri válida",
//   "string.uriCustomScheme":
//     "debe ser una uri válida con el esquema concidiente con el patrón {{scheme}}",
//   "string.isoDate": "debe ser una fecha en formato ISO 8601 válida",
//   "string.guid": "debe ser un GUID valido",
//   "string.hex": "debe contener solo caracteres hexadecimales",
//   "string.hostname": "deber ser un hostname válido",
//   "string.lowercase": "solo debe contener minúsculas",
//   "string.uppercase": "solo debe contener mayúsculas",
//   "string.trim": "no debe tener espacios en blanco delante o atrás",
//   "string.creditCard": "debe ser una tarjeta de crédito",
//   "string.ref": 'referencia "{{ref}}" que no es un númerp',
//   "string.ip": "debe ser una dirección ip válida con un CDIR {{cidr}}",
//   "string.ipVersion":
//     "debe ser una dirección ip válida de una de las siguientes versiones {{version}} con un CDIR {{cidr}}",
// });
const title = Joi.string().min(5).max(40).messages(stringMessages("Titulo"));
const info = Joi.string().min(10).max(300).messages(stringMessages("Descripción"));
const image = Joi.string().uri().messages(stringMessages("Image"));
const limit = Joi.number().integer().min(0);
const offset = Joi.number().integer().min(0);

const getNewsSchema = Joi.object({
  id: id.required(),
});

const createNewsSchema = Joi.object({
  title: title.required(),
  info: info.required(),
  image: image.required(),
  userId: userId.required(),
});

const updateNewsSchema = Joi.object({
  userId,
  title,
  info,
  image,
});
const queryNewsSchema = Joi.object({
  limit,
  offset,

  //Importante recordar que cualquiera de estos valores es opcional para ello hicimos una
  //validacion en el servicio
});

module.exports = {
  createNewsSchema,
  updateNewsSchema,
  getNewsSchema,
  queryNewsSchema,
};
