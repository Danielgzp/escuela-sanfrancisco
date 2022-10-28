const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class GradeService {
  constructor() {}
  generate() {}

  async find() {
    const grades = await models.Grade.findAll({
      include: ["period", "students", "teacher"],
    });

    return grades;
  }

  async findOne(id) {
    const grade = await models.Grade.findByPk(id, {
      include: ["period", "students", "teacher"],
    });
    if (!grade) {
      throw boom.notFound("grade not found");
    }
    return grade;
  }

  async create(data) {
    const newGrade = await models.Grade.create(
      data
      //     , {
      //   include: ["representant", "record"],
      // }
    );

    return newGrade;
  }

  async update(id, changes) {
    const grade = await this.findOne(id);
    const updateGrade = await grade.update(changes);

    return updateGrade;
  }

  async delete(id) {
    const grade = await this.findOne(id);
    await grade.destroy();

    return { id };
  }
}

module.exports = GradeService;
