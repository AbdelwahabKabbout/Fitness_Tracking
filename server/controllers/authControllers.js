const User = require("../models/User");

const LoginController = {
  async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username }).select("+password");

      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      // Update last login
      user.lastLogin = new Date();
      await user.save();

      return res.status(200).json({
        success: true,
        message: "Login successful",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },
};

const RegisterController = {
  async register(req, res) {
    try {
      const { username, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });

      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "Username or email already exists",
        });
      }

      // Create new user
      const newUser = new User({
        username,
        email,
        password,
      });

      await newUser.save();

      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
      });
    } catch (error) {
      console.error("Registration error:", error);

      if (error.name === "ValidationError") {
        return res.status(400).json({
          success: false,
          message: Object.values(error.errors)[0].message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },
};

// Export both controllers
module.exports = {
  loginController: LoginController.login,
  registerController: RegisterController.register,
};
