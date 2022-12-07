const Joi = require("joi");

const id = Joi.number().integer();
const representantCi = Joi.string();
const schoolarshipCi = Joi.string().max(12);
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const address = Joi.string().min(5).max(60);
const gender = Joi.string();
const birthDate = Joi.date();
const birthPlace = Joi.string().min(5).max(60);
const admissionDate = Joi.date();
const houseProperty = Joi.string().min(3).max(30);
const ci = Joi.string().max(9);
const repName = Joi.string().min(3).max(30);
const repLastName = Joi.string().min(3).max(30);
const phone = Joi.string().min(11).max(14);
const email = Joi.string().email({ tlds: { allow: false } });
const nativeCi = Joi.string();
const representant = Joi.object({});

const studentId = Joi.number().integer();
const title = Joi.string();
const description = Joi.string();
const day = Joi.string();

const gradeId = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();
const level = Joi.number().integer();
const filterGrade = Joi.number().integer().optional();
const section = Joi.string().optional();
const search = Joi.string();

const getStudentSchema = Joi.object({
  schoolarshipCi: schoolarshipCi.required(),
});

const createStudentSchema = Joi.object({
  schoolarshipCi: schoolarshipCi.required(),
  nativeCi: Joi.optional(),
  name: name.required(),
  lastName: lastName.required(),
  address: address.required(),
  gender: gender.required(),
  birthDate: birthDate.required(),
  birthPlace: birthPlace.required(),
  admissionDate: admissionDate.required(),
  houseProperty: houseProperty.required(),
  representantCi: representantCi.optional(),
  representant: {
    ci: ci.optional(),
    repName: repName.optional(),
    repLastName: repLastName.optional(),
    phone: phone.optional(),
    email: email.optional(),
  },
  record: Joi.array().optional(),
  gradeId: gradeId.required(),
});

const updateStudentSchema = Joi.object({
  schoolarshipCi,
  nativeCi,
  name,
  lastName,
  address,
  gender,
  birthDate,
  birthPlace,
  admissionDate,
  houseProperty,
  representantCi,
  representant: {
    ci,
    repName,
    repLastName,
    phone,
    email,
  },

  gradeId,
});

const queryStudentSchema = Joi.object({
  limit,
  offset,
  level,
  // filterGrade,
  // section,
  search,

  //Importante recordar que cualquiera de estos valores es opcional para ello hicimos una
  //validacion en el servicio
});
module.exports = {
  getStudentSchema,
  createStudentSchema,
  updateStudentSchema,
  queryStudentSchema,
};
