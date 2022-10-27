"use strict";

const { DataTypes, Sequelize } = require("sequelize");

const { ROLE_TABLE, RoleSchema } = require("../models/role.model");
const { STAFF_TABLE, StaffSchema } = require("../models/staff.model");
const {
  EVENTUALITY_TABLE,
  EventualitySchema,
} = require("../models/eventuality.model");
const { NEWS_TABLE, NewsSchema } = require("../models/news.model");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ROLE_TABLE, RoleSchema);
    await queryInterface.createTable(STAFF_TABLE, StaffSchema);
    await queryInterface.createTable(EVENTUALITY_TABLE, EventualitySchema);
    await queryInterface.createTable(NEWS_TABLE, NewsSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(NEWS_TABLE);
    await queryInterface.dropTable(EVENTUALITY_TABLE);
    await queryInterface.dropTable(STAFF_TABLE);
    await queryInterface.dropTable(ROLE_TABLE);
  },
};
