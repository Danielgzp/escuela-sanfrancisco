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
        "section",
        {
          association: "section",
          include: ["grade"],
        },
      ],
    });

    return students;
  }

  async findOne(id) {
    const student = await models.Students.findByPk(id, {
      include: ["representant", "record", "section"],
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

  async update(id, changes) {
    const student = await this.findOne(id);
    const updateStudent = await student.update(changes);
    return updateStudent;
  }

  async delete(id) {
    const student = await this.findOne(id);
    await student.destroy();

    return { id };
  }
}

module.exports = StudentsService;
