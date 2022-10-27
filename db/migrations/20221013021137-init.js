"use strict";

const { DataTypes, Sequelize } = require("sequelize");
const { PERIOD_TABLE, PeriodSchema } = require("../models/period.model");
const { GRADE_TABLE, GradeSchema } = require("../models/grade.model");
const { SECTION_TABLE, SectionSchema } = require("../models/section.model");
const {
  REPRESENTANTS_TABLE,
  RepresentantsSchema,
} = require("../models/representants.model");
const { STUDENTS_TABLE, StudentsSchema } = require("../models/students.model");
const {
  RECORD_STUDENT_TABLE,
  RecordStudentSchema,
} = require("../models/recordStudent.model");

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PERIOD_TABLE, PeriodSchema);
    // await queryInterface.createTable(SECTION_TABLE, SectionSchema);
    await queryInterface.createTable(GRADE_TABLE, GradeSchema);
    await queryInterface.createTable(REPRESENTANTS_TABLE, RepresentantsSchema);
    //Esto es para crear un usuario admin por default al correr la migracio
    // const hash = await bcrypt.hash("admin123", 10);
    // await queryInterface.bulkInsert(USER_TABLE, [
    //   {
    //     email: "superadmin@mail.com",
    //     password: hash,
    //     role: "admin",
    //     create_at: new Date(),
    //   },
    // ]);

    //
    await queryInterface.createTable(STUDENTS_TABLE, StudentsSchema);
    await queryInterface.createTable(RECORD_STUDENT_TABLE, RecordStudentSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(RECORD_STUDENT_TABLE);
    // await queryInterface.dropTable(GRADE_TABLE);
    await queryInterface.dropTable(STUDENTS_TABLE);
    await queryInterface.dropTable(REPRESENTANTS_TABLE);
    await queryInterface.dropTable(GRADE_TABLE);
    // await queryInterface.dropTable(SECTION_TABLE);
    await queryInterface.dropTable(PERIOD_TABLE);

    //Colocar customers por encima de users, ya que una depende de la otra al momento de borrar
    // await queryInterface.dropTable(USER_TABLE);
  },
};
