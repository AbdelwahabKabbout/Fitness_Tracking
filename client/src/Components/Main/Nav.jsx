import React, { useState } from "react";
import "./Nav.css";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">FitnessPro</a>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <a href="/workout">Workout</a>
          </li>
          <li>
            <a href="/meal">Meal</a>
          </li>
          <li>
            <a href="/future-plan">Future Plan</a>
          </li>
          <li>
            <a href="/progress">Progress</a>
          </li>
          <li>
            <a href="/challenges">Challenges</a>
          </li>
          <li>
            <a href="/community">Community</a>
          </li>
          <li>
            <a href="/chitchat">Chitchat</a>
          </li>
        </ul>

        {/* Profile and Notifications */}
        <div className="navbar-profile">
          <button className="navbar-notifications" aria-label="Notifications">
            🔔
          </button>
          <div className="navbar-user-menu">
            <button
              className="navbar-user-btn"
              aria-haspopup="true"
              aria-expanded="false"
            >
              👤
            </button>
            {/* Dropdown can be added later */}
          </div>
          <button className="dark-mode-toggle" aria-label="Toggle Dark Mode">
            🌙
          </button>
        </div>
      </div>
    </nav>
  );
}
