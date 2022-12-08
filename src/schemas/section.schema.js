const Joi = require("joi");
const {
  stringMessages,
  numberMessages,
} = require("utils/validations.messages");

const id = Joi.number().integer();
const periodId = Joi.number().integer().messages(numberMessages("El id del perrodo escolar"));
const name = Joi.string().min(1).max(1).messages(stringMessages("La seccion"));

const getSectionSchema = Joi.object({
  id: id.required(),
});

const createSectionSchema = Joi.object({
  name: name.required(),
  periodId: periodId.required(),
  grade: Joi.array().optional(),
});

const updateSectionSchema = Joi.object({
  name,
  periodId,
});

module.exports = { createSectionSchema, updateSectionSchema, getSectionSchema };
