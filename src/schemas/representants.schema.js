const Joi = require("joi");
const { stringMessages } = require("utils/validations.messages");

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
  .messages(stringMessages("El correo"));

const createRepresentantSchema = Joi.object({
  ci: ci.required(),
  repName: repName.required(),
  repLastName: repLastName.required(),
  phone: phone.required(),
  email: email.required(),
});

const updateRepresentantSchema = Joi.object({
  ci,
  repName,
  repLastName,
  phone,
  email,
});

const getRepresentantSchema = Joi.object({
  ci: ci.required(),
});

module.exports = {
  createRepresentantSchema,
  updateRepresentantSchema,
  getRepresentantSchema,
};
