const { Model, DataTypes, Sequelize } = require("sequelize");

const ROLE_TABLE = "role";

const RoleSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
};

class Role extends Model {
  static associate(models) {
    // this.belongsTo(models.Section, { as: "section" });
    this.hasMany(models.Staff, { as: "staff", foreignKey: "ci" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ROLE_TABLE,
      modelName: "Role",
      timestamps: false,
    };
  }
}

module.exports = { Role, RoleSchema, ROLE_TABLE };
