const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);

const getPeriodSchema = Joi.object({
  id: id.required(),
});

const createPeriodSchema = Joi.object({
  name: name.required(),
});

const updatePeriodSchema = Joi.object({
  name,
});

module.exports = { createPeriodSchema, updatePeriodSchema, getPeriodSchema };
