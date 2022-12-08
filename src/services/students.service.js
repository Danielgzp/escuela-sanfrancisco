const boom = require("@hapi/boom");
const { Op } = require("sequelize");
// const faker = require("faker");
import { faker } from "@faker-js/faker";
import { Logs } from "../../db/models/logs.models";

const { models } = require("../../libs/sequelize");

class StudentsService {
  constructor() {
    this.students = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.students.push({
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        lastName: faker.name.lastName(),
        address: faker.address.direction(),
        gener: faker.name.gender(),
        birthData: faker.date.birthdate(),
        birthPlace: faker.address.cityName(),
        admissionDate: faker.date.recent(),
        houseProperty: faker.name.jobTitle(),
        gradeId: faker.datatype.number(),
      });
      //      schoolarshipCi: schoolarshipCi.required(),
      // nativeCi: Joi.optional(),
      // name: name.required(),
      // lastName: lastName.required(),
      // address: address.required(),
      // gender: gender.required(),
      // birthDate: birthDate.required(),
      // birthPlace: birthPlace.required(),
      // admissionDate: admissionDate.required(),
      // houseProperty: houseProperty.required(),
      // representantId: representantId.optional(),
      // representant: {
      //   ci: ci.optional(),
      //   repName: repName.required(),
      //   repLastName: repLastName.required(),
      //   phone: phone.required(),
      //   email: email.required(),
      // },
      // record: Joi.array().optional(),
      // gradeId: gradeId.required(),
    }
  }

  async find(query) {
    const options = {
      include: [
        // "representant",
        // "record",
        "grade",
        // "record",
        {
          association: "grade",
          include: ["period"],
        },
      ],
      order: [["gradeId"]],
      attributes: [
        "name",
        "lastName",
        "birthPlace",
        "birthDate",
        "admissionDate",
        "id",
        "gender",
        "nativeCi",
        "schoolarshipCi",
      ],
      // where: {},
    };

    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const students = await models.Students.findAll(options);

    return students;
    // return this.students;
  }

  async findOne(ci) {
    const student = await models.Students.findByPk(ci, {
      include: ["representant", "record", "grade"],
    });
    if (!student) {
      throw boom.notFound("Student not found");
    }
    return student;
  }
  async countStudents() {
    const count = await models.Students.count();

    return count;
  }
  async findByLevel(query) {
    const { limit, offset, level } = query;
    const options = {
      include: [
        "representant",
        "grade",
        {
          association: "grade",
          attributes: ["name", "section"],
          include: [
            "period",
            {
              association: "period",
              attributes: ["name"],
            },
            "level",
            {
              association: "level",
              attributes: ["name"],
            },
          ],
          where: {
            levelId: [`${level}`],
          },
        },
      ],
      order: [["gradeId"]],
      attributes: [
        "name",
        "lastName",
        "birthPlace",
        "birthDate",
        "admissionDate",
        "address",
        "id",
        "gender",
        "nativeCi",
        "schoolarshipCi",
      ],
    };

    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const students = await models.Students.findAll(options);

    return students;
  }

  async filterStudents(query) {
    // console.log(query);
    // console.log(filterGrade);

    const { search } = query;
    console.log(query);
    console.log(search);

    const options = {
      include: [
        // "representant",
        "grade",
        {
          association: "grade",

          // where: {
          //   name: [`${query}`],
          //   section: [`${query}`],
          // },
          attributes: ["name", "section"],
          order: [["name"]],
          include: [
            "period",
            {
              association: "period",
              attributes: ["name"],
            },
            "level",
            {
              association: "level",
              attributes: ["name"],
            },
          ],
        },
      ],

      attributes: [
        "name",
        "lastName",
        "birthDate",
        "gender",
        "nativeCi",
        "schoolarshipCi",
        "gradeId",
        "id",
        "address",
        "birthPlace",
      ],
      where: {
        [Op.or]: [
          {
            name: {
              [Op.substring]: query.toUpperCase(),
            },
          },
          {
            lastName: {
              [Op.substring]: query.toUpperCase(),
            },
          },
        ],
        // name: {
        //   [Op.substring]: "AA",
        // },
        // $and: [{ name: query }, { lastName: query }],
      },
    };

    const students = await models.Students.findAll(options);

    return students;
  }
  async filterStudentsCi(query) {
    // console.log(query);
    // console.log(filterGrade);

    // const { search } = query;

    const options = {
      include: [
        // "representant",
        "grade",
        {
          association: "grade",

          // where: {
          //   name: [`${query}`],
          //   section: [`${query}`],
          // },
          attributes: ["name", "section"],
          order: [["name"]],
          include: [
            "period",
            {
              association: "period",
              attributes: ["name"],
            },
            "level",
            {
              association: "level",
              attributes: ["name"],
            },
          ],
        },
      ],

      attributes: [
        "name",
        "lastName",
        "birthDate",
        "gender",
        "nativeCi",
        "schoolarshipCi",
        "gradeId",
        "id",
        "address",
        "birthPlace",
      ],
      where: {
        nativeCi: {
          [Op.ne]: null,
        },

        // name: {
        //   [Op.substring]: "AA",
        // },
        // $and: [{ name: query }, { lastName: query }],
      },
    };

    const students = await models.Students.findAll(options);

    return students;
  }

  async filterStudentsNoCi(query) {
    // console.log(query);
    // console.log(filterGrade);

    // const { search } = query;

    const options = {
      include: [
        // "representant",
        "grade",
        {
          association: "grade",

          // where: {
          //   name: [`${query}`],
          //   section: [`${query}`],
          // },
          attributes: ["name", "section"],
          order: [["name"]],
          include: [
            "period",
            {
              association: "period",
              attributes: ["name"],
            },
            "level",
            {
              association: "level",
              attributes: ["name"],
            },
          ],
        },
      ],

      attributes: [
        "name",
        "lastName",
        "birthDate",
        "gender",
        "nativeCi",
        "schoolarshipCi",
        "gradeId",
        "id",
        "address",
        "birthPlace",
      ],
      where: {
        nativeCi: {
          [Op.is]: null,
        },

        // name: {
        //   [Op.substring]: "AA",
        // },
        // $and: [{ name: query }, { lastName: query }],
      },
    };

    const students = await models.Students.findAll(options);

    return students;
  }
  async countPreScool() {
    const total = await models.Students.count({
      include: [
        // "representant",
        "grade",
        {
          association: "grade",
          attributes: ["name", "section"],
          include: [
            "period",
            {
              association: "period",
              attributes: ["name"],
            },
            "level",
            {
              association: "level",
              attributes: ["name"],
            },
          ],
          where: {
            levelId: [`1`],
          },
        },
      ],
    });

    return total;
  }

  async countPrimary() {
    const total = await models.Students.count({
      include: [
        // "representant",
        "grade",
        {
          association: "grade",
          attributes: ["name", "section"],
          include: [
            "period",
            {
              association: "period",
              attributes: ["name"],
            },
            "level",
            {
              association: "level",
              attributes: ["name"],
            },
          ],
          where: {
            levelId: [`2`],
          },
        },
      ],
    });

    return total;
  }

  async findByGrade(filterGrade, section) {
    const options = {
      include: [
        "representant",
        "grade",
        {
          association: "grade",
          attributes: ["name", "section"],
          where: {
            name: {
              [Op.like]: `%${filterGrade}%`,
            },
            section: {
              [Op.like]: `%${section}%`,
            },
          },
          include: [
            "period",

            {
              association: "period",
              attributes: ["name"],
            },
            "level",
            {
              association: "level",
              attributes: ["name"],
            },
            "teacher",
            { association: "teacher", attributes: ["name", "lastName"] },
          ],
        },
      ],
      order: [["lastName"]],
      attributes: [
        "name",
        "lastName",
        "birthDate",
        "gender",
        "nativeCi",
        "schoolarshipCi",
        "gradeId",
        "id",
      ],
    };

    const students = await models.Students.findAll(options);

    return students;
  }

  async create(data, userId) {
    const newStudent = await models.Students.create(data, {
      include: ["representant", "record"],
    });
    await Logs.create({
      userId: userId,
      description: "Ha creado un nuevo estudiante en la tabla de estudiantes",
      action: "CREATE",
      table: "STUDENTS",
    });

    return newStudent;
  }

  async update(ci, changes, userId) {
    const student = await this.findOne(ci);
    const updateStudent = await student.update(changes, {
      include: ["representant"],
    });

    await Logs.create({
      userId: userId,
      description: "Ha actualizado un estudiante en la tabla de estudiantes",
      action: "UPDATE",
      table: "STUDENTS",
    });

    return updateStudent;
  }

  async delete(ci, userId) {
    const student = await this.findOne(ci);
    await student.destroy();

    await Logs.create({
      userId: userId,
      description: "Estudiante eliminado de la tabla de estudiantes",
      action: "DELETE",
      table: "STUDENTS",
    });

    return { ci };
  }
}

module.exports = StudentsService;
