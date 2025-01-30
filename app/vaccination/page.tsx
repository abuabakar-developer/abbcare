"use client";

import React from "react";
import Image from 'next/image';


const VaccinationServices = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-center text-green-800 leading-tight tracking-wide mb-10">
        Abcare Vaccination Services
      </h1>

      {/* Content about vaccination */}
      <p className="text-lg text-gray-700 text-center leading-relaxed tracking-wide mb-12 max-w-3xl mx-auto">
        At Abcare, we offer a comprehensive range of vaccination services to safeguard you and your loved ones against various diseases. Our expert team ensures a safe, efficient, and comfortable vaccination experience.
      </p>

      {/* Services Section */}
      <section className="mt-16 lg:flex lg:space-x-12">
        {/* Bullet Points */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-green-700 mb-6 tracking-wide">
            Our Vaccination Services
          </h2>
          <ul className="list-disc pl-6 space-y-6 text-gray-800 text-lg leading-loose">
            <li>
              <span className="font-semibold">HINI:</span> Protect against influenza strains.
            </li>
            <li>
              <span className="font-semibold">Measles, Mumps & Rubella:</span> Essential immunization for children and adults.
            </li>
            <li>
              <span className="font-semibold">The Flu:</span> Stay ahead of seasonal flu outbreaks.
            </li>
            <li>
              <span className="font-semibold">Tetanus:</span> Critical for wound care and prevention.
            </li>
            <li>
              <span className="font-semibold">Typhoid:</span> Ensure protection during travel and at home.
            </li>
            <li>
              <span className="font-semibold">Chicken Pox:</span> Avoid complications with early prevention.
            </li>
            <li>
              <span className="font-semibold">Hepatitis A & B:</span> Prevent liver infections effectively.
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
  <Image
    src="/vc.webp"
    alt="Vaccination Services"
    width={400} // Set a width
    height={400} // Set a height
    className="w-full h-auto rounded-lg shadow-xl lg:max-h-[400px] transform hover:scale-105 transition duration-300"
  />
</div>

      </section>

      {/* Why Choose Abcare */}
      <section className="mt-20">
        <h2 className="text-4xl font-semibold text-green-700 mb-8 tracking-wide">
          Why Choose Abcare?
        </h2>
        <ul className="list-disc pl-6 space-y-6 text-gray-800 text-lg leading-loose">
          <li>
            <span className="font-semibold">Experienced Professionals:</span> Trusted healthcare experts.
          </li>
          <li>
            <span className="font-semibold">Safe Environment:</span> Clean and hygienic facilities.
          </li>
          <li>
            <span className="font-semibold">Efficient Services:</span> Quick and reliable processes.
          </li>
          <li>
            <span className="font-semibold">Affordable Pricing:</span> Vaccinations for every budget.
          </li>
          <li>
            <span className="font-semibold">Convenient Location:</span> Easy access and flexible hours.
          </li>
        </ul>
      </section>

      {/* Call Button */}
      <div className="mt-16 text-center">
        <button className="bg-gradient-to-r from-green-500 to-green-700 text-white text-lg py-4 px-10 rounded-lg shadow-md hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 transform hover:scale-105 transition duration-300">
          Call Now: 03154195240
        </button>
      </div>
    </div>
  );
};

export default VaccinationServices;


