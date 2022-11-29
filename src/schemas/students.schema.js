const Joi = require("joi");

const id = Joi.number().integer();
const representantId = Joi.number().integer();

const schoolarshipCi = Joi.string();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const address = Joi.string();
const gender = Joi.string();
const birthDate = Joi.date();
const birthPlace = Joi.string();
const admissionDate = Joi.date();
const houseProperty = Joi.string();
const ci = Joi.string();
const repName = Joi.string().min(3).max(30);
const repLastName = Joi.string().min(3).max(30);
const phone = Joi.string();
const email = Joi.string().email({ tlds: { allow: false } });
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
  nativeCi: Joi.string().optional(),
  name: name.required(),
  lastName: lastName.required(),
  address: address.required(),
  gender: gender.required(),
  birthDate: birthDate.required(),
  birthPlace: birthPlace.required(),
  admissionDate: admissionDate.required(),
  houseProperty: houseProperty.required(),
  representantId: representantId.optional(),
  representant: {
    ci: ci.optional(),
    repName: repName.required(),
    repLastName: repLastName.required(),
    phone: phone.required(),
    email: email.required(),
  },
  record: Joi.array().optional(),
  gradeId: gradeId.required(),
});

const updateStudentSchema = Joi.object({
  schoolarshipCi,
  name,
  lastName,
  address,
  gender,
  birthDate,
  birthPlace,
  admissionDate,
  houseProperty,
  studentId,
  representantId,
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
