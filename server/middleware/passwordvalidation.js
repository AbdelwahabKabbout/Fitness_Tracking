const passwordValidation = (req, res, next) => {
  const { username, email, newPassword, confirmPassword } = req.body;

  if (!username || !email || !newPassword || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: "Passwords don't match" });
  }

  if (!passwordRegex.test(newPassword)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.",
    });
  }

  next();
};
module.exports = {
  passwordValidation,
};
