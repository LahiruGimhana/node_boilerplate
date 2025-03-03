const express = require("express");
const config = require("./config");
const logger = require("./logger");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(config.port, () => {
  logger.info(
    `Server running on port ${config.port} in ${
      process.env.NODE_ENV || "development"
    } mode`
  );
  const logMessage = JSON.stringify(config, null, 2);
  const logMessages = JSON.stringify(config, null, 2);
  //   logger.debug(
  //     `Config loaded: ${JSON.parse(logMessage.message.replace(/\\\\/g, "\\"))}`
  //   );
});
