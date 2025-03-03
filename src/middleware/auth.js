const jwt = require("jsonwebtoken");
const config = require("../config");
const logger = require("../logger");

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Bearer <token>
  if (!token) {
    logger.warn("No token provided");
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    logger.info(`User authenticated: ${decoded.id}`);
    next();
  } catch (err) {
    logger.error(`Token verification failed: ${err.message}`);
    return res.status(403).json({ error: "Invalid token" });
  }
};

module.exports = authenticate;
