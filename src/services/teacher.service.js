const boom = require("@hapi/boom");
const { Logs } = require("../../db/models/logs.models");

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

    await Logs.create({
      userId: 1,
      description: "Ha creado un profesor/a en la tabla de maestros",
      action: "CREATE",
      table: "TEACHERS",
    });

    return newTeacher;
  }

  async update(ci, changes) {
    const teacher = await this.findOne(ci);
    const updateTeacher = await teacher.update(changes);
    await Logs.create({
      userId: 1,
      description: "Ha actualizado un profesor/a en la tabla de maestros",
      action: "UPDATE",
      table: "TEACHERS",
    });

    return updateTeacher;
  }

  async delete(ci) {
    const teacher = await this.findOne(ci);
    await teacher.destroy();

    await Logs.create({
      userId: 1,
      description: "Profesor/a en la tabla de maestros",
      action: "DELETE",
      table: "TEACHERS",
    });
    return { ci };
  }
}

module.exports = TeacherService;
