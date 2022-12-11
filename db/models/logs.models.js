const { Model, DataTypes, Sequelize } = require("sequelize");
const moment = require("moment");

const { USER_TABLE } = require("./user.model");

const LOGS_TABLE = "logs";

const LogsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  table: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  action: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
    get: function () {
      return moment(this.getDataValue("createdAt")).format(
        "dddd, DD-MM-YYYY HH:mm a"
      );
    },
  },
  userId: {
    field: "user_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
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

class Logs extends Model {
  static associate(models) {
    // this.hasMany(models.Students, {
    //     as: "student",
    //     foreignKey: "sectionId"
    // })
    this.belongsTo(models.User, { as: "user" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: LOGS_TABLE,
      modelName: "Logs",
      timestamps: false,
    };
  }
}

module.exports = { Logs, LogsSchema, LOGS_TABLE };
