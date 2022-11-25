"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hash = await bcrypt.hash("admin123", 10);
    const hash2 = await bcrypt.hash("gerente123", 10);

    await queryInterface.bulkInsert(
      "period",
      [
        {
          name: "2022/2023",
          create_at: new Date(),
        },
        {
          name: "2023/2024",
          create_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "level",
      [
        {
          name: "Pre-Escolar",
          create_at: new Date(),
        },
        {
          name: "Primaria",
          create_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "userRole",
      [
        {
          name: "superadmin",
          create_at: new Date(),
        },
        {
          name: "gerencia",
          create_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "role",
      [
        {
          name: "Director",
          create_at: new Date(),
        },
        {
          name: "Sub-Director",
          create_at: new Date(),
        },
        {
          name: "Coordinador",
          create_at: new Date(),
        },
        {
          name: "Administrativo",
          create_at: new Date(),
        },
        {
          name: "Obrero",
          create_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "daniel@gmail.com",
          password: hash,
          create_at: new Date(),
          role_user: 1,
        },
        {
          email: "naibys@gmail.com",
          password: hash2,
          create_at: new Date(),
          role_user: 2,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "staff",
      [
        {
          ci: "9604885",
          name: "Naibys",
          last_name: "Paez",
          address: "Cabudare",
          gender: "Femenino",
          birth_place: "Barquisimeto",
          phone: "04149876543",
          email: "naibys@gmail.com",
          role_id: 1,
          create_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "grade",
      [
        {
          name: "2do nivel",
          section: "A",
          create_at: new Date(),
          education_level_id: 1,
          period_id: 1,
        },
        {
          name: "2do nivel",
          section: "B",
          create_at: new Date(),
          education_level_id: 1,
          period_id: 1,
        },
        {
          name: "3er nivel",
          section: "A",
          create_at: new Date(),
          education_level_id: 1,
          period_id: 1,
        },
        {
          name: "3er nivel",
          section: "B",
          create_at: new Date(),
          education_level_id: 1,
          period_id: 1,
        },
        {
          name: "1er grado",
          section: "A",
          create_at: new Date(),
          period_id: 1,
          education_level_id: 2,
        },
        {
          name: "1er grado",
          section: "B",
          create_at: new Date(),
          period_id: 1,
          education_level_id: 2,
        },
        {
          name: "2do grado",
          section: "A",
          create_at: new Date(),
          period_id: 1,
          education_level_id: 2,
        },
        {
          name: "2do grado",
          section: "B",
          create_at: new Date(),
          period_id: 1,
          education_level_id: 2,
        },
        {
          name: "3er grado",
          section: "A",
          create_at: new Date(),
          period_id: 1,
          education_level_id: 2,
        },
        {
          name: "3er grado",
          section: "B",
          create_at: new Date(),
          period_id: 1,
          education_level_id: 2,
        },
        {
          name: "4to grado",
          section: "A",
          create_at: new Date(),
          period_id: 1,
          education_level_id: 2,
        },
        {
          name: "4to grado",
          section: "B",
          create_at: new Date(),
          period_id: 1,
          education_level_id: 2,
        },
        {
          name: "5to grado",
          section: "A",
          create_at: new Date(),
          period_id: 1,
          education_level_id: 2,
        },
        {
          name: "5to grado",
          section: "B",
          create_at: new Date(),
          period_id: 1,
          education_level_id: 2,
        },
        {
          name: "6to grado",
          section: "A",
          create_at: new Date(),
          period_id: 1,
          education_level_id: 2,
        },
        {
          name: "6to grado",
          section: "B",
          create_at: new Date(),
          period_id: 1,
          education_level_id: 2,
        },
      ],
      {}
    );
    // await queryInterface.bulkInsert("", [{}], {});
    // await queryInterface.bulkInsert("", [{}], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("staff", null, {});
    await queryInterface.bulkDelete("role", null, {});
    await queryInterface.bulkDelete("userRole", null, {});
    await queryInterface.bulkDelete("user", null, {});
    await queryInterface.bulkDelete("grade", null, {});
    await queryInterface.bulkDelete("level", null, {});
    await queryInterface.bulkDelete("period", null, {});
  },
};
