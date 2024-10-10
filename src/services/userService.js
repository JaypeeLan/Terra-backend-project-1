// /services/userService.js
const User = require("../models/userModel");
const { AppError } = require("../middleware/errorHandler");

class UserService {
  async getAllUsers() {
    return await User.findAll();
  }

  async getUserById(id) {
    const user = await User.findById(id);
    if (!user) {
      throw new AppError("User not found", 404);
    }
    return user;
  }

  async createUser(userData) {
    return await User.create(userData);
  }

  async updateUser(id, userData) {
    const user = await User.findById(id);
    if (!user) {
      throw new AppError("User not found", 404);
    }
    return await User.update(id, userData);
  }

  async deleteUser(id) {
    const deleted = await User.delete(id);
    if (!deleted) {
      throw new AppError("User not found", 404);
    }
    return true;
  }
}

module.exports = new UserService();
