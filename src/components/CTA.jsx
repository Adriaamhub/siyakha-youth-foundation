// src/components/CTA.jsx
import { Link } from "react-router-dom";
import { FaArrowRight, FaHeart } from "react-icons/fa";

function CTA() {

  return (

    <section className="relative overflow-hidden py-28 px-6 lg:px-12 bg-[#120224]">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto relative z-10">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 md:p-16 shadow-2xl text-center overflow-hidden relative">

          {/* FLOATING ICON */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center text-4xl text-black shadow-2xl">

            <FaHeart />

          </div>

          {/* TOP LABEL */}
          <span className="inline-block mt-10 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-5 py-2 rounded-full text-sm font-semibold tracking-[3px] uppercase">

            Support Siyakha

          </span>

          {/* HEADING */}
          <h1 className="mt-8 text-4xl md:text-6xl font-black text-white leading-tight">

            Help Us Empower
            <span className="text-yellow-400">
              {" "}Future Leaders
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-9">

            Join Siyakha Youth Foundation in transforming
            communities through literacy, leadership,
            innovation and impactful youth development programs.

          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">

            {/* PRIMARY BUTTON */}
            <button className="group bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">

              Become A Partner

              <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

            </button>

            {/* SECONDARY BUTTON */}
           <a
  href="https://wa.me/27661012650"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
>

  Donate Now

</a>

          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-4xl font-black text-yellow-400">
                500+
              </h2>

              <p className="mt-3 text-gray-300">
                Youth Empowered
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-4xl font-black text-yellow-400">
                20+
              </h2>

              <p className="mt-3 text-gray-300">
                Community Programs
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-4xl font-black text-yellow-400">
                15+
              </h2>

              <p className="mt-3 text-gray-300">
                Educational Events
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default CTA;