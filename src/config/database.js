const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI =
    process.env.NODE_ENV === "development"
      ? process.env.MONG0_URI
      : process.env.MONG0_URI;
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
