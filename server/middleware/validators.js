const LoginValidation = (req, res, next) => {
  const { username, password } = req.body;

  // Trim + lowercase inputs (sanitization)
  if (username) req.body.username = username.trim();
  if (password) req.body.password = password.trim();

  // Check for empty fields
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password are required",
    });
  }

  // Password length (match schema)
  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 8 characters",
    });
  }

  // Username format (alphanumeric + underscores)
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (!usernameRegex.test(username)) {
    return res.status(400).json({
      success: false,
      message: "Username can only contain letters, numbers, and underscores",
    });
  }

  next(); // Proceed to loginController
};

const RegisterValidation = (req, res, next) => {
  let { username, email, password } = req.body;

  // Trim + lowercase inputs
  if (username) req.body.username = username.trim();
  if (email) req.body.email = email.trim().toLowerCase();
  if (password) req.body.password = password.trim();

  // Check for empty fields
  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  // Email validation (strict regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
  }

  // Password strength (optional: add complexity rules)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/; // At least 1 letter + 1 number
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      success: false,
      message: "Password must contain at least 1 letter and 1 number",
    });
  }

  // Username rules
  if (username.length < 3 || username.length > 30) {
    return res.status(400).json({
      success: false,
      message: "Username must be 3-30 characters",
    });
  }

  next(); // Proceed to registerController
};

module.exports = {
  LoginValidation,
  RegisterValidation,
};
