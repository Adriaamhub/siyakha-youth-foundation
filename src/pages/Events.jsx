// src/pages/Events.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import event1 from "../assets/images/IMG10.jpg";
import event2 from "../assets/images/IMG14.jpg";

function Events() {

  const events = [
    {
      title: "Science & Art Expo",
      image: event1,
      date: "12 October 2026",
      location: "Johannesburg, South Africa",
      attendees: "300+ Learners",
      description:
        "A dynamic educational event promoting science, innovation, creativity and artistic excellence among youth.",
    },

    {
      title: "Funda Nathi Spelling Bee",
      image: event2,
      date: "25 November 2026",
      location: "Pretoria, South Africa",
      attendees: "500+ Participants",
      description:
        "An inspiring literacy competition helping students improve confidence, spelling and communication skills.",
    },
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

            {/* TOP CONTENT */}
            <div className="text-center">

              <span className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold tracking-[3px] uppercase inline-flex items-center gap-2">

                <FaCalendarAlt />

                Siyakha Events

              </span>

              <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 leading-tight">

                Upcoming
                <span className="text-purple-700">
                  {" "}Educational Events
                </span>

              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-9">

                Discover impactful educational experiences,
                literacy competitions and youth empowerment
                initiatives shaping future leaders.

              </p>

            </div>

            {/* EVENTS GRID */}
            <div className="grid lg:grid-cols-2 gap-12 mt-20">

              {events.map((event, index) => (

                <div
                  key={index}
                  className="group bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
                >

                  {/* IMAGE */}
                  <div className="relative h-[350px] overflow-hidden">

                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* DATE BADGE */}
                    <div className="absolute top-5 left-5 bg-yellow-400 text-black px-5 py-3 rounded-2xl shadow-xl font-bold text-sm">

                      {event.date}

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-8">

                    <h2 className="text-3xl font-black text-gray-900">

                      {event.title}

                    </h2>

                    {/* DETAILS */}
                    <div className="mt-6 space-y-4">

                      <div className="flex items-center gap-4 text-gray-600">

                        <div className="bg-purple-100 text-purple-700 w-12 h-12 rounded-2xl flex items-center justify-center">

                          <FaMapMarkerAlt />

                        </div>

                        <p className="font-medium">
                          {event.location}
                        </p>

                      </div>

                      <div className="flex items-center gap-4 text-gray-600">

                        <div className="bg-yellow-100 text-yellow-600 w-12 h-12 rounded-2xl flex items-center justify-center">

                          <FaUsers />

                        </div>

                        <p className="font-medium">
                          {event.attendees}
                        </p>

                      </div>

                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-6 text-gray-600 leading-8">

                      {event.description}

                    </p>

                    {/* BUTTON */}
                    <button className="group mt-8 bg-purple-700 hover:bg-purple-800 text-white px-7 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl">

                      Register Event

                      <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

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

export default Events;