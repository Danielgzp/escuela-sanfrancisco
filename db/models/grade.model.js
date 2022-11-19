const { Model, DataTypes, Sequelize } = require("sequelize");

const { EDUCATION_LEVEL_TABLE } = require("./education.level.model");
const { PERIOD_TABLE } = require("./period.model");

const GRADE_TABLE = "grade";

const GradeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  section: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
  levelId: {
    field: "education_level_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EDUCATION_LEVEL_TABLE,
      key: "id",
    },
  },
  periodId: {
    field: "period_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PERIOD_TABLE,
      key: "id",
    },
  },
  // sectionId: {
  //   field: "section_id",
  //   allowNull: true,
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: SECTION_TABLE,
  //     key: "id",
  //   },
  //   onUpdate: "CASCADE",
  //   onDelete: "SET NULL",
  // },
};

class Grade extends Model {
  static associate(models) {
    // this.belongsTo(models.Section, { as: "section" });
    this.belongsTo(models.Period, { as: "period" });
    this.belongsTo(models.EducationLevel, { as: "level" });
    this.hasMany(models.Students, { as: "students", foreignKey: "gradeId" });
    this.hasOne(models.Teacher, { as: "teacher", foreignKey: "gradeId" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: GRADE_TABLE,
      modelName: "Grade",
      timestamps: false,
    };
  }
}

module.exports = { Grade, GradeSchema, GRADE_TABLE };
