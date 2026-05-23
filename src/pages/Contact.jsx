// src/pages/Contact.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import contactImg from "../assets/images/IMG22.jpg";

function Contact() {

  return (

    <div className="bg-[#F8F8FA] min-h-screen overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* TOP SPACING */}
      <div className="pt-28">

        {/* PREMIUM TOP LINE */}
        <div className="w-full h-[2px] bg-gradient-to-r from-purple-700 via-yellow-400 to-purple-700 shadow-lg" />

        {/* CONTACT SECTION */}
        <section className="relative py-20 px-6 lg:px-12 overflow-hidden">

          {/* BACKGROUND LIGHTS */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">

            {/* TOP CONTENT */}
            <div className="text-center">

              <span className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold tracking-[3px] uppercase inline-flex items-center gap-2">

                <FaEnvelope />

                Contact Siyakha

              </span>

              <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 leading-tight">

                Let’s Build
                <span className="text-purple-700">
                  {" "}The Future Together
                </span>

              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-9">

                Reach out to Siyakha Youth Foundation
                for partnerships, sponsorships,
                volunteering opportunities and event participation.

              </p>

            </div>

            {/* MAIN GRID */}
            <div className="grid lg:grid-cols-2 gap-14 items-center mt-20">

              {/* LEFT SIDE */}
              <div>

                {/* CONTACT CARDS */}
                <div className="grid sm:grid-cols-3 gap-5 mb-10">

                  {/* EMAIL */}
                  <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 text-center hover:-translate-y-2 transition-all duration-300">

                    <div className="bg-purple-100 text-purple-700 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto text-2xl">

                      <FaEnvelope />

                    </div>

                    <h3 className="mt-4 font-bold text-gray-900">
                      Email
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                      info@siyakha.org
                    </p>

                  </div>

                  {/* PHONE */}
                  <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 text-center hover:-translate-y-2 transition-all duration-300">

                    <div className="bg-yellow-100 text-yellow-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto text-2xl">

                      <FaPhoneAlt />

                    </div>

                    <h3 className="mt-4 font-bold text-gray-900">
                      Phone
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                      +27 66 101 2650
                    </p>

                  </div>

                  {/* LOCATION */}
                  <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 text-center hover:-translate-y-2 transition-all duration-300">

                    <div className="bg-green-100 text-green-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto text-2xl">

                      <FaMapMarkerAlt />

                    </div>

                    <h3 className="mt-4 font-bold text-gray-900">
                      Location
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                      South Africa
                    </p>

                  </div>

                </div>

                {/* FORM */}
                <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-2xl border border-gray-100">

                  <h2 className="text-3xl font-black text-gray-900">

                    Send A Message

                  </h2>

                  <p className="mt-3 text-gray-500 leading-8">

                    We would love to hear from you.
                    Fill in the form below and our team
                    will get back to you soon.

                  </p>

                  <form className="mt-10 space-y-6">

                    {/* NAME */}
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full p-5 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />

                    {/* EMAIL */}
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="w-full p-5 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />

                    {/* MESSAGE */}
                    <textarea
                      rows="6"
                      placeholder="Write your message..."
                      className="w-full p-5 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                    />

                    {/* BUTTON */}
                  <a
  href="mailto:info@siyakhayouthfoundation.co.za"
  className="group w-full bg-purple-700 hover:bg-purple-800 text-white py-5 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl"
>

  Send Message

  <FaPaperPlane className="group-hover:translate-x-1 transition-all duration-300" />

</a>

                  </form>

                </div>

              </div>

              {/* RIGHT SIDE IMAGE */}
              <div className="relative">

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-[36px] shadow-2xl">

                  <img
                    src={contactImg}
                    alt="Contact Siyakha"
                    className="w-full h-[750px] object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                </div>

                {/* FLOATING CARD */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white p-6 rounded-3xl shadow-2xl w-[85%] border border-gray-100">

                  <h3 className="text-2xl font-black text-gray-900">

                    Empowering The Next Generation

                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">

                    Siyakha Youth Foundation continues
                    creating opportunities for young people
                    through education, leadership and innovation.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>

  );
}

export default Contact;