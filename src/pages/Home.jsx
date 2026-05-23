// src/pages/Home.jsx

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {

  return (

    <div className="bg-[#F8F8FA] overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* TOP SPACING */}
      <div className="pt-24">

        {/* PREMIUM TOP LINE */}
        <div className="w-full h-[2px] bg-gradient-to-r from-purple-700 via-yellow-400 to-purple-700 shadow-lg" />

        {/* HERO */}
        <Hero />

      </div>

      {/* MAIN CONTENT */}
      <main className="relative">

        {/* BACKGROUND LIGHT EFFECTS */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />

        <div className="absolute bottom-20 right-0 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl" />

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* GALLERY */}
        <Gallery />

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* CTA */}
        <CTA />

      </main>

      {/* FOOTER */}
      <Footer />

    </div>

  );
}

export default Home;