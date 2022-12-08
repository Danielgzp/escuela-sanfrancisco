const Joi = require("joi");
const { stringMessages } = require("utils/validations.messages");

const id = Joi.number().integer();
const email = Joi.string().email().messages(stringMessages("Correo"));
const password = Joi.string().min(8).messages(stringMessages("La contraseña"));
const userRoleId = Joi.number().integer();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  userRoleId: userRoleId.required(),
});

const updateUserSchema = Joi.object({
  email: email,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
