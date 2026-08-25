import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="/" className="navbar-logo">
          ClubHub
        </a>

        {/* Navigation */}
        <div className="navbar-links">
          <a href="/" className="active">Home</a>
          <a href="/clubs">Clubs</a>
          <a href="/events">Events</a>
          <a href="/announcements">Announcements</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About</a>
        </div>

        {/* Buttons */}
        <div className="navbar-actions">
          <a href="/login" className="login-btn">
            Login
          </a>

          <a href="/register" className="register-btn">
            Register
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;