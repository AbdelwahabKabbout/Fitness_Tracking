// Add these imports at the top
const bcrypt = require("bcrypt");
const User = require("../models/User"); // Adjust path to your User model

const ChangePassword = async (req, res) => {
  try {
    const { username, email, newPassword } = req.body;

    // Use findOne with await
    const user = await User.findOne({ username: username, email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10); // Use async version
    user.password = hashedPassword;

    // Save the user
    await user.save();

    // Response without plain password
    const response = {
      username: user.username,
      email: user.email,
      message: "Password changed successfully",
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error changing password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  ChangePassword,
};
