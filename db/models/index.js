const { Representants, RepresentantsSchema } = require("./representants.model");
const { Students, StudentsSchema } = require("./students.model");
const { RecordStudent, RecordStudentSchema } = require("./recordStudent.model");
const { Period, PeriodSchema } = require("./period.model");
const { Grade, GradeSchema } = require("./grade.model");
const { Section, SectionSchema } = require("./section.model");
const { Role, RoleSchema } = require("./role.model");
const { Staff, StaffSchema } = require("./staff.model");
const { News, NewsSchema } = require("./news.model");
const { Eventuality, EventualitySchema } = require("./eventuality.model");
const { Teacher, TeacherSchema } = require("./teacher.model");

function setupModels(sequelize) {
  Representants.init(RepresentantsSchema, Representants.config(sequelize));
  Students.init(StudentsSchema, Students.config(sequelize));
  RecordStudent.init(RecordStudentSchema, RecordStudent.config(sequelize));
  Period.init(PeriodSchema, Period.config(sequelize));
  // Section.init(SectionSchema, Section.config(sequelize));
  Grade.init(GradeSchema, Grade.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  Staff.init(StaffSchema, Staff.config(sequelize));
  News.init(NewsSchema, News.config(sequelize));
  Teacher.init(TeacherSchema, News.config(sequelize));
  Eventuality.init(EventualitySchema, Eventuality.config(sequelize));


  Representants.associate(sequelize.models);
  Students.associate(sequelize.models);
  RecordStudent.associate(sequelize.models);
  Period.associate(sequelize.models);
  // Section.associate(sequelize.models);
  Grade.associate(sequelize.models);
  Role.associate(sequelize.models);
  Staff.associate(sequelize.models);
  News.associate(sequelize.models);
  Teacher.associate(sequelize.models)
  Eventuality.associate(sequelize.models);
}

module.exports = setupModels;
