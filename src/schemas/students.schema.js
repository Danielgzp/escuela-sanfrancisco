const Joi = require("joi");
const {
  stringMessages,
  dateMessages,
  numberMessages,
} = require("utils/validations.messages");

const id = Joi.number().integer();
const representantCi = Joi.string().messages(
  stringMessages("La cedula del representnte")
);

const nativeCi = Joi.string()
  .allow(null)
  .allow("")
  .messages(stringMessages("La cedula"));
const schoolarshipCi = Joi.string()
  .max(12)
  .messages(stringMessages("La cédula escolar"));

const name = Joi.string().min(3).max(30).messages(stringMessages("El nombre"));
const lastName = Joi.string()
  .min(3)
  .max(30)
  .messages(stringMessages("El Apellido"));
const address = Joi.string()
  .min(5)
  .max(60)
  .messages(stringMessages("La dirección"));
const gender = Joi.string().messages(stringMessages("Genero"));
const birthDate = Joi.date().messages(dateMessages("La fecha de Nacimiento"));
const birthPlace = Joi.string()
  .min(5)
  .max(60)
  .messages(stringMessages("El lugar de nacimiento"));
const admissionDate = Joi.date().messages(dateMessages("La fecha de admision"));
const houseProperty = Joi.string()
  .min(3)
  .max(30)
  .messages(stringMessages("El tipo de propiedad"));
const ci = Joi.string()
  .max(9)
  .messages(stringMessages("La cedula del representante"));
const repName = Joi.string()
  .min(3)
  .max(30)
  .messages(stringMessages("El nombre del representante"));
const repLastName = Joi.string()
  .min(3)
  .max(30)
  .messages(stringMessages("El apellido del representante"));
const phone = Joi.string()
  .min(11)
  .max(14)
  .messages(stringMessages("El telefono"));
const email = Joi.string()
  .email({ tlds: { allow: false } })
  .messages(stringMessages("Correo"));
const representant = Joi.object({});

const studentId = Joi.number().integer();
const title = Joi.string().messages(
  stringMessages("El titulo de la eventualidad")
);
const description = Joi.string().messages(
  stringMessages("La descripcion de la eventualidad")
);
const day = Joi.string().messages(dateMessages("La fecha de la eventualidad"));

const gradeId = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();
const level = Joi.number().integer();
const filterGrade = Joi.number().integer().optional();
const section = Joi.string().optional();
const search = Joi.string();

const getStudentSchema = Joi.object({
  schoolarshipCi: schoolarshipCi.required(),
});

const createStudentSchema = Joi.object({
  schoolarshipCi: schoolarshipCi.required(),
  nativeCi: Joi.optional(),
  name: name.required(),
  lastName: lastName.required(),
  address: address.required(),
  gender: gender.required(),
  birthDate: birthDate.required(),
  birthPlace: birthPlace.required(),
  admissionDate: admissionDate.required(),
  houseProperty: houseProperty.required(),
  representantCi: representantCi.optional(),
  representant: {
    ci: ci.optional(),
    repName: repName.optional(),
    repLastName: repLastName.optional(),
    phone: phone.optional(),
    email: email.optional(),
  },
  record: Joi.array().optional(),
  gradeId: gradeId.required(),
});

const updateStudentSchema = Joi.object({
  schoolarshipCi,
  nativeCi,
  name,
  lastName,
  address,
  gender,
  birthDate,
  birthPlace,
  admissionDate,
  houseProperty,
  representantCi,
  representant: {
    ci,
    repName,
    repLastName,
    phone,
    email,
  },
  gradeId,
});

const queryStudentSchema = Joi.object({
  limit,
  offset,
  level,
  // filterGrade,
  // section,
  search,

  //Importante recordar que cualquiera de estos valores es opcional para ello hicimos una
  //validacion en el servicio
});
module.exports = {
  getStudentSchema,
  createStudentSchema,
  updateStudentSchema,
  queryStudentSchema,
};
