const mysql = require("mysql2/promise");
const config = require("../config");
const logger = require("../logger");

const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

logger.info("Database connection pool created");

module.exports = pool;
