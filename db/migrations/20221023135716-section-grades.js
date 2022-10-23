"use strict";

const { DataTypes, Sequelize } = require("sequelize");
const { PERIOD_TABLE, PeriodSchema } = require("../models/period.model");
const { GRADE_TABLE, GradeSchema } = require("../models/grade.model");
const { SECTION_TABLE, SectionSchema } = require("../models/section.model");

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PERIOD_TABLE, PeriodSchema);
    await queryInterface.createTable(SECTION_TABLE, SectionSchema);
    await queryInterface.createTable(GRADE_TABLE, GradeSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(GRADE_TABLE);
    await queryInterface.dropTable(SECTION_TABLE);
    await queryInterface.dropTable(PERIOD_TABLE);
    //Colocar customers por encima de users, ya que una depende de la otra al momento de borrar
    // await queryInterface.dropTable(USER_TABLE);
  },
};
