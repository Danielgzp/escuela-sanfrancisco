const { Model, DataTypes, Sequelize } = require("sequelize");

const { STAFF_TABLE } = require("./staff.model");

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
  },
  staffCi: {
    field: "staff_ci",
    allowNull: true,
    type: DataTypes.STRING,
    references: {
      model: STAFF_TABLE,
      key: "ci",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class News extends Model {
  static associate(models) {
    // this.belongsTo(models.Section, { as: "section" });
    this.belongsTo(models.Staff, { as: "staff" });
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
