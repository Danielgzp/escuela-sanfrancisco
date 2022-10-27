const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class SectionService {
  constructor() {}
  generate() {}

  async find() {
    const sections = await models.Section.findAll({
      // include: ["grade", "period"],
    });

    return sections;
  }

  async findOne(id) {
    const section = await models.Section.findByPk(id, {
      // include: ["grade"],
    });
    if (!section) {
      throw boom.notFound("section not found");
    }
    return section;
  }

  async create(data) {
    const newSection = await models.Section.create(data, {
      // include: ["grade"],
    });

    return newSection;
  }

  async update(id, changes) {
    const section = await this.findOne(id);
    const updateSection = await section.update(changes);

    return updateSection;
  }

  async delete(id) {
    const section = await this.findOne(id);
    await section.destroy();

    return { id };
  }
}

module.exports = SectionService;
