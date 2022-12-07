const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class StaffService {
  constructor() {}
  generate() {}

  async find() {
    const staff = await models.Staff.findAll({
      include: ["role", "eventuality"],
      order: [["roleId"]],
    });

    return staff;
  }

  async findOne(ci) {
    const staff = await models.Staff.findByPk(ci, {
      include: ["role", "eventuality"],
    });
    if (!staff) {
      throw boom.notFound("Staff not found");
    }
    return staff;
  }
  async countStaff() {
    const count = await models.Staff.count();

    return count;
  }
  async create(data) {
    const newStaff = await models.Staff.create(data, {
      include: ["eventuality"],
    });
    await Logs.create({
      userId: 1,
      description:
        "Ha creado un nuevo miebro del personal en la tabla de Staff",
      action: "CREATE",
      table: "STAFF",
    });
    return newStaff;
  }

  async update(ci, changes) {
    const staff = await this.findOne(ci);
    const updateStaff = await staff.update(changes);
    await Logs.create({
      userId: 1,
      description:
        "Ha actualizado un miembro del personal en la tabla de Staff",
      action: "UPDATE",
      table: "STAFF",
    });
    return updateStaff;
  }

  async delete(ci) {
    const staff = await this.findOne(ci);
    await staff.destroy();
    await Logs.create({
      userId: 1,
      description: "Miembro del personal eliminado en la tabla de Staff",
      action: "DELETE",
      table: "STAFF",
    });
    return { ci };
  }
}

module.exports = StaffService;
