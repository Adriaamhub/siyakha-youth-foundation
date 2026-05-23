// src/components/Testimonials.jsx

import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

function Testimonials() {

  const testimonials = [
    {
      name: "Student Participant",
      role: "Spelling Bee Learner",
      text:
        "The spelling competition improved my confidence, communication skills and academic performance tremendously.",
    },

    {
      name: "Parent",
      role: "Community Member",
      text:
        "Siyakha Youth Foundation is transforming children's futures through impactful educational opportunities.",
    },

    {
      name: "Teacher",
      role: "Educational Partner",
      text:
        "Excellent educational programs that inspire young learners to believe in their potential and leadership abilities.",
    },
  ];

  return (

    <section className="relative py-24 px-6 lg:px-12 bg-white overflow-hidden">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP CONTENT */}
        <div className="text-center">

          {/* LABEL */}
          <span className="inline-block bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold tracking-[3px] uppercase">

            Testimonials

          </span>

          {/* HEADING */}
          <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 leading-tight">

            What People Say About
            <span className="text-purple-700">
              {" "}Siyakha
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-9">

            Hear from students, teachers and community
            members whose lives have been positively
            impacted through our programs.

          </p>

        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-[32px] p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden"
            >

              {/* TOP GRADIENT */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-700 to-yellow-400" />

              {/* QUOTE ICON */}
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-3xl shadow-lg">

                <FaQuoteLeft />

              </div>

              {/* STARS */}
              <div className="flex gap-2 mt-6 text-yellow-400">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              {/* TEXT */}
              <p className="mt-6 text-gray-600 leading-9 text-lg">

                "{item.text}"

              </p>

              {/* USER INFO */}
              <div className="mt-10 flex items-center gap-4">

                {/* AVATAR */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-700 to-yellow-400 flex items-center justify-center text-white font-black text-xl shadow-lg">

                  {item.name.charAt(0)}

                </div>

                {/* DETAILS */}
                <div>

                  <h2 className="text-xl font-black text-gray-900">

                    {item.name}

                  </h2>

                  <p className="text-gray-500 text-sm mt-1">

                    {item.role}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Testimonials;