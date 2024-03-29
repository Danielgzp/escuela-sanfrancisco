const { Model, DataTypes, Sequelize } = require("sequelize");
const moment = require("moment");


const { STUDENTS_TABLE } = require("./students.model");

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
    type: DataTypes.DATEONLY,
    get: function () {
      return moment(this.getDataValue("day")).format("YYYY-MM-DD");
    },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
  studentSchoolarshipCi: {
    field: "student_schoolarship_ci",
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: STUDENTS_TABLE,
      key: "schoolarship_ci",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
};

class RecordStudent extends Model {
  static associate(models) {
    this.belongsTo(models.Students, { as: "student" });
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
