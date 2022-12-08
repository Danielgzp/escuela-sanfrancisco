const Joi = require("joi");
const {
  stringMessages,
  numberMessages,
} = require("utils/validations.messages");

const id = Joi.number().integer();
const periodId = Joi.number()
  .integer()
  .messages(numberMessages("El id del periodo escolar"));
const levelId = Joi.number()
  .integer()
  .messages(numberMessages("El id del nivel de educacion"));
// const sectionId = Joi.number().integer();
const name = Joi.string()
  .min(3)
  .max(10)
  .messages(stringMessages("El nombre del grado"));
const section = Joi.string().length(1).messages(stringMessages("La seccion"));

const getGradeSchema = Joi.object({
  id: id.required(),
});

const createGradeSchema = Joi.object({
  name: name.required(),
  periodId: periodId.required(),
  section: section.required(),
  levelId: levelId.required(),
  // sectionId: sectionId.required(),
});

const updateGradeSchema = Joi.object({
  name,
  periodId,
  section,
  levelId,
});

module.exports = { createGradeSchema, updateGradeSchema, getGradeSchema };
