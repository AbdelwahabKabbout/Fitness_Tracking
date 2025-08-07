const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/password", require("./routes/passwordRoutes")); // ✅ Changed from "/api/change-password" to "/api/password"

// Function to start server only after successful DB connection
const startServer = async () => {
  try {
    // Connect to MongoDB with immediate connection
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/mernapp",
      {
        serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      }
    );

    // Test the connection immediately
    await mongoose.connection.db.admin().ping();
    console.log("✅ MongoDB connected and verified");

    // Only start the server after successful DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("❌ MongoDB connection failed:", err.message);
    console.log(
      "🛑 Server not started - please check your database connection"
    );
    process.exit(1);
  }
};

app.post("/test", (req, res) => {
  console.log("req.body:", req.body);
  res.json({ received: req.body });
});

mongoose.connection.on("connected", () => {
  console.log("📡 Mongoose connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("❌ Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("📴 Mongoose disconnected from MongoDB");
});

app.get("/", (req, res) => {
  res.send("API is running");
});

startServer();
