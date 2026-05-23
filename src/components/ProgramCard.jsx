// src/components/ProgramCard.jsx

import {
  FaArrowRight,
  FaBookOpen,
} from "react-icons/fa";

function ProgramCard({ title, image, description }) {

  return (

    <div className="group bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative">

      {/* TOP GRADIENT LINE */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-700 to-yellow-400 z-20" />

      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden h-[320px]">

        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* ICON */}
        <div className="absolute top-5 left-5 w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-2xl shadow-2xl">

          <FaBookOpen />

        </div>

        {/* TITLE ON IMAGE */}
        <div className="absolute bottom-6 left-6 right-6">

          <h2 className="text-3xl font-black text-white leading-tight">

            {title}

          </h2>

        </div>

      </div>

      {/* CONTENT */}
      <div className="p-8">

        {/* DESCRIPTION */}
        <p className="text-gray-600 leading-9 text-lg">

          {description}

        </p>

        {/* BUTTON */}
       <Link
  to="/programs"
  className="group mt-8 bg-purple-700 hover:bg-purple-800 text-white px-7 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl"
>

  Learn More

  <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

</Link>

      </div>

      {/* HOVER GLOW */}
      <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-purple-200 transition-all duration-500 pointer-events-none" />

    </div>

  );
}

export default ProgramCard;