const Joi = require("joi");

const id = Joi.number().integer();
const teacherCi = Joi.string();
const staffCi = Joi.string();
const title = Joi.string().min(5).max(30);
const description = Joi.string().min(10).max(100);
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
