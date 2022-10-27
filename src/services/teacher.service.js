const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class TeacherService {
  constructor() {}
  generate() {}

  async find() {
    const teacher = await models.Teacher.findAll({
      include: ["grade", "eventuality"],
    });

    return teacher;
  }

  async findOne(ci) {
    const teacher = await models.Teacher.findByPk(ci, {
      include: ["grade", "eventuality"],
    });
    if (!teacher) {
      throw boom.notFound("Teacher not found");
    }
    return teacher;
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
