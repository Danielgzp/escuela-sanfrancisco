const boom = require("@hapi/boom");
const { Sequelize } = require("sequelize");

const { models } = require("../../libs/sequelize");

class PeriodService {
  constructor() {}
  generate() {}

  async find() {
    const periods = await models.Period.findAll({
      // attributes: {
      //   include: [
      //     [Sequelize.fn("COUNT", Sequelize.col("grades.id")), "gradesCount"],
      //   ],
      // },
      // include: ["grade"],
      // group: ["grade.id"],
      order: ["id"],
    });

    return periods;
  }

  async findOne(id) {
    const period = await models.Period.findByPk(id);
    if (!period) {
      throw boom.notFound("Period not found");
    }
    return period;
  }

  async create(data) {
    const newPeriod = await models.Period.create(data);

    return newPeriod;
  }

  async update(id, changes) {
    const period = await this.findOne(id);
    const updatePeriod = await period.update(changes);

    return updatePeriod;
  }

  async delete(id) {
    const period = await this.findOne(id);
    await period.destroy();

    return { id };
  }
}

module.exports = PeriodService;
