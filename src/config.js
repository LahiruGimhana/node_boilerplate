const fs = require("fs");
const path = require("path");
require("dotenv").config();

const loadConfig = () => {
  // Load default config
  const defaultConfig = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "../config/defaultConfig.json"),
      "utf-8"
    )
  );

  // Determine environment and load env-specific config
  const env = process.env.NODE_ENV || "development";
  const envConfigPath = path.join(
    __dirname,
    `../config/configuration/${env}.json`
  );
  const envConfig = fs.existsSync(envConfigPath)
    ? JSON.parse(fs.readFileSync(envConfigPath, "utf-8"))
    : {};

  // Merge default and env-specific configs first
  const baseConfig = mergeObjects(defaultConfig, envConfig);

  // Apply .env overrides dynamically
  const finalConfig = mergeObjects(baseConfig, process.env);

  return finalConfig;
};

// Simple recursive merge function
const mergeObjects = (target, source) => {
  const result = { ...target };

  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
      result[key] = mergeObjects(result[key] || {}, source[key]);
    } else if (source[key] !== undefined) {
      result[key] = source[key];
    }
  }

  return result;
};

module.exports = loadConfig();
