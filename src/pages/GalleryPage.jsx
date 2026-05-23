// src/pages/GalleryPage.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaCamera,
  FaImages,
  FaHeart,
} from "react-icons/fa";

import img1 from "../assets/images/IMG1.jpg";
import img2 from "../assets/images/IMG2.jpg";
import img3 from "../assets/images/IMG3.jpg";
import img4 from "../assets/images/IMG4.jpg";
import img5 from "../assets/images/IMG7.jpg";
import img6 from "../assets/images/IMG8.jpg";
import img7 from "../assets/images/IMG9.jpg";
import img8 from "../assets/images/IMG10.jpg";
import img9 from "../assets/images/IMG11.jpg";
import img10 from "../assets/images/IMG14.jpg";
import img11 from "../assets/images/IMG15.jpg";
import img12 from "../assets/images/IMG16.jpg";
import img13 from "../assets/images/IMG17.jpg";
import img14 from "../assets/images/IMG18.jpg";
import img15 from "../assets/images/IMG21.jpg";
import img16 from "../assets/images/IMG22.jpg";
import img17 from "../assets/images/IMG23.jpg";
import img18 from "../assets/images/IMG24.jpg";
import img19 from "../assets/images/IMG25.jpg";

function GalleryPage() {

  const images = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15,
    img16, img17, img18, img19,
  ];

  return (

    <div className="bg-[#F8F8FA] min-h-screen overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* TOP SPACING */}
      <div className="pt-28">

        {/* PREMIUM LINE */}
        <div className="w-full h-[2px] bg-gradient-to-r from-purple-700 via-yellow-400 to-purple-700 shadow-lg" />

        {/* HERO SECTION */}
        <section className="relative py-20 px-6 lg:px-12 overflow-hidden">

          {/* BACKGROUND LIGHTS */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">

            {/* TOP LABEL */}
            <div className="text-center">

              <span className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold tracking-[3px] uppercase inline-flex items-center gap-2">

                <FaCamera />

                Siyakha Gallery

              </span>

              {/* HEADING */}
              <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 leading-tight">

                Moments Of
                <span className="text-purple-700">
                  {" "}Impact
                </span>

              </h1>

              {/* DESCRIPTION */}
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-9">

                Explore unforgettable memories,
                educational events, youth programs
                and impactful community initiatives
                from Siyakha Youth Foundation.

              </p>

            </div>

            {/* STATS */}
            <div className="mt-14 flex flex-wrap justify-center gap-10">

              <div className="bg-white px-8 py-6 rounded-3xl shadow-xl border border-gray-100 text-center">

                <FaImages className="text-4xl text-purple-700 mx-auto" />

                <h2 className="mt-4 text-3xl font-black text-gray-900">
                  500+
                </h2>

                <p className="text-gray-500 mt-2">
                  Captured Moments
                </p>

              </div>

              <div className="bg-white px-8 py-6 rounded-3xl shadow-xl border border-gray-100 text-center">

                <FaHeart className="text-4xl text-yellow-500 mx-auto" />

                <h2 className="mt-4 text-3xl font-black text-gray-900">
                  20+
                </h2>

                <p className="text-gray-500 mt-2">
                  Community Events
                </p>

              </div>

            </div>

            {/* GALLERY GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-20">

              {images.map((image, index) => (

                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[28px] shadow-xl bg-white border border-gray-100 hover:-translate-y-3 transition-all duration-500"
                >

                  {/* IMAGE CONTAINER */}
                  <div className="relative h-[320px] overflow-hidden">

                    <img
                      src={image}
                      alt="Gallery"
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* ICON */}
                    <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-lg w-12 h-12 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">

                      <FaCamera />

                    </div>

                  </div>

                  {/* BOTTOM CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">

                    <h2 className="text-xl font-bold">
                      Siyakha Event
                    </h2>

                    <p className="text-sm text-gray-200 mt-2">
                      Empowering communities through education.
                    </p>

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

export default GalleryPage;