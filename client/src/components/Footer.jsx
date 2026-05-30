import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="logo">
            <span className="logo-mark">CC</span>
            <span className="logo-text">Campus Club Portal</span>
          </a>

          <p>
            The official student community platform — discover clubs,
            attend events, and grow with your campus.
          </p>

          <div className="socials">
            {/* Social Icons */}
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <a href="#clubs">Clubs</a>
          <a href="#events">Events</a>
          <a href="#about">Why join</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <a href="#">Student Guide</a>
          <a href="#">Help Center</a>
          <a href="#">Community Rules</a>
          <a href="#">Changelog</a>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Campus Club Portal.
            All rights reserved.
          </p>

          <p className="footer-made">
            Made with care for students.
          </p>
        </div>
      </div>
    </footer>
  );
}