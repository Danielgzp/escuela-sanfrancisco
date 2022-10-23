const Joi = require("joi");

const id = Joi.number().integer();
const sectionId = Joi.number().integer();
const name = Joi.string().min(3).max(30);

const getGradeSchema = Joi.object({
  id: id.required(),
});

const createGradeSchema = Joi.object({
  name: name.required(),
  sectionId: sectionId.required(),
});

const updateGradeSchema = Joi.object({
  name,
  sectionId,
});

module.exports = { createGradeSchema, updateGradeSchema, getGradeSchema };
