const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_ROLE_TABLE = "userRole";

const UserRoleSchema = {
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

class UserRole extends Model {
  static associate(models) {
    // this.belongsTo(models.Section, { as: "section" });
    this.hasMany(models.User, { as: "user", foreignKey: "userRole" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_ROLE_TABLE,
      modelName: "UserRole",
      timestamps: false,
    };
  }
}

module.exports = { UserRole, UserRoleSchema, USER_ROLE_TABLE };
