const Joi = require("joi");
const {
  stringMessages,
} = require("utils/validations.messages");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(20).messages(stringMessages("El nombre del rol"));

const getRoleSchema = Joi.object({
  id: id.required(),
});

const createRoleSchema = Joi.object({
  name: name.required(),
});

const updateRoleSchema = Joi.object({
  name,
});

module.exports = { createRoleSchema, updateRoleSchema, getRoleSchema };
