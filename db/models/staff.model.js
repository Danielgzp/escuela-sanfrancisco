const { Model, DataTypes, Sequelize } = require("sequelize");

const { ROLE_TABLE } = require("./role.model");
const { USER_TABLE } = require("./user.model");

const STAFF_TABLE = "staff";

const StaffSchema = {
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
    type: DataTypes.DATE,
    field: "birth_date",
  },
  gender: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  admissionDate: {
    // allowNull: false,
    allowNull: true,
    type: DataTypes.DATE,
    field: "admission_date",
  },
  birthPlace: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "birth_place",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
  roleId: {
    field: "role_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ROLE_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  userId: {
    field: "user_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: USER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Staff extends Model {
  static associate(models) {
    this.belongsTo(models.Role, { as: "role" });
    this.belongsTo(models.User, { as: "user" });
    this.hasMany(models.Eventuality, {
      as: "eventuality",
      foreignKey: "staffCi",
    });
    this.hasMany(models.News, {
      as: "news",
      foreignKey: "staffCi",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: STAFF_TABLE,
      modelName: "Staff",
      timestamps: false,
    };
  }
}

module.exports = { Staff, StaffSchema, STAFF_TABLE };
