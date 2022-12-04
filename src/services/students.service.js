const boom = require("@hapi/boom");
const { Op } = require("sequelize");

const { models } = require("../../libs/sequelize");

class StudentsService {
  constructor() {}
  generate() {}

  async find(query) {
    const options = {
      include: [
        // "representant",
        // "record",
        "grade",
        // "record",
        {
          association: "grade",
          include: ["period"],
        },
      ],
      order: [["gradeId"]],
      attributes: [
        "name",
        "lastName",
        "birthPlace",
        "birthDate",
        "admissionDate",
        "id",
        "gender",
        "nativeCi",
        "schoolarshipCi",
      ],
      // where: {},
    };

    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const students = await models.Students.findAll(options);

    return students;
  }

  async findOne(ci) {
    const student = await models.Students.findByPk(ci, {
      include: ["representant", "record", "grade"],
    });
    if (!student) {
      throw boom.notFound("Student not found");
    }
    return student;
  }
  async countStudents() {
    const count = await models.Students.count();

    return count;
  }
  async findByLevel(query) {
    const { limit, offset, level } = query;
    const options = {
      include: [
        // "representant",
        "grade",
        {
          association: "grade",
          attributes: ["name", "section"],
          include: [
            "period",
            {
              association: "period",
              attributes: ["name"],
            },
            "level",
            {
              association: "level",
              attributes: ["name"],
            },
          ],
          where: {
            levelId: [`${level}`],
          },
        },
      ],
      order: [["gradeId"]],
      attributes: [
        "name",
        "lastName",
        "birthPlace",
        "birthDate",
        "admissionDate",
        "address",
        "id",
        "gender",
        "nativeCi",
        "schoolarshipCi",
      ],
    };

    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const students = await models.Students.findAll(options);

    return students;
  }

  async filterStudents(query) {
    // console.log(query);
    // console.log(filterGrade);

    const { search } = query;

    const options = {
      include: [
        // "representant",
        "grade",
        {
          association: "grade",

          // where: {
          //   name: [`${query}`],
          //   section: [`${query}`],
          // },
          attributes: ["name", "section"],
          order: [["name"]],
          include: [
            "period",
            {
              association: "period",
              attributes: ["name"],
            },
            "level",
            {
              association: "level",
              attributes: ["name"],
            },
          ],
        },
      ],

      attributes: [
        "name",
        "lastName",
        "birthDate",
        "gender",
        "nativeCi",
        "schoolarshipCi",
        "gradeId",
        "id",
        "address",
        "birthPlace",
      ],
      where: {
        [Op.or]: [
          {
            name: {
              [Op.substring]: query.toUpperCase(),
            },
          },
          {
            lastName: {
              [Op.substring]: query.toUpperCase(),
            },
          },
        ],
        // name: {
        //   [Op.substring]: "AA",
        // },
        // $and: [{ name: query }, { lastName: query }],
      },
    };

    const students = await models.Students.findAll(options);

    return students;
  }
  async filterStudentsCi(query) {
    // console.log(query);
    // console.log(filterGrade);

    // const { search } = query;

    const options = {
      include: [
        // "representant",
        "grade",
        {
          association: "grade",

          // where: {
          //   name: [`${query}`],
          //   section: [`${query}`],
          // },
          attributes: ["name", "section"],
          order: [["name"]],
          include: [
            "period",
            {
              association: "period",
              attributes: ["name"],
            },
            "level",
            {
              association: "level",
              attributes: ["name"],
            },
          ],
        },
      ],

      attributes: [
        "name",
        "lastName",
        "birthDate",
        "gender",
        "nativeCi",
        "schoolarshipCi",
        "gradeId",
        "id",
        "address",
        "birthPlace",
      ],
      where: {
        nativeCi: {
          [Op.ne]: null || " " || "",
        },

        // name: {
        //   [Op.substring]: "AA",
        // },
        // $and: [{ name: query }, { lastName: query }],
      },
    };

    const students = await models.Students.findAll(options);

    return students;
  }
  async countPreScool() {
    const total = await models.Students.count({
      include: [
        // "representant",
        "grade",
        {
          association: "grade",
          attributes: ["name", "section"],
          include: [
            "period",
            {
              association: "period",
              attributes: ["name"],
            },
            "level",
            {
              association: "level",
              attributes: ["name"],
            },
          ],
          where: {
            levelId: [`1`],
          },
        },
      ],
    });

    return total;
  }

  async countPrimary() {
    const total = await models.Students.count({
      include: [
        // "representant",
        "grade",
        {
          association: "grade",
          attributes: ["name", "section"],
          include: [
            "period",
            {
              association: "period",
              attributes: ["name"],
            },
            "level",
            {
              association: "level",
              attributes: ["name"],
            },
          ],
          where: {
            levelId: [`2`],
          },
        },
      ],
    });

    return total;
  }

  async findByGrade(filterGrade, section) {
    const options = {
      include: [
        // "representant",
        "grade",
        {
          association: "grade",
          attributes: ["name", "section"],
          where: {
            name: {
              [Op.like]: `%${filterGrade}%`,
            },
            section: {
              [Op.like]: `%${section}%`,
            },
          },
          include: [
            "period",

            {
              association: "period",
              attributes: ["name"],
            },
            "level",
            {
              association: "level",
              attributes: ["name"],
            },
            "teacher",
            { association: "teacher", attributes: ["name", "lastName"] },
          ],
        },
      ],
      order: [["lastName"]],
      attributes: [
        "name",
        "lastName",
        "birthDate",
        "gender",
        "nativeCi",
        "schoolarshipCi",
        "gradeId",
        "id",
      ],
    };

    const students = await models.Students.findAll(options);

    return students;
  }

  async create(data) {
    const newStudent = await models.Students.create(data, {
      include: ["representant", "record"],
    });

    return newStudent;
  }

  async update(ci, changes) {
    const student = await this.findOne(ci);
    const updateStudent = await student.update(changes, {
      include: ["representant"],
    });

    return updateStudent;
  }

  async delete(ci) {
    const student = await this.findOne(ci);
    await student.destroy();

    return { ci };
  }
}

module.exports = StudentsService;
