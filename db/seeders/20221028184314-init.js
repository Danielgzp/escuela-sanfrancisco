"use strict";

const { DATE, NOW } = require("sequelize");
const { Model, DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "role",
      [
        {
          name: "director",
          create_at: true,
        },
        {
          name: "sub-director",
          create_at: new Date(),
        },
        {
          name: "coordinador",
          create_at: new Date(),
        },
        {
          name: "administrativo",
          create_at: new Date(),
        },
        {
          name: "publisher",
          create_at: new Date(),
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
          lastName: "Paez",
          address: "Cabudare",
          gender: "Femenino",
          birthPlace: "Barquisimeto",
          phone: "04149876543",
          email: "naibys@mail.com",
          roleId: 1,
          user: {
            email: "naibys@mail.com",
            password: "admin123",
          },
        },
      ],
      {}
    );
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
      "grade",
      [
        {
          name: "1er grado",
          section: "A",
          create_at: new Date(),
          period_id: 1,
        },
        {
          name: "1er grado",
          section: "B",
          create_at: new Date(),
          period_id: 1,
        },
        {
          name: "2do grado",
          section: "A",
          create_at: new Date(),
          period_id: 1,
        },
        {
          name: "2do grado",
          section: "B",
          create_at: new Date(),
          period_id: 1,
        },
        {
          name: "3er grado",
          section: "A",
          create_at: new Date(),
          period_id: 1,
        },
        {
          name: "3er grado",
          section: "B",
          create_at: new Date(),
          period_id: 1,
        },
        {
          name: "4to grado",
          section: "A",
          create_at: new Date(),
          period_id: 1,
        },
        {
          name: "4to grado",
          section: "B",
          create_at: new Date(),
          period_id: 1,
        },
        {
          name: "5to grado",
          section: "A",
          create_at: new Date(),
          period_id: 1,
        },
        {
          name: "5to grado",
          section: "B",
          create_at: new Date(),
          period_id: 1,
        },
        {
          name: "6to grado",
          section: "A",
          create_at: new Date(),
          period_id: 1,
        },
        {
          name: "6to grado",
          section: "B",
          create_at: new Date(),
          period_id: 1,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert("", [{}], {});
    await queryInterface.bulkInsert("", [{}], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("role", null, {});
  },
};
