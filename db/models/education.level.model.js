const { Model, DataTypes, Sequelize } = require("sequelize");

const EDUCATION_LEVEL_TABLE = "level";

const EducationLevelSchema = {
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

class EducationLevel extends Model {
  static associate(models) {
    // this.hasMany(models.Section, {
    //   as: "section",
    //   foreignKey: "EducationLevelId",
    // });
    
    this.hasMany(models.Grade, {
      as: "grade",
      foreignKey: "levelId",
    });

    
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EDUCATION_LEVEL_TABLE,
      modelName: "EducationLevel",
      timestamps: false,
    };
  }
}

module.exports = {
  EducationLevel,
  EducationLevelSchema,
  EDUCATION_LEVEL_TABLE,
};
