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

  async findOne(id) {
    const representant = await models.Representants.findByPk(id);
    if (!representant) {
      throw boom.notFound("Representant not found");
    }
    return representant;
  }

  async create(data) {
    const newRepresentant = await models.Representants.create(data);

    return newRepresentant;
  }

  async update(id, changes) {
    const representant = await this.findOne(id);
    const updateRepresentant = await representant.update(changes);
    return updateRepresentant;
  }

  async delete(id) {
    const representant = await this.findOne(id);
    await representant.destroy();

    return { id };
  }
}

module.exports = RepresentantsService;
