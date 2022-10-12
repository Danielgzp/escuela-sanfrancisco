const boom = require("@hapi/boom");

import { models } from "../../libs/sequelize";

class StudentsService {
  constructor() {}
  generate() {}

  async find() {
    const students = await models.Students.findAll();

    return students;
  }

  async findOne(id) {
    const student = await models.Students.findByPk(id);
    if (!student) {
      throw boom.notFound("Student not found");
    }
    return student;
  }

  async create(data) {
    const newStudent = await models.Students.create(data);

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
