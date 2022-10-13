const Joi = require("joi");

const representantCI = Joi.string();
const representantName = Joi.string().min(3).max(30);
const representantLastName = Joi.string().min(3).max(30);
const representantPhone = Joi.string();
const representantEmail = Joi.string().email({ tlds: { allow: false } });

const createUserSchema = Joi.object({
  representantCI: representantCI.required(),
  representantName: representantName.required(),
  representantLastName: representantLastName.required(),
  representantPhone: representantPhone.required(),
  representantEmail: representantEmail.required(),
});

const updateUserSchema = Joi.object({
  representantCI,
  representantName,
  representantLastName,
  representantPhone,
  representantEmail,
});

const getUserSchema = Joi.object({
  representantCI: representantCI.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
