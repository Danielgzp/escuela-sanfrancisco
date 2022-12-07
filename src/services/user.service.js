const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class UserService {
  constructor() {}
  generate() {}

  /*find(offset, limit) {
    //limit y offset sirve para hacer paginaciones o filtros en este caso esta solo de ejemplo
    if (offset && limit) {
       // Los parámetros requperados de query, 
		// vienen como string, es necesario pasarlos a int

      return this.users;
    } else {
      throw new Error('no data found');
    }
  }*/

  async find() {
    const user = await models.User.findAll({
      attributes: ["email", "id", "createdAt"],
      include: [
        "userRole",
        {
          association: "userRole",
          attributes: ["name"],
        },
      ],
    });

    return user;
  }
  async countUsers() {
    const count = await models.User.count();

    return count;
  }

  async findOne(id) {
    //find by private key, es decir buscar por el id o el valor que le solicitemos
    const user = await models.User.findByPk(id, {
      include: [
        "userRole",
        {
          association: "userRole",
          attributes: ["name", "id"],
        },
      ],
      attributes: ["email", "id", "createdAt", "recoveryToken"],
    });
    if (!user) {
      //BOOM para manejar los errores
      throw boom.notFound("User not found");
    }
    return user;
  }

  //este metodo es para la autenticacion y encontrar el usuario a partir del email
  async findByEmail(email) {
    const user = await models.User.findOne({
      //el where dice que bsuque hasta que encuentre en la DB un email igual al que se envia
      //por parametro
      where: { email },
      include: ["userRole"],
    });

    return user;
  }

  async create(data, userId) {
    const newUser = await models.User.create(data);
    await Logs.create({
      userId: userId,
      description: "Ha creado un nuevo usuario en la tabla de Usuarios",
      action: "UPDATE",
      table: "USERS",
    });

    return newUser;
  }

  async update(id, changes, userId) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    await Logs.create({
      userId: userId,
      description: "Ha actualizado un usuario en la tabla de Usuarios",
      action: "UPDATE",
      table: "USERS",
    });
    return rta;
  }

  async delete(id, userId) {
    const user = await this.findOne(id);
    await user.destroy();
    await Logs.create({
      userId: userId,
      description: "Usuario eliminado en la tabla de Usuarios",
      action: "UPDATE",
      table: "USERS",
    });
    return { id };
  }
}

module.exports = UserService;
