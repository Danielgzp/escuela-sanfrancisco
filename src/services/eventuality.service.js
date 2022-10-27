const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class EventualityService {
  constructor() {}
  generate() {}

  async find() {
    const eventuality = await models.Eventuality.findAll({
      include: ["staff"],
    });

    return eventuality;
  }

  async findOne(id) {
    const eventuality = await models.Eventuality.findByPk(id, {
      include: ["staff"],
    });
    if (!eventuality) {
      throw boom.notFound("Eventuality not found");
    }
    return eventuality;
  }

  async create(data) {
    const newEventuality = await models.Eventuality.create(
      data
      //     , {
      //   include: ["representant", "record"],
      // }
    );

    return newEventuality;
  }

  async update(id, changes) {
    const eventuality = await this.findOne(id);
    const updateEventuality = await eventuality.update(changes);

    return updateEventuality;
  }

  async delete(id) {
    const eventuality = await this.findOne(id);
    await eventuality.destroy();

    return { id };
  }
}

module.exports = EventualityService;
