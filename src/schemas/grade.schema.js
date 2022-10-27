const Joi = require("joi");

const id = Joi.number().integer();
const periodId = Joi.number().integer();
// const sectionId = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const section= Joi.string().min(1).max(1);

const getGradeSchema = Joi.object({
  id: id.required(),
});

const createGradeSchema = Joi.object({
  name: name.required(),
  periodId: periodId.required(),
  section: section.required()
  // sectionId: sectionId.required(),
});

const updateGradeSchema = Joi.object({
  name,
  periodId,
  section
});

module.exports = { createGradeSchema, updateGradeSchema, getGradeSchema };
