import React, { useState } from "react";
import "./PasswordChanger.css";

const PasswordChanger = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [focusedField, setFocusedField] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Import the service at the top of your file
        // import passwordServices from '../services/passwordServices';

        const response = await fetch(
          "http://localhost:5000/api/password/change-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: formData.username,
              email: formData.email,
              newPassword: formData.newPassword,
              confirmPassword: formData.confirmPassword,
            }),
          }
        );

        // Check if response has content before parsing JSON
        const contentType = response.headers.get("content-type");
        let data = {};

        if (contentType && contentType.includes("application/json")) {
          data = await response.json();
        } else {
          // If no JSON content, create a default response
          data = { message: response.ok ? "Success" : "Error occurred" };
        }

        if (response.ok) {
          // Success - password changed
          alert("Password changed successfully!");
          // Reset form
          setFormData({
            username: "",
            email: "",
            newPassword: "",
            confirmPassword: "",
          });
          setErrors({});
        } else {
          // Handle backend validation errors
          setErrors({ submit: data.message || "Failed to change password" });
        }
      } catch (error) {
        console.error("Error:", error);
        setErrors({ submit: "Network error. Please try again." });
      }
    }
  };

  const handleBackToLogin = () => {
    window.location.href = "/login"; // Redirect to login page
    console.log("Back to login");
  };

  return (
    <div className="password-changer-container">
      <div className="password-changer-wrapper">
        {/* Floating Elements */}
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>

        <div className="password-changer-card">
          {/* Header */}
          <div className="password-changer-header">
            <div className="password-changer-icon">
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
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-3a1 1 0 011-1h2.586l6.414-6.414a6 6 0 017.743 5.743z"
                />
              </svg>
            </div>
            <h1 className="password-changer-title">Reset Password</h1>
            <p className="password-changer-subtitle">
              Enter your details to create a new password
            </p>
          </div>

          {/* Form */}
          <form className="password-changer-form" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="input-group">
              <div
                className={`input-wrapper ${
                  focusedField === "username" ? "focused" : ""
                }`}
              >
                <input
                  type="text"
                  name="username"
                  className={`form-input ${errors.username ? "error" : ""}`}
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus("username")}
                  onBlur={handleBlur}
                />
                <div className="input-overlay"></div>
              </div>
              {errors.username && (
                <span className="error-message">{errors.username}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="input-group">
              <div
                className={`input-wrapper ${
                  focusedField === "email" ? "focused" : ""
                }`}
              >
                <input
                  type="email"
                  name="email"
                  className={`form-input ${errors.email ? "error" : ""}`}
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                />
                <div className="input-overlay"></div>
              </div>
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            {/* New Password Field */}
            <div className="input-group">
              <div
                className={`input-wrapper ${
                  focusedField === "newPassword" ? "focused" : ""
                }`}
              >
                <input
                  type="password"
                  name="newPassword"
                  className={`form-input ${errors.newPassword ? "error" : ""}`}
                  placeholder="New password"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus("newPassword")}
                  onBlur={handleBlur}
                />
                <div className="input-overlay"></div>
              </div>
              {errors.newPassword && (
                <span className="error-message">{errors.newPassword}</span>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="input-group">
              <div
                className={`input-wrapper ${
                  focusedField === "confirmPassword" ? "focused" : ""
                }`}
              >
                <input
                  type="password"
                  name="confirmPassword"
                  className={`form-input ${
                    errors.confirmPassword ? "error" : ""
                  }`}
                  placeholder="Confirm new password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus("confirmPassword")}
                  onBlur={handleBlur}
                />
                <div className="input-overlay"></div>
              </div>
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="password-changer-button">
              <div className="button-content">
                <span>Reset Password</span>
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
              </div>
            </button>
          </form>

          {/* Back to Login */}
          <div className="back-to-login">
            <div className="divider">
              <div className="divider-line"></div>
              <span className="divider-text">or</span>
              <div className="divider-line"></div>
            </div>
            <button
              type="button"
              className="back-link"
              onClick={handleBackToLogin}
            >
              <svg
                className="back-arrow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span>Back to Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordChanger;
