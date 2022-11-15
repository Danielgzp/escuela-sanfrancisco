const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class RecordStudentService {
  constructor() {}
  generate() {}

  async find() {
    const RecordStudent = await models.RecordStudent.findAll({
      include: ["student"],
    });

    return RecordStudent;
  }

  async findOne(id) {
    const RecordStudent = await models.RecordStudent.findByPk(id, {
      include: ["student"],
    });
    if (!RecordStudent) {
      throw boom.notFound("Record not found");
    }
    return RecordStudent;
  }

  async create(data) {
    const newRecordStudent = await models.RecordStudent.create(
      data
      //     , {
      //   include: ["representant", "record"],
      // }
    );

    return newRecordStudent;
  }

  async update(id, changes) {
    const recordStudent = await this.findOne(id);
    const updateRecordStudent = await recordStudent.update(changes);

    return updateRecordStudent;
  }

  async delete(id) {
    const recordStudent = await this.findOne(id);
    await recordStudent.destroy();

    return { id };
  }
}

module.exports = RecordStudentService;
