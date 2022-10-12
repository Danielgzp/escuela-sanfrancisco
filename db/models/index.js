import { Representants, RepresentantsSchema } from "./representants.model";
import { Students, StudentsSchema } from "./students.model";

function setupModels(sequelize) {
  Representants.init(RepresentantsSchema, Representants.config(sequelize));
  Students.init(StudentsSchema, Students.config(sequelize))

  Representants.associate(sequelize.models);
  Students.associate(sequelize.models);
  //   User.associate(sequelize.models);
  //   Customer.associate(sequelize.models);

  //   Products.associate(sequelize.models);
}

module.exports = setupModels;
