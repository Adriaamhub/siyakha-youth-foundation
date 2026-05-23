// src/pages/Programs.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgramCard from "../components/ProgramCard";

import { FaBookOpen, FaLeaf, FaLightbulb } from "react-icons/fa";

import img1 from "../assets/images/IMG17.jpg";
import img2 from "../assets/images/IMG10.jpg";
import img3 from "../assets/images/IMG25.jpg";

function Programs() {

  const programs = [
    {
      title: "Spelling Bee Competition",
      image: img1,
      icon: <FaBookOpen />,
      description:
        "Empowering learners through literacy, communication skills and confidence building.",
    },

    {
      title: "Science & Art Expo",
      image: img2,
      icon: <FaLightbulb />,
      description:
        "Promoting creativity, innovation, technology and educational excellence among youth.",
    },

    {
      title: "Environmental Awareness",
      image: img3,
      icon: <FaLeaf />,
      description:
        "Teaching youth about sustainability, conservation and protecting the environment.",
    },
  ];

  return (

    <div className="bg-[#F7F7FA] min-h-screen overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* TOP SPACING */}
      <div className="pt-28">

        {/* PREMIUM TOP LINE */}
        <div className="w-full h-[2px] bg-gradient-to-r from-purple-700 via-yellow-400 to-purple-700 shadow-lg" />

        {/* HERO SECTION */}
        <section className="py-20 px-6 lg:px-12 relative overflow-hidden">

          {/* BACKGROUND LIGHTS */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">

            {/* HEADING */}
            <div className="text-center">

              <span className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold tracking-[3px] uppercase">

                Siyakha Programs

              </span>

              <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 leading-tight">

                Empowering Communities
                <br />

                Through Education &
                <span className="text-purple-700">
                  {" "}Innovation
                </span>

              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-9">

                Discover our impactful youth development
                programs focused on education, leadership,
                creativity and environmental sustainability.

              </p>

            </div>

            {/* PROGRAM CARDS */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">

              {programs.map((program, index) => (

                <div
                  key={index}
                  className="group bg-white rounded-[30px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
                >

                  {/* IMAGE */}
                  <div className="relative overflow-hidden h-[320px]">

                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* ICON */}
                    <div className="absolute top-5 left-5 bg-yellow-400 text-black w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-xl">

                      {program.icon}

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-8">

                    <h2 className="text-2xl font-black text-gray-900">

                      {program.title}

                    </h2>

                    <p className="mt-5 text-gray-600 leading-8">

                      {program.description}

                    </p>

                    {/* BUTTON */}
                    <button className="mt-8 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">

                      Learn More

                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>

  );
}

export default Programs;