const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class RoleService {
  constructor() {}
  generate() {}

  async find() {
    const roles = await models.Role.findAll();

    return roles;
  }

  async findOne(id) {
    const role = await models.Role.findByPk(id);
    if (!role) {
      throw boom.notFound("Role not found");
    }
    return role;
  }

  async create(data) {
    const newRole = await models.Role.create(
      data
      //     , {
      //   include: ["representant", "record"],
      // }
    );

    return newRole;
  }

  async update(id, changes) {
    const role = await this.findOne(id);
    const updateRole = await role.update(changes);

    return updateRole;
  }

  async delete(id) {
    const role = await this.findOne(id);
    await role.destroy();

    return { id };
  }
}

module.exports = RoleService;
