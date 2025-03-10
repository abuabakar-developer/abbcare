"use client";

import React from "react";
import Image from "next/image";

const VaccinationServices = () => {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-green-400 leading-tight tracking-wide mb-10">
        Abcare Vaccination Services
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl text-gray-300 text-center leading-relaxed tracking-wide mb-12 max-w-4xl mx-auto">
        At Abcare, we provide top-tier vaccination services to protect you and your loved ones. Our professional team
        ensures a safe, seamless, and comfortable vaccination experience.
      </p>

      {/* Services Section */}
      <section className="mt-12 lg:flex lg:items-center lg:space-x-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-green-300 mb-6 tracking-wide">Our Vaccination Services</h2>
          <ul className="list-disc pl-8 space-y-4 text-gray-300 text-lg leading-relaxed">
            <li><span className="font-semibold text-green-400">H1N1:</span> Protection against influenza strains.</li>
            <li><span className="font-semibold text-green-400">Measles, Mumps & Rubella:</span> Essential immunization for all.</li>
            <li><span className="font-semibold text-green-400">The Flu:</span> Stay ahead of seasonal outbreaks.</li>
            <li><span className="font-semibold text-green-400">Tetanus:</span> Crucial for wound prevention.</li>
            <li><span className="font-semibold text-green-400">Typhoid:</span> Protection at home and abroad.</li>
            <li><span className="font-semibold text-green-400">Chicken Pox:</span> Early prevention, better health.</li>
            <li><span className="font-semibold text-green-400">Hepatitis A & B:</span> Strong defense against liver infections.</li>
          </ul>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
          <Image
            src="/vc.webp"
            alt="Vaccination Services"
            width={700}
            height={400}
            className="rounded-lg shadow-2xl lg:max-h-[350px] transform hover:scale-105 transition duration-300 hover:shadow-green-500"
          />
        </div>
      </section>

      {/* Call To Action */}
      <div className="mt-12 text-center">
        <button className="bg-gradient-to-r from-green-500 to-green-700 text-white text-lg py-4 px-12 rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 transform hover:scale-110 transition duration-300">
          Call Now: 03154195240
        </button>
      </div>
    </div>
  );
};

export default VaccinationServices;
