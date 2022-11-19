const boom = require("@hapi/boom");
const { Sequelize } = require("sequelize");

const { models } = require("../../libs/sequelize");

class EducationLevelService {
  constructor() {}
  generate() {}

  async find() {
    const educationLevels = await models.EducationLevel.findAll({
      // attributes: {
      //   include: [
      //     [Sequelize.fn("COUNT", Sequelize.col("grades.id")), "gradesCount"],
      //   ],
      // },
      // include: ["grade"],
      // group: ["grade.id"],
      include: [
        "grade",
        {
          association: "grade",
          include: ["students"],
        },
      ],
      order: ["id"],
    });

    return educationLevels;
  }

  async findOne(id) {
    const educationLevel = await models.EducationLevel.findByPk(id);
    if (!educationLevel) {
      throw boom.notFound("EducationLevel not found");
    }
    return educationLevel;
  }

  async create(data) {
    const newEducationLevel = await models.EducationLevel.create(data);

    return newEducationLevel;
  }

  async update(id, changes) {
    const educationLevel = await this.findOne(id);
    const updateEducationLevel = await educationLevel.update(changes);

    return updateEducationLevel;
  }

  async delete(id) {
    const educationLevel = await this.findOne(id);
    await educationLevel.destroy();

    return { id };
  }
}

module.exports = EducationLevelService;
