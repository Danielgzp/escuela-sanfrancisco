const Joi = require("joi");

const id = Joi.number().integer();
const ci = Joi.string();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const address = Joi.string();
const gender = Joi.string();
const birthDate = Joi.number().integer();
const birthPlace = Joi.string();
const admissionDate = Joi.number().integer();
const houseProperty = Joi.string();

const getStudentSchema = Joi.object({
  id: id.required(),
});

const createStudentSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  address: address.required(),
  gender: gender.required(),
  birthDate: birthDate.required(),
  birthPlace: birthPlace.required(),
  admissionDate: admissionDate.required(),
  houseProperty: houseProperty.required(),
});

const updateStudentSchema = Joi.object({
  ci,
  name,
  lastName,
  address,
  gender,
  birthDate,
  birthPlace,
  admissionDate,
  houseProperty,
});

module.exports = {
  getStudentSchema,
  createStudentSchema,
  updateStudentSchema,
};
