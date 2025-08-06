const express = require("express");
const router = express.Router();
const authLimiter = require("../middleware/rateLimiter");
const {
  loginController,
  registerController,
} = require("../controllers/authControllers");
const {
  LoginValidation,
  RegisterValidation,
} = require("../middleware/validators");

// Protect routes with rate limiting
router.post("/login", authLimiter, LoginValidation, loginController);
router.post("/register", authLimiter, RegisterValidation, registerController);

module.exports = router;
