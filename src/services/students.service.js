const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class StudentsService {
  constructor() {}
  generate() {}

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
        "ci",
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
  }

  async findPreScool(query) {
    const options = {
      include: [
        // "representant",
        "grade",
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
        "ci",
      ],
      where: {
        gradeId: ["11", "12"]
      },
    };

    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const students = await models.Students.findAll(options);

    return students;
  }

  async countStudents() {
    const total = await models.Students.count();

    return total;
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

  async create(data) {
    const newStudent = await models.Students.create(data, {
      include: ["representant", "record"],
    });

    return newStudent;
  }

  async update(ci, changes) {
    const student = await this.findOne(ci);
    const updateStudent = await student.update(changes, {
      include: ["representant"],
    });

    return updateStudent;
  }

  async delete(ci) {
    const student = await this.findOne(ci);
    await student.destroy();

    return { ci };
  }
}

module.exports = StudentsService;
