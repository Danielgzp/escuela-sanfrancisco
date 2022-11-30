"use strict";

const { LOGS_TABLE, LogsSchema } = require("../models/logs.models");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(LOGS_TABLE, LogsSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(LOGS_TABLE);
  },
};
