"use client";

import React from "react";
import Image from "next/image";

const VaccinationServices = () => {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-16 py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center text-green-800 leading-tight tracking-wider mb-12">
        Abcare Vaccination Services
      </h1>

      {/* Content about vaccination */}
      <p className="text-lg sm:text-xl text-gray-700 text-center leading-relaxed tracking-wide mb-14 max-w-4xl mx-auto">
        At Abcare, we offer a comprehensive range of vaccination services to safeguard you and your loved ones against various diseases. Our expert team ensures a safe, efficient, and comfortable vaccination experience.
      </p>

      {/* Services Section */}
      <section className="mt-16 lg:flex lg:items-center lg:space-x-16">
        {/* Bullet Points */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-green-700 mb-8 tracking-wide">
            Our Vaccination Services
          </h2>
          <ul className="list-disc pl-8 space-y-5 text-gray-800 text-lg sm:text-xl leading-relaxed">
            <li><span className="font-semibold">H1N1:</span> Protect against influenza strains.</li>
            <li><span className="font-semibold">Measles, Mumps & Rubella:</span> Essential immunization for children and adults.</li>
            <li><span className="font-semibold">The Flu:</span> Stay ahead of seasonal flu outbreaks.</li>
            <li><span className="font-semibold">Tetanus:</span> Critical for wound care and prevention.</li>
            <li><span className="font-semibold">Typhoid:</span> Ensure protection during travel and at home.</li>
            <li><span className="font-semibold">Chicken Pox:</span> Avoid complications with early prevention.</li>
            <li><span className="font-semibold">Hepatitis A & B:</span> Prevent liver infections effectively.</li>
          </ul>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
          <Image
            src="/vc.webp"
            alt="Vaccination Services"
            width={500}
            height={500}
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
          />
        </div>
      </section>

      {/* Why Choose Abcare */}
      <section className="mt-20">
        <h2 className="text-4xl font-semibold text-green-700 mb-8 tracking-wide text-center lg:text-left">
          Why Choose Abcare?
        </h2>
        <ul className="list-disc pl-8 space-y-5 text-gray-800 text-lg sm:text-xl leading-relaxed">
          <li><span className="font-semibold">Experienced Professionals:</span> Trusted healthcare experts.</li>
          <li><span className="font-semibold">Safe Environment:</span> Clean and hygienic facilities.</li>
          <li><span className="font-semibold">Efficient Services:</span> Quick and reliable processes.</li>
          <li><span className="font-semibold">Affordable Pricing:</span> Vaccinations for every budget.</li>
          <li><span className="font-semibold">Convenient Location:</span> Easy access and flexible hours.</li>
        </ul>
      </section>

      {/* Call Button */}
      <div className="mt-16 text-center">
        <button className="bg-gradient-to-r from-green-500 to-green-700 text-white text-lg sm:text-xl py-4 px-12 rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 transform hover:scale-110 transition duration-300">
          Call Now: 03154195240
        </button>
      </div>
    </div>
  );
};

export default VaccinationServices;
