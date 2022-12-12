const { Model, DataTypes, Sequelize } = require("sequelize");
const moment = require("moment");


const { GRADE_TABLE } = require("./grade.model");

const TEACHER_TABLE = "teacher";

const TeacherSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  ci: {
    primaryKey: true,
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "last_name",
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  birthDate: {
    // allowNull: false,
    allowNull: true,
    type: DataTypes.DATEONLY,
    field: "birth_date",
    get: function () {
      return moment(this.getDataValue("birthDate")).format("YYYY-MM-DD");
    },
  },
  gender: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  admissionDate: {
    // allowNull: false,
    allowNull: true,
    type: DataTypes.DATEONLY,
    field: "admission_date",
    get: function () {
      return moment(this.getDataValue("admissionDate")).format("YYYY-MM-DD");
    },
  },
  birthPlace: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "birth_place",
  },
  email: { allowNull: false, type: DataTypes.STRING, unique: true },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
  gradeId: {
    field: "grade_id",
    allowNull: true,
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: GRADE_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Teacher extends Model {
  static associate(models) {
    this.belongsTo(models.Grade, { as: "grade" });
    this.hasMany(models.Eventuality, {
      as: "eventuality",
      foreignKey: "teacherCi",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TEACHER_TABLE,
      modelName: "Teacher",
      timestamps: false,
    };
  }
}

module.exports = { Teacher, TeacherSchema, TEACHER_TABLE };
