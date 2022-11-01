// const { config } = require("../../config/config");

const API = "http://localhost:3000/api";
const VERSION = "v1";

const endPoints = {
  auth: {
    login: `${API}/${VERSION}/auth/login`,
    profile: `${API}/${VERSION}/auth/profile`,
  },
  eventualities: {},
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
    deletePeriods: (id) => `${API}/${VERSION}/periods/${id}`,
    updatePeriods: (id) => `${API}/${VERSION}/periods/${id}`,
  },
  representants: {
    getAllRepresentants: `${API}/${VERSION}/representants`,
    getRepresentant: (id) => `${API}/${VERSION}/representants/${id}`,
    addRepresentant: `${API}/${VERSION}/representants`,
    deleteRepresentant: (id) => `${API}/${VERSION}/representants/${id}`,
    updateRepresentant: (id) => `${API}/${VERSION}/representants/${id}`,
  },
  roles: {
    getAllRoles: `${API}/${VERSION}/roles`,
    getRoles: (id) => `${API}/${VERSION}/roles/${id}`,
    addRoles: `${API}/${VERSION}/roles`,
    deleteRoles: (id) => `${API}/${VERSION}/roles/${id}`,
    updateRoles: (id) => `${API}/${VERSION}/roles/${id}`,
  },
  staff: {
    getAllStaff: `${API}/${VERSION}/staff`,
    getStaff: (id) => `${API}/${VERSION}/staff/${id}`,
    addStaff: `${API}/${VERSION}/staff`,
    deleteStaff: (id) => `${API}/${VERSION}/staff/${id}`,
    updateStaff: (id) => `${API}/${VERSION}/staff/${id}`,
  },
  students: {
    getStudent: (id) => `${API}/${VERSION}/students/${id}/`,
    addStudent: `${API}/${VERSION}/students`,
    updateStudent: (id) => `${API}/${VERSION}/students/${id}/`,
    deleteStudent: (id) => `${API}/${VERSION}/students/${id}/`,
    getAllStudents: `${API}/${VERSION}/students/`,
  },
  teachers: {
    getAllTeachers: `${API}/${VERSION}/teachers`,
    getTeachers: (id) => `${API}/${VERSION}/teachers/${id}`,
    addTeachers: `${API}/${VERSION}/teachers`,
    deleteTeachers: (id) => `${API}/${VERSION}/teachers/${id}`,
    updateTeachers: (id) => `${API}/${VERSION}/teachers/${id}`,
  },
  users: {
    getAllUsers: `${API}/${VERSION}/users`,
    getUsers: (id) => `${API}/${VERSION}/users/${id}`,
    addUsers: `${API}/${VERSION}/users`,
    deleteUsers: (id) => `${API}/${VERSION}/users/${id}`,
    updateUsers: (id) => `${API}/${VERSION}/users/${id}`,
  },
};

export default endPoints;
