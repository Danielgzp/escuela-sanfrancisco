const Joi = require("joi");
const { stringMessages, dateMessages, numberMessages } = require("utils/validations.messages");

const ci = Joi.string().min(3).max(10).messages(stringMessages("La cédula"));
const name = Joi.string().min(3).max(30).messages(stringMessages("El nombre"));
const lastName = Joi.string()
  .min(3)
  .max(30)
  .messages(stringMessages("Los Apellidos"));
const address = Joi.string()
  .min(3)
  .max(100)
  .messages(stringMessages("La dirección"));
const gender = Joi.string().messages(stringMessages("Género"));
const birthDate = Joi.date().messages(dateMessages("La fecha de nacimiento"));
const birthPlace = Joi.string()
  .min(3)
  .max(50)
  .messages(stringMessages("Lugar de Nacimiento"));
const admissionDate = Joi.date().messages(
  dateMessages("La fecha de contratacion")
);
const phone = Joi.string().min(11).max(14).messages(stringMessages("El teléfono"));
const email = Joi.string()
  .email({ tlds: { allow: false } })
  .messages(stringMessages("Correo"));
const gradeId = Joi.number().integer().messages(numberMessages("El id del Grado"));
const eventuality = Joi.array().messages(stringMessages("Correo"));

const getTeacherSchema = Joi.object({
  ci: ci.required(),
});

const createTeacherSchema = Joi.object({
  ci: ci.required(),
  name: name.required(),
  lastName: lastName.required(),
  address: address.required(),
  gender: gender.required(),
  birthDate: birthDate.optional(),
  birthPlace: birthPlace.required(),
  admissionDate: admissionDate.optional(),
  phone: phone.required(),
  email: email.optional(),
  gradeId: gradeId.required(),
  eventuality: eventuality.optional(),
});

const updateTeacherSchema = Joi.object({
  ci,
  name,
  lastName,
  address,
  gender,
  birthDate,
  birthPlace,
  admissionDate,
  phone,
  email,
  eventuality,
  gradeId,
});

module.exports = {
  getTeacherSchema,
  createTeacherSchema,
  updateTeacherSchema,
};
