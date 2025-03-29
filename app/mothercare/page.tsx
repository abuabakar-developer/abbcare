"use client";

import React from "react";
import Image from "next/image";

const MotherCarePage = () => {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-gray-950 text-gray-200">
      {/* Heading */}
      <div className="text-center">
        <h1
          className="font-extrabold tracking-wide leading-tight mb-6 animate-fade-in"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)", 
            lineHeight: "1.2",
            textShadow: "2px 2px 10px rgba(0, 255, 255, 0.3)",
            backgroundImage: "linear-gradient(90deg, #34d399, #3b82f6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          ABCare Mother & Baby Care
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed tracking-wide max-w-3xl mx-auto">
          Compassionate and personalized home-based care for mothers and newborns, ensuring their health and well-being in the early stages of life.
        </p>
      </div>

      {/* Services Section */}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Services List */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-teal-300 tracking-wide">
            Our Mother & Baby Care Services
          </h2>
          <ul className="space-y-5">
            {[
              { title: "Postpartum Care", desc: "Comprehensive support for new mothers." },
              { title: "Newborn Health Monitoring", desc: "Regular check-ups and assessments." },
              { title: "Baby Feeding Assistance", desc: "Guidance on breastfeeding and nutrition." },
              { title: "Developmental Support", desc: "Baby massage & early stimulation exercises." }
            ].map((service, index) => (
              <li
                key={index}
                className="bg-white/10 p-4 rounded-lg shadow-md backdrop-blur-md hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-teal-400">{service.title}</h3>
                <p className="text-gray-300 text-md">{service.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src="/bb.webp"
            alt="Mother and Baby Care"
            width={600}
            height={400}
            className="rounded-lg shadow-xl transition transform hover:scale-105 duration-300 hover:shadow-teal-500"
          />
        </div>
      </section>

      {/* Additional Information */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { title: "Personalized Home-Based Care", desc: "Tailored healthcare solutions for every mother and baby." },
          { title: "Expert Support & Guidance", desc: "Professional care ensuring the best medical advice." },
          { title: "Convenient Appointment Booking", desc: "Easily schedule home visits & online consultations." }
        ].map((info, index) => (
          <div
            key={index}
            className="p-6 bg-white/10 rounded-lg shadow-md hover:scale-105 transition-all duration-300 backdrop-blur-lg"
          >
            <h3 className="text-2xl font-semibold text-teal-300 mb-3">{info.title}</h3>
            <p className="text-gray-300 text-md">{info.desc}</p>
          </div>
        ))}
      </section>

      {/* Call To Action */}
      <div className="mt-16 text-center">
        <button className="bg-gradient-to-r from-teal-500 to-teal-700 text-white text-lg py-4 px-12 rounded-lg shadow-lg hover:from-teal-600 hover:to-teal-800 transform hover:scale-110 transition duration-300">
          Call Now: 03154195240
        </button>
      </div>
    </div>
  );
};

export default MotherCarePage;
