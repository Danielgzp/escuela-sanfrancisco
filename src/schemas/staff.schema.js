const Joi = require("joi");

const ci = Joi.string().min(3).max(10);
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const address = Joi.string().min(3).max(100);
const gender = Joi.string();
const birthDate = Joi.date();
const birthPlace = Joi.string().min(3).max(50);
const admissionDate = Joi.date();
const phone = Joi.string().min(11).max(14);
const email = Joi.string().email({ tlds: { allow: false } });
const roleId = Joi.number().integer();
const eventuality = Joi.array();
const news = Joi.array();
const password = Joi.string().min(8);

const getStaffSchema = Joi.object({
  ci: ci.required(),
});

const createStaffSchema = Joi.object({
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
  roleId: roleId.required(),
  eventuality: eventuality.optional(),
  news: news.optional(),
});

const updateStaffSchema = Joi.object({
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
  roleId,
  eventuality,
  news,
});

module.exports = {
  getStaffSchema,
  createStaffSchema,
  updateStaffSchema,
};
