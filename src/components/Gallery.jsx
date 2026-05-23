// src/components/Gallery.jsx
import { Link } from "react-router-dom";
import { FaCamera, FaArrowRight } from "react-icons/fa";

import img1 from "../assets/images/IMG1.jpg";
import img2 from "../assets/images/IMG2.jpg";
import img3 from "../assets/images/IMG3.jpg";
import img4 from "../assets/images/IMG4.jpg";
import img5 from "../assets/images/IMG7.jpg";
import img6 from "../assets/images/IMG8.jpg";

function Gallery() {

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  return (

    <section className="relative py-24 px-6 lg:px-12 bg-[#F8F8FA] overflow-hidden">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP CONTENT */}
        <div className="text-center">

          {/* LABEL */}
          <span className="inline-flex items-center gap-3 bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold tracking-[3px] uppercase">

            <FaCamera />

            Siyakha Gallery

          </span>

          {/* HEADING */}
          <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 leading-tight">

            Inspiring Moments
            <span className="text-purple-700">
              {" "}Captured
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-9">

            Explore impactful educational events,
            youth empowerment initiatives and
            unforgettable community experiences
            from Siyakha Youth Foundation.

          </p>

        </div>

        {/* GALLERY GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {images.map((image, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] shadow-2xl bg-white border border-gray-100 hover:-translate-y-3 transition-all duration-500"
            >

              {/* IMAGE CONTAINER */}
              <div className="relative h-[350px] overflow-hidden">

                <img
                  src={image}
                  alt="Gallery"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* CAMERA ICON */}
                <div className="absolute top-5 right-5 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">

                  <FaCamera className="text-xl" />

                </div>

              </div>

              {/* BOTTOM CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">

                <h2 className="text-2xl font-black text-white">

                  Siyakha Event

                </h2>

                <p className="mt-2 text-gray-200 text-sm leading-7">

                  Empowering communities through
                  education and youth development.

                </p>

              </div>

            </div>

          ))}

        </div>

        {/* BUTTON */}
        <div className="mt-16 text-center">

         <Link
  to="/gallery"
  className="group bg-purple-700 hover:bg-purple-800 text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
>

  View Full Gallery

  <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

</Link>

        </div>

      </div>

    </section>

  );
}

export default Gallery;