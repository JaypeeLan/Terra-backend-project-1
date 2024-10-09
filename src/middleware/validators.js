const { body, validationResult } = require("express-validator");

const userValidationRules = () => {
  return [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Valid email is required"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return res.status(400).json({
    status: "error",
    errors: errors.array(),
  });
};

module.exports = {
  userValidationRules,
  validate,
};
