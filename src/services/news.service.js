const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class NewsService {
  constructor() {}
  generate() {}

  async find() {
    const news = await models.News.findAll({
      include: ["staff"],
    });

    return news;
  }

  async findOne(id) {
    const news = await models.News.findByPk(id, {
      include: ["staff"],
    });
    if (!news) {
      throw boom.notFound("News not found");
    }
    return news;
  }

  async create(data) {
    const newNews = await models.News.create(
      data
      //     , {
      //   include: ["representant", "record"],
      // }
    );

    return newNews;
  }

  async update(id, changes) {
    const news = await this.findOne(id);
    const updateNews = await news.update(changes);

    return updateNews;
  }

  async delete(id) {
    const news = await this.findOne(id);
    await news.destroy();

    return { id };
  }
}

module.exports = NewsService;
