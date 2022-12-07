const boom = require("@hapi/boom");
const { Logs } = require("../../db/models/logs.models");

const { models } = require("../../libs/sequelize");

class GradeService {
  constructor() {}
  generate() {}

  async find() {
    const grades = await models.Grade.findAll({
      include: ["period", "level", "students", "teacher"],
      order: ["levelId", "name"],
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
    await Logs.create({
      userId: 1,
      description: "Se ha creado un nuevo grado en la table de Grades",
      action: "CREATE",
      table: "GRADES",
    });
    return newGrade;
  }

  async update(id, changes) {
    const grade = await this.findOne(id);
    const updateGrade = await grade.update(changes);
    await Logs.create({
      userId: 1,
      description: "Grado actualizado en la tabla de Grades",
      action: "UPDATE",
      table: "GRADES",
    });
    return updateGrade;
  }

  async delete(id) {
    const grade = await this.findOne(id);
    await grade.destroy();
    await Logs.create({
      userId: 1,
      description: "Grado eliminado en la tabla de Grades",
      action: "DELETE",
      table: "GRADES",
    });
    return { id };
  }
}

module.exports = GradeService;
