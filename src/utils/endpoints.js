// const { config } = require("../../config/config");

const API = "http://localhost:3000/api";
const VERSION = "v1";

const endPoints = {
  auth: {
    login: `${API}/${VERSION}/auth/login`,
    profile: `${API}/${VERSION}/auth/profile`,
    recovery: `${API}/${VERSION}/auth/recovery`,
    changePassword: `${API}/${VERSION}/auth/change-password`,
  },
  eventualities: {
    getAllEventualities: `${API}/${VERSION}/eventualities`,
    getEventualities: (id) => `${API}/${VERSION}/eventualities/${id}`,
    addEventualities: `${API}/${VERSION}/eventualities`,
    deleteEventualities: (id) => `${API}/${VERSION}/eventualities/${id}`,
    updateEventualities: (id) => `${API}/${VERSION}/eventualities/${id}`,
  },
  grades: {
    getAllGrades: `${API}/${VERSION}/grades`,
    getGrade: (id) => `${API}/${VERSION}/grades/${id}`,
    addGrade: `${API}/${VERSION}/grades`,
    deleteGrade: (id) => `${API}/${VERSION}/grades/${id}`,
    updateGrade: (id) => `${API}/${VERSION}/grades/${id}`,
  },
  news: {
    getAllNews: `${API}/${VERSION}/news`,
    getNews: (id) => `${API}/${VERSION}/news/${id}`,
    addNews: `${API}/${VERSION}/news`,
    deleteNews: (id) => `${API}/${VERSION}/news/${id}`,
    updateNews: (id) => `${API}/${VERSION}/news/${id}`,
  },
  periods: {
    getAllPeriods: `${API}/${VERSION}/periods`,
    getPeriods: (id) => `${API}/${VERSION}/periods/${id}`,
    addPeriods: `${API}/${VERSION}/periods`,
    deletePeriod: (id) => `${API}/${VERSION}/periods/${id}`,
    updatePeriod: (id) => `${API}/${VERSION}/periods/${id}`,
  },
  representants: {
    getAllRepresentants: `${API}/${VERSION}/representants`,
    getRepresentant: (id) => `${API}/${VERSION}/representants/${id}`,
    addRepresentant: `${API}/${VERSION}/representants`,
    deleteRepresentant: (id) => `${API}/${VERSION}/representants/${id}`,
    updateRepresentant: (id) => `${API}/${VERSION}/representants/${id}`,
  },
  record: {
    getAllRecord: `${API}/${VERSION}/student-record`,
    getRecord: (id) => `${API}/${VERSION}/student-record/${id}`,
    addRecord: `${API}/${VERSION}/student-record`,
    deleteRecord: (id) => `${API}/${VERSION}/student-record/${id}`,
    updateRecord: (id) => `${API}/${VERSION}/student-record/${id}`,
  },
  roles: {
    getAllRoles: `${API}/${VERSION}/roles`,
    getRoles: (id) => `${API}/${VERSION}/roles/${id}`,
    addRoles: `${API}/${VERSION}/roles`,
    deleteRole: (id) => `${API}/${VERSION}/roles/${id}`,
    updateRole: (id) => `${API}/${VERSION}/roles/${id}`,
  },
  staff: {
    getAllStaff: `${API}/${VERSION}/staff`,
    getStaff: (id) => `${API}/${VERSION}/staff/${id}`,
    addStaff: `${API}/${VERSION}/staff`,
    deleteStaff: (id) => `${API}/${VERSION}/staff/${id}`,
    updateStaff: (id) => `${API}/${VERSION}/staff/${id}`,
  },
  students: {
    getStudent: (id) => `${API}/${VERSION}/students/${id}`,
    addStudent: `${API}/${VERSION}/students`,
    updateStudent: (id) => `${API}/${VERSION}/students/${id}`,
    deleteStudent: (id) => `${API}/${VERSION}/students/${id}`,
    getAllStudents: `${API}/${VERSION}/students`,
  },
  teachers: {
    getAllTeachers: `${API}/${VERSION}/teachers`,
    getTeacher: (id) => `${API}/${VERSION}/teachers/${id}`,
    addTeachers: `${API}/${VERSION}/teachers`,
    deleteTeacher: (id) => `${API}/${VERSION}/teachers/${id}`,
    updateTeacher: (id) => `${API}/${VERSION}/teachers/${id}`,
  },
  users: {
    getAllUsers: `${API}/${VERSION}/users`,
    getUsers: (id) => `${API}/${VERSION}/users/${id}`,
    addUsers: `${API}/${VERSION}/users`,
    deleteUsers: (id) => `${API}/${VERSION}/users/${id}`,
    updateUsers: (id) => `${API}/${VERSION}/users/${id}`,
  },
  usersRole: {
    getAllUsersRole: `${API}/${VERSION}/usersrole`,
    getUsersRole: (id) => `${API}/${VERSION}/usersrole/${id}`,
    addUsersRole: `${API}/${VERSION}/usersrole`,
    deleteUsersRole: (id) => `${API}/${VERSION}/usersrole/${id}`,
    updateUsersRole: (id) => `${API}/${VERSION}/usersrole/${id}`,
  },
};

export default endPoints;
