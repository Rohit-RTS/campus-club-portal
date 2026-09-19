import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Clubs", path: "/clubs" },
    { name: "Events", path: "/events" },
    { name: "Announcements", path: "/announcements" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          ClubHub
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Login */}
        <div className="hidden md:flex">
          <NavLink
            to="/login"
            className="rounded-lg border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50"
          >
            Login
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-800 md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`
          absolute left-0 top-16 w-full bg-white shadow-lg
          transition-all duration-300 ease-in-out
          md:hidden
          ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-5 opacity-0"
          }
        `}
      >
        <div className="flex flex-col gap-5 p-6">

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Login */}
          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className="rounded-lg border border-blue-600 px-4 py-2 text-center text-blue-600 hover:bg-blue-50"
          >
            Login
          </NavLink>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;