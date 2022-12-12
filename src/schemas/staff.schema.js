const Joi = require("joi");
const {
  stringMessages,
  dateMessages,
  numberMessages,
} = require("utils/validations.messages");

const ci = Joi.string().min(3).max(10).messages(stringMessages("La cedula"));
const name = Joi.string().min(3).max(30).messages(stringMessages("El nombre"));
const lastName = Joi.string()
  .min(3)
  .max(30)
  .messages(stringMessages("El Apellido"));
const address = Joi.string()
  .min(3)
  .max(100)
  .messages(stringMessages("La direccion"));
const gender = Joi.string().messages(stringMessages("Sexo"));
const birthDate = Joi.date().messages(dateMessages("La fecha de nacimiento"));
const birthPlace = Joi.string()
  .min(3)
  .max(50)
  .messages(stringMessages("El lugar de nacimiento"));
const admissionDate = Joi.date().messages(
  dateMessages("La fecha de contratacion")
);
const phone = Joi.string()
  .min(11)
  .max(14)
  .messages(stringMessages("El telefono"));
const email = Joi.string()
  .email({ tlds: { allow: false } })
  .messages(stringMessages("Correo"));
const roleId = Joi.number().integer().messages(numberMessages("El id del rol"));
const eventuality = Joi.array();
const news = Joi.array();

const getStaffSchema = Joi.object({
  ci: ci.required(),
});

const createStaffSchema = Joi.object({
  ci: ci.required(),
  name: name.required(),
  lastName: lastName.required(),
  address: address.required(),
  gender: gender.required(),
  birthDate: birthDate.optional(),
  birthPlace: birthPlace.required(),
  admissionDate: admissionDate.optional(),
  phone: phone.required(),
  email: email.required(),
  roleId: roleId.required(),
  eventuality: eventuality.optional(),
  news: news.optional(),
});

const updateStaffSchema = Joi.object({
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
  roleId,
  eventuality,
  news,
});

module.exports = {
  getStaffSchema,
  createStaffSchema,
  updateStaffSchema,
};
