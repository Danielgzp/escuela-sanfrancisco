const { Model, DataTypes, Sequelize } = require("sequelize");

const { REPRESENTANTS_TABLE } = require("./representants.model");
// const { SECTION_TABLE } = require("./section.model");
const { GRADE_TABLE } = require("./grade.model");

const STUDENTS_TABLE = "students";

const StudentsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  ci: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true,
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
    allowNull: true,
    type: DataTypes.STRING,
  },
  birthDate: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "birth_date",
  },
  gender: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  admissionDate: {
    allowNull: true,
    type: DataTypes.DATE,
    field: "admission_date",
  },
  birthPlace: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "birth_place",
  },
  houseProperty: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "house_property",
  },
  createdAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
  representantCi: {
    field: "representant_ci",
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: REPRESENTANTS_TABLE,
      key: "ci",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  gradeId: {
    field: "grade_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GRADE_TABLE,
      key: "id",
    },
  },
};

class Students extends Model {
  static associate(models) {
    this.belongsTo(models.Representants, { as: "representant" });
    this.belongsTo(models.Grade, { as: "grade" });
    this.hasMany(models.RecordStudent, {
      as: "record",
      //alias o el nombre de la relacion nque definimos en el model de products
      foreignKey: "studentCi",
    });
  }

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
