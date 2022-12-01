const Joi = require("joi");

const id = Joi.number().integer();
const teacherCi = Joi.string().min(1).max(9);
const staffCi = Joi.string().min(1).max(9);
const title = Joi.string().min(5).max(40);
const description = Joi.string().min(50).max(200);
const day = Joi.date();

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
