const { Model, DataTypes, Sequelize } = require("sequelize");
const moment = require("moment");


const { PERIOD_TABLE } = require("./period.model");

const SECTION_TABLE = "section";

const SectionSchema = {
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
  // periodId: {
  //   field: "period_id",
  //   allowNull: false,
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: PERIOD_TABLE,
  //     key: "id",
  //   },
  //   onUpdate: "CASCADE",
  //   onDelete: "SET NULL",
  // },
};

class Section extends Model {
  static associate(models) {
    // this.hasMany(models.Students, {
    //     as: "student",
    //     foreignKey: "sectionId"
    // })
    /*this.hasMany(models.Grade, {
      as: "grade",
      //alias o el nombre de la relacion nque definimos en el model de products
      foreignKey: "sectionId",
    });
    this.belongsTo(models.Period, { as: "period" });*/
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SECTION_TABLE,
      modelName: "Section",
      timestamps: false,
    };
  }
}

module.exports = { Section, SectionSchema, SECTION_TABLE };
