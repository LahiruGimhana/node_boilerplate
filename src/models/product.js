const db = require("../db/connection");
const logger = require("../logger");

class Product {
  static async getAll() {
    try {
      const [rows] = await db.query("CALL GetAllProducts()");
      logger.debug("Fetched all products");
      return rows[0]; // First result set
    } catch (err) {
      logger.error(`Error fetching products: ${err.message}`);
      throw err;
    }
  }
}

module.exports = Product;
