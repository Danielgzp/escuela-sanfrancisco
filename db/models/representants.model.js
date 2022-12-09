const { Model, DataTypes, Sequelize } = require("sequelize");
const moment = require("moment");


const REPRESENTANTS_TABLE = "representants";
const RepresentantsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  ci: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    primaryKey: true,
  },
  repName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "rep_name",
  },
  repLastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "rep_last_name",
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: { allowNull: true, type: DataTypes.STRING, unique: false },
  createdAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
};

class Representants extends Model {
  static associate(models) {
    //hasMany: puede tener muchos productos
    this.hasMany(models.Students, {
      as: "students",
      //alias o el nombre de la relacion nque definimos en el model de products
      foreignKey: "representantCi",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: REPRESENTANTS_TABLE,
      modelName: "Representants",
      timestamps: false,
    };
  }
}

module.exports = { Representants, RepresentantsSchema, REPRESENTANTS_TABLE };
