"use strict";

const { DataTypes, Sequelize } = require("sequelize");
const { TEACHER_TABLE, TeacherSchema } = require("../models/teacher.model");
const {
  EVENTUALITY_TABLE,
  EventualitySchema,
} = require("../models/eventuality.model");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(TEACHER_TABLE, TeacherSchema);
    await queryInterface.createTable(EVENTUALITY_TABLE, EventualitySchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TEACHER_TABLE);
    await queryInterface.dropTable(EVENTUALITY_TABLE);
  },
};
