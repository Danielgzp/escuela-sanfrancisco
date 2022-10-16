const Joi = require("joi");

const id = Joi.number().integer();
// const representantId = Joi.number().integer();
const schoolID = Joi.string();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const address = Joi.string();
const gender = Joi.string();
const birthDate = Joi.number().integer();
const birthPlace = Joi.string();
const admissionDate = Joi.number().integer();
const houseProperty = Joi.string();
// const representantCI = Joi.string();
const repName = Joi.string().min(3).max(30);
const repLastName = Joi.string().min(3).max(30);
const phone = Joi.string();
const email = Joi.string().email({ tlds: { allow: false } });

const getStudentSchema = Joi.object({
  id: id.required(),
});

const createStudentSchema = Joi.object({
  // schoolID: schoolID.required(),
  name: name.required(),
  lastName: lastName.required(),
  address: address.required(),
  gender: gender.required(),
  // birthDate: birthDate.required(),
  birthPlace: birthPlace.required(),
  // admissionDate: admissionDate.required(),
  houseProperty: houseProperty.required(),
  // representantId: representantId.required(),
  representant: Joi.object({
    // representantCI: representantCI.required(),
    repName: repName.required(),
    repLastName: repLastName.required(),
    phone: phone.required(),
    email: email.required(),
  }),
});

const updateStudentSchema = Joi.object({
  schoolID,
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
