"use client";

import React from "react";
import Image from "next/image";

const RehabilitationServices = () => {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-green-400 leading-tight tracking-wide mb-10">
        Abcare Home Rehabilitation Services
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl text-gray-300 text-center leading-relaxed tracking-wide mb-12 max-w-4xl mx-auto">
        At Abcare, we provide exceptional home rehabilitation services tailored to meet diverse needs. Our professionals
        ensure a faster, more comfortable recovery process, all from the comfort of your home.
      </p>

      {/* Services Section */}
      <section className="mt-12 lg:flex lg:items-center lg:space-x-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-green-300 mb-6 tracking-wide">Our Specialized Services</h2>
          <ul className="list-disc pl-8 space-y-4 text-gray-300 text-lg leading-relaxed">
            <li><span className="font-semibold text-green-400">Home Physiotherapy:</span> Comprehensive care to restore movement and functionality.</li>
            <li><span className="font-semibold text-green-400">Home Autism Services:</span> Individualized support for developmental needs.</li>
            <li><span className="font-semibold text-green-400">Home Occupational Therapy:</span> Assistance with daily living skills tailored to your needs.</li>
            <li><span className="font-semibold text-green-400">Home Speech Therapy:</span> Effective communication support from experts.</li>
          </ul>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
          <Image
            src="/ph.webp"
            alt="Rehabilitation Services"
            width={700}
            height={400}
            className="rounded-lg shadow-2xl lg:max-h-[350px] transform hover:scale-105 transition duration-300 hover:shadow-green-500"
          />
        </div>
      </section>

      {/* Additional Details */}
      <section className="mt-16 space-y-12 lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <h3 className="text-2xl font-semibold text-green-300 mb-4 tracking-wide">Musculoskeletal Rehabilitation</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our tailored approach targets musculoskeletal issues, focusing on mobility, pain relief, and overall strength enhancement.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-green-300 mb-4 tracking-wide">Parkinson&apos;s Disease Care</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Specialized therapies to manage symptoms, improve motor skills, and promote a better quality of life.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-green-300 mb-4 tracking-wide">Cardiac Rehab Post Heart Attack</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Expert-guided recovery programs designed for a safe and effective rehabilitation journey after a heart attack.
          </p>
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

export default RehabilitationServices;
