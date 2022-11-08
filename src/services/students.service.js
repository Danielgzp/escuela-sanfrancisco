const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class StudentsService {
  constructor() {}
  generate() {}

  async find() {
    const students = await models.Students.findAll({
      include: [
        "representant",
        "record",
        "grade",
        {
          association: "grade",
          include: ["period"],
        },
      ],
    });

    return students;
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
