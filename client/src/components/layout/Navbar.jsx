import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";

import "./Navbar.css";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navLinks = [
  { name: "Home", path: "/" },
  { name: "Clubs", path: "/clubs" },
  { name: "Events", path: "/events" },
  { name: "Announcements", path: "/announcements" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

  return (
    <header className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
      <div className="container navbar-container">

        {/* Logo */}

        <NavLink to="/" className="navbar-logo">

          <div className="logo-icon">
            <GraduationCap size={20} />
          </div>

          <span>Campus Club Portal</span>

        </NavLink>

        {/* Navigation */}

        <nav className={`navbar-links ${open ? "show" : ""}`}>

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="mobile-buttons">

            <button className="btn btn-outline">
              Login
            </button>

            <button className="btn btn-primary">
              Join Now
            </button>

          </div>

        </nav>

        {/* Desktop Buttons */}

        <div className="desktop-buttons">

          <button className="btn btn-outline">
            Login
          </button>

          <button className="btn btn-primary">
            Join Now
          </button>

        </div>

        {/* Mobile Menu */}

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </header>
  );
}