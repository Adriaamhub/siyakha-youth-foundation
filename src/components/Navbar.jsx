// src/components/Navbar.jsx

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

import logo from "../assets/images/IMG1.jpg";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // NAV LINKS
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (

    <nav className="fixed top-0 left-0 w-full z-50">

      {/* GLASSMORPHISM NAVBAR */}
      <div className="bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-4 group"
          >

            {/* IMAGE */}
            <div className="relative">

              <img
                src={logo}
                alt="Siyakha Logo"
                className="w-14 h-14 rounded-full object-cover border-4 border-purple-700 shadow-xl group-hover:scale-105 transition-all duration-300"
              />

              {/* GLOW */}
              <div className="absolute inset-0 rounded-full bg-purple-700/20 blur-lg -z-10" />

            </div>

            {/* TEXT */}
            <div>

              <h1 className="text-2xl font-black text-gray-900 leading-tight">

                Siyakha Youth

              </h1>

              <p className="text-sm text-yellow-500 font-bold tracking-[2px] uppercase">

                Foundation

              </p>

            </div>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((link, index) => (

              <Link
                key={index}
                to={link.path}
                className={`relative text-[16px] font-semibold transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-purple-700"
                    : "text-gray-700 hover:text-purple-700"
                }`}
              >

                {link.name}

                {/* ACTIVE LINE */}
                {location.pathname === link.path && (

                  <span className="absolute left-0 -bottom-2 w-full h-[3px] rounded-full bg-gradient-to-r from-purple-700 to-yellow-400" />

                )}

              </Link>

            ))}

            {/* CTA BUTTON */}
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-950 text-white px-7 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >

              Join Us

              <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl shadow-lg"
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 overflow-hidden ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-gray-100 px-6 py-8">

          {/* LINKS */}
          <div className="flex flex-col gap-6">

            {navLinks.map((link, index) => (

              <Link
                key={index}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-semibold transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-purple-700"
                    : "text-gray-700 hover:text-purple-700"
                }`}
              >

                {link.name}

              </Link>

            ))}

            {/* MOBILE CTA */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="group mt-4 bg-gradient-to-r from-purple-700 to-purple-900 text-white px-7 py-4 rounded-full shadow-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300"
            >

              Join Our Mission

              <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

            </Link>

          </div>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;