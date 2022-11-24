const { Representants, RepresentantsSchema } = require("./representants.model");
const { Students, StudentsSchema } = require("./students.model");
const { RecordStudent, RecordStudentSchema } = require("./recordStudent.model");
const { Period, PeriodSchema } = require("./period.model");
const { Grade, GradeSchema } = require("./grade.model");
const { Section, SectionSchema } = require("./section.model");
const { Role, RoleSchema } = require("./staff.role.model");
const { UserRole, UserRoleSchema } = require("./user.role.model");
const { User, UserSchema } = require("./user.model");
const { Staff, StaffSchema } = require("./staff.model");
const { News, NewsSchema } = require("./news.model");
const { Eventuality, EventualitySchema } = require("./eventuality.model");
const { Teacher, TeacherSchema } = require("./teacher.model");
const {
  EducationLevel,
  EducationLevelSchema,
} = require("./education.level.model");


function setupModels(sequelize) {
  Representants.init(RepresentantsSchema, Representants.config(sequelize));
  Students.init(StudentsSchema, Students.config(sequelize));
  RecordStudent.init(RecordStudentSchema, RecordStudent.config(sequelize));
  Period.init(PeriodSchema, Period.config(sequelize));
  // Section.init(SectionSchema, Section.config(sequelize));
  Grade.init(GradeSchema, Grade.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  UserRole.init(UserRoleSchema, UserRole.config(sequelize))
  User.init(UserSchema, User.config(sequelize));
  Staff.init(StaffSchema, Staff.config(sequelize));
  Teacher.init(TeacherSchema, Teacher.config(sequelize));
  News.init(NewsSchema, News.config(sequelize));
  Eventuality.init(EventualitySchema, Eventuality.config(sequelize));
  EducationLevel.init(EducationLevelSchema, EducationLevel.config(sequelize));

  Representants.associate(sequelize.models);
  Students.associate(sequelize.models);
  RecordStudent.associate(sequelize.models);
  Period.associate(sequelize.models);
  // Section.associate(sequelize.models);
  Grade.associate(sequelize.models);
  Role.associate(sequelize.models);
  UserRole.associate(sequelize.models)
  User.associate(sequelize.models);
  Staff.associate(sequelize.models);
  Teacher.associate(sequelize.models);
  News.associate(sequelize.models);
  Eventuality.associate(sequelize.models);
  EducationLevel.associate(sequelize.models);
}

module.exports = setupModels;
