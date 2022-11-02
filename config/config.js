//Configurar las variables de entorno
require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "dev",
  //Esta variable sirve para saber si estmaos en modo produccion o no
  apiUrl: process.env.API_URL,
  apiVersion: process.env.API_VERSION,
  apiKey: process.env.API_KEY,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DATABASE_LOCAL_URL,
  jwtSecret: process.env.JWT_SECRET,
  jwtEmailSecret: process.env.JWT_EMAIL_SECRET,
  emailUser: process.env.EMAIL_USER,
  emailPassword: process.env.EMAIL_PASSWORD,
  cookieName: process.env.COOKIE_NAME
};

module.exports = { config };
