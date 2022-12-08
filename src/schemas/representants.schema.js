const Joi = require("joi");

const representantCI = Joi.string().max(9);
const representantName = Joi.string().min(3).max(30);
const representantLastName = Joi.string().min(3).max(30);
const representantPhone = Joi.string().min(11).max(14);
const representantEmail = Joi.string().email({ tlds: { allow: false } });

// const ci = Joi.string()
//   .max(9)
//   .messages(stringMessages("La cedula del representante"));
// const repName = Joi.string()
//   .min(3)
//   .max(30)
//   .messages(stringMessages("El nombre del representante"));
// const repLastName = Joi.string()
//   .min(3)
//   .max(30)
//   .messages(stringMessages("El apellido del representante"));
// const phone = Joi.string()
//   .min(11)
//   .max(14)
//   .messages(stringMessages("El telefono"));
// const email = Joi.string()
//   .email({ tlds: { allow: false } })
//   .messages(stringMessages("Correo"));

const createRepresentantSchema = Joi.object({
  representantCI: representantCI.required(),
  representantName: representantName.required(),
  representantLastName: representantLastName.required(),
  representantPhone: representantPhone.required(),
  representantEmail: representantEmail.required(),
});

const updateRepresentantSchema = Joi.object({
  representantCI,
  representantName,
  representantLastName,
  representantPhone,
  representantEmail,
});

const getRepresentantSchema = Joi.object({
  representantCI: representantCI.required(),
});

module.exports = { createRepresentantSchema, updateRepresentantSchema, getRepresentantSchema };
