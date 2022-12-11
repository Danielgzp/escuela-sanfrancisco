const { Model, DataTypes, Sequelize } = require("sequelize");
const moment = require("moment");

const { USER_TABLE } = require("./user.model");

const NEWS_TABLE = "news";

const NewsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  info: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
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
        "dddd, DD MMMM YYYY HH:mm a"
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
};

class News extends Model {
  static associate(models) {
    // this.belongsTo(models.Section, { as: "section" });
    this.belongsTo(models.User, { as: "user" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: NEWS_TABLE,
      modelName: "News",
      timestamps: false,
    };
  }
}

module.exports = { News, NewsSchema, NEWS_TABLE };
