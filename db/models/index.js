const { Representants, RepresentantsSchema } = require("./representants.model");
const { Students, StudentsSchema } = require("./students.model");
const { RecordStudent, RecordStudentSchema } = require("./recordStudent.model");
const { Period, PeriodSchema } = require("./period.model");
const { Grade, GradeSchema } = require("./grade.model");
const { Section, SectionSchema } = require("./section.model");

function setupModels(sequelize) {
  Representants.init(RepresentantsSchema, Representants.config(sequelize));
  Students.init(StudentsSchema, Students.config(sequelize));
  RecordStudent.init(RecordStudentSchema, RecordStudent.config(sequelize));
  Period.init(PeriodSchema, Period.config(sequelize));
  Section.init(SectionSchema, Section.config(sequelize));
  Grade.init(GradeSchema, Grade.config(sequelize));

  Representants.associate(sequelize.models);
  Students.associate(sequelize.models);
  RecordStudent.associate(sequelize.models);

  Period.associate(sequelize.models);
  Section.associate(sequelize.models);
  Grade.associate(sequelize.models);

  //   User.associate(sequelize.models);
  //   Customer.associate(sequelize.models);

  // Products.associate(sequelize.models);
}

module.exports = setupModels;
