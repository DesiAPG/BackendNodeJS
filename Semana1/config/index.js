require("dotenv").config();

const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};

module.exports = config;
