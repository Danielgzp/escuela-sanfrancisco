const Joi = require("joi");
const {
  stringMessages,
  dateMessages,
} = require("utils/validations.messages");

const id = Joi.number().integer();
const teacherCi = Joi.string()
  .min(1)
  .max(9)
  .messages(stringMessages("La cedula del profesor"));
const staffCi = Joi.string()
  .min(1)
  .max(9)
  .messages(stringMessages("La cedula del empleado"));
const title = Joi.string()
  .min(5)
  .max(40)
  .messages(stringMessages("El titulo de la eventualidad"));
const description = Joi.string()
  .max(200)
  .messages(stringMessages("La descripcion de la eventulidad"));
const day = Joi.date().messages(dateMessages("La fecha de al eventualidad"));

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const getEventualitychema = Joi.object({
  id: id.required(),
});

const createEventualitychema = Joi.object({
  teacherCi: teacherCi.optional(),
  staffCi: staffCi.optional(),
  title: title.required(),
  description: description.required(),
  day: day.required(),
});

const updateEventualitychema = Joi.object({
  teacherCi,
  staffCi,
  title,
  description,
  day,
});
const queryEventualitychema = Joi.object({
  limit,
  offset,
  //Importante recordar que cualquiera de estos valores es opcional para ello hicimos una
  //validacion en el servicio
});

module.exports = {
  createEventualitychema,
  updateEventualitychema,
  getEventualitychema,
  queryEventualitychema,
};
