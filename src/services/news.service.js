const boom = require("@hapi/boom");
const { Logs } = require("../../db/models/logs.models");

const { models } = require("../../libs/sequelize");

class NewsService {
  constructor() {}
  generate() {}

  async find() {
    const news = await models.News.findAll({
      include: ["user"],
    });

    return news;
  }

  async findOne(id) {
    const news = await models.News.findByPk(id, {
      include: ["user"],
    });
    if (!news) {
      throw boom.notFound("News not found");
    }
    return news;
  }

  async create(data, userId) {
    const newNews = await models.News.create(data);

    await Logs.create({
      userId: userId,
      description: "Ha creado una nueva noticia en la tabla de News",
      action: "CREATE",
      table: "NEWS",
    });
    return newNews;
  }

  async update(id, changes, userId) {
    const news = await this.findOne(id);
    const updateNews = await news.update(changes);
    await Logs.create({
      userId: userId,
      description: "Noticia actualizada en la tabla de News",
      action: "UPDATE",
      table: "NEWS",
    });
    return updateNews;
  }

  async delete(id, userId) {
    const news = await this.findOne(id);
    await news.destroy();
    await Logs.create({
      userId: userId,
      description: "Noticia eliminada en la tabla de Noticias",
      action: "DELETE",
      table: "NEWS",
    });

    return { id };
  }
}

module.exports = NewsService;
