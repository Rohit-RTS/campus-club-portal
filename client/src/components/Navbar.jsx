import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  { name: "Home", path: "/" },
  { name: "Clubs", path: "/clubs" },
  { name: "Events", path: "/events" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          <span className="logo-mark">CC</span>
          <span className="logo-text">Campus Club Portal</span>
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <button className="btn btn-primary nav-login-mobile">
            Login
          </button>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-ghost nav-signin">
            Sign In
          </button>

          <button className="btn btn-primary nav-login">
            Get Started
          </button>

          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;