require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const { errorHandler } = require("./middleware/errorHandler");
const routes = require("./routes");
const { port, nodeEnv, apiPrefix } = require("./config/server");
const connectDB = require("./config/database");

const app = express();

connectDB();

app.use(helmet());

// Request logging
if (nodeEnv === "development") {
  app.use(morgan("dev"));
}

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(apiPrefix, routes);

app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server running in ${nodeEnv} mode on port ${port}`);
});

module.exports = app;
