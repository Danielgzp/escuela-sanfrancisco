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
      include: ["usersRole"],
    });

    return user;
  }

  async findOne(id) {
    //find by private key, es decir buscar por el id o el valor que le solicitemos
    const user = await models.User.findByPk(id, {
      include: ["usersRole"],
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
      include: ["usersRole"],
    });

    return user;
  }

  async create(data) {
    const newUser = await models.User.create(data);

    return newUser;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
