const { Representants, RepresentantsSchema } = require("./representants.model");
const { Students, StudentsSchema } = require("./students.model");
const { RecordStudent, RecordStudentSchema } = require("./recordStudent.model");

function setupModels(sequelize) {
  Representants.init(RepresentantsSchema, Representants.config(sequelize));
  Students.init(StudentsSchema, Students.config(sequelize));
  RecordStudent.init(RecordStudentSchema, RecordStudent.config(sequelize));

  Representants.associate(sequelize.models);
  Students.associate(sequelize.models);
  RecordStudent.associate(sequelize.models);
  //   User.associate(sequelize.models);
  //   Customer.associate(sequelize.models);

  // Products.associate(sequelize.models);
}

module.exports = setupModels;
