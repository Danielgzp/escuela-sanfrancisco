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
    getAllEventualities: `${API}/${VERSION}/admin/eventualities`,
    getEventualities: (id) => `${API}/${VERSION}/admin/eventualities/${id}`,
    addEventualities: `${API}/${VERSION}/admin/eventualities`,
    deleteEventualities: (id) => `${API}/${VERSION}/admin/eventualities/${id}`,
    updateEventualities: (id) => `${API}/${VERSION}/admin/eventualities/${id}`,
  },
  grades: {
    getAllGrades: `${API}/${VERSION}/admin/grades`,
    getGrade: (id) => `${API}/${VERSION}/admin/grades/${id}`,
    addGrade: `${API}/${VERSION}/admin/grades`,
    deleteGrade: (id) => `${API}/${VERSION}/admin/grades/${id}`,
    updateGrade: (id) => `${API}/${VERSION}/admin/grades/${id}`,
  },
  logs: {
    getAllLogs: `${API}/${VERSION}/admin/logs`,
    getLog: (id) => `${API}/${VERSION}/admin/logs/${id}`,
    addLog: `${API}/${VERSION}/admin/logs`,
    deleteLog: (id) => `${API}/${VERSION}/admin/logs/${id}`,
    updateLog: (id) => `${API}/${VERSION}/admin/logs/${id}`,
  },
  news: {
    getAllNews: `${API}/${VERSION}/news`,
    getNews: (id) => `${API}/${VERSION}/news/${id}`,
    addNews: `${API}/${VERSION}/news`,
    deleteNews: (id) => `${API}/${VERSION}/news/${id}`,
    updateNews: (id) => `${API}/${VERSION}/news/${id}`,
  },
  periods: {
    getAllPeriods: `${API}/${VERSION}/admin/periods`,
    getPeriods: (id) => `${API}/${VERSION}/admin/periods/${id}`,
    addPeriods: `${API}/${VERSION}/admin/periods`,
    deletePeriod: (id) => `${API}/${VERSION}/admin/periods/${id}`,
    updatePeriod: (id) => `${API}/${VERSION}/admin/periods/${id}`,
  },
  representants: {
    getAllRepresentants: `${API}/${VERSION}/admin/representants`,
    getRepresentant: (id) => `${API}/${VERSION}/admin/representants/${id}`,
    addRepresentant: `${API}/${VERSION}/admin/representants`,
    deleteRepresentant: (id) => `${API}/${VERSION}/admin/representants/${id}`,
    updateRepresentant: (id) => `${API}/${VERSION}/admin/representants/${id}`,
  },
  record: {
    getAllRecord: `${API}/${VERSION}/admin/student-record`,
    getRecord: (id) => `${API}/${VERSION}/admin/student-record/${id}`,
    addRecord: `${API}/${VERSION}/admin/student-record`,
    deleteRecord: (id) => `${API}/${VERSION}/admin/student-record/${id}`,
    updateRecord: (id) => `${API}/${VERSION}/admin/student-record/${id}`,
  },
  roles: {
    getAllRoles: `${API}/${VERSION}/admin/roles`,
    getRoles: (id) => `${API}/${VERSION}/admin/roles/${id}`,
    addRoles: `${API}/${VERSION}/admin/roles`,
    deleteRole: (id) => `${API}/${VERSION}/admin/roles/${id}`,
    updateRole: (id) => `${API}/${VERSION}/admin/roles/${id}`,
  },
  staff: {
    getAllStaff: `${API}/${VERSION}/admin/staff`,
    getStaff: (id) => `${API}/${VERSION}/admin/staff/${id}`,
    addStaff: `${API}/${VERSION}/admin/staff`,
    deleteStaff: (id) => `${API}/${VERSION}/admin/staff/${id}`,
    updateStaff: (id) => `${API}/${VERSION}/admin/staff/${id}`,
  },
  students: {
    getStudent: (id) => `${API}/${VERSION}/admin/students/${id}`,
    addStudent: `${API}/${VERSION}/admin/students`,
    updateStudent: (id) => `${API}/${VERSION}/admin/students/${id}`,
    deleteStudent: (id) => `${API}/${VERSION}/admin/students/${id}`,
    getAllStudents: `${API}/${VERSION}/admin/students`,
  },
  teachers: {
    getAllTeachers: `${API}/${VERSION}/admin/teachers`,
    getTeacher: (id) => `${API}/${VERSION}/admin/teachers/${id}`,
    addTeachers: `${API}/${VERSION}/admin/teachers`,
    deleteTeacher: (id) => `${API}/${VERSION}/admin/teachers/${id}`,
    updateTeacher: (id) => `${API}/${VERSION}/admin/teachers/${id}`,
  },
  users: {
    getAllUsers: `${API}/${VERSION}/admin/users`,
    getUsers: (id) => `${API}/${VERSION}/admin/users/${id}`,
    addUsers: `${API}/${VERSION}/admin/users`,
    deleteUsers: (id) => `${API}/${VERSION}/admin/users/${id}`,
    updateUsers: (id) => `${API}/${VERSION}/admin/users/${id}`,
  },
  usersRole: {
    getAllUsersRole: `${API}/${VERSION}/admin/usersrole`,
    getUsersRole: (id) => `${API}/${VERSION}/admin/usersrole/${id}`,
    addUsersRole: `${API}/${VERSION}/admin/usersrole`,
    deleteUsersRole: (id) => `${API}/${VERSION}/admin/usersrole/${id}`,
    updateUsersRole: (id) => `${API}/${VERSION}/admin/usersrole/${id}`,
  },
};

export default endPoints;
