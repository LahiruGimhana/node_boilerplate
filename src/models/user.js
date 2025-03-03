const db = require("../db/connection");
const logger = require("../logger");

class User {
  static async getById(id) {
    try {
      const [rows] = await db.query("CALL GetUserById(?)", [id]);
      logger.debug(`Fetched user with ID: ${id}`);
      return rows[0][0];
    } catch (err) {
      logger.error(`Error fetching user: ${err.message}`);
      throw err;
    }
  }

  static async create(username, email, password) {
    try {
      const [rows] = await db.query("CALL CreateUser(?, ?, ?)", [
        username,
        email,
        password,
      ]);
      logger.info(`Created user with ID: ${rows[0][0].id}`);
      return rows[0][0].id;
    } catch (err) {
      logger.error(`Error creating user: ${err.message}`);
      throw err;
    }
  }

  static async findByEmail(email) {
    try {
      const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
        email,
      ]);
      logger.debug(`Fetched user by email: ${email}`);
      return rows[0]; // Direct query, not a procedure
    } catch (err) {
      logger.error(`Error finding user by email: ${err.message}`);
      throw err;
    }
  }
}

module.exports = User;
