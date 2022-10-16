"use strict";

const { DataTypes, Sequelize } = require("sequelize");
const {
  REPRESENTANTS_TABLE,
  RepresentantsSchema,
} = require("../models/representants.model");
const { STUDENTS_TABLE, StudentsSchema } = require("../models/students.model");
// const {
//   RECORD_STUDENT_TABLE,
//   RecordStudentSchema,
// } = require("../models/studentRecord.model");

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(REPRESENTANTS_TABLE, RepresentantsSchema);
    await queryInterface.createTable(STUDENTS_TABLE, StudentsSchema);
    // await queryInterface.createTable(RECORD_STUDENT_TABLE, RecordStudentSchema);
  },

  async down(queryInterface) {
    // await queryInterface.dropTable(RECORD_STUDENT_TABLE);
    await queryInterface.dropTable(STUDENTS_TABLE);
    await queryInterface.dropTable(REPRESENTANTS_TABLE);
    //Colocar customers por encima de users, ya que una depende de la otra al momento de borrar
    // await queryInterface.dropTable(USER_TABLE);
  },
};