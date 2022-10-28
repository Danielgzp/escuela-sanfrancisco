const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class StaffService {
  constructor() {}
  generate() {}

  async find() {
    const staff = await models.Staff.findAll({
      include: ["role", "eventuality", "news"],
    });

    return staff;
  }

  async findOne(ci) {
    const staff = await models.Staff.findByPk(ci, {
      include: ["role", "eventuality", "news"],
    });
    if (!staff) {
      throw boom.notFound("Staff not found");
    }
    return staff;
  }

  async create(data) {
    const newStaff = await models.Staff.create(data, {
      include: ["eventuality", "news"],
    });

    return newStaff;
  }

  async update(ci, changes) {
    const staff = await this.findOne(ci);
    const updateStaff = await staff.update(changes);

    return updateStaff;
  }

  async delete(ci) {
    const staff = await this.findOne(ci);
    await staff.destroy();

    return { ci };
  }
}

module.exports = StaffService;