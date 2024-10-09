const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { userValidationRules, validate } = require("../middleware/validators");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userValidationRules(), validate, userController.createUser);

router
  .route("/:id")
  .get(userController.getUserById)
  .put(userValidationRules(), validate, userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
