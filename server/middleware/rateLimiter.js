const rateLimit = require("express-rate-limit");

// Configure limits for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Max 5 attempts per window
  message: {
    success: false,
    message: "Too many attempts. Try again after 15 minutes.",
  },
  standardHeaders: true, // Send `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
});

module.exports = authLimiter;
