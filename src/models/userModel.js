// /models/userModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

class UserModel {
  static async findAll() {
    return await User.find();
  }

  static async findById(id) {
    return await User.findById(id);
  }

  static async create(userData) {
    const user = new User(userData);
    await user.save();
    return user;
  }

  static async update(id, userData) {
    return await User.findByIdAndUpdate(id, userData, { new: true });
  }

  static async delete(id) {
    return await User.findByIdAndDelete(id);
  }
}

module.exports = UserModel;
