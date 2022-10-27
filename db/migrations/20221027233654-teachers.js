"use strict";

const { DataTypes, Sequelize } = require("sequelize");
const { TEACHER_TABLE, TeacherSchema } = require("../models/teacher.model");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(TEACHER_TABLE, TeacherSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TEACHER_TABLE);
  },
};
