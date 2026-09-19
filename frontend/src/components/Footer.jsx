import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white">

      {/* Main Footer */}
      <div className="grid grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-4 md:gap-12 md:px-10">

        {/* Brand */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">
            ClubHub
          </h2>

          <p className="max-w-xs text-sm leading-7 text-slate-400">
            Connecting students with clubs, events,
            and communities across campus.
          </p>
        </div>

        {/* Explore */}
        <div className="flex flex-col gap-3">
          <h3 className="mb-2 text-sm font-semibold text-white">
            Explore
          </h3>

          <NavLink
            to="/"
            className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
          >
            Home
          </NavLink>

          <NavLink
            to="/clubs"
            className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
          >
            Clubs
          </NavLink>

          <NavLink
            to="/events"
            className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
          >
            Events
          </NavLink>

          <NavLink
            to="/announcements"
            className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
          >
            Announcements
          </NavLink>
        </div>

        {/* ClubHub */}
        <div className="flex flex-col gap-3">
          <h3 className="mb-2 text-sm font-semibold text-white">
            ClubHub
          </h3>

          <NavLink
            to="/about"
            className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
          >
            About Us
          </NavLink>

          <NavLink
            to="/gallery"
            className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
          >
            Contact
          </NavLink>

          <NavLink
            to="/login"
            className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
          >
            Login
          </NavLink>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <h3 className="mb-2 text-sm font-semibold text-white">
            Follow Us
          </h3>

          <a
            href="#"
            className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
          >
            Instagram
          </a>

          <a
            href="#"
            className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
          >
            GitHub
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 px-6 py-5 text-center md:px-10">
        <p className="text-xs text-slate-500">
          © 2026 ClubHub. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;