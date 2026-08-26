import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="navbar-logo">
          ClubHub
        </NavLink>

        {/* Navigation */}
        <div className="navbar-links">

          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Home
          </NavLink>

          <NavLink
            to="/clubs"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Clubs
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Events
          </NavLink>

          <NavLink
            to="/announcements"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Announcements
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            About
          </NavLink>

        </div>

        {/* Buttons */}
        <div className="navbar-actions">

          <NavLink to="/login" className="login-btn">
            Login
          </NavLink>

          <NavLink to="/register" className="register-btn">
            Register
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;