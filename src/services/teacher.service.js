const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class TeacherService {
  constructor() {}
  generate() {}

  async find() {
    const teacher = await models.Teacher.findAll({
      include: ["eventuality", "grade"],
      order: [["gradeId"]],
    });

    return teacher;
  }

  async findOne(ci) {
    const teacher = await models.Teacher.findByPk(ci, {
      include: ["eventuality", "grade"],
    });
    if (!teacher) {
      throw boom.notFound("Teacher not found");
    }
    return teacher;
  }

  async countTeachers() {
    const count = await models.Teacher.count();

    return count;
  }

  async create(data) {
    const newTeacher = await models.Teacher.create(data, {
      include: ["eventuality"],
    });

    return newTeacher;
  }

  async update(ci, changes) {
    const teacher = await this.findOne(ci);
    const updateTeacher = await teacher.update(changes);

    return updateTeacher;
  }

  async delete(ci) {
    const teacher = await this.findOne(ci);
    await teacher.destroy();

    return { ci };
  }
}

module.exports = TeacherService;
