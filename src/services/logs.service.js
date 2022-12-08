const boom = require("@hapi/boom");
const { Op } = require("sequelize");

const { models } = require("../../libs/sequelize");

class LogsService {
  constructor() {}
  generate() {}

  async find(query) {
    const options = {
      include: ["user"],
      order: [["createdAt", "DESC"]],
    };

    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const logs = await models.Logs.findAll(options);

    return logs;
  }

  async findOne(id) {
    const log = await models.Logs.findByPk(id, {
      include: ["user"],
    });
    if (!log) {
      throw boom.notFound("log not found");
    }
    return log;
  }

  async filterLogs(query) {
    // console.log(query);
    // console.log(filterGrade);

    const { search } = query;
    console.log(query);

    const options = {
      include: [
        // "representant",
        "user",
        {
          association: "user",

          where: {
            email: {
              [Op.substring]: query,
            },

            // name: {
            //   [Op.substring]: "AA",
            // },
            // $and: [{ name: query }, { lastName: query }],
          },
        },
      ],
    };

    const students = await models.Students.findAll(options);

    return students;
  }

  async create(data) {
    const newLog = await models.Logs.create(
      data
      //     , {
      //   include: ["representant", "record"],
      // }
    );

    return newLog;
  }

  async count() {
    const countLogs = await models.Logs.count();

    return countLogs;
  }

  async update(id, changes) {
    const log = await this.findOne(id);
    const updateLog = await log.update(changes);

    return updateLog;
  }

  async delete(id) {
    const log = await this.findOne(id);
    await log.destroy();

    return { id };
  }
}

module.exports = LogsService;
