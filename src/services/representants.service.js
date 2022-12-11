const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class RepresentantsService {
  constructor() {}
  generate() {}

  async find() {
    const representants = await models.Representants.findAll({
      include: ["students"],
    });

    return representants;
  }

  async findOne(ci) {
    const representant = await models.Representants.findByPk(ci);
    if (!representant) {
      throw boom.notFound("Representante no encontrado");
    }
    return representant;
  }

  async create(data) {
    const newRepresentant = await models.Representants.create(data);

    return newRepresentant;
  }

  async update(ci, changes) {
    const representant = await this.findOne(ci);
    const updateRepresentant = await representant.update(changes);
    return updateRepresentant;
  }

  async delete(ci) {
    const representant = await this.findOne(ci);
    await representant.destroy();

    return { ci };
  }
}

module.exports = RepresentantsService;
