const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(20);

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
