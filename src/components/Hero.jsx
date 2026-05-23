// src/components/Hero.jsx

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  FaArrowRight,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import img1 from "../assets/images/IMG12.jpg";
import img2 from "../assets/images/IMG19.jpg";
import img3 from "../assets/images/IMG20.jpg";
import img4 from "../assets/images/IMG55.jpg";
import img5 from "../assets/images/IMG24.jpg";

function Hero() {

  const slides = [
    {
      image: img1,
      subtitle: "Education For All",
      title: "Empowering Young Minds Through Education",
      description:
        "Creating opportunities for learners through literacy, innovation and impactful educational programs.",
    },

    {
      image: img2,
      subtitle: "Leadership Development",
      title: "Inspiring Future Community Leaders",
      description:
        "Helping youth unlock confidence, leadership skills and purpose for a brighter future.",
    },

    {
      image: img3,
      subtitle: "Creativity & Innovation",
      title: "Where Creativity Meets Innovation",
      description:
        "Encouraging young people to dream bigger through art, science and innovation initiatives.",
    },

    {
      image: img4,
      subtitle: "Community Impact",
      title: "Transforming Communities Together",
      description:
        "Building stronger communities through collaboration, education and empowerment programs.",
    },

    {
      image: img5,
      subtitle: "Youth Empowerment",
      title: "Empowering The Next Generation",
      description:
        "Supporting youth development through impactful events, mentorship and leadership opportunities.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // AUTO SLIDE
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );

    }, 6000);

    return () => clearInterval(interval);

  }, [slides.length]);

  // NEXT
  const nextSlide = () => {

    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

  };

  // PREVIOUS
  const prevSlide = () => {

    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  };

return (
  <section className="relative min-h-screen w-full overflow-hidden">

    {/* SLIDES */}
    {slides.map((slide, index) => (

      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
          currentSlide === index
            ? "opacity-100 z-10"
            : "opacity-0 z-0"
        }`}
      >

        {/* IMAGE */}
        <img
          src={slide.image}
          alt={slide.title}
          className="
            w-full 
            h-full 
            object-cover 
            object-center
            md:object-center
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/70" />

      </div>

    ))}

    {/* LIGHT EFFECTS */}
    <div className="absolute top-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-700/20 rounded-full blur-3xl z-20" />

    <div className="absolute bottom-0 right-0 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-yellow-400/10 rounded-full blur-3xl z-20" />

    {/* CONTENT */}
    <div className="relative z-30 min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 w-full py-28 md:py-0">

        {/* SUBTITLE */}
        <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 shadow-2xl">

          <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full animate-pulse" />

          <span className="text-yellow-300 uppercase tracking-[2px] md:tracking-[4px] text-[10px] sm:text-xs md:text-sm font-semibold">

            {slides[currentSlide].subtitle}

          </span>

        </div>

        {/* ANIMATED TEXT */}
        <div
          key={currentSlide}
          className="transition-all duration-700"
        >

          {/* TITLE */}
          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-7xl
            font-black
            text-white
            leading-tight
            max-w-5xl
            drop-shadow-2xl
          ">

            {slides[currentSlide].title}

          </h1>

          {/* DESCRIPTION */}
          <p className="
            mt-5
            md:mt-8
            text-base
            sm:text-lg
            md:text-2xl
            text-gray-200
            leading-7
            md:leading-9
            max-w-3xl
          ">

            {slides[currentSlide].description}

          </p>

        </div>

        {/* BUTTONS */}
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5">

          {/* PRIMARY BUTTON */}
          <Link
            to="/contact"
            className="
              group
              bg-yellow-400
              hover:bg-yellow-300
              text-black
              px-7
              md:px-10
              py-4
              md:py-5
              rounded-full
              font-bold
              text-sm
              sm:text-base
              md:text-lg
              shadow-2xl
              hover:scale-105
              transition-all
              duration-300
              flex
              items-center
              justify-center
              gap-3
            "
          >

            Join Our Mission

            <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

          </Link>

          {/* SECONDARY BUTTON */}
          <Link
            to="/programs"
            className="
              group
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
              hover:bg-white
              hover:text-black
              text-white
              px-7
              md:px-10
              py-4
              md:py-5
              rounded-full
              font-semibold
              text-sm
              sm:text-base
              md:text-lg
              transition-all
              duration-300
              hover:scale-105
              flex
              items-center
              justify-center
              gap-3
            "
          >

            <FaPlay />

            Explore Programs

          </Link>

        </div>

      </div>

    </div>

    {/* ARROWS */}
    <div className="absolute inset-y-0 left-0 right-0 z-40 hidden md:flex items-center justify-between px-6 pointer-events-none">

      {/* LEFT */}
      <button
        onClick={prevSlide}
        className="pointer-events-auto w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center shadow-2xl"
      >

        <FaChevronLeft />

      </button>

      {/* RIGHT */}
      <button
        onClick={nextSlide}
        className="pointer-events-auto w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center shadow-2xl"
      >

        <FaChevronRight />

      </button>

    </div>

    {/* DOTS */}
    <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-40 flex gap-3">

      {slides.map((_, index) => (

        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`transition-all duration-500 rounded-full ${
            currentSlide === index
              ? "w-10 md:w-12 h-3 bg-yellow-400"
              : "w-3 h-3 bg-white/50 hover:bg-white"
          }`}
        />

      ))}

    </div>

  </section>
);


}

export default Hero;