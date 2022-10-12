const { Model, DataTypes, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");

const STUDENTS_TABLE = "students";

const StudentsSchema = {
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
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "last_name",
  },
  ci: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true,
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  birthDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "birth_date",
  },
  gender: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  admissionDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "admission_date",
  },
  birthPlace: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "birth_place"
  },
  houseProperty: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "house_property"
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
  //La relacion con el usuario
//   userId: {
//     field: "user_id",
//     allowNull: false,
//     type: DataTypes.INTEGER,
//     unique: true,
//     references: {
//       model: USER_TABLE,
//       key: "id",
//     },
//     onUpdate: "CASCADE",
//     onDelete: "SET NULL",
//   },
};

class Students extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: STUDENTS_TABLE,
      modelName: "Students",
      timestamps: false,
    };
  }
}

module.exports = { Students, StudentsSchema, STUDENTS_TABLE };
