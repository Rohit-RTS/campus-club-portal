import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>ClubHub</h2>

          <p>
            Connecting students with clubs, events,
            and communities across campus.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Explore</h3>

          <a href="/">Home</a>
          <a href="/clubs">Clubs</a>
          <a href="/events">Events</a>
          <a href="/announcements">Announcements</a>
        </div>

        {/* Other Links */}
        <div className="footer-section">
          <h3>ClubHub</h3>

          <a href="/about">About Us</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 ClubHub. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;