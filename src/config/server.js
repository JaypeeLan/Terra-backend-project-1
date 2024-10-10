require("dotenv").config();

const isDevelopment = process.env.NODE_ENV === "development";
const baseURL = isDevelopment
  ? "http://localhost:3000"
  : "https://terra-backend-project-1.onrender.com";

module.exports = {
  port: process.env.PORT || 9090,
  nodeEnv: process.env.NODE_ENV || "development",
  apiPrefix: "/api/v1",
  baseURL,
};
