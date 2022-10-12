import { Students, StudentsSchema } from "./students.model";

function setupModels(sequelize) {
  Students.init(StudentsSchema, Students.config(sequelize));

  //   User.associate(sequelize.models);
  //   Customer.associate(sequelize.models);

  //   Products.associate(sequelize.models);
}

module.exports = setupModels;
