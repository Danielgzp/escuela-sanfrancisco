const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
//importo los modelos
const setupModels = require("../db/models/");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// URI
const sequelize = new Sequelize(config.dbUrl, {
  dialect: "postgres",
  //para que no de un warning
  logging: console.log,
});

setupModels(sequelize);

module.exports = sequelize;
