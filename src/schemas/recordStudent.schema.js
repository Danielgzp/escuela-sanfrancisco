const Joi = require("joi");

const id = Joi.number().integer();
const studentSchoolarshipCi = Joi.number().integer()
const title = Joi.string().min(5).max(40);
const description = Joi.string().min(10).max(100);
const day = Joi.date();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const getRecordSchema = Joi.object({
  id: id.required(),
});

const createRecordSchema = Joi.object({
  studentSchoolarshipCi: studentSchoolarshipCi.required(),
  title: title.required(),
  description: description.required(),
  day: day.required(),
});

const updateRecordSchema = Joi.object({
  studentSchoolarshipCi,
  title,
  description,
  day,
});
const queryRecordSchema = Joi.object({
  limit,
  offset,

  //Importante recordar que cualquiera de estos valores es opcional para ello hicimos una
  //validacion en el servicio
});

module.exports = {
  createRecordSchema,
  updateRecordSchema,
  getRecordSchema,
  queryRecordSchema,
};
