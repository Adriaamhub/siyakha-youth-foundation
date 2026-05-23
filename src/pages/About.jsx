// src/pages/About.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaUsers,
  FaLightbulb,
  FaGraduationCap,
  FaLeaf,
} from "react-icons/fa";

import aboutImg from "../assets/images/IMG21.jpg";

function About() {

  const values = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description:
        "Providing educational opportunities that inspire learning and growth.",
    },

    {
      icon: <FaUsers />,
      title: "Leadership",
      description:
        "Empowering young people to become future leaders in their communities.",
    },

    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description:
        "Encouraging creativity, innovation and problem-solving skills.",
    },

    {
      icon: <FaLeaf />,
      title: "Sustainability",
      description:
        "Promoting environmental awareness and sustainable community development.",
    },
  ];

  return (

    <div className="bg-[#F8F8FA] min-h-screen overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* TOP SPACING */}
      <div className="pt-28">

        {/* PREMIUM TOP LINE */}
        <div className="w-full h-[2px] bg-gradient-to-r from-purple-700 via-yellow-400 to-purple-700 shadow-lg" />

        {/* HERO SECTION */}
        <section className="relative py-20 px-6 lg:px-12 overflow-hidden">

          {/* BACKGROUND LIGHTS */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">

            {/* TOP CONTENT */}
            <div className="text-center">

              <span className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold tracking-[3px] uppercase inline-block">

                About Siyakha

              </span>

              <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 leading-tight">

                Transforming Communities
                <br />

                Through
                <span className="text-purple-700">
                  {" "}Education & Leadership
                </span>

              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-9">

                Siyakha Youth Foundation is dedicated
                to empowering youth through education,
                innovation, literacy, leadership and
                impactful community programs.

              </p>

            </div>

            {/* MAIN GRID */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

              {/* LEFT CONTENT */}
              <div>

                {/* TITLE */}
                <h2 className="text-4xl font-black text-gray-900 leading-tight">

                  Building A Better Future
                  <span className="text-purple-700">
                    {" "}For Young People
                  </span>

                </h2>

                {/* TEXT */}
                <p className="mt-8 text-gray-600 leading-9 text-lg">

                  Siyakha Youth Foundation creates
                  impactful educational programs
                  including spelling bee competitions,
                  science expos, environmental awareness
                  campaigns and youth leadership initiatives.

                </p>

                <p className="mt-6 text-gray-600 leading-9 text-lg">

                  Our mission is to inspire young minds,
                  unlock opportunities and empower future
                  generations to believe in their potential
                  and positively transform their communities.

                </p>

                {/* STATS */}
                <div className="mt-12 flex flex-wrap gap-10">

                  <div>

                    <h2 className="text-4xl font-black text-yellow-500">
                      500+
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Youth Empowered
                    </p>

                  </div>

                  <div>

                    <h2 className="text-4xl font-black text-purple-700">
                      20+
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Community Programs
                    </p>

                  </div>

                  <div>

                    <h2 className="text-4xl font-black text-green-600">
                      15+
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Educational Events
                    </p>

                  </div>

                </div>

              </div>

              {/* RIGHT IMAGE */}
              <div className="relative">

                {/* IMAGE CONTAINER */}
                <div className="relative overflow-hidden rounded-[36px] shadow-2xl">

                  <img
                    src={aboutImg}
                    alt="About Siyakha"
                    className="w-full h-[700px] object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                </div>

                {/* FLOATING CARD */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white p-6 rounded-3xl shadow-2xl w-[85%] border border-gray-100">

                  <h3 className="text-2xl font-black text-gray-900">

                    Empowering Future Leaders

                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">

                    Creating opportunities through
                    literacy, innovation, leadership
                    and impactful educational initiatives.

                  </p>

                </div>

              </div>

            </div>

            {/* VALUES SECTION */}
            <div className="mt-28">

              <div className="text-center">

                <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-sm font-semibold tracking-[3px] uppercase inline-block">

                  Our Core Values

                </span>

                <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900">

                  What Drives
                  <span className="text-purple-700">
                    {" "}Our Mission
                  </span>

                </h2>

              </div>

              {/* VALUES GRID */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                {values.map((value, index) => (

                  <div
                    key={index}
                    className="bg-white p-8 rounded-[30px] shadow-xl border border-gray-100 hover:-translate-y-3 transition-all duration-500 group"
                  >

                    {/* ICON */}
                    <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-3xl group-hover:bg-purple-700 group-hover:text-white transition-all duration-300">

                      {value.icon}

                    </div>

                    {/* TITLE */}
                    <h3 className="mt-6 text-2xl font-black text-gray-900">

                      {value.title}

                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-gray-600 leading-8">

                      {value.description}

                    </p>

                  </div>

                ))}

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

export default About;