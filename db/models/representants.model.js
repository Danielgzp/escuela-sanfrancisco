const { Model, DataTypes, Sequelize } = require("sequelize");

const REPRESENTANTS_TABLE = "representants";
const RepresentantsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  ci: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
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
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: { allowNull: false, type: DataTypes.STRING, unique: true },
  createdAt: {
    allowNull: false,
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
      foreignKey: "ci",
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
