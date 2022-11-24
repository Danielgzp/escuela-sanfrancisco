"use strict";

const { DataTypes, Sequelize } = require("sequelize");
const { PERIOD_TABLE, PeriodSchema } = require("../models/period.model");
const {
  EDUCATION_LEVEL_TABLE,
  EducationLevelSchema,
} = require("../models/education.level.model");
const { GRADE_TABLE, GradeSchema } = require("../models/grade.model");

const {
  REPRESENTANTS_TABLE,
  RepresentantsSchema,
} = require("../models/representants.model");
const { STUDENTS_TABLE, StudentsSchema } = require("../models/students.model");
const {
  RECORD_STUDENT_TABLE,
  RecordStudentSchema,
} = require("../models/recordStudent.model");
const { ROLE_TABLE, RoleSchema } = require("../models/staff.role.model");
const { STAFF_TABLE, StaffSchema } = require("../models/staff.model");
const {
  EVENTUALITY_TABLE,
  EventualitySchema,
} = require("../models/eventuality.model");
const { NEWS_TABLE, NewsSchema } = require("../models/news.model");
const { TEACHER_TABLE, TeacherSchema } = require("../models/teacher.model");
const { USER_TABLE, UserSchema } = require("../models/user.model");
const {
  USER_ROLE_TABLE,
  UserRoleSchema,
} = require("../models/user.role.model");

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PERIOD_TABLE, PeriodSchema);
    await queryInterface.createTable(
      EDUCATION_LEVEL_TABLE,
      EducationLevelSchema
    );
    await queryInterface.createTable(GRADE_TABLE, GradeSchema);
    await queryInterface.createTable(REPRESENTANTS_TABLE, RepresentantsSchema);
    await queryInterface.createTable(STUDENTS_TABLE, StudentsSchema);
    await queryInterface.createTable(RECORD_STUDENT_TABLE, RecordStudentSchema);
    await queryInterface.createTable(USER_ROLE_TABLE, UserRoleSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(ROLE_TABLE, RoleSchema);
    await queryInterface.createTable(STAFF_TABLE, StaffSchema);
    await queryInterface.createTable(TEACHER_TABLE, TeacherSchema);
    await queryInterface.createTable(EVENTUALITY_TABLE, EventualitySchema);
    await queryInterface.createTable(NEWS_TABLE, NewsSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(RECORD_STUDENT_TABLE);
    // await queryInterface.dropTable(GRADE_TABLE);
    await queryInterface.dropTable(STUDENTS_TABLE);
    await queryInterface.dropTable(REPRESENTANTS_TABLE);
    await queryInterface.dropTable(NEWS_TABLE);
    await queryInterface.dropTable(EVENTUALITY_TABLE);
    await queryInterface.dropTable(STAFF_TABLE);
    await queryInterface.dropTable(TEACHER_TABLE);
    await queryInterface.dropTable(ROLE_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(USER_ROLE_TABLE);
    await queryInterface.dropTable(GRADE_TABLE);
    await queryInterface.dropTable(EDUCATION_LEVEL_TABLE);
    await queryInterface.dropTable(PERIOD_TABLE);
  },
};
