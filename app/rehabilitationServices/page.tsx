"use client";

import React from "react";
import Image from "next/image";

const RehabilitationServices = () => {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-gray-900 text-gray-200">
      {/* Header Section */}
      <div className="text-center">
  <h1
    className="font-extrabold tracking-wide leading-tight mb-6 animate-fade-in"
    style={{
      fontSize: "clamp(2rem, 5vw, 4rem)", // Same responsive size as lower part
      lineHeight: "1.2",
      textShadow: "2px 2px 10px rgba(0, 255, 255, 0.3)", // Subtle glow effect
      backgroundImage: "linear-gradient(90deg, #34d399, #3b82f6)", // Green to Blue Gradient (matches lower part)
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
  >
    Abcare Home Rehabilitation
  </h1>
  <p className="text-base sm:text-lg text-gray-300 leading-relaxed tracking-wide max-w-3xl mx-auto">
    Providing top-notch home rehabilitation services tailored for your needs. Get expert care from the comfort of your home.
  </p>
</div>


      {/* Services Section */}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Services List */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-teal-300 tracking-wide">Our Specialized Services</h2>
          <ul className="space-y-5">
            {[
              { title: "Home Physiotherapy", desc: "Restore movement & function with expert guidance." },
              { title: "Home Autism Services", desc: "Personalized therapy for developmental needs." },
              { title: "Occupational Therapy", desc: "Assistance with daily living skills & independence." },
              { title: "Speech Therapy", desc: "Expert-led sessions for effective communication." }
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
            src="/ph.webp"
            alt="Rehabilitation Services"
            width={600}
            height={400}
            className="rounded-lg shadow-xl transition transform hover:scale-105 duration-300 hover:shadow-teal-500"
          />
        </div>
      </section>

      {/* Additional Information */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { title: "Musculoskeletal Rehab", desc: "Improve mobility, strength & pain relief." },
          { title: "Parkinson’s Disease Care", desc: "Specialized therapies for better motor control." },
          { title: "Cardiac Rehab", desc: "Post-heart attack recovery programs." }
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

export default RehabilitationServices;
