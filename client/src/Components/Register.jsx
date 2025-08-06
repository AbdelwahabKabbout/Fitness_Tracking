import { useState } from "react";
import "./Register.css";
import { register } from "../services/authServices";

const Register = () => {
  const [focusedInput, setFocusedInput] = useState("");

  // Add state for form data and handling
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear messages when user starts typing
    if (error) setError("");
    if (success) setSuccess("");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Client-side validation
    if (userData.password !== userData.confirmPassword) {
      setError("Passwords don't match");
      setLoading(false);
      return;
    }

    if (userData.password.length < 8) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    try {
      // Don't send confirmPassword to backend
      const { confirmPassword, ...registrationData } = userData;

      const response = await register(registrationData);
      console.log("Registration successful:", response);

      setSuccess("Account created successfully! You can now log in.");

      // Clear form after success
      setUserData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Registration failed:", error);
      setError(error.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        {/* Main Card */}
        <div className="register-card">
          {/* Header */}
          <div className="register-header">
            <div className="register-icon">
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <h1 className="register-title">Join Us Today</h1>
            <p className="register-subtitle">
              Create your account and bloom with us
            </p>
          </div>

          {/* Form - Added form wrapper and onSubmit */}
          <form className="register-form" onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <div
                className="error-message"
                style={{
                  color: "#ef4444",
                  backgroundColor: "#fef2f2",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "16px",
                  fontSize: "14px",
                  border: "1px solid #fecaca",
                }}
              >
                {error}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div
                className="success-message"
                style={{
                  color: "#10b981",
                  backgroundColor: "#f0fdf4",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "16px",
                  fontSize: "14px",
                  border: "1px solid #bbf7d0",
                }}
              >
                {success}
              </div>
            )}

            {/* Username Input */}
            <div className="input-group">
              <div
                className={`input-wrapper ${
                  focusedInput === "username" ? "focused" : ""
                }`}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={userData.username}
                  onChange={handleInputChange}
                  required
                  onFocus={() => setFocusedInput("username")}
                  onBlur={() => setFocusedInput("")}
                  className="form-input"
                />
                <div className="input-overlay"></div>
              </div>
            </div>

            {/* Email Input */}
            <div className="input-group">
              <div
                className={`input-wrapper ${
                  focusedInput === "email" ? "focused" : ""
                }`}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={handleInputChange}
                  required
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput("")}
                  className="form-input"
                />
                <div className="input-overlay"></div>
              </div>
            </div>

            {/* Password Input */}
            <div className="input-group">
              <div
                className={`input-wrapper ${
                  focusedInput === "password" ? "focused" : ""
                }`}
              >
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={userData.password}
                  onChange={handleInputChange}
                  required
                  onFocus={() => setFocusedInput("password")}
                  onBlur={() => setFocusedInput("")}
                  className="form-input"
                />
                <div className="input-overlay"></div>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="input-group">
              <div
                className={`input-wrapper ${
                  focusedInput === "confirm" ? "focused" : ""
                }`}
              >
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={userData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  onFocus={() => setFocusedInput("confirm")}
                  onBlur={() => setFocusedInput("")}
                  className="form-input"
                />
                <div className="input-overlay"></div>
              </div>
            </div>

            {/* Register Button - Added loading state */}
            <button
              type="submit"
              className="register-button"
              disabled={loading}
            >
              <span className="button-content">
                <span>
                  {loading ? "Creating Account..." : "Create Account"}
                </span>
                {!loading && (
                  <svg
                    className="button-arrow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                )}
              </span>
            </button>
          </form>

          {/* Login Link */}
          <div className="login-section">
            <div className="divider">
              <div className="divider-line"></div>
              <span className="divider-text">Already blooming?</span>
              <div className="divider-line"></div>
            </div>
            <a href="/Login" className="login-link">
              <span>Sign In Here</span>
              <svg
                className="login-arrow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
      </div>
    </div>
  );
};

export default Register;
