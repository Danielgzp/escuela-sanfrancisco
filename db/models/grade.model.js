const { Model, DataTypes, Sequelize } = require("sequelize");

const { SECTION_TABLE } = require("./section.model");

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

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
  sectionId: {
    field: "section_id",
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: SECTION_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Grade extends Model {
  static associate(models) {
    this.belongsTo(models.Section, { as: "section" });
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
