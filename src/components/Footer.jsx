// src/components/Footer.jsx

import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import footerImg from "../assets/images/IMG24.jpg";

function Footer() {

  return (

    <footer className="relative overflow-hidden bg-[#080810] text-white">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-700/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />

      {/* TOP BORDER */}
      <div className="w-full h-[2px] bg-gradient-to-r from-purple-700 via-yellow-400 to-purple-700" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-4 mb-8">

              <img
                src={footerImg}
                alt="Siyakha"
                className="w-16 h-16 rounded-full object-cover border-4 border-yellow-400 shadow-2xl"
              />

              <div>

                <h1 className="text-3xl font-black leading-tight">
                  Siyakha
                </h1>

                <p className="text-yellow-400 font-semibold">
                  Youth Foundation
                </p>

              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-400 leading-8 text-[15px]">

              Empowering communities through
              education, literacy, leadership,
              innovation and impactful youth
              development initiatives.

            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="group w-12 h-12 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center hover:bg-purple-700 transition-all duration-300"
              >

                <FaFacebookF className="group-hover:scale-110 transition-all duration-300" />

              </a>

              <a
                href="#"
                className="group w-12 h-12 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center hover:bg-pink-600 transition-all duration-300"
              >

                <FaInstagram className="group-hover:scale-110 transition-all duration-300" />

              </a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h2 className="text-2xl font-black text-yellow-400 mb-8">

              Quick Links

            </h2>

            <ul className="space-y-5">

              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Programs", path: "/programs" },
                { name: "Gallery", path: "/gallery" },
                { name: "Events", path: "/events" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (

                <li key={index}>

                  <Link
                    to={link.path}
                    className="group flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-all duration-300"
                  >

                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-all duration-300" />

                    {link.name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* PROGRAMS */}
          <div>

            <h2 className="text-2xl font-black text-yellow-400 mb-8">

              Our Programs

            </h2>

            <ul className="space-y-5 text-gray-300">

              <li className="hover:text-yellow-400 transition-all duration-300">
                Spelling Bee Competition
              </li>

              <li className="hover:text-yellow-400 transition-all duration-300">
                Science & Art Expo
              </li>

              <li className="hover:text-yellow-400 transition-all duration-300">
                Youth Leadership
              </li>

              <li className="hover:text-yellow-400 transition-all duration-300">
                Environmental Awareness
              </li>

              <li className="hover:text-yellow-400 transition-all duration-300">
                Community Outreach
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h2 className="text-2xl font-black text-yellow-400 mb-8">

              Contact Us

            </h2>

            <div className="space-y-6">

              {/* PHONE */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-purple-700 flex items-center justify-center shadow-xl">

                  <FaPhoneAlt />

                </div>

                <div>

                  <p className="text-white font-semibold">
                    Phone
                  </p>

                  <p className="text-gray-400 mt-1">
                    +27 66 101 2650
                  </p>

                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-pink-600 flex items-center justify-center shadow-xl">

                  <FaEnvelope />

                </div>

                <div>

                  <p className="text-white font-semibold">
                    Email
                  </p>

                  <p className="text-gray-400 mt-1 break-all">
                    info@siyakhayouthfoundation.co.za
                  </p>

                </div>

              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-black flex items-center justify-center shadow-xl">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <p className="text-white font-semibold">
                    Location
                  </p>

                  <p className="text-gray-400 mt-1">
                    South Africa
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center">

            © 2026 Siyakha Youth Foundation.
            All Rights Reserved.

          </p>

          <p className="text-gray-500 text-sm text-center">

            Empowering Youth Through Education & Innovation

          </p>

        </div>

      </div>

    </footer>

  );
}

export default Footer;