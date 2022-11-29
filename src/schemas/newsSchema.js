const Joi = require("joi");

const id = Joi.number().integer();
const userId = Joi.number().integer();
const title = Joi.string().min(5).max(40);
const info = Joi.string().min(10).max(300);
const image = Joi.string();
const limit = Joi.number().integer();
const offset = Joi.number().integer();

const getNewsSchema = Joi.object({
  id: id.required(),
});

const createNewsSchema = Joi.object({
  userId: userId.required(),
  title: title.required(),
  info: info.required(),
  image: image.required(),
});

const updateNewsSchema = Joi.object({
  userId,
  title,
  info,
  image,
});
const queryNewsSchema = Joi.object({
  limit,
  offset,

  //Importante recordar que cualquiera de estos valores es opcional para ello hicimos una
  //validacion en el servicio
});

module.exports = {
  createNewsSchema,
  updateNewsSchema,
  getNewsSchema,
  queryNewsSchema,
};
