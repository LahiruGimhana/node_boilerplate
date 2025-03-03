const winston = require("winston");
const config = require("./config");

const logger = winston.createLogger({
  level: config.logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app.log" }),
  ],
});

// In production, filter out info and warn logs
if (process.env.NODE_ENV === "production") {
  logger.add(
    new winston.transports.Console({
      level: "error", // Only error logs in production
    })
  );
}

module.exports = logger;
