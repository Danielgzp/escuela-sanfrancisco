const { Model, DataTypes, Sequelize } = require("sequelize");

const { REPRESENTANTS_TABLE } = require("./representants.model");

const STUDENTS_TABLE = "students";

const StudentsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  // schoolID: {
  //   allowNull: false,
  //   type: DataTypes.STRING,
  //   unique: true,

  //   field: 'school_ci',
  // },
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
  houseProperty: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "house_property",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
  representantId: {
    field: "representant_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: REPRESENTANTS_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Students extends Model {
  static associate(models) {
    this.belongsTo(models.Representants, { as: "representant" });
    this.hasMany(models.RecordStudent, {
      as: "record",
      //alias o el nombre de la relacion nque definimos en el model de products
      foreignKey: "studentId",
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
