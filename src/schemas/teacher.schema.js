const Joi = require("joi");

const ci = Joi.string().min(3).max(10);
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const address = Joi.string();
const gender = Joi.string();
const birthDate = Joi.number().integer();
const birthPlace = Joi.string();
const admissionDate = Joi.number().integer();
const phone = Joi.string().min(11).max(11);
const email = Joi.string().email({ tlds: { allow: false } });
const gradeId = Joi.number().integer();
const eventuality = Joi.array();

const getTeacherSchema = Joi.object({
  ci: ci.required(),
});

const createTeacherSchema = Joi.object({
  ci: ci.required(),
  name: name.required(),
  lastName: lastName.required(),
  address: address.required(),
  gender: gender.required(),
  birthDate: birthDate.optional(),
  birthPlace: birthPlace.required(),
  admissionDate: admissionDate.optional(),
  phone: phone.required(),
  email: email.required(),
  gradeId: gradeId.required(),
  eventuality: eventuality.optional(),
});

const updateTeacherSchema = Joi.object({
  ci,
  name,
  lastName,
  address,
  gender,
  birthDate,
  birthPlace,
  admissionDate,
  phone,
  email,
  eventuality,
});

module.exports = {
  getTeacherSchema,
  createTeacherSchema,
  updateTeacherSchema,
};