const express = require("express");
const router = express.Router();
const { ChangePassword } = require("../controllers/passwordControllers"); // ✅ Destructure the function
const { passwordValidation } = require("../middleware/passwordvalidation");

router.post("/change-password", passwordValidation, ChangePassword); // ✅ Use the function directly

module.exports = router;
