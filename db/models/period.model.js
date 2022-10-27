const { Model, DataTypes, Sequelize } = require("sequelize");

const PERIOD_TABLE = "period";

const PeriodSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
};

class Period extends Model {
  static associate(models) {
    // this.hasMany(models.Section, {
    //   as: "section",
    //   foreignKey: "periodId",
    // });
    this.hasMany(models.Grade, {
      as: "grade",
      foreignKey: "periodId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PERIOD_TABLE,
      modelName: "Period",
      timestamps: false,
    };
  }
}

module.exports = { Period, PeriodSchema, PERIOD_TABLE };
