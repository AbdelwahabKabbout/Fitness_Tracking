import { useState } from "react";
import "./Login.css";
import { login } from "../services/authServices"; // Fixed: removed 's' from authServices

const Login = () => {
  const [focusedInput, setFocusedInput] = useState("");

  // Add these state variables for form data and handling
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await login(credentials);
      console.log("Login successful:", response);
      // Handle success - redirect, save user data, etc.
    } catch (error) {
      console.error("Login failed:", error);
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Main Card */}
        <div className="login-card">
          {/* Header */}
          <div className="login-header">
            <div className="login-icon">
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
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </div>
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Sign in to continue your journey</p>
          </div>

          {/* Form - Added form wrapper and onSubmit */}
          <form className="login-form" onSubmit={handleSubmit}>
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

            {/* Username Input */}
            <div className="input-group">
              <div
                className={`input-wrapper ${
                  focusedInput === "username" ? "focused" : ""
                }`}
              >
                <input
                  type="text"
                  name="username" // Added name attribute
                  placeholder="Username"
                  value={credentials.username} // Added value
                  onChange={handleInputChange} // Added onChange
                  required
                  onFocus={() => setFocusedInput("username")}
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
                  name="password" // Added name attribute
                  placeholder="Password"
                  value={credentials.password} // Added value
                  onChange={handleInputChange} // Added onChange
                  required
                  onFocus={() => setFocusedInput("password")}
                  onBlur={() => setFocusedInput("")}
                  className="form-input"
                />
                <div className="input-overlay"></div>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="forgot-password">
              <a href="/PasswordChanger" className="forgot-link">
                Forgot your password?
              </a>
            </div>

            {/* Login Button - Added loading state */}
            <button type="submit" className="login-button" disabled={loading}>
              <span className="button-content">
                <span>{loading ? "Signing In..." : "Sign In"}</span>
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

          {/* Register Link */}
          <div className="register-section">
            <div className="divider">
              <div className="divider-line"></div>
              <span className="divider-text">New here?</span>
              <div className="divider-line"></div>
            </div>
            <a href="/Register" className="register-link">
              <span>Create Account</span>
              <svg
                className="register-arrow"
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

export default Login;
