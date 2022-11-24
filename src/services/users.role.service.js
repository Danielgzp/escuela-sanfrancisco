const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class UserRoleService {
  constructor() {}
  generate() {}

  async find() {
    const userRoles = await models.UserRole.findAll();

    return userRoles;
  }

  async findOne(id) {
    const userRole = await models.UserRole.findByPk(id);
    if (!userRole) {
      throw boom.notFound("User Role not found");
    }
    return userRole;
  }

  async create(data) {
    const newUserRole = await models.UserRole.create(
      data
      //     , {
      //   include: ["representant", "record"],
      // }
    );

    return newUserRole;
  }

  async update(id, changes) {
    const userRole = await this.findOne(id);
    const updateUserRole = await userRole.update(changes);

    return updateUserRole;
  }

  async delete(id) {
    const userRole = await this.findOne(id);
    await userRole.destroy();

    return { id };
  }
}

module.exports = UserRoleService;
