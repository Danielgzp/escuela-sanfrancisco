"use strict";

import { REPRESENTANTS_TABLE, RepresentantsSchema } from "../models/representants.model";
import { STUDENTS_TABLE, StudentsSchema } from "../models/students.model"

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface) {
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

  },

  async down(queryInterface) {
    await queryInterface.dropTable(REPRESENTANTS_TABLE);
    await queryInterface.dropTable(STUDENTS_TABLE);
    //Colocar customers por encima de users, ya que una depende de la otra al momento de borrar
    // await queryInterface.dropTable(USER_TABLE);
  },
};
