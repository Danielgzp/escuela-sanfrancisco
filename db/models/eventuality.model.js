const { Model, DataTypes, Sequelize } = require("sequelize");

const { STAFF_TABLE } = require("./staff.model");
const { TEACHER_TABLE } = require("./teacher.model");

const EVENTUALITY_TABLE = "eventuality";

const EventualitySchema = {
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
    type: DataTypes.STRING,
  },
  day: {
    allowNull: true,
    type: DataTypes.DATE,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
  staffCi: {
    field: "staff_ci",
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: STAFF_TABLE,
      key: "ci",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  teacherCi: {
    field: "teacher_ci",
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: TEACHER_TABLE,
      key: "ci",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Eventuality extends Model {
  static associate(models) {
    this.belongsTo(models.Staff, { as: "staff" });
    this.belongsTo(models.Teacher, { as: "teacher" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EVENTUALITY_TABLE,
      modelName: "Eventuality",
      timestamps: false,
    };
  }
}

module.exports = { Eventuality, EVENTUALITY_TABLE, EventualitySchema };
