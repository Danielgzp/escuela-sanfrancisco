"use strict";

const { DataTypes, Sequelize } = require("sequelize");
const { USER_TABLE, UserSchema } = require("../models/user.model");
const { STAFF_TABLE, StaffSchema } = require("../models/staff.model");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.addColumn(STAFF_TABLE, "user_id", {
      field: "user_id",
      allowNull: true,
      type: Sequelize.DataTypes.INTEGER,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.removeColumn(STAFF_TABLE, "user_id");
  },
};
