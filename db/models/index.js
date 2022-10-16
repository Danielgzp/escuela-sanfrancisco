const { Representants, RepresentantsSchema } = require("./representants.model");
const { Students, StudentsSchema } = require("./students.model");
// const { RecordStudent, RecordStudentSchema } = require("./studentRecord.model");

function setupModels(sequelize) {
  Representants.init(RepresentantsSchema, Representants.config(sequelize));
  Students.init(StudentsSchema, Students.config(sequelize));
  // RecordStudent.init(RecordStudentSchema, RecordStudent.config(sequelize));

  Representants.associate(sequelize.models);
  Students.associate(sequelize.models);
  // RecordStudent.associate(sequelize.models);
  //   User.associate(sequelize.models);
  //   Customer.associate(sequelize.models);

  //   Products.associate(sequelize.models);
}

module.exports = setupModels;

/*

const { Model, DataTypes, Sequelize } = require("sequelize");

// const { STUDENTS_TABLE } = require("./students.model");

const RECORD_STUDENT_TABLE = "record";

const RecordStudentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  day: {
    allowNull: false,
    type: DataTypes.STRING,
  },
//   studentCI: {
//     field: "student_ci",
//     allowNull: false,
//     type: DataTypes.STRING,
//     references: {
//       model: STUDENTS_TABLE,
//       key: "school_ci",
//     },
//     onUpdate: "CASCADE",
//     onDelete: "SET NULL",
//   },
};

class RecordStudent extends Model {
  static associate(models) {
    // this.belongsTo(models.Students, { as: "students" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RECORD_STUDENT_TABLE,
      modelName: "RecordStudent",
      timestamps: false,
    };
  }
}

module.exports = { RecordStudent, RecordStudentSchema, RECORD_STUDENT_TABLE };

*/